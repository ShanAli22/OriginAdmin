import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ContactData from "./ContactData";
import OrderData from "./OrderData";
import ReservationData from "./ReservationData";
import "./admin.css";

const AdminPanel = () => {
  const [activePage, setActivePage] = useState("contact");

  return (
    <div className="admin-container">
      <Sidebar setActivePage={setActivePage} activePage={activePage} />
      <div className="admin-content">
        {activePage === "contact" && <ContactData />}
        {activePage === "orders" && <OrderData />}
        {activePage === "reservations" && <ReservationData />}
      </div>
    </div>
  );
};

export default AdminPanel;
