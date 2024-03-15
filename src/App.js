import './App.css';

function App() {




  //랜더링 하는 부분
  return (
    <div className="App">
      <header>
        <h1><a href = "/"> WEB</a></h1>
      </header>
      <nav>
        <ol>
          <li><a href='/read/1'>html</a></li>
          <li><a href='/read/2'>css</a></li>
          <li><a href='/read/3'>js</a></li>
        </ol>

      </nav>

      <article>
        <h2>Welcome</h2>
        Hello, WEB
      </article>
    
    </div>
  );
}

export default App; //내보낼때는 이걸로. (수출)
