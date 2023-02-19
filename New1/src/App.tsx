import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from "./components/MainContainer";
import LeftMenu from "./components/LeftMenu";
import TopMenu from "./components/TopMenu";
import ListContainer from "./components/ListContainer";
import UserListComponent from './components/UserListComponent';
import TodoListComponent from './components/TodoListComponent';

import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import { Button } from '@mui/material';
function App() {
  
  return (
<>
       <Routes>
          <Route path="/user" element={<UserListComponent />} />
          <Route path="/todo" element={<TodoListComponent />} />
       </Routes>

       <div>
        <MainContainer>
        <TopMenu />
          <LeftMenu />
          <ListContainer>
            <TopMenu />
          </ListContainer>

        </MainContainer>
      </div>


    </>
    // <>
    //   <Routes>
       
    //     <Route  path="/user" element={<UserListComponent></UserListComponent>}></Route>
    //     <Route  path="/todo" element={<TodoListComponent></TodoListComponent>}></Route>
        
    //   </Routes>
   
   
    //   </>
  );
}

export default App;
