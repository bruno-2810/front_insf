import './index.scss'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios from 'axios'

export default function Login () {

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate()

    async function entrar () {

        let corpo = {
            "email": usuario,
            "senha": senha
        }

        let url = 'http://localhost:5000/login'
        let resp = await axios.post(url, corpo)

        if(resp.data.erro){
            alert(resp.data.erro)
        }
        else{
            localStorage.setItem("USUARIO", resp.data.token)
            navigate('/chamados')
        }

    }

    function enter (e) {    
        if (e.key == 'Enter') {
            entrar()
        }
    }

    return(
        <div className='login'>
            <div className='container'>
                <h1>Login</h1>
                <h3>Usuário</h3>
                <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                <h3>Senha</h3>
                <input type="password" value={senha} onKeyUp={enter} onChange={(e) => setSenha(e.target.value)} />
                <button onClick={entrar}>Entrar</button>
            </div>
        </div>
    )
}