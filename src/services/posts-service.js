import axios from 'axios';


const API_BASE = "http://localhost:4000/api";
const POST_API = `${API_BASE}/posts`;

const api = axios.create({
    withCredentials: true
});

// find all posts
export const findPosts = async () => {
    const response = await axios.get(POST_API);
    const posts = response.data;
    return posts;
}

// find all posts by author id
export const findPostsByAuthor = async (uid) => {
    const response = await axios.get(`${POST_API}/author/${uid}`);
    const posts = response.data;
    return posts;
}
