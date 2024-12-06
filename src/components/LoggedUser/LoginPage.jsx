import React, { useState } from 'react';
import { Button } from 'reactstrap';
import LoginLogo from '../../assets/LoginLogo.webp';
import LoginModal from '../LoggedUser/LoginModal';
import styles from './LoginPage.module.css'; 

function LoginPage() {
  const [modal, setModal] = useState(false);

  const openLoginModal = () => {
    setModal(true);
  };

  return (
    <div className={`d-flex flex-column align-items-center ${styles.wrapper}`}>
      <div className={styles.image}>
        <img src={LoginLogo} alt="Disney" className={styles.logo} />
      </div>
      <h2 className={styles.title}>Login to Disney+Hotstar</h2>
      <p className={styles.para}>
        Start watching from where you left off, personalise for kids and more
      </p>
      <Button className={`btn-lg ${styles.button}`} onClick={openLoginModal}>
        Log in
      </Button>

      {modal && <LoginModal isOpen={modal} toggle={() => setModal(!modal)} />}
    </div>
  );
}

export default LoginPage;

