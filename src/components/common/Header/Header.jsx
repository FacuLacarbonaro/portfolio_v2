import React, { useState } from 'react';
import {
      AppBar,
      Container,
      Divider,
      Hidden,
      IconButton,
      List,
      SwipeableDrawer,
      Toolbar,
} from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-scroll';

import './header.scss';

export const Header = () => {
      const [open, setOpen] = useState(false);

      return (
            <AppBar position='sticky' color='default' className='header'>
                  <Container>
                        <Toolbar disableGutters className='toolbar'>
                              <Link
                                    to='/'
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                              >
                                    <h2 className='logo'>Lacar.</h2>
                              </Link>
                              <Hidden xsDown>
                                    <div className='options-container'>
                                          {OPTIONS_HEADER.map((option) => (
                                                <Link
                                                      to={option.toComponent}
                                                      spy={true}
                                                      smooth={true}
                                                      offset={
                                                            option.id === 1
                                                                  ? -70
                                                                  : -60
                                                      }
                                                      duration={500}
                                                      key={option.id}
                                                >
                                                      <div className='item'>
                                                            <p className='text underline-hover-effect'>
                                                                  {
                                                                        option.displayText
                                                                  }
                                                            </p>
                                                      </div>
                                                </Link>
                                          ))}
                                    </div>
                              </Hidden>
                              <Hidden smUp>
                                    <IconButton onClick={() => setOpen(true)}>
                                          <MenuIcon className='icon-sidebar' />
                                    </IconButton>
                              </Hidden>
                        </Toolbar>
                  </Container>
                  <SwipeableDrawer
                        anchor='right'
                        open={open}
                        onOpen={() => setOpen(true)}
                        onClose={() => setOpen(false)}
                  >
                        <div
                              onClick={() => setOpen(false)}
                              onKeyPress={() => setOpen(false)}
                              role='button'
                              tabIndex={0}
                        >
                              <IconButton>
                                    <ChevronRightIcon />
                              </IconButton>
                        </div>
                        <Divider />
                        <List className='sidebar-list'>
                              {OPTIONS_HEADER.map((option) => (
                                    <Link
                                          to={option.toComponent}
                                          spy={true}
                                          smooth={true}
                                          offset={-50}
                                          duration={500}
                                          key={option.id}
                                    >
                                          <div className='item'>
                                                <p className='sidebar-text underline-hover-effect'>
                                                      {option.displayText}
                                                </p>
                                          </div>
                                    </Link>
                              ))}
                        </List>
                  </SwipeableDrawer>
            </AppBar>
      );
};

const OPTIONS_HEADER = [
      { id: 1, displayText: 'Home', toComponent: '/' },
      { id: 2, displayText: 'About', toComponent: 'about' },
      { id: 3, displayText: 'Technologies', toComponent: 'technologies' },
      { id: 4, displayText: 'Projects', toComponent: 'projects' },
      { id: 5, displayText: 'Contact', toComponent: 'contact' },
];
