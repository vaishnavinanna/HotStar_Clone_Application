import React, { useState, useEffect } from 'react';
import SidebarComponenet from '../HomeContainer/SidebarComponenet';
import LoginPage from './LoginPage';
import LoggedUserProfile from './LoggedUserProfile';
import styles from './LoginPage.module.css';

function LoginContainer() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    let key = localStorage.getItem('key');
    // console.log("The key is ", key);
    if (key) {
      setUser(true);
    }
  }, []);

  return (
    <div>
      <SidebarComponenet />
      <div className={styles.container}>
        {user === true ? <LoggedUserProfile /> : <LoginPage />}
      </div>
    </div>
  );
}

export default LoginContainer;
