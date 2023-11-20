// import react from "react";
import "./App.css";
import Signup from "./component/Auth/Signup";
import Home from "./Page/Home";
import Login from "./component/Auth/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./component/Layout/Header";
import Footer from "./component/Layout/Footer";
import ProductList from "./component/ProductList";
import BankCardForm from "./component/BankForm/BankCardForm";
import SignUpSeller from "./component/SignUpSeller";
import SignInSeller from "./component/SignInSeller";
import UploadData from "./component/UploadData";
import Display from "./component/Display";
import Gotop from "./component/sub-component/Gotop/Gotop";
import Whatsapp from "./component/sub-component/Whatsapp/Whatsapp";

import ArtistDashborad from "./component/Dashborad/ArtistDashborad";
import CustomerDashborad from "./component/Dashborad/CustomerDashborad";
import PageNotFound from "./component/PageNotFound";


function App() {
  return (

    <Router>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userdashboard" element={<ArtistDashborad />} />
        <Route path="/sellerdashboard" element={<CustomerDashborad />} />

        <Route path="/productlist" element={<ProductList />} />
        <Route path="/checkout" element={<BankCardForm />} />
        <Route path="/signupseller" element={<SignUpSeller />} />
        <Route path="/siginseller" element={<SignInSeller />} />
        <Route path="/uploadimage" element={<UploadData />} />
        <Route path="/Productsdisplay" element={<Display />} />

      </Routes>

      <Gotop />
      <Whatsapp />
      <Footer />

    </Router>
  );
}

export default App;

