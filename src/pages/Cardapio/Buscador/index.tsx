import React from "react"
import styles from  './Buscador.module.scss'
import{CgSearch} from 'react-icons/cg'
import { eventNames } from "process";

interface Props{
    busca: string;
    setBusca: React.Dispatch<React.SetStateAction<string>>;
    //só passar o mouse em cima do setBusca no indexCardapio que ele vai mostrar esse codigo
}

export default function Buscador({ busca, setBusca }: Props ){
    return(
        <div className={styles.buscador}>
            <input
            value={busca}
            onChange={(evento) => setBusca(evento.target.value)}
                    
                // onChange={evento => setBusca(evento.target.value)}
            />
            <CgSearch
            size={20}
            color="#4C4D5E"/>
        </div>
    );
    
}