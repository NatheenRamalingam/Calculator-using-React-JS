import React from 'react';
import Calc from './Component/Calc';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App=(props)=> {
  return(
    <div>

      <Calc/>
      <ToastContainer autoClose={4000} position='top-center'/>

    </div>
  )
}
export default App;