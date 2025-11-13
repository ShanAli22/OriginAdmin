import React from "react";

const Sidebar = ({ setActivePage, activePage }) => {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li
          className={activePage === "contact" ? "active" : ""}
          onClick={() => setActivePage("contact")}
        >
          Contact Form
        </li>
        <li
          className={activePage === "orders" ? "active" : ""}
          onClick={() => setActivePage("orders")}
        >
          Booking
        </li>
        <li
          className={activePage === "reservations" ? "active" : ""}
          onClick={() => setActivePage("reservations")}
        >
          Discount Offers
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
