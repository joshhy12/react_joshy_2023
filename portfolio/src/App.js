import React, { useState } from 'react';
import Header from './components/Header';
import CardEditor from './components/CardEditor';
import CardPreview from './components/CardPreview';
import CardSettings from './components/CardSettings';

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
        {/* Card Editor Section */}
        <section id="cardEditor">
          <h2>Card Editor</h2>
          <CardEditor
            cardTitle={cardTitle}
            cardMessage={cardMessage}
            onTitleChange={handleTitleChange}
            onMessageChange={handleMessageChange}
          />
        </section>

        {/* Card Preview Section */}
        <section id="cardPreview">
          <h2>Card Preview</h2>
          <CardPreview cardTitle={cardTitle} cardMessage={cardMessage} />
        </section>

        {/* Card Settings Section */}
        <section id="cardSettings">
          <h2>Card Settings</h2>
          <CardSettings />
        </section>
      </div>
    </div>
  );
};

export default App;
