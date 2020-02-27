import React from 'react';
// import PropTypes from 'prop-types';

const About = () => {
  return (
    <div className="flex-content-container">
      <div className="about-title-override">
        <div>About Me</div>
        <div className="about-title-bar" />
      </div>
      <div className="about-info">
        <div className="bio-image" />
        <div className="bio">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

// About.propTypes = {
//   client: PropTypes.string.isRequired,
// };

export default About;
