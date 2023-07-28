import React, { useState } from 'react';
import Header from './components/Header';
import CardEditor from './components/CardEditor';
import CardPreview from './components/CardPreview';

const App = () => {
  const [cardTitle, setCardTitle] = useState('');
  const [cardMessage, setCardMessage] = useState('');

  const handleTitleChange = (event) => {
    setCardTitle(event.target.value);
  };

  const handleMessageChange = (event) => {
    setCardMessage(event.target.value);
  };

  return (
    <div className="app">
      <Header />
      <div className="container">
        <CardEditor
          cardTitle={cardTitle}
          cardMessage={cardMessage}
          onTitleChange={handleTitleChange}
          onMessageChange={handleMessageChange}
        />
        <CardPreview cardTitle={cardTitle} cardMessage={cardMessage} />
      </div>
      {/* Add CardSettings component here if desired */}
    </div>
  );
};

export default App;
