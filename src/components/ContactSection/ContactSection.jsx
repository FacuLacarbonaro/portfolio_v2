import { Button, TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { emailValidator } from '../../assets/utils/emailValidator';
import emailjs from '@emailjs/browser';

import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './contactSection.scss';

export const ContactSection = ({ setOpenToast }) => {
      const [formData, setFormData] = useState(emptyFormData);
      const [isValidEmail, setisValidEmail] = useState(false);

      const handleSubmit = (e) => {
            e.preventDefault();
            emailjs
                  .sendForm(
                        process.env.REACT_APP_SERVICE_ID,
                        'gmail',
                        e.target,
                        process.env.REACT_APP_API_KEY
                  )
                  .then(
                        (result) => {
                              setOpenToast({
                                    message: 'Email Sended.',
                                    severity: 'success',
                              });
                              e.target.reset();
                        },
                        (error) => {
                              setOpenToast({
                                    message: 'Error, try again.',
                                    severity: 'error',
                              });
                        }
                  );
      };

      const handleChange = (e) => {
            const { name, value } = e.target;

            setFormData({
                  ...formData,
                  [name]: value,
            });
      };

      useEffect(() => {
            setisValidEmail(emailValidator(formData.email));
      }, [formData.email]);

      const isValidSubmit = () => {
            if (
                  (formData.email && !isValidEmail) ||
                  !formData.email ||
                  !formData.name ||
                  !formData.message
            ) {
                  return true;
            } else return false;
      };

      return (
            <section className='contact-section section' id='contact'>
                  <h1 className='section-title'>Contact me</h1>
                  <p className='section-p'>
                        Feel free to contact me with the following contact
                        information. Thank you for visiting and hope you enjoy
                        my work as much as I enjoyed creating them.
                  </p>
                  <div className='contact-platforms-container'>
                        {PLATFORM_LIST.map((platform) => (
                              <div className='platform' key={platform.id}>
                                    <a
                                          href={platform.url}
                                          target='_blank'
                                          rel='noreferrer'
                                    >
                                          {platform.icon}
                                    </a>
                              </div>
                        ))}
                  </div>

                  <div className='contact-form-container'>
                        <form
                              className='form'
                              onSubmit={(e) => handleSubmit(e)}
                        >
                              <div className='input-wrapper'>
                                    <TextField
                                          variant='outlined'
                                          fullWidth
                                          margin='normal'
                                          className='name-and-email-input'
                                          placeholder='Name'
                                          name='name'
                                          onChange={handleChange}
                                    />

                                    <TextField
                                          variant='outlined'
                                          fullWidth
                                          margin='normal'
                                          className='name-and-email-input'
                                          placeholder='Email'
                                          name='email'
                                          onChange={handleChange}
                                          error={
                                                Boolean(formData.email) &&
                                                Boolean(!isValidEmail)
                                          }
                                    />
                              </div>

                              <div className='input-wrapper'>
                                    <TextField
                                          variant='outlined'
                                          multiline
                                          rows={5}
                                          fullWidth
                                          className='content-input'
                                          placeholder='Message'
                                          name='message'
                                          onChange={handleChange}
                                    />
                              </div>

                              <Button
                                    type='submit'
                                    className={
                                          isValidSubmit()
                                                ? 'submit-button-disabled'
                                                : 'submit-button'
                                    }
                                    color='primary'
                                    disabled={isValidSubmit()}
                              >
                                    Send
                              </Button>
                        </form>
                  </div>
            </section>
      );
};

const PLATFORM_LIST = [
      {
            id: 1,
            icon: <LinkedInIcon fontSize='large' color='primary' />,
            displayText: 'Linkedin',
            url: 'https://www.linkedin.com/in/facundolacarbonaro/',
      },
      {
            id: 2,
            icon: <EmailIcon fontSize='large' color='primary' />,
            displayText: 'Email',
            url: 'mailto:faculacarbonaro@gmail.com',
      },
];

const emptyFormData = {
      name: '',
      email: '',
      message: '',
};
