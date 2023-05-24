import axios from "axios";
const API = axios.create({ baseURL: 'https://socialmediaapp-yzhj.onrender.com' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('tokens')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('tokens')).token}`;
  }

  return req;
});

export const createPost = (dataURL) => {
    API.post("https://socialmediaapp-yzhj.onrender.com/posts/createpost", dataURL)
    .then((response) => {
      console.log(response.status, response.data);
    });
};

export const updatePost = (dataURL, id) => {

    API.patch(`https://socialmediaapp-yzhj.onrender.com/posts/updatepost/${id}`, dataURL);
};

export const likePost = (id) => {
  API.patch(`https://socialmediaapp-yzhj.onrender.com/posts/${id}/likepost`).then((response) => {
    console.log(response.status, response.data);
  });
};

export const deletePost = (id) => {
  API.delete(`https://socialmediaapp-yzhj.onrender.com/posts/${id}`).then((response) => {
    console.log(response.status, response.data);
  });
};

export const signin = (formData) => API.post('/user/signin', formData);

export const signup =(formData) => API.post('/user/signup', formData);

