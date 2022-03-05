const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");

const auth = getAuth();

module.exports = {
    signUp: (email, password, done) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                done(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                done({ errorCode, errorMessage });
            });
    }
}