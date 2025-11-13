import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const ContactData = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const querySnapshot = await getDocs(collection(db, "ContactMessages"));
      setMessages(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchMessages();
  }, []);

  return (
    <div className="data-page">
      <h2>📩 Contact Form Submissions</h2>
      {messages.length === 0 ? (
        <p>No messages found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((m) => (
              <tr key={m.id}>
                <td>{m.name}</td>
                <td>{m.phone}</td>
                <td>{m.email}</td>
                <td>{m.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ContactData;
