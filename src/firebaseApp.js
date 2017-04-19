import firebase from 'firebase'
import config from './firebaseConfig'

export const firebaseApp = firebase.initializeApp(config)
export const smellsRef = firebaseApp.database().ref().child('smells')
