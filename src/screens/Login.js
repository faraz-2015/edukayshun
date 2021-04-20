import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <Header />
      <div class="row">
        <div
          style={{
            backgroundImage: "url(/img/ID81433648967cf9e4e1b07207b6bf.png)",
          }}
          class="col-sm-4"
        >
          <div id="Our_live_interactive_workshops">
            <span>Our live interactive workshops help you master Cloud</span>
            <br />
          </div>
          <div style={{ textAlign: "center", marginBottom: "5%;" }}>
            <img src="/img/Edukayshun Logo.png" alt="" />
          </div>
        </div>

        <div class="col-sm-2"></div>

        <div class="col-sm-4" style={{ marginTop: "4%" }}>
          <div class="card-body position-relative">
            <div class="col-12">
              <div id="Welcome_Back">
                <span>Welcome Back!</span>
              </div>
              <br />
              <div id="Welcome_Back_to_Edukayshun_Login" style={{display:'flex',justifyContent:"center"}}>
                <span>
                  Welcome Back to Edukayshun, Login to Access Your Account
                </span>
              </div>
              <br />
              <div>
                <input
                  type="email"
                  class="form-control"
                  id=""
                  placeholder="Enter your Email Address*"
                  style={{
                    border: 0,
                    outline: 0,
                    background: "transparent",
                    borderBottom: "1px solid #D0D2D3",
                    marginTop: "10px",
                  }}
                />
              </div>
              <div>
                <input
                  type="text"
                  class="form-control"
                  id=""
                  placeholder="Enter Password*"
                  style={{
                    border: 0,
                    outline: 0,
                    background: "transparent",
                    borderBottom: "1px solid #D0D2D3",
                    marginTop: "10px",
                  }}
                />
              </div>
              <br />

              <div style={{ textAlign: "center" }}>
                <button
                  type="button"
                  class="btn btn-danger"
                  style={{
                    backgroundColor: "#C1272D",
                    width: "40%",
                    borderRadius: "10px",
                  }}
                >
                  <span
                    style={{
                      font:
                        "var(--unnamed-font-style-normal) normal 600 19px/22px var(--unnamed-font-family-raleway)",
                      letterSpacing: "var(--unnamed-character-spacing-0)",
                      textAlign: "center",
                      font: "normal normal  19px/22px Raleway",
                      letterSpacing: "0px",
                      color: "#FFFFFF",
                      opacity: 1,
                    }}
                  >
                    Login
                  </span>
                </button>
              </div>

              <div id="Forgot_Password_Click_here">
                <span>Forgot Password? Click here</span>
              </div>
              <br />
              <div id="Not_a_Member_Yet_Register_Now">
                <span>Not a Member Yet? Register Now</span>
              </div>
              <div style={{ textAlign: "center", marginTop: "10px" }}>
                <a
                  type="button"
                  class="btn"
                  style={{
                    borderColor: "#C1272D",
                    backgroundColor: "#FFFFFF",
                    width: "50%",
                    borderRadius: "10px",
                  }}
                  href = '/register'
                >
                  <span
                    style={{
                      font:
                        "var(--unnamed-font-style-normal) normal 600 19px/22px var(--unnamed-font-family-raleway)",
                      letterSpacing: "var(--unnamed-character-spacing-0)",
                      textAlign: "center",
                      font: "normal normal 600 19px/22px Raleway",
                      letterSpacing: "0px",
                      color: "#FFFFFF",
                      opacity: 1,
                      color: "#C1272D",
                    }}
                  >
                    Register Now
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-2"></div>
      </div>
     {/* <Footer/> */}
    </div>
  );
};

export default Login;
