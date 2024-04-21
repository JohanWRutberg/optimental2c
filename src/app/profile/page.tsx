import React from "react";
import ProfileDetails from "../components/ProfileDetails";

const ProfilePage = async () => {
  return (
    <div className="flex bg-[url('/img/bg.jpg')] bg-cover h-screen bg-center items-center justify-center">
      <ProfileDetails />
    </div>
  );
};

export default ProfilePage;
