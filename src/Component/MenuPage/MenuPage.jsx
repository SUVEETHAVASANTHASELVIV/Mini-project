import React, { useState } from 'react';
import HeaderPage from './HeaderPage';
import CategoryCard from './MenuCategories';  // Import the CategoryCard component
import itempic from '../../Picture/dinner.gif';  // Import the item image
import sampleVideo from '../../Picture/Video.mp4';

const categories = [
  { id: 1, name: 'Appetizers' },
  { id: 2, name: 'Main Course' },
  { id: 3, name: 'Desserts' },
  { id: 4, name: 'Salads' },
  { id: 5, name: 'Beverages' },
  { id: 6, name: 'Breakfast' },
  { id: 7, name: 'Soups' },
  { id: 8, name: 'Seafood' },
  { id: 9, name: 'Vegan' }
];

const menuItems = [
  { id: 1, name: 'Cheesecake', category: 'Desserts', price: 35.00, rating: 4.5, img: itempic },
  { id: 2, name: 'Ice Cream', category: 'Desserts', price: 30.00, rating: 4.0, img: itempic },
  { id: 3, name: 'Steak', category: 'Main Course', price: 50.00, rating: 4.8, img: itempic },
  { id: 4, name: 'Pasta', category: 'Main Course', price: 40.00, rating: 4.2, img: itempic },
  { id: 5, name: 'Spring Rolls', category: 'Appetizers', price: 20.00, rating: 4.1, img: itempic },
  { id: 6, name: 'Garlic Bread', category: 'Appetizers', price: 15.00, rating: 3.8, img: itempic },
  { id: 7, name: 'Salad', category: 'Salads', price: 25.00, rating: 4.3, img: itempic },
  { id: 8, name: 'Sushi', category: 'Seafood', price: 45.00, rating: 4.7, img: itempic },
  { id: 9, name: 'Brownie', category: 'Desserts', price: 28.00, rating: 4.9, img: itempic },
  { id: 10, name: 'Vegan Burger', category: 'Vegan', price: 35.00, rating: 4.6, img: itempic },
  { id: 11, name: 'Lentil Soup', category: 'Soups', price: 22.00, rating: 4.3, img: itempic },
  { id: 12, name: 'Pancakes', category: 'Breakfast', price: 18.00, rating: 4.4, img: itempic },
  // Add more items for each category as needed
];

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState(''); // For sorting

  // Filtered items based on the search query
  const filteredItems = menuItems.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle sorting
  const sortedItems = (items) => {
    switch (sortOption) {
      case 'price-asc':
        return [...items].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...items].sort((a, b) => b.price - a.price);
      case 'rating-asc':
        return [...items].sort((a, b) => a.rating - b.rating);
      case 'rating-desc':
        return [...items].sort((a, b) => b.rating - a.rating);
      default:
        return items;
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <HeaderPage query={searchQuery} setQuery={setSearchQuery} /> {/* Pass search query */}
      <div className="flex mt-9">
        {/* Left Side: Auto-playing Video */}
        <div className="w-2/4 p-4">
          <div className="bg-white rounded-xl shadow-lg">
            <video
              src={sampleVideo}  // Your video file path
              autoPlay
              loop
              muted
              className="w-full h-auto rounded-t-lg"  />
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold">Welcome to DineSmart!</h3>
              <p className="text-gray-500">
                Enjoy our exclusive dishes while watching the best culinary techniques!
              </p>
            </div>
          </div>
        </div>
        {/* Right Side: Menu Items */}
        <div className="w-2/4 p-4">
          <div className="flex justify-end mb-4">
            <select
              onChange={(e) => setSortOption(e.target.value)}
              className="p-2 border border-gray-300 rounded"
              value={sortOption}>
              <option value="">Sort by</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating-asc">Rating: Low to High</option>
              <option value="rating-desc">Rating: High to Low</option>
            </select>
          </div>

          {/* Scrollable container for menu items or categories with hidden scrollbar */}
          <div
            style={{
              maxHeight: '60vh',  overflowY: 'auto',
              scrollbarWidth: 'none',  // For Firefox
              msOverflowStyle: 'none',  // For IE and Edge
            }}
            className="scroll-container" >
            {selectedCategory ? (
              <CategoryCard
                category={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                sortedItems={sortedItems}
                menuItems={menuItems}  // Pass menuItems to CategoryCard
            />
            ) : (
              <div className="grid grid-cols-3 gap-4">
                {searchQuery ? (
                  sortedItems(filteredItems).map((item) => (
                    <div key={item.id} className="p-4 bg-white rounded-xl shadow-lg">
                      <img src={item.img} alt={item.name} className="h-32 w-full object-cover rounded-t-lg" />
                      <h3 className="text-lg font-bold mt-2">{item.name}</h3>
                      <p className="text-gray-700">Price: ${item.price.toFixed(2)}</p>
                      <p className="text-gray-700">Rating: {item.rating}</p>
                    </div>
                  ))
                ) : (
                  categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategorySelect(category)}
                      className="p-4 bg-white rounded-xl shadow-lg hover:bg-gray-200">
                      <h2 className="text-center text-lg font-bold">{category.name}</h2>
                    </button>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
// import React, { useState, useEffect } from 'react';
// import * as XLSX from 'xlsx';
// import HeaderPage from './HeaderPage';
// import CategoryCard from './MenuCategories';
// import sampleVideo from '../../Picture/Video.mp4';


// const MenuPage = () => {
//   const [categories, setCategories] = useState([]);
//   const [menuItems, setMenuItems] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sortOption, setSortOption] = useState('');

//   // Function to load the Excel file and parse data
//   const loadExcelData = async () => {
//     try {
//       const response = await fetch('/MenuList.xlsx'); // Ensure this path points to the public folder
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const arrayBuffer = await response.arrayBuffer();
//       const workbook = XLSX.read(arrayBuffer, { type: 'array' });
//       const sheetName = workbook.SheetNames[0];
//       const sheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
  
//       const categoriesSet = new Set();
//       const items = [];
  
//       sheet.forEach((row) => {
//         categoriesSet.add(row.Category);  // Collect categories from the 'Category' column
//         items.push({
//           id: row.ID,  // Assuming your Excel has an ID column
//           name: row.Item,
//           category: row.Category,
//           price: row.Price,
//           rating: row.Rating,
//           img: row.Image  // Assuming there is an image path in the Excel
//         });
//       });
  
//       setCategories([...categoriesSet]);  // Convert Set to Array
//       setMenuItems(items);
//     } catch (error) {
//       console.error('Error loading Excel file:', error);
//     }
//   };
  

//   // Fetch data on component mount
//   useEffect(() => {
//     loadExcelData();
//   }, []);

//   // Filter items based on search query
//   const filteredItems = menuItems.filter(item =>
//     item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     item.category.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Handle sorting
//   const sortedItems = (items) => {
//     switch (sortOption) {
//       case 'price-asc':
//         return [...items].sort((a, b) => a.price - b.price);
//       case 'price-desc':
//         return [...items].sort((a, b) => b.price - a.price);
//       case 'rating-asc':
//         return [...items].sort((a, b) => a.rating - b.rating);
//       case 'rating-desc':
//         return [...items].sort((a, b) => b.rating - a.rating);
//       default:
//         return items;
//     }
//   };

//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <div className="p-4 bg-gray-100 min-h-screen">
//       <HeaderPage query={searchQuery} setQuery={setSearchQuery} />
//       <div className="flex mt-9">
//         {/* Left Side: Auto-playing Video */}
//         <div className="w-2/4 p-4">
//           <div className="bg-white rounded-xl shadow-lg">
//             <video
//               src={sampleVideo}
//               autoPlay
//               loop
//               muted
//               className="w-full h-auto rounded-t-lg"
//             />
//             <div className="p-4 text-center">
//               <h3 className="text-lg font-bold">Welcome to DineSmart!</h3>
//               <p className="text-gray-500">
//                 Enjoy our exclusive dishes while watching the best culinary techniques!
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* Right Side: Menu Items */}
//         <div className="w-2/4 p-4">
//           <div className="flex justify-end mb-4">
//             <select
//               onChange={(e) => setSortOption(e.target.value)}
//               className="p-2 border border-gray-300 rounded"
//               value={sortOption}
//             >
//               <option value="">Sort by</option>
//               <option value="price-asc">Price: Low to High</option>
//               <option value="price-desc">Price: High to Low</option>
//               <option value="rating-asc">Rating: Low to High</option>
//               <option value="rating-desc">Rating: High to Low</option>
//             </select>
//           </div>

//           {/* Scrollable container for menu items or categories */}
//           <div
//             style={{
//               maxHeight: '60vh',
//               overflowY: 'auto',
//               scrollbarWidth: 'none',
//               msOverflowStyle: 'none',
//             }}
//             className="scroll-container"
//           >
//             {selectedCategory ? (
//               <CategoryCard
//                 category={selectedCategory}
//                 setSelectedCategory={setSelectedCategory}
//                 sortedItems={sortedItems}
//                 menuItems={menuItems}
//               />
//             ) : (
//               <div className="grid grid-cols-3 gap-4">
//                 {searchQuery ? (
//                   sortedItems(filteredItems).map((item) => (
//                     <div key={item.id} className="p-4 bg-white rounded-xl shadow-lg">
//                       <img src={item.img} alt={item.name} className="h-32 w-full object-cover rounded-t-lg" />
//                       <h3 className="text-lg font-bold mt-2">{item.name}</h3>
//                       <p className="text-gray-700">Price: ${item.price.toFixed(2)}</p>
//                       <p className="text-gray-700">Rating: {item.rating}</p>
//                     </div>
//                   ))
//                 ) : (
//                   categories.map((category) => (
//                     <button
//                       key={category}
//                       onClick={() => handleCategorySelect(category)}
//                       className="p-4 bg-white rounded-xl shadow-lg hover:bg-gray-200"
//                     >
//                       <h2 className="text-center text-lg font-bold">{category}</h2>
//                     </button>
//                   ))
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MenuPage;
