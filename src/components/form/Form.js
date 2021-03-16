import React  from 'react'
import {Row,Col,Form,Button} from 'react-bootstrap'
import axios from "axios";
import data from "../../Functions/API";

function Forms() {
  
  
const created=()=>{
  const[title,description,published]=[document.getElementById('title').value,document.getElementById('description').value,Boolean(document.getElementById('published').value)]
 const datas={
   title:title,
   description:description,
   published:published
 }
 axios.post(data.create,datas)
 window.location.reload()
}

const re=()=>{
  document.getElementById('title').value=""
  document.getElementById('published').value=""

  document.getElementById('description').value=""

}
const upd=()=>{
  const[id,title,description,published]=[document.getElementById('idt').value,document.getElementById('title').value,document.getElementById('description').value,Boolean(document.getElementById('published').value)]
  const datas={
    title:title,
    description:description,
    published:published
  }
  axios.put(`${data.create}/${id}`,datas)
  window.location.reload()
}


    return (
        <div>
           <Form >
  <Row style={{marginRight:130}}>
  <Col>
      <Form.Control required hidden id="idt" placeholder="id" />
    </Col>
    <Col>
      <Form.Control required id="title" placeholder="Title" />
    </Col>
    <Col>
      <Form.Control required id="description" placeholder="Description" />
    </Col>
    <Col>
      <Form.Control required id="published" placeholder="True/False " />
    </Col>
    <Button id="re" onClick={re} className="mx-2" hidden variant="warning">Reset</Button>
    <Button id="up" onClick={upd} className="mx-2" hidden variant="light">Update</Button>
     
    <Button id="set" className="mx-2" onClick={created} variant="secondary">Submit</Button>
    
  </Row>
</Form>
        </div>
    )
}

export default Forms
