import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Post from "../services/posts";
import { currency } from "../utils/currency";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import PostInfo from "../components/common/PostInfo";

const DetailPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  const getPost = async (id) => {
    const { data } = await Post.show(id);
    setPost(data);
  };

  const navigate = useNavigate();

  const postApproval = () => {
    if (id) {
      Swal.fire({
        title: "Bạn có muốn phê duyệt bài này?",
        showDenyButton: true,
        confirmButtonText: "Có",
        denyButtonText: "Không",
      }).then(async (result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          const data = await Post.confirm(id);
          if (data) {
            toast.success("Bài viết đã phê duyệt");
            getPost(id);
          }
        }
      });
    }
  };

  const cancelPost = () => {
    Swal.fire({
      title: "Từ chối đăng bài",
      html: `
        <div class="form-floating">
          <textarea class="form-control" placeholder="Lý do" id="floatingTextarea" style="height: 150px; color: white"></textarea>
          <label for="floatingTextarea" style="color: white">Lý do</label>
        </div>`,
      preConfirm: () => {
        const reason =
          Swal.getHtmlContainer().querySelector("#floatingTextarea").value;
        if (!reason) {
          return Swal.showValidationMessage("Vui lòng nhập lý do từ chối");
        } else {
          return { reason };
        }
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        const body = {
          id,
          textConfirm: result.value.reason,
        };
        const data = await Post.cancel(body);
        if (data) {
          toast.success("Bài viết đã bị từ chối");
          getPost(id);
        } else {
          toast.error("Có lỗi xảy ra, vui lòng thử lại");
        }
      }
    });
  };

  useEffect(() => {
    getPost(id);
  }, [id]);

  return (
    <div className="relative">
      <div className="flex justify-between my-4">
        <button className="btn btn-warning" onClick={() => navigate(-1)}>
          Quay lại
        </button>
        {post.messageConfirm === "Bài viết bị huỷ" && (
          <button className="btn btn-danger">Bài viết đã bị huỷ</button>
        )}
        {post.messageConfirm === "Đã phê duyệt" && (
          <button className="btn btn-success">Đã duyệt</button>
        )}
        {post.messageConfirm === "Đang chờ duyệt bài" && (
          <div>
            <button
              type="button"
              className="btn btn-success mx-2"
              onClick={postApproval}
            >
              Phê duyệt
            </button>
            <button className="btn btn-danger" onClick={cancelPost}>
              Từ chối
            </button>
          </div>
        )}
      </div>
      {post && <PostInfo post={post} />}
    </div>
  );
};

export default DetailPost;
