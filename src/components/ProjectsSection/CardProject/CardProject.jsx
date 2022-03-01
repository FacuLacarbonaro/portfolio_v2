import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import DefaultImage from '../../../assets/img/jpg/technical-dificulties.jpeg';

import './cardProject.scss';

export const CardProject = ({ card }) => {
      return (
            <Card sx={{ maxWidth: 345 }} className='card-project'>
                  <CardActionArea href={card?.url || ''} target='_blank'>
                        <CardMedia
                              component='img'
                              height='140'
                              image={card?.img || DefaultImage}
                              alt={card?.alt}
                              className='card-project-img'
                        />
                        <CardContent>
                              <Typography
                                    gutterBottom
                                    variant='h5'
                                    component='div'
                                    className='card-title'
                              >
                                    {card?.title}
                              </Typography>
                              <Typography
                                    variant='body2'
                                    color='text.secondary'
                                    className='card-project-description'
                              >
                                    {card?.description ||
                                          'This project will be avaible coming soon.'}
                              </Typography>
                        </CardContent>
                  </CardActionArea>
            </Card>
      );
};
