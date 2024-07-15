import { initializeApp } from 'firebase/app'
const firebaseConfig = {
  apiKey: 'AIzaSyAmwGQlRKEJQC21a3aoHo8BSMu6PcMV3gs',
  authDomain: 'management-app-d13cd.firebaseapp.com',
  databaseURL: 'https://management-app-d13cd-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'management-app-d13cd',
  storageBucket: 'management-app-d13cd.appspot.com',
  messagingSenderId: '412873015568',
  appId: '1:412873015568:web:3e726d5c56826cabdda595'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export { app }
