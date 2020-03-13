import axios from 'axios';
export default axios.create({
    baseURL : 'https://api.yelp.com/v3/businesses',
    headers :{
        Authorization: 'Bearer szqJzF1SujcLvLXD79vG15SMjpTQapPitTq9jenJT19ZMRcH0SMzHjmbUYLcgaZ73mNxxSg_YUhc1cV9cqHYTLa3kcFMVT9SJ4Y6b_WanYJ_W_iEAcA7Q5AidCw0XnYx'
    }
});
