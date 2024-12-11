import React, { useEffect, useState } from 'react';
import styles from './LoggedUserProfile.module.css';
import { Button, Card } from '@mui/material';
import ContinueWatchingCard from '../LoggedUser/ContinueWatchingCard';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Container from '@mui/material/Container';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Avatar from '@mui/material/Avatar';
import addMore from '../../assets/addMore.png';

function LoggedUserProfile(props) {
    const profileData = [
        { name: 'Vaishnavi', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnEwQpB_X-G5K_LQ0h5phrweDohu-eAE2FJA&s' },
        { name: 'New User', avatar: addMore},
    ];

    const logout = () => {
        localStorage.removeItem('key');
        window.location.reload();
    };

    const savedMovies = useSelector(state => state.movies.savedMovies);

    console.log("The saved movies are ", savedMovies);
    const [hasMovies, setHasMovies] = useState(false);

    useEffect(() => {
        if (savedMovies && savedMovies.length > 0) {
            setHasMovies(true);
        }
    }, [savedMovies]);


    const continueWatching = savedMovies.map(movie => ({
        title: movie.title || movie.name || 'Mismatched',
        image: movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : ' https://www.justwatch.com/images/backdrop/259371538/s640/mismatched/mismatched',
        progress: 50
    }));

    const navigate = useNavigate()

    const reDirectSubscription = () => {
        navigate('/subscription');
    };

    return (
        <div className={`${styles.wrapper}`}>
            <Container maxWidth="xxl">
                <Box sx={{
                    bgcolor: 'linear-gradient(351deg, rgba(12,33,44,1) 3%, rgba(38,54,84,1) 45%, rgba(15,16,20,1) 100%)',
                    padding: '50px',
                }}>
                    <Grid container spacing={3} sx={{ paddingTop: 2, paddingBottom: 4 }}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                <span className={` ${styles.subtagline}`}>
                                    Subscribe to enjoy Disney + Hotstar
                                    <ArrowForwardIosIcon /> 
                                </span>

                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                +91 8*********4
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} container spacing={2} justifyContent="flex-end">
                            <Grid item>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: 'rgb(8,78,211)',
                                        color: 'white',
                                        width: '200px',
                                        padding: '12px',
                                        fontWeight: 'bold',
                                        borderRadius: '4%'
                                    }}
                                    onClick={reDirectSubscription}
                                >
                                    Subscribe
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: 'rgb(32,40,58)',
                                        color: 'white',
                                        width: '200px',
                                        padding: '12px',
                                        fontWeight: 'bold',
                                        borderRadius: '4%'
                                    }}>
                                    <HelpOutlineOutlinedIcon sx={{ marginRight: 1 }} /> Help & Support
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    onClick={logout}
                                    variant="contained"
                                    sx={{
                                        backgroundColor: 'rgb(32,40,58)',
                                        color: 'white',
                                        width: '200px',
                                        padding: '12px',
                                        fontWeight: 'bold',
                                        borderRadius: '4%'
                                    }}>
                                    <LogoutOutlinedIcon sx={{ marginRight: 1 }} /> Log Out
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                    <hr/>

                    <Grid container spacing={3} sx={{ marginTop: 3,}}>
                        <Grid item xs={6} sm={4} md={1}>
                            <Card
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    padding: 0,
                                    boxShadow: 'none',
                                    background: 'none',
                                    border: 'none',
                                }}
                            >
                                <Avatar
                                    src={profileData[0].avatar}
                                    alt={profileData[0].name}
                                    sx={{
                                        width: 100,
                                        height: 100,
                                        marginBottom: 1,
                                    }}
                                />
                                <Typography
                                    variant="body1"
                                    textAlign="center"
                                    sx={{ color: 'white', marginTop: 1 }}
                                >
                                    {profileData[0].name}
                                </Typography>
                            </Card>
                        </Grid>

                        <Grid item xs={6} sm={4} md={1}>
                            <Card
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    padding: 0,
                                    boxShadow: 'none',
                                    background: 'none',
                                    border: 'none',
                                }}
                            >
                                <Avatar
                                    src={profileData[1].avatar}
                                    alt={profileData[1].name}
                                    sx={{
                                        width: 100,
                                        height: 100,
                                        marginBottom: 1,
                                        filter: 'brightness(80%) invert(0.4)'
                                    }}
                                />
                                <Typography
                                    variant="body1"
                                    textAlign="center"
                                    sx={{ color: 'white', marginTop: 1 }}
                                >
                                    {profileData[1].name}
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>
                    <div>
                        {hasMovies && <ContinueWatchingCard continueWatching={continueWatching} />}
                    </div>
                </Box>
            </Container>
        </div>
    );
}

export default LoggedUserProfile;
