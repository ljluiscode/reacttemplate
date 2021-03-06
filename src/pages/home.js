import React from 'react';

class Home extends React.Component{
    render(){
        return (
            <div>
                
                {/* <!-- ============Header=========== --> */}
                <header class="header" id="header">
                    <nav class="nav container">
                        <a href="#" class="nav__logo">Luis</a>

                        <div class="nav__menu" id="nav-menu">
                            <ul class="nav__list grid">
                                <li class="nav__item">
                                    <a href="#home" class="nav__link active-link">
                                        <i class="uil uil-estate nav__icon"></i> Inicio
                                    </a>
                                </li>
                                <li class="nav__item">
                                    <a href="#about" class="nav__link">
                                        <i class="uil uil-user nav__icon"></i> Sobre mi
                                    </a>
                                </li>
                                <li class="nav__item">
                                    <a href="#skills" class="nav__link">
                                        <i class="uil uil-file-alt nav__icon"></i> Habilidades
                                    </a>
                                </li>
                                <li class="nav__item">
                                    <a href="#services" class="nav__link">
                                        <i class="uil uil-briefcase-alt nav__icon"></i> Servicios
                                    </a>
                                </li>
                                <li class="nav__item">
                                    <a href="#portfolio" class="nav__link">
                                        <i class="uil uil-scenery nav__icon"></i> Portafolio
                                    </a>
                                </li>
                                <li class="nav__item">
                                    <a href="#contactme" class="nav__link">
                                        <i class="uil uil-message nav__icon"></i> Contactme
                                    </a>
                                </li>
                            </ul>
                            <i class="uil uil-times nav__close" id="nav-close"></i>
                        </div>

                        <div class="nav__btns">
                            {/* <!-- Theme change button --> */}
                            <i class="uil uil-moon change-theme" id="theme-button"></i>

                            <div class="nav__toggle" id="nav-toggle">
                                <i class="uil uil-apps"></i>
                            </div>
                        </div>
                    </nav>
                </header>
                {/* <!-- ============Main=========== --> */}

                <main class="main">
                    {/* <!-- ============Home========== --> */}
                    <section class="home section" id="home">
                        <div class="home__container container grid">
                            <div class="home__content grid">
                                <div class="home__social">
                                    <a href="https://www.linkedin.com/in/luis-jorge-liceaga-lopez-5032271bb/" target="_blank" class="home__social-icon">
                                        <i class="uil uil-linkedin"></i>
                                    </a>
                                    <a href="https://github.com/ljluiscode" target="_blank" class="home__social-icon">
                                        <i class="uil uil-github"></i>
                                    </a>
                                </div>
                                {/* <!-- Corregir imagen en blob --> */}
                                <div class="home__img">
                                    {/* <!-- <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                                        <path id="blob" d="M420,313.5Q377,377,313.5,436.5Q250,496,182,441Q114
                                        ,386,104.5,318Q95,250,113,190.5Q131,131,190.5,91.5Q250,52,321,80Q392,108,
                                        427.5,179Q463,250,420,313.5Z" fill="#000000">
                                        </path> --> */}
                                    {/* <!-- <image class="home__blob-img" x='90' y='140' xlink:href="/image.png"/> --> */}
                                    <img src="asset/imagen.png" alt=""/>
                                    {/* <!-- </svg>                          --> */}
                                </div>
                                <div class="home__data">
                                <h1 class="home__title">Hola, Soy Luis</h1>
                                <h3 class="home__subtitle">Desarrollador Web</h3>
                                <p class="home__description">Estudie la Licenciatura en Computaci??n y me especializo en desarrollo web y movil,
                                    soy productivo y me enfoco en mi trabajo. </p>
                                <a href="#contact" class="button button--flex">
                                    Contactame  <i class="uil uil-message button__icon"></i>
                                </a>
                                </div>
                            </div>
                            <div class="home__scroll">
                                <a href="#about" class="home__scroll-button button--flex">
                                    <i class="util uil-mouse-alt home__scroll-mouse"></i>
                                    <span class="home__scroll-name">Scroll down</span>
                                    <i class="uil uil-arrow-down home__scroll-arrow"></i>
                                </a>

                            </div>
                        </div>
                    </section>
                    {/* <!-- ============About=========== --> */}
                    <section class="about section" id="about">
                        <h2 class="section__title">Sobre M??</h2>
                        <span class="section__subtitle">Mi introducci??n</span>

                        <div class="about__container container grid">
                            <img src="asset/foto.jpg" alt="" class="about__img"/>

                            <div class="about__data">
                                <p class="about__description">Mi deseo es ayudar a las personas, 
                                    lo que me ha llevado a especializarme en sitios web, dedicado 
                                    a aprender continuamente nuevas tecnolog??as para mejorar en mi 
                                    trabajo d??a a d??a, me especializo en lenguajes de programaci??n HTML, 
                                    CSS, Java y JavaScript. </p>
                                <div class="about__info">
                                    <div>
                                        <span class="about__info-title">+03</span>
                                        <span class="about__info-name">A??os <br/> experiencia</span>
                                    </div>

                                    <div>
                                        <span class="about__info-title">+05</span>
                                        <span class="about__info-name">Proyectos <br/> completos</span>
                                    </div>

                                    <div>
                                        <span class="about__info-title">+02</span>
                                        <span class="about__info-name">Compa??ias <br/> trabajando</span>
                                    </div>
                                </div>

                                <div class="about__buttons">
                                    <a download="" href="/asset/pdf/curriculumvitae.pdf" class="button button--flex">
                                        Descargar CV<i class="uil uil-download-alt button__icon"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- ============Skills=========== --> */}
                    <section class="skills section" id="skills">
                        <h2 class="section__title">Habilidades</h2>
                        <span class="section__subtitle">Mi nivel t??cnico</span>

                        <div class="skills__container container grid">
                            <div>
                                {/* <!-- ============Skills 1=========== --> */}
                                <div class="skills__content skills__open">
                                    <div class="skills__header">
                                        <i class="uil uil-brackets-curly skills__icon"></i>

                                        <div>
                                            <h1 class="skills__title">Desarrollador frontend</h1>
                                            <span class="skills__subtitle">M??s de 4 a??os de experiencia</span>
                                        </div>

                                        <i class="uil uil-angle-down skills__arrow"></i>
                                    </div>

                                    <div class="skills__list grid">
                                        <div class="skills__data">
                                            <div class="skills__titles">
                                                <h3 class="skills__name">HTML</h3>
                                                <span class="skills__number">90%</span>
                                            </div>
                                            <div class="skills__bar">
                                                <span class="skills__percentage skills__html"></span>
                                            </div>
                                        </div>

                                        <div class="skills__data">
                                            <div class="skills__titles">
                                                <h3 class="skills__name">CSS</h3>
                                                <span class="skills__number">80%</span>
                                            </div>
                                            <div class="skills__bar">
                                                <span class="skills__percentage skills__css"></span>
                                            </div>
                                        </div>

                                        <div class="skills__data">
                                            <div class="skills__titles">
                                                <h3 class="skills__name">JavaScript</h3>
                                                <span class="skills__number">60%</span>
                                            </div>
                                            <div class="skills__bar">
                                                <span class="skills__percentage skills__js"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- ============Skills 2=========== --> */}
                                <div class="skills__content skills__close">
                                    <div class="skills__header">
                                        <i class="uil uil-server-network skills__icon"></i>

