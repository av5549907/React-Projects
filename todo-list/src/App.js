//import logo from './logo.svg';
import './App.css';
// import { Pagination } from './Components/Pagination';
import {TaskTable} from './Components/TaskTable'
//import { Greet } from './Components/Greet';
//import { Message } from './Components/Message';
//import { ClickHandler } from './Components/ClickHandler';
// import { ParentComponent } from './Components/ParentComponent';
// import { Form } from './Components/Form';
//import { BasicTable } from './Components/BasicTable';
// import { Product } from './Components/Product';
// import { ProductForm } from './Components/ProductForm';
import  {Buttondes}  from './Components/Buttondes';
//import { BrowserRouter as Router,Route,Link } from "react-router-dom";
//import Login from './Components/Login';
import { Headr } from './Components/Headr';
 import { BrowserRouter as Router,Route,Routes,Switch,Link} from 'react-router-dom';
 import Profile from './Profile';
 import { Navigate } from 'react-router-dom';

const product = [ 
  {name: 'Beginner to Advanced: React', type: 'Book', price: 1860},
  {name: 'Rework', type: 'Book', price: 595},
  {name: 'iPhone 12 Mini', type: 'Electronics', price: 69990},
  {name: 'Teapoy', type: 'Furniture', price: 6000},
  {name: 'Yoga Mat', type: 'Fitness', price: 1200},
]

function App() {
  return (
    
      <div className="App">
      <Router>
      <Routes>
        <Route  path="/" element={<Buttondes/>}/>
        <Route path="/tasktable" element={<TaskTable/>}/>
        </Routes>
        </Router>
       </div>
    // <div className="App">
    //    <Buttondes/>
    //   {/* <TaskTable/> */}
    //   {/* <Headr/>
    //   <Buttondes/> */}
    //    {/* <Login/> */}
    //   {/*} <Message/> */}
    //    {/* <ClickHandler/> */}
    //    {/* <ParentComponent/> */}
    //    {/* <Form/> */}
    //   {/* <Product product={product}/> */}
    //    {/* <ProductForm/> */}
    //    {/* <BasicTable/> */}
     //</div> 
  // );
  );
}

export default App;
