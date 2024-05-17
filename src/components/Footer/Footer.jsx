import styles from './Footer.module.css';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <footer className={styles.footer}>
            
            <div className={styles.socialIcons}>
                <a href="https://www.facebook.com/bandasinfonicadecatanduva/" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                    <FaFacebook />
                </a>
                <a href="https://www.instagram.com/bandasinfonicacatanduva/" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                    <FaInstagram />
                </a>
                <a href="https://www.youtube.com/channel/UCKaF5mfmIf2wfDkfoZ3jywQ" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                    <FaYoutube />
                </a>
                
            </div>
            <p>&copy;{new Date().getFullYear()} Banda Sinfônica de Catanduva. Todos os direitos reservados</p>
        </footer>
    );
}
export default Footer;
