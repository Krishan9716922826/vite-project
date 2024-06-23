import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; 
import ParentComponent from './ParentComponent'
// import CategorySelect from './CategorySelect';

const FormComponent = ({ onSubmit }) => {
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');// Added subcategory state
  const navigate = useNavigate();

  const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleCategoryChange = (category, subcategory) => {
    setCategory(category);
    setSubcategory(subcategory);// Set subcategory state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      date1: formatDate(date1),
      date2: formatDate(date2),
      text1,
      text2,
      category,
      subcategory // Include subcategory in form data
    };
    onSubmit(data);
    navigate('/admin/template', { state: { data } });// Pass form data to the TemplateComponent
  };

  return (
    <div className="form-box">
      <h2>Form Title</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <label htmlFor="date1">दिनांक/Date</label>
          <input type="date" id="date1" value={date1} onChange={(e) => setDate1(e.target.value)} required />
        </div>
        <div className="user-box">
          <label htmlFor="date2">next calibration date</label>
          <input type="date" id="date2" value={date2} onChange={(e) => setDate2(e.target.value)} required />
        </div>
        <div className="user-box">
          <label htmlFor="text1">Page</label>
          <input type="text" id="text1" value={text1} placeholder="Page no. ..." onChange={(e) => setText1(e.target.value)} required />
        </div>
        <div className="user-box">
          <label htmlFor="text2">Total No. of Pages</label>
          <input type="text" id="text2" value={text2} placeholder="Total No. of Pages ..." onChange={(e) => setText2(e.target.value)} required />
        </div>
        <div className="user-box">
          <ParentComponent onCategoryChange={handleCategoryChange} />    
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
