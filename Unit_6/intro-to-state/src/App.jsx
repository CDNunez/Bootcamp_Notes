import { useState } from 'react';
import './App.css';
import Welcome from './components/welcome/Welcome';
import Counter from './components/counter/Counter';
import AddUser from './components/adduser/AddUser';

const iCount = () => {
  // console.log('runs one time');
  return 0;
}

function App() {

  const [ names, setNames ] = useState([
    'Frodo','Sam','Pippin','Merry'
  ]);
  // const [ count, setCount ] = useState(0)
  const [ count, setCount ] = useState(iCount)

  const displayWelcome = () => {
    return(
      names.map((name,index) => {
        return(
          <Welcome 
            key={index}
            name={name}
            names={names} // obtaining our full array
            setNames={setNames} // passing our function
            count={count}
          />
        )
      })
    )
  }

  return (
    <div className="App">
      <h1>Main App: {count}</h1>
      <Counter count={count} setCount={setCount} />
      <AddUser names={names} setNames={setNames} />
      {displayWelcome()}
    </div>
  );  
}

export default App;
