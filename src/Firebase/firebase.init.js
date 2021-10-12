import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig)
}

export default initializeAuthentication;

/*
steps for authentication
--------------------
step-1 (Initialize setup)
1.firebase: create project
2.create web app
3.get config
4.initialize firebase
5.enable auth method
---------------------
step-2 setup component
1.create Login component
2.create Register component
3.create Route for Login and Register
---------------------
step-3 set auth system
1.setup sign in method
2.setup sign out method
3.user state
4.special observer
5.return necessary methods and states from useFirebase
------------------------
step-4 create auth context hook (useAuth)
1.create a auth context
2.Create context provider
3.set context provider context value
4.use Auth Provider
5.create useAuth Hook
-------------------------
step-5 create private route
1.create private Route
2.set private route
*/