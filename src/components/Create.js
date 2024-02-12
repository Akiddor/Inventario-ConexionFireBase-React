import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../FirebaseConfig/Firebase";

const Create = () => {
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);
  const navigate = useNavigate();

  const productosCollection = collection(db, "products");

  const store = async (e) => {
    e.preventDefault();
    await addDoc(productosCollection, {
      description: description,
      stock: stock, // Asegúrate de que coincida con el nombre del campo en tu base de datos
    });
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Crear producto</h1>
          <form onSubmit={store}>
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
            <button type="submit" className="btn btn-light">Guardar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
