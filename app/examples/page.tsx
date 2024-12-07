"use client";

import React from "react";
import useFetch from "../hooks/useFetch";

interface ApiResponse {
  id: number;
  fecha: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  contenido_adjunto: string;
}

const ExampleComponent: React.FC = () => {
  const { data, loading, error } = useFetch<ApiResponse[]>(
    "https://anuncios.vercel.app"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>API Data</h1>
      <ul>
        {data?.map((anuncio) => (
          <div key={anuncio.id}>
            <img src={anuncio.imagen} alt="" />
            <p>
              {anuncio.fecha} | {anuncio.titulo}
            </p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ExampleComponent;
