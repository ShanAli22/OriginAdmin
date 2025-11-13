import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const ReservationData = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      const querySnapshot = await getDocs(collection(db, "Discount"));
      setReservations(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchReservations();
  }, []);

  return (
    <div className="data-page">
      <h2>🛎️ Table Reservations</h2>
      {reservations.length === 0 ? (
        <p>No reservations found</p>
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
            {reservations.map((r) => (
              <tr key={r.id}>
                <td>{r.name}</td>
                <td>{r.email}</td>
                <td>{r.phone}</td>
                <td>{r.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ReservationData;
