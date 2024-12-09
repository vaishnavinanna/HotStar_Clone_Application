import React from 'react';
import Carousal from '../HomeContainer/Carousal';
import CardContainer from '../CardContainer/CardContainer';
import ContinueWatchingCard from '../LoggedUser/ContinueWatchingCard';
import { useSelector } from 'react-redux';

function LoggedUser(props) {
    const savedMovies = useSelector(state => state.movies.savedMovies);
    const continueWatching = savedMovies.map(movie => ({
        title: movie.title || movie.name || 'Mismatched', 
        image: movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : 'https://www.justwatch.com/images/backdrop/259371538/s640/mismatched/mismatched', 
        progress: 50
    }));

    return (
        <div>
            <>
                <Carousal />
                <div>
                    <ContinueWatchingCard color={'rgb(14,15,20)'} continueWatching={continueWatching} />
                </div>
                {props.category.map((item) => (
                    <CardContainer key={item} category={item} />
                ))}
            </>

        </div>
    );
}

export default LoggedUser;