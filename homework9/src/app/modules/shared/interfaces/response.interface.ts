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
}
