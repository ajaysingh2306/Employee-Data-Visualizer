import React,{ useState, useEffect } from "react";
import "./App.css";
import  Table  from "./components/Table.js";
import {ThemeProvider,createGlobalStyle} from 'styled-components'
import SearchBar from "./components/SearchBar";
import storage from 'local-storage-fallback'

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props=>
  props.theme.mode==='dark' ? '#111':'#EEE'};
  color: ${props=>
    props.theme.mode==='dark' ? '#EEE':'#111'};
}
th {
  background-color: ${props=>
    props.theme.mode==='dark' ? '#111':'#EEE'};
    color: ${props=>
      props.theme.mode==='dark' ? '#EEE':'#111'};
}
td {
  background-color: ${props=>
    props.theme.mode==='dark' ? '#555':'#EEE'};
    color: ${props=>
      props.theme.mode==='dark' ? '#EEE':'#111'};
}
tr:hover {
  background-color: ${props=>
    props.theme.mode==='dark' ? '#999':'rgb(253, 205, 211)'};
  color: ${props=>
      props.theme.mode==='dark' ? '#FFF':'#111'};
}
`;

const getInitialTheme=()=>{
  const savedTheme=storage.getItem('theme')
  return savedTheme ? JSON.parse(savedTheme):{mode:'light'}
}
const App = () => {
  const [theme,setTheme]=useState(getInitialTheme)
  useEffect(()=>{
    storage.setItem('theme',JSON.stringify(theme))
  },[theme])
  return (
    <ThemeProvider theme={theme}>
    <div className="app-container">
      <GlobalStyle/> 
      <div className="head">
        <button className="toggle-button" onClick={e=>
          setTheme(theme.mode==='dark'?{mode:'light'}:{mode:'dark'})}>Toggle Theme</button>
      </div>
      <Table />
    </div>
    </ThemeProvider>
  );
};

export default App;