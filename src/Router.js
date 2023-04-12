import React from 'react';
import {  Route,Routes} from 'react-router-dom';
import AddBook from './AddBook.js';
import AddMember from './AddMember.js'
import BookUI from './BookUI.js';

function Router() {
  return (
    <Routes>
      
    
    <Route path="/add-book" element={< AddBook/>}/>
    <Route path="/add-user" element={<AddMember />}/>
    <Route path="/" element={<BookUI />}/>
  
  </Routes>
  
  )
}

export default Router