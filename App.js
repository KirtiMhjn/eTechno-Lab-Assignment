import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";

import ContactForm from "./ContactForm";
import Footer from "./Footer2";




const AppLayout = () => {
    return  (
        <div className="app">
          <Header />
           
          <Body />
           <ContactForm />
           <Footer />
            
        </div>
    );

};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

