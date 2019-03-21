import axios from 'axios';

const KEY = 'AIzaSyA8HLGpRTU-Q3MjkdRNvEz8gLL-6HJ0aoI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
