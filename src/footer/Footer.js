import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <div class="Pie-pagina">
                <div class="Pie-pagina-firts">
                    <h2>Nuestra Informacion</h2>
                    <h3>Valledupar - Colombia</h3>

                    <h2>Curriculum</h2>
                    <a href="https://docs.google.com/document/d/0B0V6hRGe_J8BbThDT1VXRUtOWjE4TVhoaEhHQlN6VW5kXzJB/edit?usp=sharing&ouid=102307981071900249316&resourcekey=0-010u_4VhNOmHPClmGbOyHQ&rtpof=true&sd=true" 
                        target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135731.png" alt=""  style={{width:"25%"}}/>                       
                    </a>

                </div>
                <div class="Pie-pagina-center">
                    <h2>Conctacto</h2>
                    <h3>Telefono</h3>
                    <h3>3233207762</h3>

                    <h3>Email</h3>
                    <h3>rony171998@gmail.com</h3>
                </div>
                <div class="Pie-pagina-center">
                    <h2>Productos</h2>
                    <a href="https://rickandmorty-rony.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <h3>Rick and Morty Wiki </h3>
                    </a>
                    <a href="https://laprovidencia-web.netlify.app/"  target="_blank" rel="noopener noreferrer">
                        <h3>Farm React (Working)</h3>
                    </a>
                    <a href="https://ronyecomerce.netlify.app/" target="_blank" rel="noopener noreferrer">
                       <h3>Web Store</h3> 
                    </a>
                    <a href="https://weather-app-rony.netlify.app/" target="_blank" rel="noopener noreferrer">
                       <h3>Weather App</h3> 
                    </a>
                    <a href="https://user-crud-rony.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <h3>Crud web</h3>
                    </a>
                     
                </div>
                <div class="Pie-pagina-last">
                    <h2>Social</h2>
                    
                    <a href="https://www.linkedin.com/in/rony-puche-a80275234/" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt=""/>
                    </a>
                </div>
            </div>

            <div class="Derechos-reservados">
                <h4>Rony puche web &copy; 2022</h4>
            </div>
        </footer>
    );
};

export default Footer;