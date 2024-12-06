import React, { useState } from 'react';
import { Modal } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCredentials } from '../Redux/LoginSlice';
import { Box, Typography, Grid, TextField, Stack, Button, Alert } from '@mui/material';
import QR from '../../assets/QrCode.png';
import CloseIcon from '@mui/icons-material/Close';  
import styles from './LoginModal.module.css';

const LoginModal = ({ isOpen, toggle }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const storedUsername = useSelector((state) => state.auth.username);
  const storedPassword = useSelector((state) => state.auth.password);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === storedUsername && password === storedPassword) {
      dispatch(setCredentials({ username: username, password }));
      localStorage.setItem('key', true);
      navigate('/home');
      toggle(); 
    } else {
      setError('Invalid credentials!');
    }
  };

  const handleClose = () => {
    setError(null);
    toggle();
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        centered 
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.modalContent}>
          <CloseIcon 
            onClick={handleClose} 
            className={styles.closeIcon}
          />
          <Typography id="modal-modal-title" variant="h5" align="center" className={styles.modalTitle}>
            Login or sign up to continue
          </Typography>
          <Typography id="modal-modal-title" variant="h6" align="center" className={styles.modalSubTitle}>
            Scan QR code or enter phone number to login
          </Typography>
          <Grid container spacing={2} className={styles.gridContainer}>
            <Grid
              item
              xs={12}
              sm={6}
              className={styles.qrCodeContainer}
            >
              <div className={styles.qrImageContainer}>
                <img src={QR} alt="QR Code" height={200} width={200} />
                <p className={styles.qrText}>Use Camera App to Scan QR</p>
                <p className={styles.qrDescription}>
                  Click on the link generated to redirect to Disney+ Hotstar mobile app
                </p>
              </div>
            </Grid>

            <Grid item xs={12} sm={6} className={styles.loginFormContainer}>
              <form onSubmit={handleSubmit} className={styles.form}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Username"
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Password"
                  type="password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error && <Alert severity="error" className={styles.alert}>{error}</Alert>}
                <Stack direction="row" spacing={2} className={styles.buttonContainer}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="success"
                    size="large"
                    className={styles.loginButton}
                  >
                    Login
                  </Button>
                </Stack>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default LoginModal;
