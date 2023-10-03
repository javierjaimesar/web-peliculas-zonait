import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Index from './assets/pages/Index'
import ViewMovie from './assets/pages/ViewMovie';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} ></Route>
        <Route path='/View/:movieTitle' element={<ViewMovie />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App