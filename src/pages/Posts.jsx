import React, { useEffect, useState } from "react";
import EyeIcon from "../assets/icons/eye";
import DEFAULT_AVATAR from "../assets/images/default_avatar.webp";
import { currency } from "../utils/currency";
import Post from "../../src/services/posts";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const { data } = await Post.list();
    setPosts(data);
  };

  const line = (number) => ({
    "--line": number,
  });
  const renderAddress = (post) => {
    const { address, street, wards, district, cty } = post;
    return (
      address + ", " + street + ", " + wards + ", " + district + ", " + cty
    );
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="col-12">
      <div className="bg-white rounded h-100 p-4">
        <h6 className="mb-4">Dach sách bài đăng</h6>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Tiêu đề</th>
                <th scope="col">Chi tiết</th>
                <th scope="col">Tiền cọc</th>
                <th scope="col">Địa chỉ</th>
                <th scope="col">Diện tích</th>
                <th scope="col">Giá phòng</th>
                <th scope="col">Giá điện</th>
                <th scope="col">Giá nước</th>
                <th scope="col">Wifi</th>
                <th scope="col">SĐT</th>
                <th scope="col">Ảnh</th>
                <th scope="col" style={{ whiteSpace: "nowrap" }}>
                  Trạng thái
                </th>
                <th className="white-space-nowrap">Chi tiết</th>
              </tr>
            </thead>
            <tbody>
              {posts?.map((post, index) => (
                <tr key={post._id}>
                  <th className="h-60" scope="row">
                    {index + 1}
                  </th>
                  <td className="h-60">{post.title}</td>
                  <td className="h-60">
                    <div className="truncate h-45" style={line(2)}>
                      {post.describe}
                    </div>
                  </td>
                  <td className="h-60">{currency(post.deposit)}</td>
                  <td className="h-60">
                    <div className="truncate h-45" style={line(2)}>
                      {renderAddress(post)}
                    </div>
                  </td>
                  <td className="h-60">
                    {post.acreage}m<sup>2</sup>
                  </td>
                  <td className="h-60">{currency(post.price)}</td>
                  <td>{currency(post.electricityPrice)}</td>
                  <td>{currency(post.waterPrice)}</td>
                  <td>{currency(post.wifi)}</td>
                  <td className="h-60">{post.phone}</td>
                  <td className="h-60">
                    <img
                      src={post.images[0] || DEFAULT_AVATAR}
                      alt=""
                      width={50}
                      height={50}
                      style={{ borderRadius: "50%" }}
                    />
                  </td>
                  <td className="h-60">{post.messageConfirm}</td>
                  <td className="text-center">
                    <Link to={"/admin/posts/" + post._id}>
                      <EyeIcon width={25} height={25} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Posts;
