import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const OrderData = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const querySnapshot = await getDocs(collection(db, "Booking"));
      setOrders(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchOrders();
  }, []);

  return (
    <div className="data-page">
      <h2>📚 Book Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id}>
                <td>{o.name}</td>
                <td>{o.email}</td>
                <td>{o.phone}</td>
                <td>{o.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrderData;
