import * as firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBUCjh1D8lMsYllVn3Utd55H-PI751uyKE',
  authDomain: 'where-is-my-build.firebaseapp.com',
  projectId: 'where-is-my-build',
  storageBucket: 'where-is-my-build.appspot.com',
  messagingSenderId: '663108690495',
  appId: '1:663108690495:web:d212a248842eaf56c88e8a'
})

const db = getFirestore(firebaseApp)

// import { db } from './firebase'
// import { } from 'firebase/firestore'

// const path = 'ElShorouk/100m'
// getDoc(doc(db, path)).then((res) => { console.log(res.data()) })

// Export the databse for components to use
export { db }
