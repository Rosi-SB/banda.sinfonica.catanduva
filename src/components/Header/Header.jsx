import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logo}>
                <img src="../images/BSC-png.png" alt="logo" />
                <span>Banda Sinfônica de Catanduva</span>
            </Link>
            
            <nav className={`${styles.nav} ${isOpen ? styles.active : ''}`}>
                <Link to="/">Início</Link> 
                <Link to="/about">Sobre Nós</Link> 
                <Link to="/gallery">Portfólio</Link> 
                <Link to="/contact">Contato</Link> 
                <Link to="/register">Torne-se Membro</Link> 
            </nav> 

            <div className={styles.hamburger} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
}

export default Header;
