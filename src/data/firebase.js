// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import products from "./products";
import {
  collection,
  doc,
  query,
  where,
  getDocs,
  getDoc,
  getFirestore,
  addDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANLBEUY8DNeAU7BxHR3rAIs7iYJWIN6Xs",
  authDomain: "react-coderhouse-9d2ca.firebaseapp.com",
  projectId: "react-coderhouse-9d2ca",
  storageBucket: "react-coderhouse-9d2ca.firebasestorage.app",
  messagingSenderId: "170851079124",
  appId: "1:170851079124:web:bbd21486f834cd0bbe3c41",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getProducts() {
  // referencia a la coleccion
  const productsRef = collection(db, "products");
  const productsSnapshot = await getDocs(productsRef);

  //  const document0 = productsSnapshot.docs[0];
  //  console.log(document0.data());
  const documents = productsSnapshot.docs;
  const dataDocs = documents.map((item) => {
    return {
      id: item.id,
      ...item.data(),
    };
  });
  return dataDocs;
}

export async function getProductById(idParam) {
  const docRef = doc(db, "products", idParam);
  const docSnapshot = await getDoc(docRef);
  const docData = docSnapshot.data();
  docData.id = docSnapshot.id;

  return docData;
}

export async function getProductsByCateg(categParam) {
  const productsRef = collection(db, "products");
  const queryCategory = query(productsRef, where("category", "==", categParam));
  const productsSnapshot = await getDocs(queryCategory);
  const documents = productsSnapshot.docs;
  const dataDocs = documents.map((item) => {
    return { id: item.id, ...item.data() };
  });
  return dataDocs;
}

//orden de compras en firebase
export async function createOrder(orderData) {
  const ordersRef = collection(db, "orders");
  const newDoc = await addDoc(ordersRef, orderData);
  return newDoc;
}

export async function exportProductsData() {
  const productsRef = collection(db, "products");
  for (let item of products) {
    delete item.id;
    const docCreated = await addDoc(productsRef, item);
    console.log("creado el doc", docCreated.id);
  }
}
export default app;
