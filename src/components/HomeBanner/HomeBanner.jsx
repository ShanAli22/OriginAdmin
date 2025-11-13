import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const HomeBanner = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const querySnapshot = await getDocs(collection(db, "Discount"));
      setMessages(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchMessages();
  }, []);

  return (
    <div className="data-page">
      <h2>🏷️ Home Banner Form Submissions</h2>
      {messages.length === 0 ? (
        <p>No submissions found</p>
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
            {messages.map((m) => (
              <tr key={m.id}>
                <td>{m.name}</td>
                <td>{m.email}</td>
                <td>{m.phone}</td>
                <td>{m.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default HomeBanner;
