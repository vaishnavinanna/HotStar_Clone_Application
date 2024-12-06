import React, { useEffect, useState, useRef } from 'react';
import { Button } from 'reactstrap';
import getData from '../CardContainer/Axios';
import Movies from '../CardContainer/Movies';
import style from '../../App.css';
// import { Suspense } from 'react';

function CardContainer({ category }) {
    const [data, setData] = useState([]);
    const scrollRef = useRef(null);

    useEffect(() => {
        async function fetchData() {
            let url = '';
            if (category === 'Latest Releases') {
                url = 'https://api.themoviedb.org/3/trending/movie/day';
            } else if (category === 'Top Rated') {
                url = 'https://api.themoviedb.org/3/tv/top_rated';
            } else if (category === 'TV Shows') {
                url = 'https://api.themoviedb.org/3/trending/tv/day';
            }

            try {
                const res = await getData(url);
                setData(res?.results);
                // console.log("the data is ",res)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        setTimeout(()=>{
            fetchData()
        },1000)
    }, [category]);

    

    const getPrevScroll = () => {
        scrollRef.current.scrollBy({ left: -1900 });
    };

    const getNextScroll = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 1900 });
        }
    };

    return (
        <div className={style.body} style={{ position: 'relative'}}>
            <h3 className="text-white m-3">{category}</h3>
            <div className='d-flex flex-row mx-3' style={{ overflow: 'hidden', whiteSpace: 'nowrap', display: 'flex', gap: 20, padding: 20 }} ref={scrollRef}>
                <Button
                    onClick={getPrevScroll}
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 10,
                        backgroundColor: 'transparent',
                        border: 'none'
                    }}
                >
                    <h1>&#9001;</h1>
                </Button>
                <Button
                    onClick={getNextScroll}
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 10,
                        backgroundColor: 'transparent',
                        border: 'none'
                    }}
                >
                    <h1>&#9002;</h1>
                </Button>

                {data.map((item, index) => (
                    <Movies
                        movie={item}
                    />
                ))}
            </div>
        </div>
    );
}

export default CardContainer;