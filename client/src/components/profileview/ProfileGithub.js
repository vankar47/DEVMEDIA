import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRepos } from '../../actions/profile';
import Spinner from '../layouts/spinner';

const ProfileGithub = ({ username, getRepos, repos }) => {
  useEffect(() => {
    getRepos(username);
  }, [getRepos]);
  return (
    <div className='profile-github'>
      <h2 className='text-primary my-1'>GitHub Repos</h2>
      {repos === null ? (
        <Spinner />
      ) : (
        repos.map((repo) => (
          <div key={repo._id} className='repo bg-white p-1 my-1'>
            <div>
              <h4>
                <a
                  href={repo.html_url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {repo.name}
                </a>
              </h4>
              <p>{repo.description}</p>
            </div>
            <div>
              <ul>
                <li className='badge badge-primary'>
                  Stars: {repo.stargazers_count}
                </li>

                <li className='badge badge-dark'>
                  Watcher: {repo.watchers_count}
                </li>
                <li className='badge badge-light'>Forks: {repo.forks_count}</li>
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

ProfileGithub.propTypes = {
  getRepos: propTypes.func.isRequired,
  repos: propTypes.array.isRequired,
  username: propTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  repos: state.profile.repos,
});

export default connect(mapStateToProps, { getRepos })(ProfileGithub);
