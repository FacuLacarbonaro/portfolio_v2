import { ReutilizableIcon } from '../../assets/utils/ReutilizableIcon';
import { Grid } from '@material-ui/core';

import ReduxPNG from '../../assets/icons/png/redux.png';
import ReactPNG from '../../assets/icons/png/react-js.png';
import JavascriptPNG from '../../assets/icons/png/javascript.png';
import SassPNG from '../../assets/icons/png/sass.png';
import HtmlPNG from '../../assets/icons/png/html.png';
import ApiPNG from '../../assets/icons/png/api-rest.png';
import NodePNG from '../../assets/icons/png/node-js.png';
import ReactNativePNG from '../../assets/icons/png/react-native-app.png';

import './technologiesSection.scss';

export const TechnologiesSection = () => {
      return (
            <section className='technologies-section section' id='technologies'>
                  <h1
                        className='section-title'
                        data-aos='fade-up'
                        data-aos-duration='1000'
                        data-aos-delay='200'
                        data-aos-easing='ease-in-out'
                        data-aos-mirror='true'
                        data-aos-once='true'
                  >
                        Technologies
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
                        Here you can find the main technologies I like to work
                        with ! I like to be in constant learning of the new
                        versions of each one and expand my knowledge to new and
                        complementary ones !
                  </p>
                  <Grid container className='technologies-list' spacing={3}>
                        {TECHNOLOGIES_LIST.map((technology) => (
                              <Grid
                                    item
                                    xs={3}
                                    md={1}
                                    className='technology-item'
                                    key={technology.id}
                                    data-aos='flip-left'
                                    data-aos-duration='1500'
                                    data-aos-delay='400'
                                    data-aos-easing='ease-in-out'
                                    data-aos-mirror='true'
                                    data-aos-once='true'
                              >
                                    {technology.icon}
                              </Grid>
                        ))}
                  </Grid>
            </section>
      );
};

const TECHNOLOGIES_LIST = [
      {
            id: 0,
            icon: <ReutilizableIcon src={HtmlPNG} alt='HTML' />,
            displayName: 'HTML',
      },
      {
            id: 1,
            icon: <ReutilizableIcon src={JavascriptPNG} alt='Javascript' />,
            displayName: 'Javascript',
      },
      {
            id: 2,
            icon: <ReutilizableIcon src={ReactPNG} alt='ReactJS' />,
            displayName: 'ReactJS',
      },
      {
            id: 3,
            icon: <ReutilizableIcon src={ReduxPNG} alt='Redux' />,
            displayName: 'Redux',
      },
      {
            id: 4,
            icon: <ReutilizableIcon src={ReactNativePNG} alt='React Native' />,
            displayName: 'React Native',
      },
      {
            id: 5,
            icon: <ReutilizableIcon src={SassPNG} alt='Sass' />,
            displayName: 'Sass',
      },
      {
            id: 6,
            icon: <ReutilizableIcon src={NodePNG} alt='NodeJS' />,
            displayName: 'NodeJS',
      },
      {
            id: 7,
            icon: <ReutilizableIcon src={ApiPNG} alt='Api Rest' />,
            displayName: 'API Rest',
      },
];
