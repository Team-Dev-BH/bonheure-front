export class User {
  constructor(
    public reference: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public mobileNumber: string,
    public password: string,
    // public birthDate: Date,
    // public creationDate: Date,
    // public modificationDate: Date,
    // public activationDate: Date,
    public activated: boolean
  ) {}
}
