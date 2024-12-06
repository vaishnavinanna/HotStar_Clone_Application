import React from 'react';
import styles from './LoggedUserProfile.module.css';
import { Card, CardContent, CardMedia, LinearProgress } from '@mui/material';

function ContinueWatchingCard({continueWatching,color}) {

    return (
        <div style={{backgroundColor:color}}>
              <div className={styles.body} style={{backgroundColor:color}}>
                    <div className={`mx-5 ${styles.bg}`} style={{backgroundColor:color}}>
                     <h4 style={{backgroundColor:color}} className={styles.data} >Continue Watching with Vaishnavi</h4>
                    </div>    
                    <div className={styles.continueWatchingGrid} style={{backgroundColor:color}}>
                        {continueWatching.map((item, index) => (
                            <Card key={index} className={styles.watchCard}>
                                <CardMedia
                                    component="img"
                                    image={item.image}
                                    alt={item.title}
                                    className={styles.watchImage}
                                />
                                <CardContent>
                                    <LinearProgress
                                        variant="determinate"
                                        value={item.progress}
                                        className={styles.progressBar}
                                    />
                                    <p className='text-white'>{item.title}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
        </div>
    );
}

export default ContinueWatchingCard;