import React, { useState } from 'react';

const CategorySelect = ({ categoryData, onSelectionChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setSelectedSubcategory(''); // Reset subcategory when category changes
    onSelectionChange(category, '');
  };

  const handleSubcategoryChange = (e) => {
    const subcategory = e.target.value;
    setSelectedSubcategory(subcategory);
    onSelectionChange(selectedCategory, subcategory);
  };

  return (
    <div>
      <label htmlFor="category">Select Category:</label>
      <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select Category</option>
        {Object.keys(categoryData).map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      {selectedCategory && categoryData[selectedCategory].length > 0 && (
        <div>
          <label htmlFor="subcategory">Select Subcategory:</label>
          <select id="subcategory" value={selectedSubcategory} onChange={handleSubcategoryChange}>
            <option value="">Select Subcategory</option>
            {categoryData[selectedCategory].map((subcategory) => (
              <option key={subcategory} value={subcategory}>{subcategory}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default CategorySelect;
