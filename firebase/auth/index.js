const firebase = require('firebase')

class Auth {
    constructor(data) {
        this.auth = firebase.auth();
        if (data) {
            this.email = data.email;
            this.password = data.password;
        }
    }

    async register() {
        let errors;
        await this.auth.createUserWithEmailAndPassword(this.email, this.password).catch((error) => {
            console.log(error.code);
            console.log(error.message);
            errors = error.message;
        });
        return errors;
    }

    async signIn() {
        let errors;
        await this.auth.signInWithEmailAndPassword(this.email, this.password).catch((error) => {
            console.log(error.code);
            console.log(error.message);
            errors = error.message;
        });
        return errors;
    }
    async isUser() {
        let User;
        await this.auth.onAuthStateChanged(function (user) {
            if (user) {
                User = user;
            }
        });
        return User;
    }

    async signOut() {
        this.auth.signOut().then(() => {
            console.log('Succesfully sign out');
        }).catch((error) => {
            console.log(`Some problems has occured while signing out ${error}`);
        });
    }
}

module.exports = Auth;