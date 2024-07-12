import React from 'react';
import ProfileInfo from './ProfileInfo';
// import ProfileOrders from './ProfileOrders';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
  return (
    <section className="profile" style={{marginTop:'5%',marginLeft:'20%',marginRight:'10%',gap:'2%',paddingBottom:'12%'}}>
      <ProfileInfo />
      {/* <ProfileOrders /> */}
      <ProfileSettings />
    </section>
  );
};
export default Profile;

