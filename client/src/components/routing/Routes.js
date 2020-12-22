import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import Alert from '../layouts/Alert';
import Dashboard from '../dashboard/Dashboard';
import PrivateRoute from '../routing/PrivateRoute';
import CreateProfile from '../profile/CreateProfile';
import EditProfile from '../profile/EditProfile';
import AddExperience from '../profile/AddExperience';
import AddEducation from '../profile/AddEducation';
import Profiles from '../profiles/profiles';
import Profileview from '../profileview/Profileview';
import Posts from '../posts/Post';
import Post from '../Post/Post';
import NotFound from '../layouts/NotFound';
const Routes = () => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/profiles' component={Profiles} />
        <Route exact path='/profile/:id' component={Profileview} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/createprofile' component={CreateProfile} />
        <PrivateRoute exact path='/editprofile' component={EditProfile} />
        <PrivateRoute exact path='/addexperience' component={AddExperience} />
        <PrivateRoute exact path='/addeducation' component={AddEducation} />
        <PrivateRoute exact path='/posts' component={Posts} />
        <PrivateRoute exact path='/posts/:id' component={Post} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
