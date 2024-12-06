import React, { useEffect, useState } from 'react';
import styles from './LoggedUserProfile.module.css';
import { Button, Card, CardMedia } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import ContinueWatchingCard from '../LoggedUser/ContinueWatchingCard';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function LoggedUserProfile(props) {
    const profileData = [
        { name: 'User', avatar: 'https://www.shutterstock.com/image-vector/angry-boy-flat-avatar-human-260nw-613640318.jpg' },
        { name: 'New User', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6oB0f4cgLO5e3WWqpNsBt-rEFUVoCD4UnwA&s' },
    ];

    const logout = () => {
        localStorage.removeItem('key');
        window.location.reload();
    };

    const savedMovies = useSelector(state => state.movies.savedMovies);
    const [hasMovies, setHasMovies] = useState(false);

    useEffect(() => {
        if (savedMovies && savedMovies.length > 0) {
            setHasMovies(true);
        }
    }, [savedMovies]);

    // console.log("The saved movies are ",savedMovies);

    const continueWatching = savedMovies.map(movie => ({
        title: movie.name || 'Untitled', 
        image: movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : '', 
        progress: 50
    }));

    const navigate=useNavigate()    

    const reDirectSubscription = () => {
        navigate('/subscription');
    };

    return (
        <div className={`${styles.wrapper}`}>
            <div className={styles.info}>
                <div className={styles.userDetails}>
                    <h2>Disney+ Hotstar Mobile (Jio)</h2>
                    <p>+91 9********7</p>
                </div>
                <div className={styles.actions}>
                    <Button variant="contained" color="primary" size="small" className={styles.button} onClick={reDirectSubscription}>
                        <h5 className='mt-2 text-black'>Subscribe</h5>
                    </Button>
                    <Button variant="outlined" color="body" startIcon={<SettingsIcon />} size="small">
                    <h5 className='mt-2 text-white'>Help & Settings</h5>
                    </Button>
                    <Button variant="contained" color="primary" startIcon={<LogoutIcon />} size="small" onClick={logout}>
                    <h5 className='mt-2 text-black'>Logout</h5>
                    </Button>
                </div>
            </div>

            <div className={styles.body}>
                <div className={`mx-5 ${styles.bg}`}>
                    <h4 className={styles.data}>Profiles</h4>
                    <div className={styles.profilesGrid}>
                        {profileData.map((profile, index) => (
                            <Card key={index} className={styles.profileCard}>
                                <CardMedia
                                    component="img"
                                    image={profile.avatar}
                                    alt={profile.name}
                                    className={styles.profileImage}
                                />
                                <span>{profile.name}</span>
                            </Card>
                        ))}
                    </div>
                </div>

                {hasMovies && <ContinueWatchingCard continueWatching={continueWatching} />}
            </div>
        </div>
    );
}

export default LoggedUserProfile;
