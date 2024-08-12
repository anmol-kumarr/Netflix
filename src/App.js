import './App.css';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import appRouter from './routes/route';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase/firebase';
import { getAnalytics } from "firebase/analytics";

function App() {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  );
}

export default App;
