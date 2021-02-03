import { request } from "../config";

class User {
  constructor(path) {
    this.path = path;
  }

  async checkAuth(token) {
    return await request(`${this.path}/checkAuth`, "POST", { token });
  }

  async login({ password, email }) {
    return await request(`${this.path}/login`, "POST", { password, email });
  }

  async registration({ password, email }) {
    return await request(`${this.path}/registration`, "POST", { password, email });
  }
}

export const user = new User("/user");