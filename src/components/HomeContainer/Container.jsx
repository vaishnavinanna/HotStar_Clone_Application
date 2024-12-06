import React, { useState, useEffect } from 'react';
import SidebarComponenet from './SidebarComponenet';
import Carousal from './Carousal';
import CardContainer from '../CardContainer/CardContainer';
import LoggedUser from '../LoggedUser/LoggedUser';
import styles from './Carousal.module.css';

export default function Container() {
    const category = ['Latest Releases', 'Top Rated', 'TV Shows'];
    const [user, setUser] = useState(false);

    useEffect(() => {
        let key = localStorage.getItem('key');
        if (key) {
            setUser(true);
        }
    }, []);

    return (
        <div className={styles.Container}>
            <SidebarComponenet />
            <div className={styles.Content}>
                {user === true ? (
                    <LoggedUser category={category} />
                ) : (
                    <>
                        <Carousal />
                        {category.map((item) => (
                            <CardContainer key={item} category={item} />
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}
