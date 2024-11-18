import './index.scss'

export default function Login () {



    return(
        <div className='login'>
            <div className='container'>
                <h1>Login</h1>
                <h3>Usuário</h3>
                <input type="text" />
                <h3>Senha</h3>
                <input type="password" />
                <button>Entrar</button>
            </div>
        </div>
    )
}