import './App.css';
import Post from './Post'
import Comment from './Comment';
function App() {
  const myName = 'Baramee'
  return (
    <div className="App">
      <Post/>
      <p>ชื่อผมชื่อว่า{ myName }</p>
      <Comment/>
    </div>
  );
}

export default App;
