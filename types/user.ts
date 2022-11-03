export interface IUser {
  username: string;
  imgUrl: string;
  name: string;
}

export interface IUserProfile {
  description: string;
  followers: IUser[];
  following: IUser[];
  fullName: string;
  imgUrl: string;
  isFollowed: boolean;
  username: string;
}

export interface IActivity {
  text: string;
}

export interface ICreateUser {
  name: string;
  surname: string;
  username: string;
}
