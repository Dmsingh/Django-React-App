import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import data from "../../Functions/API";
import { Button } from "react-bootstrap";



function Tables({id}) {
  


  
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${data.create}/${id}`);
      setmovie(request.data);
      return request;
    }
    fetchData();
  }, );

  const del = (ids) => {
    axios.delete(`${data.create}/${ids}`);
    window.location.reload();
  };
  const updat=(id,title,desc,pub)=>{
  document.getElementById('clickme').removeAttribute('hidden')
  document.getElementById('re').removeAttribute('hidden')
  document.getElementById('up').removeAttribute('hidden')
  document.getElementById('set').setAttribute('hidden',true)

  document.getElementById('idt').value=`${id}`

  document.getElementById('title').value=`${title}`
  document.getElementById('description').value=`${desc}`
  document.getElementById('published').value=`${pub}`


 
  }

  return (
   
    <div>
    

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Published</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
         
      
                <tr id="tbr" key={movie.id} value={movie.id}>
                  <td >{movie.id}</td>
                  <td >{movie.title}</td>
                  <td>{movie.description}</td>
                  <td>{movie.published? movie.published.toString():null}</td>
                  <td>
                    {" "}
                    <Button
                      onClick={() =>  updat(movie.id,movie.title,movie.description,movie.published)
                   
                       
                       
                      
                 
                      }
                 
                       
                      className="create"
                      variant="light"
                    >
                      Update
                    </Button>
                    <Button
                      id="del"
                      onClick={() => del(movie.id)}
                      variant="danger"
                      className="get mx-2"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
          
           
         
         
        </tbody>
      </Table>
    </div>
  );
}

export default Tables;
