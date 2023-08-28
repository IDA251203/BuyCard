import './App.css';
import Cart from './components/Cart';
import Layout from './components/Layout';
import Shop from './components/productShop';
import NoPage from './components/Nopage';

import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Shop/>} />
                        <Route path="basket" element={<Cart/>} />
                        <Route path="*" element={<NoPage/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
      {/* <Cart/>  */}
    </div>
  );
}

export default App;
