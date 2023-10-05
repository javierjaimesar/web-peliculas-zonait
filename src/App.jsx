import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { DataProvider } from './assets/context/DataContext';

import Index from './assets/pages/Index'
import ViewMovie from './assets/pages/ViewMovie';
// import Search from './assets/pages/Search';
import SearchMovies from './assets/pages/SearchMovies';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} ></Route>
          <Route path='/view/:movieId' element={<ViewMovie />} ></Route>
          <Route path='/search' element={<SearchMovies />} ></Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App