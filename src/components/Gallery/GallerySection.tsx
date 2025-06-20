import "./GallerySection.css";
import ShapeDivider from "../ui/ShapeDivider";
import Skatepark from "../../assets/webp/gallaryImages/skatepark.webp";
import GroupOnNewStar from "../../assets/webp/gallaryImages/groupOnNewStar.webp";
import GroupSittingAtPark from "../../assets/webp/gallaryImages/groupSittingAtPark.webp";
import KidRiding from "../../assets/webp/gallaryImages/kidRiding.webp";
import GroupOnStar from "../../assets/webp/gallaryImages/groupOnStar.webp";
import Prizes from "../../assets/webp/gallaryImages/prizes.webp";
import HavingFun from "../../assets/webp/gallaryImages/havingFun.webp";
import ExpertSkater from "../../assets/webp/gallaryImages/expertSkater.webp";
import KidsAfterEvent from "../../assets/webp/gallaryImages/kidsAfterEvent.webp";
import YoungKids from "../../assets/webp/gallaryImages/youngKids.webp";


const images = [
  { src: Skatepark, alt: "Pleasanton Skatepark" },
  { src: GroupOnNewStar, alt: "Chilling after event" },
  { src: GroupSittingAtPark, alt: "Fun out of town" },
  { src: KidRiding, alt: "Enjoying night skating" },
  { src: GroupOnStar, alt: "Chilling after event" },
  { src: Prizes, alt: "Prizes for an event" },
  { src: HavingFun, alt: "Enjoying Skatepark" },
  { src: ExpertSkater, alt: "Zac and Bob" },
  { src: KidsAfterEvent, alt: "Enjoy new boards" },
  { src: YoungKids, alt: "Built boards" },
];

const GallerySection = () => {
  return (
    <section className="gallery" id="gallery">
      <h2 className="section-title">
        <span>Gallery</span>
      </h2>
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





