import styles from './Cardapio.module.scss'; //importar estilo como objeto
import {ReactComponent as Logo} from 'assets/logo.svg';

export default function Cardapio(){
    return(
        <main>
            <nav className={styles.menu}>
               <Logo />
               
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do codigo e da massa

                </div>
            </header>
        </main>
    )
}