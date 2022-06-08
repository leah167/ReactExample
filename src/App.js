import React, { useState } from 'react';
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyInfoComponent></MyInfoComponent>
        {/* <MyInfoComponent /> */}
        {/* <p>I am {1 * 30} years old</p> */}
      </header>
    </div>
  );
}
/*
1. Pascal case for function name
2. Return statement with () and enclosing HTML element, usually <div></div>
3. Components can be included in other components like html elements
*/

function MyInfoComponent() {
  const [myName, setMyName] = useState("");
  const [myFavoriteColor, setMyFavoriteColor] = useState("")
  const [myAge, setMyAge] = useState(0)
  // const myFavoriteMovies = ["Encanto", " Moana", " Frozen"]
  const[myFavoriteMovies, setMyFavoriteMovies] = useState([])
  return (
    <div>
      <p>My Name is: {myName}</p>
      <input type="text" onChange={(event)=>{
        const value = event.target.value;
        setMyName(value)
      }}></input>
      <p>My Age is: {myAge}</p>
      <input type="text" onChange={(event)=>{
        const value = event.target.value;
        setMyAge(value)
      }}></input>
      <p> My favorite color is: </p>
      <p style={{backgroundColor: myFavoriteColor}}>{myFavoriteColor}</p>
      <input type="text" onChange={(event)=>{
        const value = event.target.value;
        setMyFavoriteColor(value)
      }}></input>
      

     <p>My favorite movies are: <ol>{myFavoriteMovies.map(movie => <li>{movie}</li>)}</ol>
     </p>
    
      <label>
        First Favorite: &nbsp;
        <input
          type="text"
          onChange={(event) => {
            const newMovie = event.target.value;
            setMyFavoriteMovies([newMovie, myFavoriteMovies[1], myFavoriteMovies[2]]);
          }}
        ></input>
      </label>{" "}

      <label>
        Second Favorite: &nbsp;
        <input
          type="text"
          onChange={(event) => {
            const newMovie = event.target.value;
            setMyFavoriteMovies([myFavoriteMovies[0], newMovie, myFavoriteMovies[2]]);
          }}
        ></input>
      </label>{" "}

      <label>
        Third Favorite: &nbsp;
        <input
          type="text"
          onChange={(event) => {
            const newMovie = event.target.value;
            setMyFavoriteMovies([myFavoriteMovies[0], myFavoriteMovies[1], newMovie]);
          }}
        ></input>
      </label>{" "}
      
      {/* <ol>{myFavoriteMovies.map(movie => <li>{movie}</li>)}</ol> */}
    </div>
  );
}

// const MyInfoComponent = () => {

//   const [myAge, setMyAge] = useState(0)
//   const [myFavoriteColor, setMyFavoriteColor] = useState("red") 

//   const myName = "Ginny";
//   const favoriteMovies = ["Avengers 1", "Avengers 3", "Avengers 4"];
//   return (
//     <div>
//       <p>{myName}</p>
//       <p style={{backgroundColor: myFavoriteColor}}>{myFavoriteColor}</p>
//       <p>
//         {favoriteMovies}
//       </p>
//       <p>I am {myAge} years old</p>
//       <button onClick={()=>{
//         setMyAge(myAge + 1)
//         console.log(myAge)
//       }}>
//         +
//       </button>
//       <input type="text" onChange={(event)=>{
//         const value = event.target.value;
//         setMyFavoriteColor(value)
//       }}></input>
//     </div>
//   );
// }

export default App;
