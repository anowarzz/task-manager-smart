import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/Routes';

function App() {
  return (
    <div className='bg-gray-700'>
  <RouterProvider router={router}>

  </RouterProvider>
    </div>
  );
}

export default App;
