import React, { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Signup() {

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(false);
  const [data, setData] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async () => {
    try {

      if (isLogin) {
        const res = await axios.post("http://localhost:3002/auth/login", data);

        login(res.data);

        toast.success("Login Successful ✅");
        navigate("/dashboard");

      } else {
        await axios.post("http://localhost:3002/auth/signup", data);

        toast.success("Signup Successful ✅");
        setIsLogin(true);
      }

    } catch {
      toast.error("Error ❌");
    }
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg,#667eea,#764ba2)"
    }}>

      <div style={{
        width: "350px",
        padding: "30px",
        borderRadius: "12px",
        background: "#fff",
        boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
        textAlign: "center"
      }}>

        <h2 style={{ marginBottom: "20px" }}>
          {isLogin ? "Login" : "Signup"}
        </h2>

        {!isLogin && (
          <input
            placeholder="Full Name"
            value={data.name}
            onChange={(e)=>setData({...data,name:e.target.value})}
            style={inputStyle}
          />
        )}

        <input
          placeholder="Email"
          value={data.email}
          onChange={(e)=>setData({...data,email:e.target.value})}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e)=>setData({...data,password:e.target.value})}
          style={inputStyle}
        />

        <button onClick={handleSubmit} style={buttonStyle}>
          {isLogin ? "Login" : "Signup"}
        </button>

        <p
          onClick={()=>setIsLogin(!isLogin)}
          style={{
            marginTop: "15px",
            cursor: "pointer",
            color: "#667eea",
            fontWeight: "500"
          }}
        >
          {isLogin ? "Create Account" : "Already have account?"}
        </p>

      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  outline: "none",
  fontSize: "14px"
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#667eea",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "15px"
};

export default Signup;



// import React, { useState, useContext } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

// function Signup() {

//   const navigate = useNavigate();
//   const { login } = useContext(AuthContext);

//   const [isLogin, setIsLogin] = useState(false);
//   const [data, setData] = useState({ name: "", email: "", password: "" });

//   const handleSubmit = async () => {
//     try {

//       if (isLogin) {
//         const res = await axios.post("http://localhost:3002/auth/login", data);

//         login(res.data); // context use

//         toast.success("Login Successful ✅");

//         navigate("/dashboard");

//       } else {
//         await axios.post("http://localhost:3002/auth/signup", data);

//         toast.success("Signup Successful ✅");
//         setIsLogin(true);
//       }

//     } catch {
//       toast.error("Error ❌");
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "100px" }}>

//       <h2>{isLogin ? "Login" : "Signup"}</h2>

//       {!isLogin && (
//         <>
//           <input
//             placeholder="Name"
//             value={data.name}
//             onChange={(e)=>setData({...data,name:e.target.value})}
//           />
//           <br /><br />
//         </>
//       )}

//       <input
//         placeholder="Email"
//         value={data.email}
//         onChange={(e)=>setData({...data,email:e.target.value})}
//       />
//       <br /><br />

//       <input
//         type="password"
//         placeholder="Password"
//         value={data.password}
//         onChange={(e)=>setData({...data,password:e.target.value})}
//       />
//       <br /><br />

//       <button
//         onClick={handleSubmit}
//         style={{
//           background: "#387ed1",
//           color: "#fff",
//           padding: "10px 20px",
//           border: "none",
//           borderRadius: "5px"
//         }}
//       >
//         {isLogin ? "Login" : "Signup"}
//       </button>

//       <br /><br />

//       <button onClick={()=>setIsLogin(!isLogin)}>
//         {isLogin ? "Create Account" : "Already have account?"}
//       </button>

//     </div>
//   );
// }

// export default Signup;