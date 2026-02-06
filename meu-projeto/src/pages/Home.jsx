import React, { useState, useEffect } from "react";

export default function Home() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    async function carregar() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setDados(data);
    }
    carregar();
  }, []);

  async function deletarProduto(id) {
    await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    });

    // remove do estado local
    setDados((prev) => prev.filter((produto) => produto.id !== id));
  }

  return (
    <div>
      {dados.map((produto) => (
        <div key={produto.id}>
          <img src={produto.image} alt={produto.title} width="100" />
          <button onClick={() => deletarProduto(produto.id)}>Deletar</button>
        </div>
      ))}
    </div>
  );
}
