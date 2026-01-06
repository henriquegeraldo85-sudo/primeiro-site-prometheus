// Importações Firebase (modo web moderno)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔑 Configuração do seu projeto
const firebaseConfig = {
  apiKey: "AIzaSyDcJK-6oIT40E9t2PmRfSQfhT2FfShJkTM",
  authDomain: "prometheus-20bdd.firebaseapp.com",
  projectId: "prometheus-20bdd",
  storageBucket: "prometheus-20bdd.appspot.com",
  messagingSenderId: "G-F2JZL524MP",
  appId: "1:182004546634:web:e5ae17737d473c605a3ab3"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta serviços
export const auth = getAuth(app);
export const db = getFirestore(app);
