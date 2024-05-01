import { useState } from 'react';
import './App.css';

function App() {
  const [thumb, setThumb] = useState(false);
  const [heart, setHeart] = useState(false);
  const [upvote, setUpVote] = useState(false);
  return (
    <div className="emojis">
      <p
        className={` thumb emoji ${
          thumb ? ' bi bi-hand-thumbs-up-fill' : ' bi bi-hand-thumbs-up'
        } `}
        onClick={() => setThumb(!thumb)}
      ></p>
      <p
        className={` heart emoji ${
          heart ? ' bi bi-heart-fill' : ' bi bi-heart'
        } `}
        onClick={() => setHeart(!heart)}
      ></p>
      <p
        className={` upvote emoji ${
          upvote ? 'bi bi-file-arrow-up-fill' : 'bi bi-file-arrow-up'
        } `}
        onClick={() => setUpVote(!upvote)}
      ></p>
    </div>
  );
}

export default App;
