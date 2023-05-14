import instance from "./instance";

class Auth {
  login(data) {
    const { username, password } = data;
    return instance.post("/auth/login", { username, password });
  }
  profile() {
    return instance.get("/auth/getUserByToken");
  }
}

export default new Auth();
