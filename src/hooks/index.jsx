import { useState, useEffect } from "react";
const useFetch = (url) => {
      const [data, setData] = useState(null);
      const [loading,setLoading]=useState(false);
      const [error,setError]=useState(false);

      
      useEffect(() => {
          setLoading(true)
          fetch(url)
          .then(res =>res.json() )
          .then((data) =>{setData(data)
            setLoading(false)
            } )
          .catch(err =>{
            setLoading(false)
            setError(true)
            console.log(err)

                });



            
      }, [url]);
      return [data,error,loading];
};
export default useFetch;



