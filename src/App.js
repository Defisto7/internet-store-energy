import React from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/index";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Contacts from "./pages/Contacts";
import Cart from "./components/Cart";
import { AuthContexProvider } from "./context/AuthContex";
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
  return (
    <AuthContexProvider>
      <Provider store={store}>
        <div className="min-h-screen flex flex-col justify-between bg-slate-800">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
          <Footer />
        </div>
      </Provider>
    </AuthContexProvider>
  );
};

export default App;
