import React from "react";

// components
import Container from "../components/common/Container";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// services
import Auth from "../../src/services/auth";

// constants
import { TOKEN_AUTHENTICATION } from "../constants";
import { toast } from "react-toastify";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const login = async (input) => {
    try {
      const { data } = await Auth.login(input);
      if (data) {
        const { accessToken } = data;
        console.log(accessToken);
        toast.success("Đăng nhập thành công");
        localStorage.setItem(TOKEN_AUTHENTICATION, accessToken);
        navigate("/admin/statistics");
      }
    } catch (error) {
      console.error(error);
      toast.error("Tài khoản hoặc mật khẩu không chính xác");
    }
  };

  return (
    <Container>
      <div className="container-fluid">
        <div
          className="row h-100 align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
            <form
              className="bg-white rounded p-4 p-sm-5 my-4 mx-3"
              onSubmit={handleSubmit(login)}
            >
              <div className="d-flex align-items-center justify-content-between mb-3">
                <a href="index.html">
                  <h3 className="text-primary">
                    <i className="fa fa-user-edit me-2" />
                    Admin
                  </h3>
                </a>
                <h3>Đăng nhập</h3>
              </div>
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  {...register("username")}
                />
                <label htmlFor="floatingInput">Địa chỉ email</label>
              </div>
              <div className="form-floating mb-4">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  {...register("password")}
                />
                <label htmlFor="floatingPassword">Mật khẩu</label>
              </div>
              <button type="submit" className="btn btn-primary py-3 w-100 mb-4">
                Đăng nhập
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
