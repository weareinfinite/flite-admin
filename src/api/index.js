import firebase from './firebaseapp'

/**
 * 
 * Login using email and password
 * @param {*} email 
 * @param {*} password 
 */
export function login(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
}

export function logout() {

    return firebase.auth().signOut()

}

export function onAuthStateChange() {

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {

            console.log('User Signined!!', user)
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
        } else {
          // User is signed out.
          // ...
        }
      });

}


