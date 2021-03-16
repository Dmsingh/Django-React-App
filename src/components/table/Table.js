import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import data from "../../Functions/API";
import { Button } from "react-bootstrap";



function Tables({id}) {
  


  
  const [post, setpost] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(data.create);
      setpost(request.data);
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
         {
          post
            ? post.map((movie) => (
                <tr id="tbr" key={movie.id} value={movie.id}>
                  <td className="text-sm">{movie.id}</td>
                  <td className="text-sm">{movie.title}</td>
                  <td>{movie.description}</td>
                  <td>{movie.published.toString()}</td>
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
              ))
            : null}
         
         
        </tbody>
      </Table>
    </div>
  );
}

export default Tables;
