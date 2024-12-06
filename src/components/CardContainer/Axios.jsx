import axios from 'axios';

async function getData(url) {
    const options = {
        method: 'GET',
        url: url,
        headers: {
            accept: 'application/json',
            Authorization: ' Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTExM2E0ZDI1ZjE2ZTY1N2Q4MjVkNWY2MDhiNjAxNiIsIm5iZiI6MTczMzE0MjY2MC40MzEsInN1YiI6IjY3NGRhODg0NWM5ZmZkYmFlNzY5MWQ5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J3k1cLNB3uwaLtKqsMqvNTHQdx-MxOp_p8N-3VuXj6s'
        }
    };

    try {
        const response = await axios.request(options);
        // console.log("The data from GetData is ", response.data); 
        return response.data;
    } catch (error) {
        // console.error("Error in getData:", error); 
        throw error; 
    }
}

export default getData;
