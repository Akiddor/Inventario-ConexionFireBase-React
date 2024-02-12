import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../FirebaseConfig/Firebase";

const Edit = () => {
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();

  const getProductById = async (id) => {
    try {
      const productSnapshot = await getDoc(doc(db, "products", id));
      if (productSnapshot.exists()) {
        const productData = productSnapshot.data();
        setDescription(productData.description);
        setStock(productData.stock);
      } else {
        console.log("No se encontró el producto");
      }
    } catch (error) {
      console.error("Error al obtener el producto:", error);
    }
  };

  useEffect(() => {
    getProductById(id);
  }, [id]);

  const updateProduct = async (e) => {
    e.preventDefault();
    const productRef = doc(db, "products", id);
    const updatedData = { description: description, stock: stock };
    try {
      await updateDoc(productRef, updatedData);
      navigate("/");
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Editar producto</h1>
          <form onSubmit={updateProduct}>
            <div className="mb-3">
              <label className="form-label">Descripción</label>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Stock</label>
              <input
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                type="number"
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-light">
              Guardar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
