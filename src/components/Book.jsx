import React from 'react';
// import PropTypes from 'prop-types';

const Book = () => {
  return (
    <div>
      <section className="billboard">
        <h2>Book An Appointment</h2>
        <p>Fill out the information below to get started:</p>
        <div className="booking-form-container">
          <form className="booking-form">
            <p>
              <label>
                <input type="text" name="firstname" placeholder=" " />
                <span>First Name</span>
              </label>
            </p>
            <p>
              <label>
                <input type="text" name="lastname" placeholder=" " />
                <span>Last Name</span>
              </label>
            </p>
            <p>
              <label>
                <input type="text" name="email" placeholder=" " />
                <span>Email Address</span>
              </label>
            </p>
            <p>
              <label>
                <input type="text" name="phone" placeholder=" " />
                <span>Phone Number</span>
              </label>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

// Book.propTypes = {
//   client: PropTypes.string.isRequired,
// };

export default Book;
