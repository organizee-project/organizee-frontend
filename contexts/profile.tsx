import { createContext, useState } from "react";
import { IUserProfile } from "types/user";

const ProfileContext = createContext({} as IProfileContext);

const ProfileContextProvider = (props) => {
  const [profile, setProfile] = useState<IUserProfile>(null);

  const updateProfile = (send: IUserProfile) => {
    if (send != profile) setProfile(send);
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {props.children}
    </ProfileContext.Provider>
  );
};

export { ProfileContext, ProfileContextProvider };

interface IProfileContext {
  profile: IUserProfile;
  updateProfile: (user: IUserProfile) => void;
}
