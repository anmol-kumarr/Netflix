import './App.css';
import { RouterProvider } from 'react-router-dom';
import appRouter from './routes/route';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase/firebase';
import { getAnalytics } from "firebase/analytics";
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from './utils/userSlice';
import { getDatabase, ref, push } from "firebase/database";

function App() {
  const liked = useSelector(store => store.favourite?.liked)
  const dispatch = useDispatch()
  // const app = initializeApp(firebaseConfig);
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  const analytics = getAnalytics(app);
  const auth = getAuth()
  const database = getDatabase(app);
  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
        localStorage.setItem('user', uid)
      }
      else {
        dispatch(removeUser())
        localStorage.removeItem('user')

      }
    })

  }, [])
  useEffect(() => {
    if (liked.length > 0) {
      const userId = localStorage.getItem('user')
      const dataRef = ref(database, `users/${userId}/liked`);
      push(dataRef, liked)
        .then(() => {
          console.log("liked item added successfully!");
        })
        .catch((error) => {
          console.error("Error adding liked item:", error);
        });
    } 
  }, [liked])



  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  );
}

export default App;
