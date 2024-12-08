import { Injectable } from '@angular/core';
import { IAccount, LoginStatus } from '../model/account';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAccount: IAccount | null = null;
  private _returnUrl = '';

  constructor() { }

  public userLoggedIn() : boolean {
    if (this.userAccount) {
      return this.userAccount?.status === LoginStatus.loggedIn;
    } else {
      return false;
    }
  }

  public setLoginUser(account: IAccount) {
    this.userAccount = account;
  }

  public currentUserAccount() : IAccount | null {
    return this.userAccount;
  }

  public logoutUser() {
    if (this.userAccount) {
      this.userAccount.status = LoginStatus.loggedOut;
    }
  }

  get returnUrl() {
    return this._returnUrl;
  }

  set returnUrl(val: string) {
    this._returnUrl = val;
  }
}
