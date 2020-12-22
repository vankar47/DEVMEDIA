import React from 'react';
import propTypes from 'prop-types';

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    socialMedia,
    user: { name, avatar },
  },
}) => {
  return (
    <div class='profile-top bg-primary p-2'>
      <img class='round-img my-1' src={avatar} alt='' />
      <h1 class='large'>{name}</h1>
      <p class='lead'>
        {status} {company && <span> at {company}</span>}
      </p>
      <p>{location && <span>{location}</span>}</p>
      <div class='icons my-1'>
        {website && (
          <a href={website} target='_blank' rel='noopener noreferrer'>
            <i class='fas fa-globe fa-2x'></i>
          </a>
        )}

        {socialMedia && socialMedia.twitter && (
          <a
            href={socialMedia.twitter}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fab fa-twitter fa-2x'></i>
          </a>
        )}

        {socialMedia && socialMedia.facebook && (
          <a
            href={socialMedia.facebook}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fab fa-twitter fa-2x'></i>
          </a>
        )}
        {socialMedia && socialMedia.linkedin && (
          <a
            href={socialMedia.linkedin}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fab fa-twitter fa-2x'></i>
          </a>
        )}
        {socialMedia && socialMedia.youtube && (
          <a
            href={socialMedia.youtube}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fab fa-twitter fa-2x'></i>
          </a>
        )}
        {socialMedia && socialMedia.instagram && (
          <a
            href={socialMedia.instagram}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fab fa-twitter fa-2x'></i>
          </a>
        )}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: propTypes.object.isRequired,
};

export default ProfileTop;
