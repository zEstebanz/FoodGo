import Navigation from './navigation'
import Head from 'next/head'
import styles from '../public/css/styles.module.css'

//props son funciones op componenetes cualquier cosa que se utilice
// ((props.children)) 
//Voy a pasar componentes y todo iran en esa section y se agregara todo lo que estara arriba del props

const Container = (props) => {
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/cyborg/bootstrap.min.css"></link>
                <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
            </Head>
            <Navigation />
            <div >
                {props.children}
            </div>
        </div>
    )
}
export default Container;