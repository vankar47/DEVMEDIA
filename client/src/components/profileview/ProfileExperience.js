import React from 'react';
import propTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description },
}) => (
  <div>
    <h3 className='text-dark'>{company}</h3>
    <p>
      <Moment format='YYYY/MM/DD'>{from}</Moment> -{' '}
      {!to ? 'Now' : <Moment fromat='YYYY/MM/DD'>{to}</Moment>}
    </p>
    <p>
      <strong>Postion:</strong> {title}
    </p>
    <p>
      <strong>Description: </strong>
      {description}
    </p>
  </div>
);
ProfileExperience.propTypes = {
  experience: propTypes.object.isRequired,
};

export default ProfileExperience;
