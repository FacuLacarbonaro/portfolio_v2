import React from 'react';
import { Grid } from '@material-ui/core';
import { CardProject } from './CardProject/CardProject';

import LakersFansImg from '../../assets/img/jpg/lakers-fans-web.png';
import MoviesPageImg from '../../assets/img/jpg/mar_del_movie.jpg';
import EcommercePageImg from '../../assets/img/jpg/rivals-ecommerce.jpg';
import WeatherPageImg from '../../assets/img/jpg/weather-screen.jpg';
import JediPageImg from '../../assets/img/jpg/star-wars-web.jpg';

import './projectsSection.scss';

export const ProjectsSection = () => {
      return (
            <section className='projects-section section' id='projects'>
                  <h1
                        className='section-title'
                        data-aos='fade-up'
                        data-aos-duration='1000'
                        data-aos-delay='200'
                        data-aos-easing='ease-in-out'
                        data-aos-mirror='true'
                        data-aos-once='true'
                  >
                        Projects
                  </h1>

                  <Grid
                        container
                        spacing={3}
                        className='projects-grid-container'
                  >
                        {PROJECT_LIST.map((card) => (
                              <Grid
                                    item
                                    xs={6}
                                    lg={3}
                                    key={card.id}
                                    data-aos='fade-up'
                                    data-aos-duration='1500'
                                    data-aos-delay={card.delay}
                                    data-aos-easing='ease-in-out'
                                    data-aos-mirror='true'
                                    data-aos-once='true'
                              >
                                    <CardProject card={card} />
                              </Grid>
                        ))}
                  </Grid>
            </section>
      );
};

const PROJECT_LIST = [
      {
            id: 1,
            img: '',
            alt: '',
            title: 'WorkFlow App',
            description: `Application for workflow tracking management for a company that offers logistics machinery.

            Made in Axioma IT.

            We used: ReactJS, Redux, Material UI, Sass.`,
            url: '',
            delay: '200',
      },
      {
            id: 2,
            img: LakersFansImg,
            alt: 'Lakers Fans page',
            title: 'Lakers Fans',
            description: `Web application for lakers fans with team roster, ecommerce, shopping cart, upcoming games, etc.

            I used: Reactjs, NodeJS, MongoDB, Sass, Redux, Redux-saga, React-router-dom.

            Currently not working.
            Learning project.`,
            url: 'https://lakersfans.netlify.app/',
            delay: '400',
      },

      {
            id: 3,
            img: MoviesPageImg,
            alt: 'Mar del Movie',
            title: 'Mar del Movie',
            description: `Movie web application like Netflix.

            Made with: Reactjs, Sass, Redux, Redux-saga, React-router-dom.

            Currently not working.
            Learning project`,

            url: 'https://mardelmovie.netlify.app/',
            delay: '600',
      },
      {
            id: 4,
            img: EcommercePageImg,
            alt: 'Rivals Ecommerce',
            title: 'Rivals Ecommerce',
            description: `Ecommerce Application.

            Made with: Reactjs, Sass, Redux, Redux-saga, React-router-dom, Nodejs.

            Currently not working
            Learning project`,
            url: 'https://rivals-ecommerce.netlify.app/',
            delay: '800',
      },
      {
            id: 5,
            img: WeatherPageImg,
            alt: 'Weather app v2',
            title: 'Weather app',
            description: `Weather app.

            Made with: Reactjs, Weather API.

            Learning project`,
            url: 'https://clima-app-v2.netlify.app/',
            delay: '1000',
      },
      {
            id: 6,
            img: JediPageImg,
            alt: 'Jedi APP',
            title: 'Jedi APP',
            description: `Star Wars App.

            Made with: Reactjs, SWAPI API.

            Learning project`,
            url: 'https://jedi-app.netlify.app',
            delay: '1200',
      },
];
