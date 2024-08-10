// // import React, { useContext } from 'react';
// // import { Link } from 'react-router-dom';
// // import { CartContext } from '../contexts/CartContext';
// // import { useAuth } from '../contexts/AuthContext';

// // const Navbar = () => {
// //   const { cartItems } = useContext(CartContext);
// //   const { isAuthenticated, logout } = useAuth();
  
// //   // Calculate total number of items in the cart
// //   const cartCount = cartItems.length;

// //   const handleLogout = () => {
// //     logout();
// //     // Add any additional logic for logout, e.g., redirect to home
// //   };

// //   return (
// //     <nav className="bg-white shadow-md">
// //       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
// //         <Link to="/" className="text-xl font-bold text-blue-600">
// //           <span className="site-title">𝓡𝕒𝖋𝖎𝒌𝖎 𝕱𝖔𝖔𝖙𝖜𝖊𝖆𝖗</span>
// //         </Link>
// //         <div className="flex items-center">
// //           <Link to="/" className="text-gray-700 mx-2 hover:text-blue-600">Home</Link>
// //           {/* <Link to="/shop" className="text-gray-700 mx-2 hover:text-blue-600">Shop</Link> */}
// //           {/* <Link to="/about" className="text-gray-700 mx-2 hover:text-blue-600">About</Link> */}
// //           {/* <Link to="/services" className="text-gray-700 mx-2 hover:text-blue-600">Services</Link> */}
// //           {/* <Link to="/contact" className="text-gray-700 mx-2 hover:text-blue-600">Contact</Link> */}
// //           {isAuthenticated ? (
// //             <button onClick={handleLogout} className="text-gray-700 mx-2 hover:text-blue-600">Logout</button>
// //           ) : (
// //             <Link to="/login" className="text-gray-700 mx-2 hover:text-blue-600">Login</Link>
// //           )}
          
// //           <Link to="/cart" className="text-gray-700 mx-2 flex items-center relative">
// //             <img src="/images/logo 6.jpeg" alt="Shopping Cart" className="w-8 h-8 inline-block" />
            
// //             {cartCount > 0 && (
// //               <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
// //                 {cartCount}
// //               </span>
// //             )}
// //           </Link>
          
          
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;


// // src/components/Navbar.js
// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { CartContext } from '../contexts/CartContext';
// import { useAuth } from '../contexts/AuthContext';

// const Navbar = () => {
//   const { cartItems } = useContext(CartContext);
//   const { isAuthenticated, logout } = useAuth();
  
//   // Calculate total number of items in the cart
//   const cartCount = cartItems.length;

//   const handleLogout = () => {
//     logout();
//     // Add any additional logic for logout, e.g., redirect to home
//   };

//   return (
//     <nav className="bg-white shadow-md">
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//         <Link to="/" className="text-xl font-bold text-blue-600">
//           <span className="site-title">𝓡𝕒𝖋𝖎𝒌𝖎 𝕱𝖔𝖔𝖙𝖜𝖊𝖆𝖗</span>
//         </Link>
//         <div className="flex items-center">
//           <Link to="/" className="text-gray-700 mx-2 hover:text-blue-600">Home</Link>
//           {/* Add other links here if needed */}

//           {isAuthenticated ? (
//             <>
//               <button onClick={handleLogout} className="text-gray-700 mx-2 hover:text-blue-600">Logout</button>
//               <Link to="/profile" className="text-gray-700 mx-2 hover:text-blue-600">Profile</Link>
//             </>
//           ) : (
//             <>
//               <Link to="/signin" className="text-gray-700 mx-2 hover:text-blue-600">Sign In</Link>
//               <Link to="/signup" className="text-gray-700 mx-2 hover:text-blue-600">Sign Up</Link>
//             </>
//           )}
          
//           <Link to="/cart" className="text-gray-700 mx-2 flex items-center relative">
//             <img src="/images/logo 6.jpeg" alt="Shopping Cart" className="w-8 h-8 inline-block" />
            
