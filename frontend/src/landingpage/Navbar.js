import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {

  const { user } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ background: "#fff" }}>
      <div className="container p-2">

        <Link className="navbar-brand" to="/">
          <img src="media/images/logo.png" style={{ width: "30%" }} alt="Logo" />
        </Link>

        <ul className="navbar-nav ms-auto">

          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/products">Product</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/pricing">Pricing</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/support">Support</Link>
          </li>

          {!user ? (
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Signup</Link>
            </li>
          ) : (
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>
          )}

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;






// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

// function Navbar() {

//   const { user, logout } = useContext(AuthContext);

//   return (
//     <nav
//       className="navbar navbar-expand-lg border-bottom"
//       style={{ backgroundColor: "#FFF" }}
//     >
//       <div className="container p-2">

//         {/* LOGO */}
//         <Link className="navbar-brand" to="/">
//           <img
//             src="media/images/logo.png"
//             style={{ width: "30%" }}
//             alt="Logo"
//           />
//         </Link>

//         <div className="collapse navbar-collapse">
//           <ul className="navbar-nav ms-auto">

//             {/* NORMAL LINKS */}
//             <li className="nav-item">
//               <Link className="nav-link" to="/">Home</Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/about">About</Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/products">Product</Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/pricing">Pricing</Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/support">Support</Link>
//             </li>

//             {/* 🔥 AUTH PART */}

//             {!user ? (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/signup">Signup</Link>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/dashboard">Dashboard</Link>
//                 </li>

//                 <li className="nav-item">
//                   <button
//                     onClick={() => {
//                       logout();
//                       window.location.href = "/";
//                     }}
//                     style={{
//                       border: "none",
//                       background: "none",
//                       color: "#387ed1",
//                       cursor: "pointer",
//                       marginLeft: "10px"
//                     }}
//                   >
//                     Logout
//                   </button>
//                 </li>
//               </>
//             )}

//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;