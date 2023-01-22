import ImageSlider from "./ImageSlider";
import './Banner.scss';
import { AppWrap } from '../../wrapper';

const Banner = () => {
  const slides = [
    { url: "https://img.freepik.com/free-vector/instagram-carousel-templates_23-2148788328.jpg?w=2000", title: "beach" },
    { url: "https://img.freepik.com/premium-vector/seamless-carousel-instagram-templates-banner-fashion-sale-colorful_180271-429.jpg?w=2000", title: "boat" },
    { url: "https://img.freepik.com/premium-vector/seamless-carousel-instagram-templates_180271-439.jpg?w=2000", title: "forest" },
    { url: "https://elements-cover-images-0.imgix.net/f7328bbf-6c1d-4ec8-983e-cea4a0692e3f?auto=compress%2Cformat&fit=max&w=900&s=b9de49a2ab286c931c994047f324286a", title: "city" },
    { url: "https://img.freepik.com/premium-vector/carousel-instagram-templates-post-fashion-sale-premium_180271-378.jpg?w=2000", title: "italy" },
  ];

  return (
    <div>
      <div className="container-banner">
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default AppWrap(Banner, 'banner',
  'app__whitebg'
);