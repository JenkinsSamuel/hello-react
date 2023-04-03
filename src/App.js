

// import logo from './logo.svg';
import { useState } from 'react';
import { supabase } from './supabaseClient';
import './App.css';



// A React component that queries and displays data from Supabase
function Library() {
  // The useState hook lets us store data in a component across renders
  // setMyBooks is a setter function that updates the state of myBooks
  const [myBooks, setMyBooks] = useState([]);
  // This should look familar from Codepen
  async function getBooks() {
    let { data: books, error } = await supabase
      .from('books')
      .select('*')
    // Update the state
    setMyBooks(books);
  }
  // Execute the function
  getBooks();
  // Below is what displays when you use <Library />
  return (
    <table>
    {
      myBooks.map(b => (
        <tr>
          <td>{b.title}</td>
          <td>{b.author}</td>
          <td>{b.isbn}</td>
        </tr>
      ))
    }
    </table>
  )
}






const movies = [
  { id: 1, title: 'The Dark Knight', director: 'Christopher Nolan', isAvailable: true },
  { id: 2, title: 'The Shawshank Redemption', director: 'Frank Darabont', isAvailable: true },
  { id: 3, title: 'No Country For Old Men', director: 'Joel Coen', isAvailable: true},
  { id: 4, title: 'Star Wars: Episode IX - The Rise of Skywalker', director: 'J.J. Abrams', isAvailable: false},
];
 
const music = {
  title: 'Ants From Up there',
  artist: 'Back Country, New Roads',
  released: '2022',
  image: 'https://upload.wikimedia.org/wikipedia/en/d/d7/Ants_from_Up_There_-_Black_Country%2C_New_Road.jpg',
  width: '264',
  height: '378'

}

function MovieList() {
  const listZines = movies.map(zine =>
    <li
      key={zine.id}
      style={{
        color: zine.isAvailable ? 'green' : 'red'
      }}
     >
      {zine.title}
     </li> 
  );
  return (
    <ul>{listZines}</ul>
  )
}

function Music() {
  return (
    <div>
      <h3>
        {music.title} ({music.released})
      </h3>
      <p>
        {music.artist}
      </p>
      <img className='albumArt' src={music.image}
      alt={music.title + ' Album Art '} style={{width: music.width, height: music.height}}/>
    </div>
  );
}
function DillyButton() {
  const [count, setCount] = useState(0);
  function doMagic() {
    setCount(count + 1); 
  }
  return (
    <>
      <h3>
        You are a true friend of the crown !
      </h3>

      <button onClick={doMagic}>Dilly Dilly {count }</button>
    </>
  );
}



  
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Library />
      < MovieList />
      <Music />
      <DillyButton />
      </header>
    </div>
  );
}





export default App;
 