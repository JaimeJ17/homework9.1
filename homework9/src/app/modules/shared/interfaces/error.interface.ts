export interface Error {
  errors: [
    {
      code: string;
      message: string;
      field_name: string;
    }
  ];
}
