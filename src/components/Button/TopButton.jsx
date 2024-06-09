import React, { useState, useEffect } from 'react';
import styles from "./TopButton.module.css"

const TopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Mostrar o botão quando o usuário rolar para baixo 100px
    const toggleVisibility = () => {
        if (window.scrollY !== 0) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div >
            {isVisible && 
                <button onClick={scrollToTop} className={styles.topButton}>
                    ↑ Topo
                </button>
            }
        </div>
    );
};

export default TopButton;
