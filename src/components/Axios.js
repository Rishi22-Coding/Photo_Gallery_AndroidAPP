import { useState, useEffect } from 'react'
import axios from 'axios';
const Axios = (param) => {
    const [response, setResponse] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    axios.defaults.baseURL = "https://api.unsplash.com";

    const fetchData = async(url) => {
        try{
            setIsLoading(true);
            const result = await axios(url);
            setResponse(result.data.results)
        } catch(err){
            setError(err);
        } finally{
            setIsLoading(false);
        }
    }

    useEffect(() => {
      fetchData(param);
    }, [param])
    

  return {
    response,
    isLoading,
    error,
    fetchData: url => fetchData(url)
  }
}

export default Axios;