import { IUser } from "./user";

export interface IGuide {
  categories: ICategory[];
  createdAt: string;
  likesCount: number;
  slug: string;
  subtitle: string;
  title: string;
  topics: string[];
  updatedAt: string;
  imgUrl: string;
  user: IUser;
  type: EGuideType;
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