//             {cartCount > 0 && (
//               <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                 {cartCount}
//               </span>
//             )}
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// src/components/Navbar.js
// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { CartContext } from '../contexts/CartContext';
// import { useAuth } from '@clerk/clerk-react';

// const Navbar = () => {
//   const { cartItems } = useContext(CartContext);
//   const { user, signOut } = useAuth();

//   // Calculate total number of items in the cart
//   const cartCount = cartItems.length;

//   return (
//     <nav className="bg-white shadow-md">
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//         <Link to="/" className="text-xl font-bold text-blue-600">
//           <span className="site-title">𝓡𝕒𝖋𝖎𝒌𝖎 𝕱𝖔𝖔𝖙𝖜𝖊𝖆𝖗</span>
//         </Link>
//         <div className="flex items-center">
//           <Link to="/" className="text-gray-700 mx-2 hover:text-blue-600">Home</Link>
          
//           {user ? (
//             <>
//               <button onClick={() => signOut()} className="text-gray-700 mx-2 hover:text-blue-600">Logout</button>
//               <Link to="/profile" className="text-gray-700 mx-2 hover:text-blue-600">Profile</Link>
//             </>
//           ) : (
//             <>
//               <Link to="/signin" className="text-gray-700 mx-2 hover:text-blue-600">Sign In</Link>
//               <Link to="/signup" className="text-gray-700 mx-2 hover:text-blue-600">Sign Up</Link>
//             </>
//           )}
          
//           <Link to="/cart" className="text-gray-700 mx-2 flex items-center relative">
//             <img src="/images/logo 6.jpeg" alt="Shopping Cart" className="w-8 h-8 inline-block" />
            
//             {cartCount > 0 && (
//               <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                 {cartCount}
//               </span>
//             )}
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { CartContext } from '../contexts/CartContext';

// const Navbar = () => {
//   const { cartItems } = useContext(CartContext);

//   const cartCount = cartItems.length;

//   return (
//     <nav className="bg-gray-900 text-white shadow-md">
//       <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//         <Link to="/" className="text-2xl font-bold flex items-center">
//           <span className="text-blue-400">𝓡𝕒𝖋𝖎𝒌𝖎</span>
//           <span className="text-yellow-400"> 𝕱𝖔𝖔𝖙𝖜𝖊𝖆𝖗</span>
//         </Link>
//         <div className="flex items-center space-x-6">
//           <Link to="/" className="text-gray-300 hover:text-blue-400 transition duration-300 text-lg">Home</Link>
//           <Link to="/signin" className="text-gray-300 hover:text-blue-400 transition duration-300 text-lg">Sign In</Link>
//           {/* Uncomment if Sign Up link is needed */}
//           {/* <Link to="/signup" className="text-gray-300 hover:text-blue-400 transition duration-300 text-lg">Sign Up</Link> */}
//           <Link to="/cart" className="relative flex items-center text-gray-300 hover:text-blue-400 transition duration-300">
//             <img src="/images/logo 6.jpeg" alt="Shopping Cart" className="w-10 h-10" />
//             {cartCount > 0 && (
//               <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
//                 {cartCount}
//               </span>
//             )}
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  const cartCount = cartItems.length;

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img src="/images/logo.jpg" alt="Site Logo" className="w-10 h-10 object-cover rounded-full shadow-md"/>
          <span className="text-4xl font-bold tracking-tight text-white">Rafiki</span>
          <span className="text-3xl font-medium text-gray-300">F👣twear</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-lg font-semibold hover:text-yellow-400 transition-colors duration-300">Home</Link>
          <Link to="/signin" className="text-lg font-semibold hover:text-yellow-400 transition-colors duration-300">Sign In</Link>
          {/* Uncomment if Sign Up link is needed */}
          {/* <Link to="/signup" className="text-lg font-semibold hover:text-yellow-400 transition-colors duration-300">Sign Up</Link> */}
          <Link to="/cart" className="relative flex items-center">
          <img src="/images/cartdownload.png" alt="Shopping Cart" className="w-10 h-10 object-cover rounded-full shadow-md"/>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-semibold shadow-md">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
        <button className="md:hidden flex items-center">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
