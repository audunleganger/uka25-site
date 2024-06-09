import './LandingImage.css';

export default function LandingImage() {
  return (
    <div className="landing-image-container">
        <img src="/src/assets/sample_festival_image.jpg" alt="landing-image" className="landing-img" />
        <span className="landing-image-text">UKA på Blindern 2025</span>
    </div>
  )
}
