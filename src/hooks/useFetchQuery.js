import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

const useFetchQuery = () => {
  const [data, setData] = useState([]);
  const [ err, setErr] = useState([]);
  const langQuery = useSelector((state) => state.query.langQuery);
  const searchQuery = useSelector((state)=> state.query.searchQuery);
  const [loading, setLoading] = useState(false);
  const query = `${searchQuery} page:1 page-size:50 lang:${langQuery}`;
  const apiKey = process.env.REACT_APP_API_KEY;
  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    fetchData();
  }, [langQuery, searchQuery]);

  const fetchData = () => {
    setLoading(true);
    const apiUrl = `${baseUrl}?q=${query}&apikey=${apiKey}&format=json`;
    const url = `https://api.allorigins.win/get?url=${encodeURIComponent(apiUrl)}`;
    fetch(url).then(res => res.json()).then(dataItem => {
      let parsedData = JSON.parse(dataItem.contents);
       if(parsedData.error) {
        let msg = `Error in Query:
        code: ${parsedData.code}
        Msg: ${parsedData.error}`;
        setErr(msg);
        setData([])
       } else {
        setData(parsedData.documents);
       }
    }).catch(err => setErr(err)).finally(() => setLoading(false)); 
  };

  return {data, err, loading};
};

export default useFetchQuery;