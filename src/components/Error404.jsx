import { Link } from 'react-router-dom'
import '../styles/Pages/_error404.scss'

function Error404() {
    return (
        <div className='containerError404'>
            <h1>404</h1>
            <h2>Oups! La page que<br/>vous demandez n'existe pas.</h2>
            <h3><Link to="/">Retourner sur la page d'accueil</Link></h3>
        </div>
    )
}
 
export default Error404