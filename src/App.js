// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Cart from './components/Cart';
// import Checkout from './pages/Checkout';
// // import Login from './pages/Login';
// import { CartProvider } from './contexts/CartContext';
// import { AuthProvider } from './contexts/AuthContext';

// function App() {
//   return (
//     <AuthProvider>
//       <CartProvider>
//         <Router>
//           <div className="bg-gray-100 text-gray-900">
//             <Navbar />
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/cart" element={<Cart />} />
//               <Route path="/checkout" element={<Checkout />} />
//               {/* <Route path="/login" element={<Login />} /> */}
//             </Routes>
//             <Footer />
//           </div>
//         </Router>
//       </CartProvider>
//     </AuthProvider>
//   );
// }

// export default App;




// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
// // import Navbar from './components/Navbar';
// // import Footer from './components/Footer';
// // import Home from './pages/Home';
// // import Cart from './components/Cart';
// // import Checkout from './pages/Checkout';
// // import SignInPage from './pages/SignIn';
// // import SignUpPage from './pages/SignUp';
// // import Confirmation from './pages/Confirmation'; // Import the Confirmation page
// // import { CartProvider } from './contexts/CartContext';
// // import { AuthProvider } from './contexts/AuthContext';

// // const clerkFrontendApi = process.env.REACT_APP_CLERK_FRONTEND_API; // Access the environment variable here

// // console.log('Clerk Frontend API Key:', clerkFrontendApi);

// // function App() {
// //   return (
// //     <ClerkProvider frontendApi={clerkFrontendApi}>
// //       <AuthProvider>
// //         <CartProvider>
// //           <Router>
// //             <div className="bg-gray-100 text-gray-900 min-h-screen">
// //               <Navbar />
// //               <Routes>
// //                 <Route path="/" element={<Home />} />
// //                 <Route path="/cart" element={<Cart />} />
// //                 <Route path="/checkout" element={<SignedIn><Checkout /></SignedIn>} />
// //                 <Route path="/signin" element={<SignInPage />} />
// //                 <Route path="/signup" element={<SignUpPage />} />
// //                 <Route path="/confirmation" element={<Confirmation />} /> {/* Add route for Confirmation page */}
// //                 <Route
// //                   path="*"
// //                   element={
// //                     <SignedOut>
// //                       <RedirectToSignIn />
// //                     </SignedOut>
// //                   }
// //                 />
// //               </Routes>
// //               <Footer />
// //             </div>
// //           </Router>
// //         </CartProvider>
// //       </AuthProvider>
// //     </ClerkProvider>
// //   );
// // }

// // export default App;


// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './components/Cart';
import Checkout from './pages/Checkout';
import ThankYou from './pages/ThankYou'; // Import the ThankYou component
import TrackOrder from './pages/TrackOrder'; 
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';
import Confirmation from './pages/Confirmation'; // Import the Confirmation page
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/track-order" element={<TrackOrder />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/confirmation" element={<Confirmation />} /> {/* Add route for Confirmation page */}
            <Route
              path="*"
              element={<SignInPage />} // Redirect to SignInPage or another fallback component
            />
          </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