                                        <div>
                                            <h1 class="skills__title">Desarrollador  backend</h1>
                                            <span class="skills__subtitle">M??s de 3 a??os de experiencia</span>
                                        </div>

                                        <i class="uil uil-angle-down skills__arrow"></i>
                                    </div>

                                    <div class="skills__list grid">
                                        <div class="skills__data">
                                            <div class="skills__titles">
                                                <h3 class="skills__name">PHP</h3>
                                                <span class="skills__number">80%</span>
                                            </div>
                                            <div class="skills__bar">
                                                <span class="skills__percentage skills__php"></span>
                                            </div>
                                        </div>

                                        <div class="skills__data">
                                            <div class="skills__titles">
                                                <h3 class="skills__name">Node Js</h3>
                                                <span class="skills__number">70%</span>
                                            </div>
                                            <div class="skills__bar">
                                                <span class="skills__percentage skills__node"></span>
                                            </div>
                                        </div>

                                        <div class="skills__data">
                                            <div class="skills__titles">
                                                <h3 class="skills__name">Firebase</h3>
                                                <span class="skills__number">90%</span>
                                            </div>
                                            <div class="skills__bar">
                                                <span class="skills__percentage skills__firebase"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- ============Skills 3=========== --> */}
                                <div class="skills__content skills__close">
                                    <div class="skills__header">
                                        <i class="uil uil-mobile-android-alt skills__icon"></i>

                                        <div>
                                            <h1 class="skills__title">Desarrollo M??vil</h1>
                                            <span class="skills__subtitle">M??s de 2 a??os de experiencia</span>
                                        </div>

                                        <i class="uil uil-angle-down skills__arrow"></i>
                                    </div>

                                    <div class="skills__list grid">
                                        <div class="skills__data">
                                            <div class="skills__titles">
                                                <h3 class="skills__name">Java</h3>
                                                <span class="skills__number">80%</span>
                                            </div>
                                            <div class="skills__bar">
                                                <span class="skills__percentage skills__java"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- ============Skills 4=========== --> */}
                                <div class="skills__content skills__close">
                                    <div class="skills__header">
                                        <i class="uil uil-image-edit skills__icon"></i>

                                        <div>
                                            <h1 class="skills__title">Dise??ador</h1>
                                            <span class="skills__subtitle">M??s de 5 a??os de experiencia</span>
                                        </div>

                                        <i class="uil uil-angle-down skills__arrow"></i>
                                    </div>

                                    <div class="skills__list grid">
                                        <div class="skills__data">
                                            <div class="skills__titles">
                                                <h3 class="skills__name">Adobe Photoshop</h3>
                                                <span class="skills__number">70%</span>
                                            </div>
                                            <div class="skills__bar">
                                                <span class="skills__percentage skills__photoshop"></span>
                                            </div>
                                        </div>

                                        <div class="skills__data">
                                            <div class="skills__titles">
                                                <h3 class="skills__name">Corel Draw</h3>
                                                <span class="skills__number">90%</span>
                                            </div>
                                            <div class="skills__bar">
                                                <span class="skills__percentage skills__coreldraw"></span>
                                            </div>
                                        </div>

                                        <div class="skills__data">
                                            <div class="skills__titles">
                                                <h3 class="skills__name">Adobe Illustrator</h3>
                                                <span class="skills__number">50%</span>
                                            </div>
                                            <div class="skills__bar">
                                                <span class="skills__percentage skills__adobe"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- ============Qualification=========== --> */}
                    <section class="qualification section">
                        <h2 class="section__title">Calificaci??n</h2>
                        <span class="section__subtitle">Mi diario personal</span>

                        <div class="qualification__container container">
                            <div class="qualification__tabs">
                                <div class="qualification__button button--flex qualification__active" data-target='#education'>
                                    <i class="uil uil-graduation-cap qualification__icon"></i>
                                    Educaci??n
                                </div>

                                <div class="qualification__button button--flex" data-target="#work">
                                    <i class="uil uil-bag qualification__icon"></i>
                                    Trabajo
                                </div>
                            </div>

                            <div class="qualification__sections">
                                {/* <!-- ============Qualification content 1=========== --> */}
                                <div class="qualification__content qualification__active" data-content id="education">
                                    {/* <!-- ============Qualification 1=========== --> */}
                                    <div class="qualification__data">
                                        <div>
                                            <h3 class="qualification__title">Licenciado en Computaci??n</h3>
                                            <span class="qualification__subtitle">Unacar - Universidad</span>
                                            <div class="qualification__calendar">
                                                <i class="uil uil-calendar-alt"></i>
                                                2016 - 2021
                                            </div>
                                        </div>

                                        <div>
                                            <span class="qualification__rounder"></span>
                                            <span class="qualification__line"></span>
                                        </div>
                                    </div>
                                    {/* <!-- ============Qualification 2=========== --> */}
                                    <div class="qualification__data">
                                        <div></div>

                                        <div>
                                            <span class="qualification__rounder"></span>
                                            <span class="qualification__line"></span>
                                        </div>

                                        <div>
                                            <h3 class="qualification__title">Dise??ador Web</h3>
                                            <span class="qualification__subtitle">Online - Undemy</span>
                                            <div class="qualification__calendar">
                                                <i class="uil uil-calendar-alt"></i>
                                                2021
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- ============Qualification 3=========== --> */}
                                    <div class="qualification__data">
                                        <div>
                                            <h3 class="qualification__title">Desarrollador Web</h3>
                                            <span class="qualification__subtitle">Online - Undemy</span>
                                            <div class="qualification__calendar">
                                                <i class="uil uil-calendar-alt"></i>
                                                2021
                                            </div>
                                        </div>

                                        <div>
                                            <span class="qualification__rounder"></span>
                                            <span class="qualification__line"></span>
                                        </div>
                                    </div>
                                    {/* <!-- ============Qualification 4=========== --> */}
                                    <div class="qualification__data">
                                        <div></div>

                                        <div>
                                            <span class="qualification__rounder"></span>
                                            {/* <!-- <span class="qualification__line"></span> --> */}
                                        </div>

                                        <div>
                                            <h3 class="qualification__title">Experto en Mantenimiento Preventivo y Correctivo</h3>
                                            <span class="qualification__subtitle">Mexico - Preparatoria</span>
                                            <div class="qualification__calendar">
                                                <i class="uil uil-calendar-alt"></i>
                                                2013 - 2016
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- ============Qualification content 2=========== --> */}
                                <div class="qualification__content" data-content id="work">
                                    {/* <!-- ============Qualification 1=========== --> */}
                                    <div class="qualification__data">
                                        <div>
                                            <h3 class="qualification__title">Ingeniero de Software</h3>
                                            <span class="qualification__subtitle">Mexico - Preparatoria</span>
                                            <div class="qualification__calendar">
                                                <i class="uil uil-calendar-alt"></i>
                                                2013 - 2016
                                            </div> 
                                        </div>

                                        <div>
                                            <span class="qualification__rounder"></span>
                                            <span class="qualification__line"></span>
                                        </div>
                                    </div>
                                    {/* <!-- ============Qualification 2=========== --> */}
                                    <div class="qualification__data">
                                        <div></div>

                                        <div>
                                            <span class="qualification__rounder"></span>
                                            <span class="qualification__line"></span>
                                        </div>

                                        <div>
                                            <h3 class="qualification__title">Desarrollador Frontend</h3>
                                            <span class="qualification__subtitle">Online - Undemy</span>
                                            <div class="qualification__calendar">
                                                <i class="uil uil-calendar-alt"></i>
                                                2021
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- ============Qualification 3=========== --> */}
                                    <div class="qualification__data">
                                        <div>
                                            <h3 class="qualification__title">Dise??ador Grafico</h3>
                                            <span class="qualification__subtitle">Online - Undemy</span>
                                            <div class="qualification__calendar">
                                                <i class="uil uil-calendar-alt"></i>
                                                2021
                                            </div>
                                        </div>

                                        <div>
                                            <span class="qualification__rounder"></span>
                                            {/* <!-- <span class="qualification__line"></span> --> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>           
                    </section>
                    {/* <!-- ============Services=========== --> */}
                    <section class="services section" id="services">
                        <h2 class="section__title">Servicios</h2>
                        <span class="section__subtitle">??Que ofrezco?</span>

                        <div class="services__container container grid">
                            {/* <!-- ============Services 1=========== --> */}
                            <div class="class services__content">
                                <div>
                                    <i class="uil uil-web-grid services__icon"></i>
                                    <h3 class="services__title">Dise??ador <br/> Ui/Ux</h3>
                                </div>

                                <span class="button button--flex button--small button--link services__button">
                                    Ver mas
                                    <i class="uil uil-arrow-right button__icon"></i>
                                </span>

                                <div class="services__modal">
                                    <div class="services__modal-content">
                                        <h4 class="services__modal-title">Dise??ador <br/> Ui/Ux</h4>
                                        <i class="uil uil-times services__modal-close"></i>

                                        <ul class="services__modal-services grid">
                                            <li class="services__modal-services">
                                                <i class="uil uil-check-circle services__modal-icon"></i>
                                                <p>Soy desarrollador de usuario de interfaz.</p>
                                            </li>
                                            <li class="services__modal-services">
                                                <i class="uil uil-check-circle services__modal-icon"></i>
                                                <p>Desarrolldor de paginas Web.</p>
                                            </li>
                                            <li class="services__modal-services">
                                                <i class="uil uil-check-circle services__modal-icon"></i>
                                                <p>Creador interacciones UX.</p>
                                            </li>
                                            <li class="services__modal-services">
                                                <i class="uil uil-check-circle services__modal-icon"></i>
                                                <p>Posicionador de empresas.</p>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div> 
                            {/* <!-- ============Services 2=========== --> */}
                            <div class="class services__content">
                                <div>
                                    <i class="uil uil-arrow services__icon"></i>
                                    <h3 class="services__title">Desarrollador <br/> Frontend</h3>
                                </div>

                                <span class="button button--flex button--small button--link services__button">
                                    Ver mas
                                    <i class="uil uil-arrow-right button__icon"></i>
                                </span>

                                <div class="services__modal">
                                    <div class="services__modal-content">
                                        <h4 class="services__modal-title">Desarrollador <br/> Frontend</h4>
                                        <i class="uil uil-times services__modal-close"></i>

                                        <ul class="services__modal-services grid">
                                            <li class="services__modal-services">
                                                <i class="uil uil-check-circle services__modal-icon"></i>
                                                <p>Soy desarrollador de usuario de interfaz.</p>
                                            </li>
                                            <li class="services__modal-services">
                                                <i class="uil uil-check-circle services__modal-icon"></i>
                                                <p>Desarrolldor de paginas Web.</p>
                                            </li>
                                            <li class="services__modal-services">
                                                <i class="uil uil-check-circle services__modal-icon"></i>
                                                <p>Creador interacciones ux.</p>
                                            </li>
                                            <li class="services__modal-services">
                                                <i class="uil uil-check-circle services__modal-icon"></i>
                                                <p>Posicionador de empresas.</p>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>   
                            {/* <!-- ============Services 3=========== --> */}
                            <div class="class services__content">
                                <div>
                                    <i class="uil uil-pen services__icon"></i>
                                    <h3 class="services__title">Dise??ador <br/> Branding</h3>
                                </div>

                                <span class="button button--flex button--small button--link services__button">
                                    Ver mas
                                    <i class="uil uil-arrow-right button__icon"></i>
                                </span>

                                <div class="services__modal">
                                    <div class="services__modal-content">
                                        <h4 class="services__modal-title">Dise??ador <br/> Branding</h4>
                                        <i class="uil uil-times services__modal-close"></i>

                                        <ul class="services__modal-services grid">
                                            <li class="services__modal-services">
                                                <i class="uil uil-check-circle services__modal-icon"></i>
                                                <p>Soy desarrollador de usuario de interfaz.</p>
                                            </li>
                                            <li class="services__modal-services">
                                                <i class="uil uil-check-circle services__modal-icon"></i>
                                                <p>Desarrolldor de paginas Web.</p>
                                            </li>
                                            <li class="services__modal-services">
                                                <i class="uil uil-check-circle services__modal-icon"></i>
                                                <p>Creador interacciones ux.</p>
                                            </li>
                                            <li class="services__modal-services">
                                                <i class="uil uil-check-circle services__modal-icon"></i>
                                                <p>Posicionador de empresas.</p>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- ============Portafolio=========== --> */}
                    <section class="portfolio section" id="portfolio">
                        <h2 class="section__title">Portafolio</h2>
                        <span class="section__subtitle">Trabajos mas recientes</span>

                        <div class="portfolio__container container swiper-container">
                            <div class="swiper-wrapper">
                                {/* <!-- ============Portafolio 1=========== --> */}
                                <div class="portfolio__content grid swiper-slide">
                                    <img src="asset/web-responsive.jpg" alt="" class="portfolio__img"/>

                                    <div class="portfolio__data">
                                        <h3 class="portfolio__title">Sitio Web Moderno</h3>
                                        <p class="portfolio__description">Sitio Web adaptable a todos los dispositivos
                                            con componentes de interfaz de usuario Ui y interaciones animadas</p>
                                        <a href="#" class="button button--flex button--small portfolio__button">
                                            Demo
                                            <i class="uil uil-arrow-right button__icon"></i>
                                        </a>
                                    </div>
                                </div>

                                {/* <!-- ============Portafolio 2=========== --> */}
                                <div class="portfolio__content grid swiper-slide">
                                    <img src="asset/diseno-identidad-marca.png" alt="" class="portfolio__img"/>

                                    <div class="portfolio__data">
                                        <h3 class="portfolio__title">Dise??o de Marca</h3>
                                        <p class="portfolio__description">Sitio Web adaptable a todos los dispositivos
                                            con componentes de interfaz de usuario Ui y interaciones animadas</p>
                                        <a href="#" class="button button--flex button--small portfolio__button">
                                            Demo
                                            <i class="uil uil-arrow-right button__icon"></i>
                                        </a>
                                    </div>
                                </div>

                                {/* <!-- ============Portafolio 3=========== --> */}
                                <div class="portfolio__content grid swiper-slide">
                                    <img src="asset/tienda_online.png" alt="" class="portfolio__img"/>

                                    <div class="portfolio__data">
                                        <h3 class="portfolio__title">Tienda Online</h3>
                                        <p class="portfolio__description">Sitio Web adaptable a todos los dispositivos
                                            con componentes de interfaz de usuario Ui y interaciones animadas</p>
                                        <a href="#" class="button button--flex button--small portfolio__button">
                                            Demo
                                            <i class="uil uil-arrow-right button__icon"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Add Arrows --> */}
                            <div class="swiper-button-next">
                                <i class="uil uil-angle-right-b swiper-portfolio-icon"></i> 
                            </div>
                            <div class="swiper-button-prev">
                                <i class="uil uil-angle-left-b swiper-portfolio-icon"></i>
                            </div>

                            {/* <!-- Add Pagination --> */}
                            <div class="swiper-pagination"></div>
                        </div>
                    </section>

                    {/* <!-- ============Project in mind=========== --> */}
                    <section class="project section">
                        <div class="project__bg">
                            <div class="project__container container grid">
                                <div class="project__data">
                                    <h2 class="project__title">??Tienes un nuevo proyecto?</h2>
                                    <p class="project__description">Contactame ahora y obt??n un 30% de descuento en tu neuvo proyecto</p>
                                    <a href="#contact" class="button button--flex button--white">
                                        Contactame
                                        <i class="uil uil-message project__icon button__icon"></i>
                                    </a>
                                </div>

                                <img src="asset/foto_adobe.png" alt="" class="project__img"/>
                            </div>
                        </div>
                    </section>

                    {/* <!-- ============Testimonial=========== --> */}
                    <section class="testimonial section">
                        <h2 class="section__title">Testimonios</h2>
                        <span class="section__subtitle">??Mis clientes que dicen?</span>

                        <div class="testimonial__container container swiper-container">
                            <div class="swiper-wrapper">
                                {/* <!-- ============Testimonial 1=========== --> */}
                                <div class="testimonial__content swiper-slide">
                                    <div class="testimonial__data">
                                        <div class="testimonial__header">
                                            <img src="asset/sara.jpg" alt="" class="testimonial__img"/>

                                            <div>
                                                <h3 class="testimonial__name">Sara Smith</h3>
                                                <span class="testimonial__client">Client</span>
                                            </div>
                                        </div>

                                        <div>
                                            <i class="uil uil-star testimonial__icon-star"></i>
                                            <i class="uil uil-star testimonial__icon-star"></i>
                                            <i class="uil uil-star testimonial__icon-star"></i>
                                            <i class="uil uil-star testimonial__icon-star"></i>
                                            <i class="uil uil-star testimonial__icon-star"></i>
                                        </div>
                                    </div>

                                    <p class="testimonial__description">Me da una buena impresion, llevo 
                                        cumpliendo mi proyecto con toda la calidad y atencion posible y 
                                        soporte de 24 horas.
                                    </p>
                                </div>
                                {/* <!-- ============Testimonial 2=========== --> */}
                                <div class="testimonial__content swiper-slide">
                                    <div class="testimonial__data">
                                        <div class="testimonial__header">
                                            <img src="asset/matt.jpg" alt="" class="testimonial__img"/>

                                            <div>
                                                <h3 class="testimonial__name">Matt Robison</h3>
                                                <span class="testimonial__client">Client</span>
                                            </div>
                                        </div>

                                        <div>
                                            <i class="uil uil-star testimonial__icon-star"></i>
                                            <i class="uil uil-star testimonial__icon-star"></i>
                                            <i class="uil uil-star testimonial__icon-star"></i>
                                            <i class="uil uil-star testimonial__icon-star"></i>
                                            <i class="uil uil-star testimonial__icon-star"></i>
                                        </div>
                                    </div>

                                    <p class="testimonial__description">Me da una buena impresion, llevo 
                                        cumpliendo mi proyecto con toda la calidad y atencion posible y 
                                        soporte de 24 horas.
                                    </p>
                                </div>
                                {/* <!-- ============Testimonial 3=========== --> */}
                                <div class="testimonial__content swiper-slide">
                                    <div class="testimonial__data">
                                        <div class="testimonial__header">
                                            <img src="asset/raul.jpg" alt="" class="testimonial__img"/>

                                            <div>
                                                <h3 class="testimonial__name">Raul Harris</h3>
                                                <span class="testimonial__client">Client</span>
                                            </div>
                                        </div>

                                        <div>
                                            <i class="uil uil-star testimonial__icon-star"></i>
                                            <i class="uil uil-star testimonial__icon-star"></i>
                                            <i class="uil uil-star testimonial__icon-star"></i>
                                            <i class="uil uil-star testimonial__icon-star"></i>
                                            <i class="uil uil-star testimonial__icon-star"></i>
                                        </div>
                                    </div>

                                    <p class="testimonial__description">Me da una buena impresion, llevo 
                                        cumpliendo mi proyecto con toda la calidad y atencion posible y 
                                        soporte de 24 horas.
                                    </p>
                                </div>
                            </div>

                            {/* <!-- Add pagination --> */}
                            <div class="swiper-pagination swiper-pagination-testimonial"></div>
                        </div>
                    </section>

                    {/* <!-- ============Contact me=========== --> */}
                    <section class="contact section" id="contact">
                        <h2 class="section__title">Contactame</h2>
                        <span class="section__subtitle">Ponte en contacto conmigo</span>


                        <div class="contact__container container grid">
                            <div>
                                <div class="contact__information">
                                    <i class="uil uil-phone contact__icon"></i>

                                    <div>
                                        <h3 class="contact__title">LLamame</h3>
                                        <span class="contact__subtitle">916-117-83-11</span>
                                    </div>
                                </div>

                                <div class="contact__information">
                                    <i class="uil uil-envelope contact__icon"></i>

                                    <div>
                                        <h3 class="contact__title">Correo Electronico</h3>
                                        <span class="contact__subtitle">jorge_drago25989@live.com.mx</span>
                                    </div>
                                </div>

                                <div class="contact__information">
                                    <i class="uil uil-map-marker contact__icon"></i>

                                    <div>
                                        <h3 class="contact__title">Ubicaci??n</h3>
                                        <span class="contact__subtitle">Mexico - Campeche - Cd del Carmen</span>
                                    </div>
                                </div>
                            </div>

                            <form action="" class="contact__form grid">
                                <div class="contact__inputs grid">
                                    <div class="contact__content">
                                        <label for="" class="contact">Nombre</label>
                                        <input type="text" class="contact__input"/>
                                    </div>
                                    <div class="contact__content">
                                        <label for="" class="contact">Email</label>
                                        <input type="email" class="contact__input"/>
                                    </div>
                                </div>
                                <div class="contact__content">
                                    <label for="" class="contact">Proyecto</label>
                                    <input type="text" class="contact__input"/>
                                </div>
                                <div class="contact__content">
                                    <label for="" class="contact">Mensage</label>
                                    <textarea name="" id="" cols="0" rows="7" class="contact__input"></textarea>
                                </div>

                                <div>
                                    <a href="#" class="button button--flex">
                                        Enviar
                                        <i class="uil uil-message button__icon"></i>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </section>
                </main>
                {/* <!-- ============Footer=========== --> */}
                <footer class="footer">
                    <div class="footer__bg">
                        <div class="footer__container container grid">
                            <div>
                                <h1 class="footer__title">Luis</h1>
                                <span class="footer__subtitle">Desarrollador Frontend</span>
                            </div>

                            <ul class="footer__links">
                                <li>
                                    <a href="#services" class="footer__link">Servicios</a>
                                </li>
                                <li>
                                    <a href="#portfolio" class="footer__link">Portafolio</a>
                                </li>
                                <li>
                                    <a href="#contact" class="footer__link">Contacto</a>
                                </li>
                            </ul>

                            <div class="footer__socials">
                                <a href="https://www.facebook.com/luisjorge.liceagalopez" target="_blank" class="footer__social">
                                    <i class="uil uil-facebook-f "></i>
                                </a>

                                <a href="https://www.instagram.com/ljluis25/" target="_blank" class="footer__social">
                                    <i class="uil uil-instagram"></i>
                                </a>

                                <a href="https://twitter.com/LJLUIS1" target="_blank" class="footer__social">
                                    <i class="uil uil-twitter-alt"></i>
                                </a>
                            </div>
                        </div>

                        <p class="footer__copy">&#169; Todos los derechos reservados</p>
                    </div>
                </footer>

            </div>
        );
    }
}

export default Home;
