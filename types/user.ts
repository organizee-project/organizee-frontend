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

export enum EActivityType {
  Like = "LIKE",
  Save = "SAVE",
  Comment = "COMMENT",
  AddGuide = "ADD_GUIDE",
  Follow = "FOLLOW",
  Other = "OTHER",
}

export interface IActivity {
  date: string;
  description: string;
  id: string;
  referenceId: string;
  type: EActivityType;
}
