import React, { useState } from "react";

interface AsyncImageProps {
  src: string;
  alt: string;
  fallback?: string;
  className?: string;
}

export const AsyncImage: React.FC<AsyncImageProps> = ({ src, alt, fallback, className }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={className}>
      {!loaded && !error && fallback && (
        <img src={fallback} alt="Carregando..." className="animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        style={{ display: loaded && !error ? "block" : "none" }}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
      {error && <span className="text-red-500">Erro ao carregar imagem</span>}
    </div>
  );
};

export default AsyncImage;
