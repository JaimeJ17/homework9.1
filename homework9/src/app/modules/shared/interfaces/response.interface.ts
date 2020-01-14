export interface Response {
  token?: string;
  id?: string;
  status?: number;
  error?: {
    error?: number;
  };
}
