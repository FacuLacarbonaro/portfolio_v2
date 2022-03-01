import { Alert, Snackbar } from '@mui/material';
import React, { useState } from 'react';
import { AboutSection } from '../../components/AboutSection/AboutSection';
import { Header } from '../../components/common/Header/Header';
import { ContactSection } from '../../components/ContactSection/ContactSection';
import { MainSection } from '../../components/MainSection/MainSection';
import { ProjectsSection } from '../../components/ProjectsSection/ProjectsSection';
import { TechnologiesSection } from '../../components/TechnologiesSection/TechnologiesSection';

import './home.scss';

export const Home = () => {
      const [openToast, setOpenToast] = useState();

      const handleCloseToast = (event, reason) => {
            if (reason === 'clickaway') {
                  return;
            }

            setOpenToast(false);
      };

      return (
            <div className='home'>
                  <Header />
                  <main className='main'>
                        <MainSection />
                        <AboutSection />
                        <TechnologiesSection />
                        <ProjectsSection />
                        <ContactSection setOpenToast={setOpenToast} />
                  </main>
                  <Snackbar
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        open={Boolean(openToast)}
                        onClose={handleCloseToast}
                        autoHideDuration={5000}
                  >
                        <Alert severity={openToast?.severity}>
                              {openToast?.message}
                        </Alert>
                  </Snackbar>
            </div>
      );
};
