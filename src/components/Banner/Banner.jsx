import styles from './Banner.module.css'

function Banner({image}){
    return(
        <div 
            className={styles.banner}
            style={{backgroundImage: `url(/images/Photos/${image}.jpg)`}}

        />
    )
}
export default Banner