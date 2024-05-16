import React, { useState, useEffect } from 'react';

const EventSubscriptionComponent = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h2>Event Subscription Component</h2>
      <p>Mouse Position: {`X: ${mousePosition.x}, Y: ${mousePosition.y}`}</p>
    </div>
  );
};

export default EventSubscriptionComponent;
