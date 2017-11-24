//import firebase from 'firebase'

const config = {
	apiKey: "AIzaSyBvmf6ItFtVI9_SQaPRvKxYG_jy8mIcIO0",
	authDomain: "mercado-dev-5f054.firebaseapp.com",
	databaseURL: "https://mercado-dev-5f054.firebaseio.com",
	projectId: "mercado-dev-5f054",
	storageBucket: "gs://mercado-dev-5f054.appspot.com",
	messagingSenderId: "962125323977"
}

const Rebase = require('re-base')
const firebase = require('firebase/app')
require('firebase/database')
require('firebase/storage')


const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export const storage = app.storage()

export default base