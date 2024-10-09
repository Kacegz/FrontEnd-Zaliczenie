import styles from "./Gallery.module.css";
import { useState } from "react";
import photo1 from "../assets/photo1.jpeg";

export default function Gallery() {
  const photos = [
    { id: 1, url: photo1, alt: "photo1" },
    {
      id: 2,
      url: "https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_1280.jpg",
      alt: "photo2",
    },
    { id: 3, url: "", alt: "photo3" },
    { id: 4, url: "", alt: "photo4" },
  ];
  return (
    <div className={styles.gallery} data-testid="gallery">
      {photos.map((photo) => (
        <div key={photo.id} className={styles.photo_wrapper}>
          <img src={photo.url} className={styles.photo} alt={photo.alt} />
        </div>
      ))}
    </div>
  );
}
