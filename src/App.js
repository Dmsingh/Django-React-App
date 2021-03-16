import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./App.css";
import Form from "./components/form/Form";
import Search from "./components/form/Search";
import Table from "./components/table/Table";
import logo from'./components/image/rd.png'
function App() {
  let click = () => {
    document.getElementById("clickme").removeAttribute("hidden");
    document.getElementById("table").setAttribute("hidden", "true");
    document.getElementById("ser").setAttribute("hidden", "true");

  };
  let table = () => {
    document.getElementById("table").removeAttribute("hidden");
    document.getElementById("clickme").setAttribute("hidden", "true");
    document.getElementById("ser").setAttribute("hidden", "true");

  };
  let search = () => {
    if (localStorage.getItem('search')==='true')
    {
      localStorage.setItem('search',false)
      window.location.reload()
    }
   
    document.getElementById("ser").removeAttribute("hidden");
    document.getElementById("clickme").setAttribute("hidden", "true");
    document.getElementById("table").setAttribute("hidden", "true");

  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="react-django" />
      
        <h1>&#128640;Welcome to REST API With Django Backend!!!&#128640;</h1>
        <div>
          <Button className="create mx-4" variant="primary" onClick={click}>
            Create Post
          </Button>
          <Button onClick={table} variant="success" className="get mx-4">
            Get your Posts
          </Button>
          <Button onClick={search} variant="secondary" className="get mx-4">
            Search
          </Button>
        </div>
        <div  className="my-4" id="clickme" hidden>
          <Form  />
        </div>
        <div   className="my-4" id="ser" hidden>
          <Search  />
        </div>
        <div id="table" className="my-4" hidden>
          <Table />
        </div>
      </header>
    </div>
  );
}

export default App;
