import React from 'react';

const CardPreview = ({ cardTitle, cardMessage }) => {
  return (
    <div>
      <h2>Card Preview</h2>
      <div>
        <h3>{cardTitle}</h3>
        <p>{cardMessage}</p>
      </div>
      {/* Add other card preview content here */}
    </div>
  );
};

export default CardPreview;
