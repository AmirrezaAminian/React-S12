import React , {useState} from 'react';
import './App.css';
import Button from './components/UI/Button/Button';

function App() {
  const [showParagraph , setShowPragraph] = useState(false)

  const toggleParagraphHandler = () => {
      setShowPragraph(prevShowParagraph => !prevShowParagraph)
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new!</p>}
      <Button onClick = {toggleParagraphHandler}>Show Paragraph!</Button>
    </div>
  );
}

export default App;
