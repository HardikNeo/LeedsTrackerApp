import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js"
const firebaseConfig = {
  databaseURL: "https://leeds-tracker-app-3adb9-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)