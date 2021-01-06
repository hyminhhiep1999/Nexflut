import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import './login.scss';
import $ from 'jquery/dist/jquery';

function Login() {

  const [unShowPassword, setUnShowPassword] = useState(true);
  const [unShowPasswordSignUp, setUnShowPasswordSignUp] = useState(true);

  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".allTheLogin");


    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });

  }, []);

  const onShowPasword = () => {
    setUnShowPassword(!unShowPassword);
  }

  const onShowPaswordSignUp = () => {
    setUnShowPasswordSignUp(!unShowPasswordSignUp);
  }
  const clickFogetPassWord = (event) => {
    event.preventDefault();
    Swal.fire({
      title: 'Nhập Gmail Tài Khoản Của Bạn',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Xác Nhận',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Request failed: ${error}`
            )
          })
      },
    })
  }

  return (
    <div>
      <div className="allTheLogin">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Đăng Nhập</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Tên Tài Khoản" />
              </div>
              <div className="input-field eye-password">
                <i className="fas fa-lock"></i>
                <input type={unShowPassword ? "password" : 'text'} placeholder="Mật Khẩu" />
                <i onClick={() => { onShowPasword() }} className={`far ${unShowPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </div>
              <div className="btn-submit">
                <input type="submit" value="Đăng Nhập" className="btn solid" />
              </div>
              <div className="social-text" > <a href="" onClick={clickFogetPassWord}>Quên Mật Khẩu </a> </div>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Đăng Ký</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Tên Tài Khoản" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field eye-password">
                <i className="fas fa-lock"></i>
                <input type={unShowPasswordSignUp ? "password" : 'text'} placeholder="Mật Khẩu" />
                <i onClick={() => { onShowPaswordSignUp() }} className={`far ${unShowPasswordSignUp ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </div>
              <div className="btn-submit">
                <input type="submit" className="btn" value="Đăng Ký" />
              </div>

              <div className="social-text"><a>Kết nối các với các ứng dụng</a></div>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Đăng Ký</h3>
              <p>
                Đăng ký tài khoản mới nếu bạn không có tài khoản !
                                </p>
              <button className="btn transparent" id="sign-up-btn">
                Đăng Ký
                                </button>
            </div>
            <img src="img/log.svg" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>Đăng Nhập</h3>
              <p>
                Đăng nhập nếu bạn đã có tài khoản !
                                </p>
              <button className="btn transparent" id="sign-in-btn">
                Đăng Nhập
                                </button>
            </div>
            <img src="img/register.svg" className="image" alt="" />
          </div>
        </div>
      </div>
    </div >
  );
}

export default Login;
