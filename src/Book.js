import Button from 'react-bootstrap/Button';
import './App.css';
import Tooltip from "@mui/material/Tooltip";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBack';
import 'bootstrap/dist/css/bootstrap.min.css';


function Book() {
    const [detail, setDetail] = useState([]);

    const getDetail = () => {
        fetch("https://637c2c686f4024eac21f56a7.mockapi.io/book",
        { method: "GET" })
        .then((data) => data.json())
        .then((res) => setDetail(res));
    }
    const navigate = useNavigate();

    useEffect(() => getDetail(), [])
    return (
        <div className='row' >


            <h1> <Tooltip title="Go Back" arrow><Button variant="contained" color="success" onClick={() => navigate(-1)}>
                <ArrowBackIosIcon />
            </Button></Tooltip>List of Books </h1>


 
               
                
 <div className='cards'> 
 {detail.map((book, index) => (

       <div className="card"  >
  <img className="card-img-top"  key={index }src={book.poster} alt={book.name}/>
  <div className="card-body">
    <h3 className="card-title">{book.name}</h3>
    <p >⭐{book.rating}</p>
    </div> 
   <div>
    <p className="card-text">{book.summary}</p>

    </div>
  </div>


                ))}
            </div>
        </div>
    );
}
export default Book;
