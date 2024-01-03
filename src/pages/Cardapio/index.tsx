import { useState } from 'react';
import Buscador from "./Buscador";
import styles from './Cardapio.module.scss'; //importar estilo como objeto
import {ReactComponent as Logo} from 'assets/logo.svg';
import Filtros from './Filtros';

export default function Cardapio(){
    const [busca, setBusca] = useState("");
    const [filtro, setFiltro] = useState<number | null>(null);
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
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>
                    Cardapio
                </h3>
                <Buscador busca={busca} setBusca={setBusca}/>
                <div className={styles.cardapio__filtros}>
                    <Filtros filtro={filtro} setFiltro={setFiltro}/>

                </div>
            </section>
        </main>
    )
}