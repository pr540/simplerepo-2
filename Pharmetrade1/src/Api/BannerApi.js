import axios from 'axios';
import store from '../Store/Store';

axios.defaults.baseURL = 'http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/';


// Action types for banner
const SET_BANNER = 'banner/setBanner';

// Fetch all banners
export const fetchAllBannersApi = async () => {
  try {
    const response = await axios.get('/api/Banner/GetAll');
    if (response.status === 200) {
      store.dispatch({ type: SET_BANNER, payload: response.data.result });
    } else {
      console.error('Failed to fetch banners:', response.data.message);
    }
  } catch (error) {
    console.error('Error fetching banners:', error);
  }
};

