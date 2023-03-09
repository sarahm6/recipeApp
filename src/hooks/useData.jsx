import axios from 'axios'
import useSWR from 'swr'
 
const fetcher = url => axios.get(url).then(res => res.data)

function useData (url) {
	const endPoint = process.env.REACT_APP_BASE_URL+url
  const { data, error, isLoading } = useSWR(endPoint, fetcher)
 
  return {
    data: data,
    isLoading,
    isError: error
  }
}

export default useData;