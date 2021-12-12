import {
  updateProfile,
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GithubAuthProvider,
  signOut,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useState, useEffect } from 'react';
import initializeAuthentication from '../components/Login/Firebase/firebase.init';

initializeAuthentication();
// Providers
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const fbProvider = new FacebookAuthProvider();

const auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  // clear error
  useEffect(() => {
    setTimeout(() => {
      setError('');
    }, 5000);
  }, [error]);
  // registerUser
  const registerUser = (email, password, name, history) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError('');
        const newUser = { email, displayName: name };
        setUser(newUser);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        history.push('/');
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  const loginUser = (email, password, location, history) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/';
        history.replace(destination);
        setError('');
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };
  // google sign in
  function signInWithGoogle() {
    return signInWithPopup(auth, googleProvider);
  }

  // gitHub sign in
  function signInWithGithub() {
    return signInWithPopup(auth, gitHubProvider);
  }

  // facebook sign in
  function signInWithFacebook() {
    return signInWithPopup(auth, fbProvider);
  }

  // Get the currently signed-in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (signedInUser) => {
      if (signedInUser) {
        setUser(signedInUser);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);

  // sign out
  function logOut() {
    signOut(auth)
      .then((res) => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return {
    signInWithFacebook,
    signInWithGithub,
    logOut,
    signInWithGoogle,
    user,
    setUser,
    error,
    loading,
    setError,
    registerUser,
    loginUser,
  };
};

export default useFirebase;
