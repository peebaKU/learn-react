import './App.css';
import Post from './component/Post'
import Comment from './component/Comment';
import Child1 from './component/Child1';
import Child2 from './component/Child2';

function App() {
  const myName = 'Baramee'
  return (
    <div className="App">
      <Post/>
      <p>ชื่อผมชื่อว่า{ myName }</p>
      <Comment/>
      <Child1></Child1>
      <Child2></Child2>
    </div>
  );
}

export default App;
