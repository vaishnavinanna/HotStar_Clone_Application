import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useDispatch } from 'react-redux';
import { addMovie } from '../Redux/AddMovieSlice';
import { useEffect } from 'react';


function HoverComponent({ movie }) {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const shortOverview = movie.overview
        ? movie.overview.substring(0, 110)
        : "Overview not available";

    const releaseDate = movie.release_date
        ? movie.release_date.substring(0, 4)
        : movie.first_air_date
            ? movie.first_air_date.substring(0, 4)
            : "Unknown";
    const [user, setUser] = useState(false);  

    useEffect(() => {
        const key = localStorage.getItem('key');  
        if (key) {
            setUser(true);
        }
    }, []);

    const handleAddMovie = () => {
        if (user) { 
            dispatch(addMovie(movie));  
        } else {
            alert('Please log in to add movies to your collection.');  
        }
    };


    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);

    return (
        <>
            <Card
                className='overlay-card-content'
                sx={{ maxWidth: 'fit-content', backgroundColor: '#16181f' }}
            >
                <>
                    <CardMedia
                        component="img"
                        height={150}
                        image={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                        alt={movie.name}
                        sx={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                    <CardActions>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ backgroundColor: '#fff', color: '#16181f' }}
                            onClick={handleOpenModal}
                        >
                            <PlayArrowIcon /> Watch Now
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{ color: 'white', backgroundColor: 'rgb(14,22,38)' }}
                            onClick={handleAddMovie}
                        >
                            <AddIcon />
                        </Button>
                    </CardActions>
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            color="#fff"
                        >
                            {releaseDate} • {movie.original_language.toUpperCase()} •{' '}
                            {movie.adult ? '18+' : '16+'}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#8690a8' }}>
                            {shortOverview}...
                        </Typography>
                    </CardContent>
                </>
            </Card>

            <Dialog
                open={open}
                onClose={handleCloseModal}
                maxWidth="lg"
                fullWidth
                sx={{
                    '& .MuiDialog-paper': {
                        maxWidth: '40%',
                        backgroundColor: '#16181f',
                        color: '#fff',
                        padding:0,
                        margin:0,
                    },
                }}
            >
                <DialogTitle sx={{ m: 0, p: 2 }}>
                    <IconButton
                        aria-label="close"
                        onClick={handleCloseModal}
                        sx={{
                            position: 'absolute',
                            right: 1,
                            top: 0,
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent >
                    <CardMedia
                        component="img"
                        image={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                        alt={movie.name}
                        sx={{
                            width: '100%',
                            maxHeight: 400,
                            objectFit: 'cover',
                        }}
                    />
                    <Typography sx={{fontSize: '2rem', fontWeight: 'bold', marginTop:'1rem'}}>
                        {movie.title || movie.name}
                    </Typography>
                    <Typography variant="h6" paragraph>
                        {movie.overview}
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'white' }}>
                        Release Date: {movie.release_date || movie.first_air_date}
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'white' }}>
                        Language: {movie.original_language.toUpperCase()}
                    </Typography>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default HoverComponent;
