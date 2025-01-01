import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Search from "./components/Search";
import PlayingVideo from './components/PlayingVideo' 
import { Route, Routes } from "react-router-dom";
import Loading from "./loader/Loading";
import { useAuth } from "./context/AuthProvider";

// import Sidebar from "./components/Sidebar";
// import { useAuth } from "./context/AuthProvider";

const App = () => {
  const {loading} = useAuth()
  // const {loading, data} = useAuth()
  // console.log(loading)
  // console.log(data)
  return (
    <div>
      {loading && <Loading/>}
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/search/:searchQuery' element={<Search/>}/>
        <Route path='/video/:id' element={<PlayingVideo/>}/>

      </Routes>
      {/* <Sidebar/> */}
    </div>
  );
};

export default App;
