import React, { useState, useEffect, useRef } from 'react';
import './Movies.css';
import HoverComponent from './HoverComponent';

function Movies({ movie }) {
    const [isVisible, setIsVisible] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        console.log(`Image with ID ${movie.id} is loading`);
                        setIsVisible(true);  
                    }
                });
            },
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);  
        }
        
    }, [movie.id]);

    return (
        <div key={movie.id} className='ImgDiv' id='movies'>
            <img
                ref={imgRef}
                className="images"
                src={isVisible ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=Loading...'}
                alt={movie.title}
            />
            <div className="overlay">
                    <HoverComponent movie={movie} />
            </div>
        </div>
    );
}

export default Movies;
