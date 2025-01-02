import PropTypes from 'prop-types';
import useAnimateOnScroll from '../../../hooks/useAnimateOnScroll';

export default function ProjectContainer({
  cardTitle,
  cardDescription,
  redirectionLink,
  imgData,
  pathCore,
  optionalStyle,
}) {
  const [ref, isVisible] = useAnimateOnScroll();

  return (
    <div className={optionalStyle + ' w-full flex my-8'}>
      <div
        ref={ref}
        className={`card bg-base-100 w-96 shadow-xl transform duration-500`}
      >
        <figure className="px-10 pt-10">
          <img
            src={pathCore + imgData.name}
            alt={imgData.alt}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{cardTitle}</h2>
          <p>{cardDescription}</p>
          <div className="card-actions">
            <a className="btn bg-main-green text-white" href={redirectionLink}>
              Show on Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectContainer.propTypes = {
  cardTitle: PropTypes.string,
  cardDescription: PropTypes.string,
  redirectionLink: PropTypes.string,
  imgData: PropTypes.shape({
    name: PropTypes.string,
    alt: PropTypes.string,
  }),
  pathCore: PropTypes.string.isRequired,
  optionalStyle: PropTypes.string,
};
