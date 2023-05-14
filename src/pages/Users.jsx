import React, { useEffect, useState } from "react";

import DEFAULT_AVATAR from "../assets/images/default_avatar.webp";

// services
import Customer from "../../src/services/customer";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Users = () => {
  const [users, setUsers] = useState([]);

  const roles = {
    0: "Người thuê nhà",
    2: "Chủ nhà",
  };

  const getUsers = async () => {
    const { data } = await Customer.list();
    setUsers(data);
  };

  const handleChangeStatus = (user) => {
    if (user.verified) {
      Swal.fire({
        title: "Khoá tài khoản này",
        html: `
            <div class="form-floating">
              <textarea class="form-control" placeholder="Lý do" id="reason" style="height: 150px; color: white"></textarea>
              <label for="reason" style="color: white">Lý do</label>
            </div>`,
        preConfirm: () => {
          const reason = Swal.getHtmlContainer().querySelector("#reason").value;
          if (!reason) {
            return Swal.showValidationMessage(
              "Vui lòng nhập lý khoá tài khoản"
            );
          } else {
            return { reason };
          }
        },
      }).then(async (result) => {
        if (result.isConfirmed) {
          const data = {
            textReport: result.value.reason,
            verified: false,
            idUser: user._id,
          };
          try {
            const response = await Customer.update(data);
            if (response) {
              getUsers();
              toast.success("Thành công");
            }
          } catch (error) {
            toast.error("Có lỗi xảy ra, vui lòng thử lại sau");
          }
        }
      });
    } else {
      Swal.fire({
        title:
          "Hành động này sẽ mở khoá tài khoản của người dùng, bạn có chắc chắn ?",
        showCancelButton: true,
        confirmButtonText: "Có",
        cancelButtonText: "Không",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const data = {
            textReport: result.value.reason,
            verified: true,
            idUser: user._id,
          };
          try {
            const response = await Customer.update(data);
            if (response) {
              getUsers();
              toast.success("Thành công");
            }
          } catch (error) {
            toast.error("Có lỗi xảy ra, vui lòng thử lại sau");
          }
        }
      });
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="col-12">
      <div className="bg-white rounded h-100 p-4">
        <h6 className="mb-4">Dach sách khách hàng</h6>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Email</th>
                <th scope="col">Tên</th>
                <th scope="col">Vai trò</th>
                <th scope="col">Số điện thoại</th>
                <th scope="col">Ảnh</th>
                <th scope="col">Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr key={user._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.email}</td>
                  <td>{user.fullname}</td>
                  <td>{roles[user.role]}</td>
                  <td>{user.phone}</td>
                  <td>
                    <img
                      src={user.image || DEFAULT_AVATAR}
                      alt=""
                      width={50}
                      height={50}
                      style={{ borderRadius: "50%" }}
                    />
                  </td>
                  <td>
                    <span className="mx-2">
                      {user.verified ? "Hoạt động" : "Vô hiệu hoá"}
                    </span>
                    {user.verified ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="square-20"
                        onClick={() => handleChangeStatus(user)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        onClick={() => handleChangeStatus(user)}
                        className="square-20"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                        />
                      </svg>
                    )}
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

export default Users;
