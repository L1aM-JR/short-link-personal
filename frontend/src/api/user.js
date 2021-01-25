import { request } from "../config";

class User {
  constructor({ path }) {
    this.path = path;
  }

  async checkAuth(token) {
    return await request(`${this.path}/checkAuth`, "POST", { token });
  }
}

export const user = new User("/user");