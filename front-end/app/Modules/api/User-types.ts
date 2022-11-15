export interface IPostResponse {
  id: string;
  title: string;
  content: string;
  image: string;
  category: string;
  user: IUser;
  created_at: string;
  updated_at: string;
}