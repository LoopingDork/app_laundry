import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './admin/Login';
import Dashboard from './admin/Dashboard';
import Pengguna from './all_data/Pengguna';
import Outlet from './all_data/Outlet';
import Customer from './all_data/Customer';
import Transaksi from './all_data/Transaksi';
import Paket from './all_data/Paket';
import Add_outlet from './add/Add_outlet'
function App() {
  return (
    <div className='bg-indigo-500 h-screen'>
      <Router>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/user' element={<Pengguna />}/>
          <Route path='/outlet' element={<Outlet />}/>
          <Route path='/customer' element={<Customer />}/>
          <Route path='/entriTransaksi' element={<Transaksi />}/>
          <Route path='/paket' element={<Paket />}/>
          <Route path='/add_outlet' element={<Add_outlet />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
