import Container from '../components/Container'
import estilos from '../public/css/styles.module.css'
import FormRegister from '../components/FormRegister'

const register = () => {
    return (
        <Container>
            <div className={estilos.backgroundForm}>
                    <FormRegister/>
                </div>
        </Container>
    )
}

export default register;