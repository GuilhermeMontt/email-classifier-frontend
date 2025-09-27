import { useState } from 'react'
import './Form.css'

const Form = () => {
    const [file, setFile] = useState(null)
    const [text, setText] = useState('')

    const [category, setCategory] = useState('')
    const [resp, setResp] = useState('')

    function handleSubmit(e){
        e.preventDefault()

    }

  return (
    <div className="form-container">
        <form className='form-box' onSubmit={handleSubmit}>
            <h2>Insira o conteúdo do Email</h2>
            <div className='form-item'>
                <label htmlFor="file">Insira o arquivo em .pdf ou .txt</label>
                <input type="file" id='file' name='file' accept=".pdf, .txt" placeeholder='Insira o arquivo aqui' onChange={(e) => setFile(e.target.files[0])}/>
            </div>
            <div className='form-item'>
                <label htmlFor="text">Insira o arquivo em .pdf ou .txt</label>
                <input type="text" id='text' name='text' placeeholder='Insira a mensagem enviada aqui' onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-item">
                <input type="submit" value='Enviar' />
            </div>
        </form>
        {(category === '' && resp === '') ?(
            <p>Email ainda não foi Enviado</p>
        ):(
            <p>Aqui está sua resposta</p>
        )}
    </div>
  )
}

export default Form