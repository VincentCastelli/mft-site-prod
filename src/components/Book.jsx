import React from 'react';
// import PropTypes from 'prop-types';

const Book = () => {
  return (
    <div>
      <h2>Request An Appointment</h2>
      <p>Fill out the information below to get started:</p>
      <div className="booking-form-container">
        <form className="booking-form">
          <p>
            <label>
              <input type="text" name="firstname" required placeholder=" " />
              <span className="required">First Name</span>
            </label>
          </p>
          <p>
            <label>
              <input type="text" name="lastname" required placeholder=" " />
              <span className="required">Last Name</span>
            </label>
          </p>
          <p>
            <label>
              <input type="email" name="email" required placeholder=" " />
              <span className="required">Email Address</span>
            </label>
          </p>
          <p>
            <label>
              <input type="text" name="phone" placeholder=" " />
              <span className="required">Phone Number</span>
            </label>
          </p>
          <p className="full-width">
            <label htmlFor="textarea" className="message-label">
              Leave us a message:
              <textarea id="textarea" type="text" name="message" />
            </label>
          </p>
          <p className="full-width">
            <button className="submit-button" type="submit">Submit</button>
          </p>
        </form>
      </div>
    </div>
  );
};

// Book.propTypes = {
//   client: PropTypes.string.isRequired,
// };

export default Book;
