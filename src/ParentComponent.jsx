import React, { useState } from 'react';
import CategorySelect from './CategorySelect';

const categoryData = {
  "D1.": ["01", "02", "03", "04", "05", "06", "07", "08"],
  "D2.": ["01", "02", "03", "04", "05"],
  "D3.": ["01", "02", "03", "04"],
  "D4.": ["01", "02", "03"],
  "D5.": [],
  "D6.": ["01", "02", "03"]
  // Add more categories and subcategories as needed
};

const ParentComponent = () => {
  const [selection, setSelection] = useState({ category: '', subcategory: '' });

  const handleSelectionChange = (category, subcategory) => {
    setSelection({ category, subcategory });
  };

  return (
    <div>
      <CategorySelect
        categoryData={categoryData}
        onSelectionChange={handleSelectionChange}
      />
      {/* <div>
        <h3>Selected Category and Subcategory:</h3>
        <p>
          {selection.category && `${selection.category} / ${selection.subcategory}`}
        </p>
      </div> */}
    </div>
  );
};

export default ParentComponent;