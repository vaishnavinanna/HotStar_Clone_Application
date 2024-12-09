import React, { useEffect, useState, useRef } from 'react';
import { Button } from 'reactstrap';
import getData from '../CardContainer/Axios';
import Movies from '../CardContainer/Movies';
import styles from './CardContainer.module.css';

function CardContainer({ category }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const scrollRef = useRef(null);

    const fetchData = async () => {
        if (loading) return;

        setLoading(true); 
        let url = '';

        if (category === 'Latest Releases') {
            url = `https://api.themoviedb.org/3/trending/movie/day`;
        } else if (category === 'Top Rated') {
            url = `https://api.themoviedb.org/3/tv/top_rated`;
        } else if (category === 'TV Shows') {
            url = `https://api.themoviedb.org/3/trending/tv/day`;
        }

        try {
            const res = await getData(url);
            setData((prevData) => [...prevData, ...res?.results]);  
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);  
        }
    };

    useEffect(() => {
        fetchData();  
    }, [category]);  


    const getPrevScroll = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -1900, behavior: 'smooth' }); 
        }
    };

    const getNextScroll = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 1900, behavior: 'smooth' });  
        }
    };

    return (
        <div className={styles.body}>
            <h3 className="text-white m-3">{category}</h3>
            <div
                className={`${styles.scrollContainer} d-flex flex-row mx-3`}
                ref={scrollRef}
            >
                <Button onClick={getPrevScroll} className={styles.scrollButton}>
                    <h1>&#9001;</h1>
                </Button>

                <Button onClick={getNextScroll} className={styles.scrollButton}>
                    <h1>&#9002;</h1>
                </Button>

                {data.map((item, index) => (
                    <Movies movie={item} key={index} />
                ))}

                {loading && <div>Loading more...</div>}
            </div>
        </div>
    );
}

export default CardContainer;


