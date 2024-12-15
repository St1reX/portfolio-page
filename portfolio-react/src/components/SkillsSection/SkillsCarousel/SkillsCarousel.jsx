import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function SkillsCarousel({ imgArray, pathCore }) {
  return (
    <Carousel
      axis="vertical"
      width="300px"
      transitionTime={1000}
      autoPlay={true}
      infiniteLoop={true}
      interval={1600}
      centerMode={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      showArrows={false}
    >
      {imgArray.map((image, index) => (
        <div key={index}>
          <img src={pathCore + image.fileName} alt={image.alt} />
        </div>
      ))}
    </Carousel>
  );
}

SkillsCarousel.propTypes = {
  imgArray: PropTypes.arrayOf(
    PropTypes.shape({
      fileName: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
  pathCore: PropTypes.string.isRequired,
};
