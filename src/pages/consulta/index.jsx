import { useEffect, useState } from 'react'
import './index.scss'
import { useNavigate } from 'react-router-dom'



export default function Chamados () {
    
    const [token, setToken] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        let usu = localStorage.getItem('USUARIO')
        setToken(usu)
        if(usu == 'undefined' || usu == 'null'){
            navigate('/')
        }

    }, [])

    return(

        <div>

        </div>
        
    )
}