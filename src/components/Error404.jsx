import { Link } from 'react-router-dom'

function Error404() {
    return (
        <div>
            <h1>404</h1>
            <h2>Oup! La page que vous demandez n'existe pas.</h2>
            <h3><Link to="/">Retourner sur la page d'accueil</Link></h3>
        </div>
    )
}
 
export default Error404