import React from 'react'


const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// const pizzaData = [];

function App() {
  return (
    <div className='container'>
      <Header/>
      <Menu/>
      <Footer/>
    </div>
  )
}

function Header() {
  // const styles = {color: "red", fontSize: "48"};
  const styles = {};
  return (
    <header className='header'>
      <h1 style={styles}>React Pizza Co.</h1>
    </header>
  )
}

function Menu () {
  
  const pizzas = pizzaData;

  const numPizzas = pizzas.length;

  return (
    <main className='menu'>
      <h2>Our Menu</h2>

      {
        numPizzas > 0 ?
        // React fragment <></> 
        
        (
        <>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam sit itaque sequi dolor.</p>
        
          <ul className='pizaas'>

            {
              pizzas.map((pizza) => {
                // pizzaObj = {pizza} Passing pizza details in the form of object
                return <Pizza pizzaObj = {pizza} key={pizza.name}/>
              })
            }
          </ul>
        </> 
        )
         :
        (
          <p>We are still working in our menu, please comeback latter</p>
        )
        
      }
      
     
    </main>
  )
}

function Pizza ({pizzaObj}) {
  // console.log(pizzaObj);

  return (
    // adding class dynamically 
    <li className= {`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`} >
      <img src={pizzaObj.photoName} alt= {"Pizza Image"}/>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>

    </li>
  )
}

function Footer () {

  const hour = new Date().getHours();
  const openHour = 11;
  const closedHour = 22;
  const isOPen = hour >= openHour && hour <= closedHour; // this will return boolean value

  // console.log(isOPen) // true or false
  return (
    <footer className='footer'>
      {
        isOPen ? (
          // passing open and closed hour as props in order component
          <Order openHour={openHour} closedHour={closedHour}/>
        ) : (
          <p>We are closed now. We are happy to Welcome you between {openHour}:00 to {closedHour}:00.</p>
        )
      }
    </footer>
  )
}

function Order ( {openHour , closedHour}) {
  return (
    <div className='order'>
      <p>
        We are open now. We are happy to Welcome you between {openHour}:00 to {closedHour}:00. Come visit us or order online. 
      </p>
      <button className='btn'>Order</button>
    </div>
  )
}
export default App
