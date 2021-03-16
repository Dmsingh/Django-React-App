import React, { useState } from 'react'
import { Button, Col, Form } from 'react-bootstrap'
import Searchtable from '../table/Searchtable'
import axios from "axios";
import data from "../../Functions/API";
function Search() {
 
    const [state, setstate] = useState(true)
    
     const search=()=>{
       axios.get(`${data.create}/${ document.getElementById('sefield').value}`)
    .then(response=>{console.log(response)
    localStorage.setItem('search',true)  
    setstate(false)
    })
    .catch(err=>{
        alert("Your Entered Id is not found! please try with valid ID") 
        window.location.reload()})
 

     }

    return (
        <div>{
            state ? <Form >
           <Col>
            
           <Form.Control id="sefield" required type="text" placeholder="Enter your Id" />
           </Col>
          
             
              
            
          
            
            <Button onClick={search} className="mx-4" variant="light">
          Search
            </Button>
          </Form>:<Searchtable id={document.getElementById('sefield').value} />
            
            }
           
        </div>
    )
}

export default Search
