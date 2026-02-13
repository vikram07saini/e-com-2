"use client";

import { db } from "@/app/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddProduct() {

  const addProduct = async () => {
    try {
      await addDoc(collection(db, "products"), {
        name: "Nike Air",
        price: 4999,
        image: "/products/nike.png",
        createdAt: new Date()
      });

      alert("Product added!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <button onClick={addProduct}>
        Add Product
      </button>
    </div>
  );
}