import instance from "./instance";

class Post {
  list() {
    return instance.get("posts");
  }
  show(id) {
    return instance.get("post/" + id);
  }
  confirm(id) {
    return instance.patch("confirmPostByAdmin/" + id);
  }
  cancel({ textConfirm, id }) {
    return instance.patch("cancelPostByAdmin", { textConfirm, id });
  }
  ads() {
    return instance.get("postHomeAds");
  }
}

export default new Post();
