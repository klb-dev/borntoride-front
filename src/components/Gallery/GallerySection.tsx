import { useEffect, useState } from "react";
import "./GallerySection.css";
import ShapeDivider from "../ui/ShapeDivider";
import galleryData from "../../data/gallery.json";


type GalleryItem = {
  src: string;
  alt: string;
};

const GallerySection = () => {
  const [images, setImages] = useState<GalleryItem[]>([]);

  const imageMap = import.meta.glob("@/assets/gallery/*.webp", {
    eager: true,
    import: "default"
  }) as Record<string, string>;

  useEffect(() => {
  const resolvedImages = galleryData.map((item) => {
    const match = Object.entries(imageMap).find(([path]) =>
      path.includes(item.src)
    );
    return {
      src: match ? match[1] : "",
      alt: item.alt
    };
  });
  setImages(resolvedImages);
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  return (
    <section className="section gallery" id="gallery">
      <h2 className="section-title">Gallery</h2>
      <div className="gallery-container">
        {images.map((img, i) => (
          <div className="gallery-item" key={i}>
            <img src={img.src} alt={img.alt} loading="lazy" />
            <div className="gallery-overlay">
              <p>{img.alt}</p>
            </div>
          </div>
        ))}
      </div>
      <ShapeDivider position="bottom" color="var(--primary-dark)" height={120} flipped={true} />
    </section>
  );
};

export default GallerySection;





