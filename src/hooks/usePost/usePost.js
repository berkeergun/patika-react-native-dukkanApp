import {useState} from "react"
import axios from "axios"

const usePost = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const post = async (url, apiData) => {
        try {
          setLoading(true)

          const {data:responseData} = await axios.post(url, apiData);
          setData(responseData);
          setLoading(false)

        } catch (err) {
          setError(err.message)
          setLoading(false)
        }
    };


    return {error,loading,data, post}
}

export default usePost;