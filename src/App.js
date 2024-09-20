import React,{useEffect} from 'react';
import axios from 'axios';
import { ACCESS_KEY } from './config/constants';

const App = () => {
  useEffect(()=>{
   axios.get('https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}&per_page=30');
  },[]);
  return (
    <div>
      Hi
    </div>
  )
}

export default App
