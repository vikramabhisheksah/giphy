import Navbar from "./Navbar";
import Body from "./Body";
import axios from 'axios'
import "./App.css";
import React, { useEffect, useState } from 'react';

function App() {

  const [gifs, setGifs] = useState([])
  const [searchQry, setSearchQry] = useState("");
  
  useEffect(()=>{
      axios.get(`http://api.giphy.com/v1/gifs/trending`, { params: {
          api_key: '5Muqe6HOngq40S9xI6ZQJ7jDfvZUoS5f',
          limit:40
        }})
        .then(res => {
          setGifs(res.data.data)
          console.log(res.data.data)
        })
    },[]);

  const handleSearch = (e) => {
    setSearchQry(e.target.value);
    // console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.giphy.com/v1/gifs/search`, {
        params: {
          api_key: "5Muqe6HOngq40S9xI6ZQJ7jDfvZUoS5f",
          q:searchQry,
          limit:40
        },
      })
      .then((res) => {
        setGifs(res.data.data);
      });
  };
  return (
    <div className="App">
      <Navbar
        searchQry={searchQry}
        handleSearch={handleSearch}
        handleSubmit={handleSubmit}
      />
      <Body gifs={gifs} setGifs={setGifs}/>
    </div>
  );
}

export default App;
