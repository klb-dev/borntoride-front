import "./About.css";
import aboutImg from "../../assets/webp/groupWdog.webp";
import ShapeDivider from "../ui/ShapeDivider";
import skateboardBullet from "../../assets/skateboard-bullet.svg";

const About = () => {
  return (
     <section className="section about" id="about">
        <h2 className="section-title"><span>BTR </span>Mission</h2> 
        <div className="about-content">
            <div className="about-text">
                <h3>BTR Skateboard Goals</h3>
                <p><span><img src={skateboardBullet} alt="green skateboard" /></span> Increase the skill level of all participants.</p>
                <p><span><img src={skateboardBullet} alt="green skateboard" /></span> Raise community perception & acceptance of skateboarders.</p>
                <p><span><img src={skateboardBullet} alt="green skateboard" /></span> Increase skateboarding skills at all levels.</p>
                <p><span><img src={skateboardBullet} alt="green skateboard" /></span> Accelerate teaching skills through participation.</p>
                <p><span><img src={skateboardBullet} alt="green skateboard" /></span> Skateboarding culture creating positive vibes.</p>
                <a href="#events" className="btn btn-primary">Events</a>
            </div>
            <div className="about-image">
                <img src={aboutImg} alt="Youth skateboarding" loading="lazy" />
            </div>
        </div>
        <ShapeDivider position="bottom" color="var(--secondary-color)" height={120} flipped={true} />
    </section>
  );
};

export default About;
