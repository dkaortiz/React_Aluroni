import styles from './Cardapio.module.scss'; //importar estilo como objeto

export default function Cardapio(){
    return(
        <main>
            <nav className={styles.menu}>
                <img src='../../assets/logo.svg' alt='Logo Aluroni' />
            </nav>
        </main>
    )
}