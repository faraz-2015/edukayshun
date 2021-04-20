import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Person from "@material-ui/icons/PersonOutline";
import Mail from "@material-ui/icons/MailOutline";
import Phone from "@material-ui/icons/Phone";
import Lock from "@material-ui/icons/LockOutlined";

const Register = () => {
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
            height:'100%'
          }}
          class="col-sm-4"
        >
          <div
            id="Our_live_interactive_workshops"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                font:
                  "italic normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-32)/50px var(--unnamed-font-family-raleway)",
                letterSpacing: "var(--unnamed-character-spacing-0)",
                textAlign: "center",
                font: "italic normal bold 32px/50px 'Raleway',sans-serif",
                letterSpacing: "0px",
                color: "#FFFFFF",
                opacity: 1,
              }}
            >
              Welcome Back!
            </span>
            <br />
            <span
              style={{
                font:
                  "var(--unnamed-font-style-normal) normal medium 14px/16px var(--unnamed-font-family-raleway)",
                letterSpacing: "var(--unnamed-character-spacing-0)",
                textAlign: "center",
                font: "normal normal medium 14px/16px Raleway",
                letterSpacing: "0px",
                color: "#FFFFFF",
                opacity: 1,
              }}
              className="font"
            >
              Already have an Edukayshun Account
              <br />
              click here to Login
            </span>
            <br />
            <br />
            <br />
            <div style={{ textAlign: "center" }}>
              <a
                type="button"
                class="btn"
                style={{
                    backgroundColor: "transparent",
                  width: "40%",
                  borderRadius: "10px",
                  border: "2px solid #FFFFFF",
                  borderRadius: "10px",
                  opacity: 1,
                }}
                href = '/login'
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
              </a>
            </div>
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
                <span id="Welcome_Back">Create Account</span>
              </div>
              <br />
              <div
                id="Welcome_Back_to_Edukayshun_Login"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <span style={{ textAlign: "center" }}>
                  Create an Account and Gain Access to all the <br />
                  Edukayshun Courses Resources
                </span>
              </div>
              <br />

              <div
                className="flex-between-center"
                style={{ borderBottom: "1px solid #D0D2D3" }}
              >
                <Person style={{ color: "#C0C0C0", marginTop: "10px" }} />
                <input
                  type="email"
                  class="form-control"
                  id=""
                  placeholder="Enter your Full Name*"
                  style={{
                    border: 0,
                    outline: 0,
                    background: "transparent",
                    marginTop: "10px",
                  }}
                />
              </div>
              <div
                className="flex-between-center"
                style={{ borderBottom: "1px solid #D0D2D3" }}
              >
                <Mail style={{ color: "#C0C0C0", marginTop: "10px" }} />
                <input
                  type="email"
                  class="form-control"
                  id=""
                  placeholder="Enter Email Address"
                  style={{
                    border: 0,
                    outline: 0,
                    background: "transparent",
                    marginTop: "10px",
                  }}
                />
              </div>
              <div
                className="flex-between-center"
                style={{ borderBottom: "1px solid #D0D2D3" }}
              >
                <Phone style={{ color: "#C0C0C0", marginTop: "10px" }} />
                <input
                  type="text"
                  class="form-control"
                  id=""
                  placeholder="Enter Mobile Number"
                  style={{
                    border: 0,
                    outline: 0,
                    background: "transparent",
                    marginTop: "10px",
                  }}
                />
              </div>
              <div
                className="flex-between-center"
                style={{ borderBottom: "1px solid #D0D2D3" }}
              >
                <Lock style={{ color: "#C0C0C0", marginTop: "10px" }} />
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
                    width: "50%",
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
                    className="font"
                  >
                    Register Now
                  </span>
                </button>
              </div>

              <div id="Forgot_Password_Click_here">
                <span>
                  A Verification Code will be sent to your Email
                  <br />
                  for Account Confirmation
                </span>
              </div>
              {/* <div style={{ textAlign: "center", marginTop: "10px" }}>
                <button
                  type="button"
                  class="btn"
                  style={{
                    borderColor: "#C1272D",
                    backgroundColor: "#FFFFFF",
                    width: "50%",
                    borderRadius: "10px",
                  }}
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
                </button>
              </div> */}
            </div>
          </div>
        </div>

        <div class="col-sm-2"></div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Register;
