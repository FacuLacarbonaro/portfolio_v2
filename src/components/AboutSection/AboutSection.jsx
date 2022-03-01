import React from 'react';
import { Button } from '@material-ui/core';

import MyPDF from '../../assets/files/Facundo_Lacarbonaro_Dev_Ext.pdf';

import './aboutSection.scss';

export const AboutSection = () => {
      return (
            <section className='about-section section' id='about'>
                  <h1
                        className='section-title '
                        data-aos='fade-up'
                        data-aos-duration='1000'
                        data-aos-easing='ease-in-out'
                        data-aos-once='true'
                  >
                        About me
                  </h1>
                  <p
                        className='section-p'
                        data-aos='fade-up'
                        data-aos-duration='1000'
                        data-aos-delay='300'
                        data-aos-easing='ease-in-out'
                        data-aos-mirror='true'
                        data-aos-once='true'
                  >
                        In 2018 I had chosen to follow my passion and become a
                        programmer. Since then, I strive to perfect my coding
                        skills by educating myself towards creating clean, easy
                        to enlargement code. I gathered enough experience in
                        front end development to be a valuable employee and to
                        make the web a beautiful place with every line of code.
                  </p>
                  <h3
                        className='experience-title'
                        data-aos='fade-up'
                        data-aos-duration='1000'
                        data-aos-delay='400'
                        data-aos-easing='ease-in-out'
                        data-aos-mirror='true'
                        data-aos-once='true'
                  >
                        Freelance
                  </h3>
                  <p
                        className='section-p'
                        data-aos='fade-up'
                        data-aos-duration='1000'
                        data-aos-delay='500'
                        data-aos-easing='ease-in-out'
                        data-aos-mirror='true'
                        data-aos-once='true'
                  >
                        (Mid of 2019 - December 2020)
                        <br />
                        In 2019 i worked as Frontend making movie websites for a
                        client. He provided me with a model in AdobeXD and I
                        created the application with Reactjs and the styling
                        that was needed. I did this on demand for almost 2
                        years.
                  </p>
                  <h3
                        className='experience-title'
                        data-aos='fade-up'
                        data-aos-duration='1000'
                        data-aos-delay='600'
                        data-aos-easing='ease-in-out'
                        data-aos-mirror='true'
                        data-aos-once='true'
                  >
                        Axioma IT Solutions
                  </h3>
                  <p
                        className='section-p'
                        data-aos='fade-up'
                        data-aos-duration='1000'
                        data-aos-delay='700'
                        data-aos-easing='ease-in-out'
                        data-aos-mirror='true'
                        data-aos-once='true'
                  >
                        (January 2021 - March 2022 )
                        <br />I worked as the main and only Frontend Developer
                        in a project where we had to migrate an app from Angular
                        to Reactjs for a client that was dedicated to offer
                        logistics machinery. This app was used to keep track of
                        the workflow, both for employees and for their bosses.
                        About the app: Made with ReacJS with Hooks and Redux,
                        Material Ui as main CSS framework, using API Rest, PDF
                        downloads, signature generation, private routes.
                  </p>
                  <Button
                        variant='contained'
                        href={MyPDF}
                        download='Facundo Lacarbonaro Dev CV.pdf'
                        className='download-button'
                        data-aos='fade-up'
                        data-aos-duration='1000'
                        data-aos-delay='800'
                        data-aos-easing='ease-in-out'
                        data-aos-mirror='true'
                        data-aos-once='true'
                  >
                        Download CV
                  </Button>
            </section>
      );
};
