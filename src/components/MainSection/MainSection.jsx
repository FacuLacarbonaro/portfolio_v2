import { Grid } from '@material-ui/core';
import React from 'react';
import ReactPNG from '../../assets/icons/png/react-js.png';
import ProfileImage from '../../assets/img/jpg/profile_image.jpg';
import { ReutilizableIcon } from '../../assets/utils/ReutilizableIcon';

import './mainSection.scss';

export const MainSection = () => {
      return (
            <section className='main-section section' id='/'>
                  <Grid container>
                        <Grid item xs={12} md={6}>
                              <div className='maint-text-wrapper'>
                                    <h1
                                          className='name '
                                          data-aos='fade-up'
                                          data-aos-duration='1000'
                                          data-aos-easing='ease-in-out'
                                          data-aos-mirror='true'
                                          data-aos-once='true'
                                    >
                                          I'm Facundo Lacarbonaro
                                    </h1>

                                    <div
                                          className='role-container'
                                          data-aos='fade-up'
                                          data-aos-duration='1000'
                                          data-aos-delay='400'
                                          data-aos-easing='ease-in-out'
                                          data-aos-mirror='true'
                                          data-aos-once='true'
                                    >
                                          <ReutilizableIcon
                                                src={ReactPNG}
                                                alt='ReactJS'
                                          />
                                          <h3 className='role'>
                                                React Front end Developer
                                          </h3>
                                    </div>
                              </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                              <div className='main-image-wrapper'>
                                    <img
                                          src={ProfileImage}
                                          alt='Facundo Lacarbonaro Front end Developer'
                                          className='profile-picture'
                                    />
                              </div>
                        </Grid>
                  </Grid>
            </section>
      );
};
