import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID GeVM3kicVEOWfyUJ40fJqosAFZkcjgoJM_fOnFa_G9w',
  },
});
