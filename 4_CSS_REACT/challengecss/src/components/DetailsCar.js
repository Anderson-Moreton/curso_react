import styles from './DetailsCar.module.css'

const DetailsCar = ({ brand, color, km}) => {
    return (
        <div className={styles.card}>
            <h2>Detalhes do Carro</h2>
            <p>Marca: {brand}</p>
            <p>Cor: {color}</p>
            <p>Kilometragem: {km}</p>
        </div>
    );
};

export default DetailsCar;