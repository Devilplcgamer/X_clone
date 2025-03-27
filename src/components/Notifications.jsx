import React, { useState, useEffect } from "react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    
    const randomNotifications = Array.from({ length: 6 }, (_, index) => ({
      id: index,
      image: `https://picsum.photos/50/50?random=${index}`, 
      text: `You have a new notification #${index + 1}`,
    }));

    setNotifications(randomNotifications);
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Notifications</h2>
      <ul className="list-group">
        {notifications.map((notif) => (
          <li key={notif.id} className="list-group-item d-flex align-items-center">
            <img
              src={notif.image}
              alt="Notification"
              className="rounded-circle me-3"
              style={{ width: "50px", height: "50px" }}
            />
            <span>{notif.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
