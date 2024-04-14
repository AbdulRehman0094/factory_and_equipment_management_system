import './App.css';
import { Link } from 'react-router-dom';
import RenderMarketplaceItems from './components/Rawdata';

function App() {
  return (
    <>
      <div className='header'>
      <div className='text'>Factory Management System</div>
      <Link to="/logindashboard">
        <button className='margin' >Login to Dashboard</button>
      </Link>

    </div>
      <RenderMarketplaceItems />
    </>
  );
}

export default App;
