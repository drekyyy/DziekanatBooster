const firebase = require('firebase')

class Auth {
    constructor(data) {
        this.auth = firebase.auth()
        this.email = data.email
        this.password = data.password
    }

    async register() {
        this.auth.createUserWithEmailAndPassword(this.email, this.password).catch((error) => {
            console.log(error.code)
            console.log(error.message)
        })
    }

    async signIn() {
        this.auth.signInWithEmailAndPassword(this.email, this.password).catch((error) => {
            console.log(error.code)
            console.log(error.message)
        })
    }

    async signOut () {
        this.auth.signOut().then(() => {
            console.log('Succesfully sign out')
        }).catch((error) => {
            console.log(`Some problems has occured while signing out ${error}`)
        });
    }
}

module.exports = Auth