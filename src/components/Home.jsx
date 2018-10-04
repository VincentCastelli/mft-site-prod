import React from 'react';
import PropTypes from 'prop-types';

const Home = (props) => {
  return (
    <section className="billboard">
      <h2>The Next Big Thing</h2>
      <p>{`This site is under construction by ${props.devFirstName} ${props.devLastName}`}</p>
    </section>
  );
};

Home.propTypes = {
  devFirstName: PropTypes.string.isRequired,
  devLastName: PropTypes.string.isRequired,
};

export default Home;
