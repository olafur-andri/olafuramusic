import React from 'react';
import PropTypes from 'prop-types';

const SocialLink = (props) => {
  const {
    image, altText, linkUrl, className,
  } = props;

  return (
    <a
      href={linkUrl}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={`/images/social/${image}.png`}
        alt={altText}
        style={{ width: '100%' }}
      />
    </a>
  );
};

SocialLink.propTypes = {
  image: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  className: PropTypes.string,
};

SocialLink.defaultProps = {
  className: '',
};

export default SocialLink;
