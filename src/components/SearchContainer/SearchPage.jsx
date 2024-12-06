import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import styles from '../CardContainer/CardContainer.module.css'; 
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Movies from '../CardContainer/Movies';

function SearchPage(props) {

  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/tv/top_rated',
    headers: {
      accept: 'application/json',
       Authorization: ' Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTExM2E0ZDI1ZjE2ZTY1N2Q4MjVkNWY2MDhiNjAxNiIsIm5iZiI6MTczMzE0MjY2MC40MzEsInN1YiI6IjY3NGRhODg0NWM5ZmZkYmFlNzY5MWQ5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J3k1cLNB3uwaLtKqsMqvNTHQdx-MxOp_p8N-3VuXj6s'
    }
  };

  useEffect(() => {
    axios
      .request(options)
      .then((res) => {
        setOriginalData(res.data.results);
        setFilteredData(res.data.results);
      })
      .catch((err) => console.error('Failed to fetch data', err));
  }, []);

  const getFilterData = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = originalData.filter(item => item.name.toLowerCase().includes(searchTerm));
    setFilteredData(filtered);
  };

  return (
    <div className='pt-5'>
       <Box className='mx-5'>

          <TextField
                    id="text-field"
                    fullWidth
                    placeholder="Movies, shows and more"
                    variant="outlined"
                    onChange={getFilterData}
                    sx={{
                        borderRadius: '10px',
                        backgroundColor: '#252833',
                        color: 'white',
                        size:'lg',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'rgb(37, 40, 51)',
                            },
                            '&:hover fieldset': {
                                borderColor: 'rgb(37, 40, 51)',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'rgb(37, 40, 51)',
                            },
                        },
                        '& .MuiInputBase-input': {
                            color: 'white',
                        },
                        '& .MuiInputBase-input::placeholder': {
                            fontWeight: 'bold',
                            fontSize: '20px',
                            color: '#8F98B2',
                        },
                    }}
                    slotProps={{
                        input: {
                            startAdornment:
                                <InputAdornment position="start" sx={{ color: 'white' }}>
                                    <IconButton
                                        aria-label="description for action"
                                    >
                                        <SearchIcon sx={{ color: '#8F98B2' }} />
                                    </IconButton>
                                </InputAdornment>
                        },
                    }}
                />
               </Box>
 

      <h3 className="text-white m-5">Trending in India</h3>
      <div className="d-flex flex-row flex-wrap mx-5" style={{ overflow: 'hidden', whiteSpace: 'nowrap', display: 'flex', gap: 20,  padding: 20}}>
        {filteredData.map((item) => (
          <div key={item.id} className={`${styles.imageDiv}`}>
            <Movies movie={item}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
