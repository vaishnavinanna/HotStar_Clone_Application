import React from 'react'
import SidebarComponenet from '../HomeContainer/SidebarComponenet'
import SearchPage from './SearchPage'
import styles from './SearchPage.module.css';

function SearchContainer() {
  return (
    <div>
      <SidebarComponenet />
      <div className={styles.container}>  
        <SearchPage />
      </div>
    </div>
  )
}

export default SearchContainer;
