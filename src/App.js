// import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom';
import './App.css';


function Counter() {
  const [count, setCount] = useState(0);
  // const increaseHandler = () => setCount(count + 1);

  return (
    <div>
      <h1>Count : {count} </h1>
      <button onClick={() => {
        if (count > 0) setCount(count - 1)
      }}>Decrease count</button>
      <button onClick={() => setCount(count + 1)}>Increase count</button>

    </div>
  )
}


function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);


  return (
    <div>
      <h1>Dynamic User : {users.length} </h1>
      <ol>
        {
          users.map((user) => <li>{user.name}</li>)
        }
      </ol>
    </div>
  )
}


function Products(props) {

  const style = {
    margin: "10px 10px",
    border: "1px solid red",
    borderRadius: "15px",
    width: "800px",
    float: "left",
    textAlign: "center",
    padding: "10px"
  }

  const { name, price } = props.item; /// destructuring....

  return (
    <div style={style}>
      <h1>Product Name : {name}</h1>
      <p>Price : {price} </p>
    </div>
  );
}



function App() {

  const products = [
    { name: "Photoshop", price: "$ 50" },
    { name: "Illustrator", price: "$ 60.99" },
    { name: "Printer", price: "$ 7.99" },
    { name: "Scanner", price: "$ 11.99" },
    { name: "PDF Reader", price: "$ 3.99" },
  ]
  return (
    <div style={{ textAlign: "center" }}>

      <Counter></Counter>

      <User></User>

      {/* <Products name={products[0].name} price={products[0].price} ></Products>
      <Products name={products[1].name} price={products[1].price} ></Products>
      <Products name={products[2].name} price={products[2].price} ></Products>
      <Products name={products[3].name} price={products[3].price} ></Products> */}

      {/* <Products item={products[0]}></Products>
      <Products item={products[1]}></Products>
      <Products item={products[2]}></Products>
      <Products item={products[3]}></Products> */}

      {
        products.map(p => <Products item={p}></Products>)
      }
    </div>
  );
}
export default App;
