import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ViewCustomerData from "./Pages/ViewCustomerData";
import EditCustomerData from "./Pages/EditCustomerData";
import AllProducts from "./Pages/AllProducts";
import AllOrders from "./Pages/AllOrders";
import AddCopons from "./Pages/AddCopons";
import AddCustomer from "./Pages/AddCustomer";
import ViewAllCopons from "./Pages/ViewAllCopons";
import Footer from "./Pages/Footer";

function App() {
  return (
    <div  style={{minHeight:'500px'}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/viewcustomerdata" element={<ViewCustomerData/>} />
        <Route path="/editcustomer" element={<EditCustomerData/>} />
        <Route path="/allproducts" element={<AllProducts/>} />
        <Route path="/Allorders" element={<AllOrders/>} />
        <Route path="/addcopons" element={<AddCopons/>} />
        <Route path="/AddCustomer" element={<AddCustomer/>} />
        <Route path="/ViewAllCopons" element={<ViewAllCopons/>} />

        
        
        
        
        
        
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
