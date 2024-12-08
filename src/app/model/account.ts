export interface IAccount {
  userId: number;
  userName: string;
  status: LoginStatus;
}

export enum LoginStatus {
  loggedOut = 0,
  loggedIn = 1,
  cancelled = -1,
}
