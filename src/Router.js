import React from 'react';
import {  Route,Routes} from 'react-router-dom';
import AddBook from './AddBook.js';
import AddMember from './AddMember.js'
import Book from './Book.js';
import Member from './Member.js';
import EditMember from './EditMember.js';

function Router() {
  return (
    <Routes>
      
    
    <Route path="/add-book" element={< AddBook/>}/>
    <Route path="/add-user" element={<AddMember />}/>
    <Route path="/" element={<Book/>}/>
    <Route path="/user" element={<Member />}/>
    <Route path="/user/edit" element={<EditMember/>}/>

  
  </Routes>
  
  )
}

export default Router
