// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Ctbr = ({ onSubmit }) => {
//   const [caseNo, setCaseNo] = useState('');
//   const [orgName, setOrgName] = useState('');
//   const [city, setCity] = useState('');
//   const [state, setState] = useState('');
//   const [country, setCountry] = useState('');
//   const [pin, setPin] = useState('');
//   const [contactPerson, setContactPerson] = useState('');
//   const [email, setEmail] = useState('');

//   const [tableData, setTableData] = useState(
//     Array.from({ length: 3 }, () => Array(6).fill(''))
//   );

//   const navigate = useNavigate();

//   const handleInputChange = (e, rowIndex, colIndex) => {
//     const newTableData = [...tableData];
//     newTableData[rowIndex][colIndex] = e.target.value;
//     setTableData(newTableData);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = {
//       case_no: caseNo,
//       org_name: orgName,
//       city,
//       state,
//       country,
//       pin,
//       contact_person: contactPerson,
//       email,
//       table_data: tableData
//     };

//     onSubmit(data);
//     navigate('/template', { state: { data } });
//   };

//   return (
//     <div>
//       <div className="form-container">
//         <img src="https://th.bing.com/th?id=OIP.agGpskq_U9Mx5uM_AE_NogHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Left Logo" className="left-logo" />
//         <img src="https://th.bing.com/th?id=OIP.s8Z9OVGZsrPSTyI469z2EQAAAA&w=212&h=210&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Right Logo" className="right-logo" />
//       </div>
      
//       <h1>CSIR-National Physical Laboratory</h1>
//       <h2>New Delhi- 110012</h2>
//       <h3>Centre for Calibration & Testing (CFCT)</h3><br />
//       <h4>For Customer: Please fill the GST Details</h4>

//       <div className="container">
//         <div className="box">
//           <form onSubmit={handleSubmit}>
//             <div className="background-box">
//               <label htmlFor="gst_available">(i) GST Available:</label>
//               <input type="radio" id="gst_yes" name="gst_available" value="1" />
//               <label htmlFor="gst_yes">Yes</label>
//               <input type="radio" id="gst_no" name="gst_available" value="2" />
//               <label htmlFor="gst_no">No</label><br />
              
//               <label htmlFor="gst_number">(ii) GST Number (Please [tick] any one):</label><br />
//               {Array.from({ length: 15 }).map((_, i) => (
//                 <input key={i} type="text" maxLength="1" size="1" pattern="[0-9]" name={`digit${i + 1}`}  />
//               ))}<br /><br />
//             </div>

//             <h5>For Office Use Only</h5>
//             <div className="background-box">
//               <label htmlFor="case_no">Case No.</label><br />
//               <input
//                 type="text"
//                 id="case_no"
//                 value={caseNo}
//                 placeholder="Case No."
// onChange={(e) => setCaseNo(e.target.value)}
// required
// /><br /><br />
// <label htmlFor="org_name">(2) NAME OF THE ORGANIZATION/FIRM WITH FULL ADDRESS:</label><br />
//           <input
//             type="text"
//             id="org_name"
//             value={orgName}
//             onChange={(e) => setOrgName(e.target.value)}
//             name="org_name"
//           /><br /><br />

//           <label htmlFor="city">City:</label><br />
//           <input
//             type="text"
//             id="city"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             name="city"
//           /><br /><br />

//           <label htmlFor="state">State:</label><br />
//           <input
//             type="text"
//             id="state"
//             value={state}
//             onChange={(e) => setState(e.target.value)}
//             name="state"
//           /><br /><br />

//           <label htmlFor="country">Country:</label><br />
//           <input
//             type="text"
//             id="country"
//             value={country}
//             onChange={(e) => setCountry(e.target.value)}
//             name="country"
//           /><br /><br />

//           <label htmlFor="pin">PIN:</label><br />
//           <input
//             type="text"
//             id="pin"
//             value={pin}
//             onChange={(e) => setPin(e.target.value)}
//             name="pin"
//           /><br /><br />

//           <label htmlFor="contact_person">Contact Person:</label><br />
//           <input
//             type="text"
//             id="contact_person"
//             value={contactPerson}
//             onChange={(e) => setContactPerson(e.target.value)}
//             name="contact_person"
//           /><br /><br />

//           <label htmlFor="email">Email:</label><br />
//           <input
//             type="text"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             name="email"
//           /><br /><br />
          
