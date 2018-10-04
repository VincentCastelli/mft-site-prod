import React from 'react';
import PropTypes from 'prop-types';

const About = (props) => {
  return (
    <section className="billboard">
      <h2>About Me</h2>
      <p>{`All about the ${props.client}`}</p>
    </section>
  );
};

About.propTypes = {
  client: PropTypes.string.isRequired,
};

export default About;
