import React from 'react';
import Button from '@material-ui/core/Button';
// import PropTypes from 'prop-types';

const Home = () => {
  return (
    <div>
      <section className="showcase">
        <h1>Therapy at your finger tips</h1>
        <Button variant="contained" color="primary" href="/book">Request an appointment</Button>
      </section>
      <section className="core-assist-container">
        <div className="box">
          <i className="far fa-heart" />
          <h3>MFT Counseling</h3>
          <p>In office visits scheduled regularly to track progress and better mental health</p>
        </div>
        <div className="box">
          <i className="fas fa-users" />
          <h3>Group Therapy</h3>
          <p>Group theraphy sessions available weekly on a first come first serve basis</p>
        </div>
        <div className="box">
          <i className="fas fa-laptop" />
          <h3>Video Conference</h3>
          <p>Video calls available through the booking section of this site</p>
        </div>
      </section>
    </div>
  );
};

// Home.propTypes = {
//   devFirstName: PropTypes.string.isRequired,
//   devLastName: PropTypes.string.isRequired,
// };

export default Home;
