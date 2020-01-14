export interface Profile {
  personal: {
    name: string;
    lastName: string;
  };
  user: {
    email: string;
    username: string;
  }
  security: {
    password: string;
    passwordConfirm: string;
  }
}
