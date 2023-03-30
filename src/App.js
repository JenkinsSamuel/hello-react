// import logo from './logo.svg';

import './App.css';

import { SupabaseClient } from '@supabase/supabase-js';
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient';

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
  return (
    <>
      <h3>
        You are a true friend of the crown !
      </h3>

      <button>Dilly Dilly</button>
    </>
  );
}




async function getBooks() {
  

  let { data: books, error } = await SupabaseClient
    .from('books')
    .select('*')
  
  for (let book of books) {
    let bookList = document.getElementById('books');
    bookList.innerHTML += `<li>${book.title} - ${book.author}</li>`;
   }
  }
  
function App() {
  return (
    <div className="App">
      <header className="App-header">
      < MovieList />
      <Music />
      <DillyButton />
      <getBooks />

      </header>
    </div>
  );
}





export default App;
