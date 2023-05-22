import Head from 'next/head'
import Container from '../components/Container'
import FormLogin from '../components/FormLogin'
import estilos from '../public/css/styles.module.css'



const login = () => {
    return (
        <div>
            <Head>
                <title>FoodGo</title>
            </Head>
            <Container>
                <div className={estilos.backgroundForm}>
                    <FormLogin />
                </div>
            </Container>
        </div>
    )
}

export default login;