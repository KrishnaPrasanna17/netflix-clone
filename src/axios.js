import axios from "axios";

/** base url to make request to the themoviedatabase */

const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3'
});

export default instance;
//instance will create reusable instances with baseUrls, headers and other configurations
 //which are already setup