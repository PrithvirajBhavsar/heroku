import React,{useEffect} from 'react';
import Nav from './components/Nav/Nav';
import {useDispatch} from "react-redux";
import {getUser} from "./actions/action" 
import "./App.css"
import Home from './components/Home/Home';

const App = ()=>{
   const dispatch = useDispatch()
   useEffect(()=>{
       dispatch(getUser());
   },[dispatch]);
return(<>
   <Nav/>
   <Home/>
</>);
}
export default App