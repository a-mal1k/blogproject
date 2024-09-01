import { useEffect, useState } from "react";

const useFetchQuery = (query) => {
  const [data, setData] = useState([]);
  const [ err, setErr] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;
  const baseUrl = process.env.REACT_APP_BASE_URL;
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const apiUrl = `${baseUrl}?q=${query}&apikey=${apiKey}&format=json`;
    fetch(apiUrl).then(res => res.json()).then(dataItem => {
       if(dataItem.error) {
        let msg = `Error in Query:
        code: ${dataItem.code}
        Msg: ${dataItem.error}`;
        setErr(msg);
       } else {
        setData(dataItem.documents);
       }
    }).catch(err => setErr(err));
  };

  return {data, err};
};

export default useFetchQuery;