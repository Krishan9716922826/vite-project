// import React, { useState } from 'react';
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import TemplateComponent from './Template';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Ctbr from './Ctbr'

// function App() {
 
//   return (
//     <>
//       <Router>
//       <Routes>
//         <Route path="/" element={<Ctbr onSubmit={handleFormSubmit} />} />
//         <Route path="/template" element={<TemplateComponent formData={formData} />} />
//       </Routes>
//     </Router>
//     </>
//   )
// }

// export default App

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TemplateComponent from './Template';
import FormComponent from './Admin';
import Ctbr from './Ctbr';

function App() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ctbr onSubmit={handleFormSubmit} />} />
        <Route path="/admin" element={<FormComponent onSubmit={handleFormSubmit} />} />
        <Route path="/admin/template" element={<TemplateComponent />} /> // Updated Route for TemplateComponent
      </Routes>
    </Router>
  );
}

export default App;
