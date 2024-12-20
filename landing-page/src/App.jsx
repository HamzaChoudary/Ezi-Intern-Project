import React from "react";
// import Route from "react-router-dom";

import Head from "./components/Header/Head";
import Nav from "./components/NavBar/Nav";
import Hero from "./components/Hero/Hero";
import ProjectManagement from "./components/ProjectManage/ProjectManagment";
import ServicesShowcase from "./components/Serviceshowcase/services.jsx";
import Divlifecycle from "./components/Divlifecycyle/Divlifecycle";
import Slideshow from "./components/Sildeshow/slideshow";
import SFooter from "./components/LastFooter/SLastFooter";
import Footer from "./components/Footer/Footer";
import ClientSlider from "./components/Clientsshowcase/Client.jsx";
import Image from "./components/screenimage/Image.jsx";


export default function App() {

  return (
    <>

      < Head />
      <Image />
       <Nav />
      < Hero/>
      <ProjectManagement />
      <ServicesShowcase />
      <Divlifecycle />
      <Slideshow />
      <ClientSlider /> 
      <SFooter />
      <Footer />
    </>
  )
}


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import DropdownMenu from "./DropdownMenu";
// import About from "./About";
// import Services from "./Services";
// import Contact from "./Contact";

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-100">
//         {/* Navigation Bar */}
//         <nav className="p-4 bg-blue-500 text-white">
//           <DropdownMenu />
//         </nav>

//         {/* Routing Setup */}
//         <div className="p-6">
//           <Routes>
//             <Route path="/about" element={<About />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
