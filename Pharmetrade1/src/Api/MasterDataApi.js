import axios from 'axios';

axios.defaults.baseURL = 'http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/';



export const fetchNdcUpcListApi = async (value) => {
  try {
    const response = await axios.get(`/api/Masters/GetNDCUPCList?NDC=${value}`);
    if (response.status === 200) {
        if(response.data.result.length==0)
        {
            const response1 = await axios.get(`/api/Masters/GetNDCUPCList?UPC=${value}`);
            return response1.data.result[0];
        }
        return response.data.result[0];
    } else {
      console.error('Failed to fetch banners:', response.data.message);
    }
  } catch (error) {
    console.error('Error fetching banners:', error);
  }
};

