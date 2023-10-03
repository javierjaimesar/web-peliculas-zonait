import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { DataProvider } from './assets/context/DataContext';

import Index from './assets/pages/Index'
import ViewMovie from './assets/pages/ViewMovie';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} ></Route>
          <Route path='/View/:movieId' element={<ViewMovie />} ></Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App