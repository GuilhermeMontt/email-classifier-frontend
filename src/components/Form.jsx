import { useState } from 'react'
import './Form.css'
import api from '../utils/api'

const Form = () => {
    const [email, setEmail] = useState({})

    const [category, setCategory] = useState('')
    const [resp, setResp] = useState('')
    const [error, setError] = useState('')

    const [loading, setLoading] = useState(false)

    async function handleSubmit(e){
        setLoading(true)

        e.preventDefault()
        setCategory('')
        setResp('')
        setError('')

        if(!email.file && !email.text){
            setError('Mensagem vazia')
            return
        }

        const formData = new FormData()
        // e.target.files é uma FileList, então pegamos o primeiro arquivo.
        if(email.file) formData.append('file', email.file[0])
        if(email.text) formData.append('text', email.text)
                
        try {
            const res = await api.post('/process-email', formData)
            setCategory(res.data.categoria)
            setResp(res.data.resposta)
        } catch (err) {
            setError(err.response?.data?.detail || 'Ocorreu um erro inesperado.')
        }

        setLoading(false)
    }

    function handleUpdate(e){
        const { name, value, files } = e.target
        setEmail({...email, [name]: files ? files : value})
    }

  return (
    <div className="form-container">
        <form className='form-box' onSubmit={handleSubmit}>
            <h2>Insira o conteúdo do Email</h2>
            <div className='form-item'>
                <label htmlFor="file">Insira o arquivo em .pdf ou .txt</label>
                <input type="file" id='file' name='file' accept=".pdf, .txt" placeholder='Insira o arquivo aqui' onChange={handleUpdate}/>
            </div>
            <div className='form-item'>
                <label htmlFor="text">Ou insira o texto do email</label>
                <input type="text" id='text' name='text' placeholder='Insira a mensagem enviada aqui' onChange={handleUpdate}/>
            </div>
            <div className="form-item">
                <input type="submit" value='Enviar' />
            </div>
        </form>
        {error ? (
            <div className='result-box'>
                <p>{error}</p>
            </div>
        ) : (loading)?(
            <div className='result-box'>
                <p className="loading-text">Processando</p>
            </div>
        ):(category === '' && resp === '') ? (
            <div className='result-box'>
                <span className='pre-text'>Email ainda não foi Enviado</span>
            </div>
        ) : (
            <div className='result-box'>
                <p>Recebemos o retorno do servidor</p>
                <span>Categoria:</span>
                <p>{category}</p>
                <span>Resposta:</span>
                <p>{resp}</p>
            </div>
        )}
    </div>
  )
}

export default Form