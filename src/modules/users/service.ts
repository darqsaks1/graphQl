import { RESTDataSource } from 'apollo-datasource-rest';

export class Users extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.USERS_PORT;
  }
  getUser(id: string) {
    return this.get(`/${id}`);
  }
  setToken(email: string, password: string) {
    return this.post("/login", {
      email,
      password,
    });
  }
  async registerUser(parent: any, args: any) {
    const data = await this.post("/register", { ...args.input })
    data.id = data._id
    return data
  }
}