import React, { Fragment, useEffect } from 'react';
import propTypes from 'prop-types';
import Spinner from '../layouts/spinner';
import { connect } from 'react-redux';
import { getProfile } from '../../actions/profile';
import ProfileItem from './profilesitem';
const Profiles = ({ getProfile, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfile();
  }, [getProfile]);
  return (
    <Fragment>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <Fragment>
          <h1 className='large text-primary'>Developers</h1>
          <p className='lead'>
            <i className='fab fa-connectdevelop'>
              Browse and Connect with developers
            </i>
          </p>
          <div className='profiles'>
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile}></ProfileItem>
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfile: propTypes.func.isRequired,
  profile: propTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfile })(Profiles);
