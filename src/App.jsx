import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { DataProvider } from './assets/context/DataContext';

import Index from './assets/pages/Index'
import ViewMovie from './assets/pages/ViewMovie';
import Search from './assets/pages/Search';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} ></Route>
          <Route path='/view/:movieId' element={<ViewMovie />} ></Route>
          <Route path='/search' element={<Search />} ></Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App