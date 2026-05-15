export default function Footer() {
    return (
        <footer className="footer">
            <div className= "footer-inner">
                <div className= "footer-brand">
                    <div className= "footer-logo">
                        <svg>Aqui falta icono</svg>                        <div>
                            <div className="footer-brand-name">Sanos y Salvos</div>
                            <div className="footer-brand-tagline">NoseQuePonerAqui</div>
                        </div>
                    </div>
                </div>
                <p className= "footer-description">Plataforma colaborativa para ayudar a mascotas perdidas</p>
                <div className= "footer-links">
                    <a href="#" aria-label= "Facebook">
                        <svg>Aqui falta icono</svg>
                    </a>
                    <a href="#" aria-label="instagram">
                        <svg >Aqui falta icono</svg>
                    </a>
                </div>
            </div>
            <div className= "footer-col">
                <h4>Sobre Sanos y Salvos</h4>
                <a href="#"> ¿Quienes somos?</a>
                <a href="#"> Como funciona</a>
                <a href="#"> Preguntas frecuentes</a>    
            </div>
            <div className= "footer-col">
                <h4>Contacto</h4>
                <a href="#"> Cantáctanos</a>
                <a href="#"> SanosySalvos@gmail.com</a>
                <a href="#"> p+56 9 1234 5678</a>    
            </div>
            <div className= "footer-col">
                <h4>Términos</h4>
                <a href="#"> Terminos y condiciones</a>
                <a href="#"> política de privacidad</a>    
            </div>
        <div>
        </div>
        <div className= "footer-bottom"> 2026 Sanos y Salvos. Todos los derechos reservados.</div>
    </footer>
    );
}