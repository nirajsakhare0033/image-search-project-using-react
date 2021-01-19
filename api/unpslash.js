import axios from 'axios';

export default axios.create({
        baseURL: 'https://api.unsplash.com',
        headers: {
                Authorization: 'Client-ID Mc_hDGS2L63TZKJzPvlW4MAC1voKZQM1DDiK0piijGU'
                
        }
               
});