import React,{useEffect,useState} from "react";
import axios from "axios";

function Orders(){

  const [data,setData] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(()=>{
    axios.get(`https://gatistocks-backend.onrender.com/trade/orders/${userId}`)
      .then(res=>setData(res.data));
  },[]);

  if(data.length===0) return <p>No Orders</p>;

  return (
    <div>
      <h3>Orders History</h3>

      <table style={{ width:"100%" }}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Stock</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {data.map((o,i)=>(
            <tr key={i}>
              <td style={{ color:o.mode==="BUY"?"green":"red" }}>
                {o.mode}
              </td>
              <td>{o.name}</td>
              <td>{o.qty}</td>
              <td>₹{o.price}</td>
              <td>{new Date(o.date).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;