// import logo from './logo.svg';
import React,{useState,useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/Search'

const App=()=> {
  const [items,setItems]=useState([]);
  const [isLoading,setIsLoading]=useState(true)
  const [query,setQuery]=useState("")
  useEffect(()=>{
    const fetchData=async ()=>{
      const res= await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      setItems(res.data)
      setIsLoading(false)
    }
    fetchData()
  },[query])
  return (
    <div className="container">
     <Header />
     <Search getQuery={(q)=>setQuery(q)} />
     <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