//           <table>
//             <thead>
//                 <tr>
//                     <th>Sr. No.</th>
//                     <th>Name of Instrument/Sample/Reference Material (BND)</th>
//                     <th>Make/Model/Sr.No./Batch/Lot No. or any other identification</th>
//                     <th>Qty.</th>
//                     <th>Calibration/Testing requirements/specifications</th>
//                     <th>Remarks, if any</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {tableData.map((row, rowIndex) => (
//                     <tr key={rowIndex}>
//                         {row.map((col, colIndex) => (
//                             <td key={colIndex}>
//                                 <input 
//                                     type="text" 
//                                     value={col} 
//                                     onChange={(e) => handleInputChange(e, rowIndex, colIndex)}
//                                     name={`row${rowIndex + 1}_col${colIndex + 1}`}
//                                 />
//                             </td>
//                         ))}
//                     </tr>
//                 ))}
//             </tbody>
//         </table>

//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   </div>
// </div>
// );
// };

// export default Ctbr;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './index.css'; 

const Ctbr = ({ onSubmit }) => {
  const [caseNo, setCaseNo] = useState('');
  const [orgName, setOrgName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [pin, setPin] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [tableData, setTableData] = useState(
    Array.from({ length: 3 }, () => Array(6).fill(''))
  );

  const navigate = useNavigate();

  const handleInputChange = (e, rowIndex, colIndex) => {
    const newTableData = [...tableData];
    newTableData[rowIndex][colIndex] = e.target.value;
    setTableData(newTableData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      case_no: caseNo,
      org_name: orgName,
      city,
      state,
      country,
      pin,
      contact_person: contactPerson,
      email,
      table_data: tableData
    };

    onSubmit(data);
    navigate('/admin/template', { state: { data } });
  };

  return (
    <div>
      <div className="form-container">
        <img src="https://th.bing.com/th?id=OIP.agGpskq_U9Mx5uM_AE_NogHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Left Logo" className="left-logo" />
        <img src="https://th.bing.com/th?id=OIP.s8Z9OVGZsrPSTyI469z2EQAAAA&w=212&h=210&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Right Logo" className="right-logo" />
      </div>

      <h1>CSIR-National Physical Laboratory</h1>
      <h2>New Delhi- 110012</h2>
      <h3>Centre for Calibration & Testing (CFCT)</h3>
      <br />
      <h4>For Customer: Please fill the GST Details</h4>

      <div className="container">
        <div className="box">
          <form onSubmit={handleSubmit}>
            <div className="background-box">
              <label htmlFor="gst_available">(i) GST Available:</label>
              <input type="radio" id="gst_yes" name="gst_available" value="1" />
              <label htmlFor="gst_yes">Yes</label>
              <input type="radio" id="gst_no" name="gst_available" value="2" />
              <label htmlFor="gst_no">No</label>
              <br />

              <label htmlFor="gst_number">(ii) GST Number (Please [tick] any one):</label>
              <br />
              {Array.from({ length: 15 }).map((_, i) => (
                <input key={i} type="text" maxLength="1" size="1" pattern="[0-9]" name={`digit${i + 1}`} />
              ))}
              <br />
              <br />
            </div>

            <h5>For Office Use Only</h5>
            <div className="background-box">
              <label htmlFor="case_no">Case No.</label>
              <br />
              <input
                type="text"
                id="case_no"
                value={caseNo}
                placeholder="Case No."
                onChange={(e) => setCaseNo(e.target.value)}
                required
              />
              <br />
              <br />
              <label htmlFor="org_name">(2) NAME OF THE ORGANIZATION/FIRM WITH FULL ADDRESS:</label>
              <br />
              <input
                type="text"
                id="org_name"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                name="org_name"
              />
              <br />
              <br />

              <label htmlFor="city">City:</label>
              <br />
              <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                name="city"
              />
              <br />
              <br />

              <label htmlFor="state">State:</label>
              <br />
              <input
                type="text"
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                name="state"
              />
              <br />
              <br />

              <label htmlFor="country">Country:</label>
              <br />
              <input
                type="text"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                name="country"
              />
              <br />
              <br />

              <label htmlFor="pin">PIN:</label>
              <br />
              <input
                type="text"
                id="pin"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                name="pin"
              />
              <br />
              <br />

              <label htmlFor="contact_person">Contact Person:</label>
              <br />
              <input
                type="text"
                id="contact_person"
                value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
                name="contact_person"
              />
              <br />
              <br />

              <label htmlFor="email">Email:</label>
              <br />
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
              />
              <br />
              <br />

              <table>
                <thead>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Name of Instrument/Sample/Reference Material (BND)</th>
                    <th>Make/Model/Sr.No./Batch/Lot No. or any other identification</th>
                    <th>Qty.</th>
                    <th>Calibration/Testing requirements/specifications</th>
                    <th>Remarks, if any</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((col, colIndex) => (
                        <td key={colIndex}>
                          <input
                            type="text"
                            value={col}
                            onChange={(e) => handleInputChange(e, rowIndex, colIndex)}
                            name={`row${rowIndex + 1}_col${colIndex + 1}`}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>

              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Ctbr;
