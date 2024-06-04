import React from 'react';
import './LoadingCalendar.css'; // Asegúrate de que el nombre del archivo CSS coincida

const LoadingSpinner = () => {
  return (
    <div className="overlay">
      <div className="cssload-container">
        <ul className="cssload-flex-container">
          <li>
            <span className="cssload-loading cssload-one"></span>
            <span className="cssload-loading cssload-two"></span>
            <span className="cssload-loading-center"></span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LoadingSpinner;
