import { User } from './user.interface';
export interface Response {
  token?: string;
  id?: string;
  status?: number;
  errors?: [
    {
      code: string;
      message: string;
      field_name: string;
    }
  ];

  data?: {
    token?: string;
    user?: User
  };
}
