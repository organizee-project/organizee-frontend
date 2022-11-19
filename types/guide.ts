import { IUser } from "./user";

interface IGenericGuide {
  content: any;
  imgUrl: string;
  topics: string[];
  title: string;
  subtitle: string;
  references: IReference[];
}

export interface IGuide extends IGenericGuide {
  createdAt: string;
  likesCount: number;
  slug: string;
  updatedAt: string;
  user: IUser;
  type: EGuideType;
  categories: ICategory[];
}

export interface IPostGuide extends IGenericGuide {
  isPrivate: boolean;
  categories: number[];
}

export interface IReference {
  url: string;
}

export interface ICategory {
  id: number;
  name: string;
  slug: string;
}

export enum EGuideType {
  public = "PUBLIC",
  private = "PRIVATE",
}

export interface IInteractions {
  liked: boolean;
  saved: boolean;
}

export interface IPostComment {
  message: string;
  referencedComment?: string;
}

export interface IComment {
  commentsCount: number;
  createdAt: string;
  id: string;
  message: string;
  user: IUser;
}
