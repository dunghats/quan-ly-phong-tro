import instance from "./instance";

class Customer {
  list() {
    return instance.get("accountAdmin/getAllAccount");
  }
  update(data) {
    return instance.patch("accountAdmin/updateStatusAccountByAdmin", data);
  }
}

export default new Customer();
