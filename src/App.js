import './App.css';
import { BrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import appRouter from './routes/route';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase/firebase';
import { getAnalytics } from "firebase/analytics";
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './utils/userSlice';


function App() {
  const dispatch = useDispatch()
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth()
  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
        localStorage.setItem('user',uid)
      }
      else {
        dispatch(removeUser())
        localStorage.removeItem('user')

      }
    })

  }, [])

  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  );
}

export default App;
