import React from "react";
import Header from "../components/Header";
import Person from "@material-ui/icons/PersonOutline";
import Mail from "@material-ui/icons/MailOutline";
import Phone from "@material-ui/icons/Phone";
import Lock from "@material-ui/icons/LockOutlined";
import Footer from "../components/Footer";

const Contact = () => {
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

      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "85%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <div style={{ width: "90%"}}>
            <div>
              <br />
              <br />

              <h1 className="How_Can_We_Help">How Can We Help?</h1>
              {/* <br /> */}
              <p className="ContactText">
                Have questions about our cloud computing learning services?
                Let's talk about
                <br />
                how we can help you achieve your goals and take your profession
                to the top!
              </p>
              <div style={{ margin: 0, padding: 0, display: "flex" }}>
                <div
                  style={{
                    width: "50%",
                    height: "379px",
                    background: "#FFFFFF 0% 0% no-repeat padding-box",
                    boxShadow: "0px 3px 6px #00000029",
                    borderRadius: "12px 12px 0px 0px",
                    opacity: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    // border: "1px solid black"
                  }}
                >
                  <h1 className="Write_to_us">Write to Us</h1>

                  <div
                    style={{
                      width: "296px",
                      // height: "18px",
                    //   borderBottom: "1px solid #D0D2D3",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: 0,
                    }}
                  >
                    <Person style={{ color: "#C0C0C0", marginTop: "10px" }} />
                    <input
                      type="text"
                      class="form-control"
                      id=""
                      placeholder="Enter your Full Name"
                      style={{
                        border: 0,
                        outline: 0,
                        background: "transparent",
                        marginTop: "10px",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "296px",
                    }}
                  >
                    <div
                      style={{
                        width: "45%",

                        // height: "18px",
                        borderBottom: "1px solid #D0D2D3",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: 0,
                      }}
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
                      style={{
                        width: "45%",
                        //   height: "18px",
                        borderBottom: "1px solid #D0D2D3",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "5px",
                      }}
                    >
                      <Phone style={{ color: "#C0C0C0" }} />
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
                  </div>
                  <div
                    style={{
                      width: "296px",
                      // height: "18px",
                    //   borderBottom: "1px solid #D0D2D3",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: 0,
                    }}
                  >
                    <input
                      type="text"
                      class="form-control"
                      id=""
                      style={{
                        width: "298px",
                        height: "104px",
                        background: "#FFFFFF 0% 0% no-repeat padding-box",
                        border: "1px solid #707070",
                        borderRadius:" 5px",
                        opacity: '0.5',
                        marginTop:"5%"
                      }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    background: "transparent  no-repeat padding-box",
                    backgroundImage: "url(/img/Contact.png)",
                    // border: "1px solid black",
                    height: "380px",
                    width: "415px",
                    opacity: 1,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div style={{  width: "25%" }}>
            <br/>
            <br/>

          <div class="side_panel_background">
            <a class="side_panel_text" href="/terms">
              Terms & Conditions
            </a>
          </div>
          <div class="side_panel_background">
            <a class="side_panel_text" href="./Privacy_Policy.html">
              Privacy Policy
            </a>
          </div>
          <div class="side_panel_background">
            <a class="side_panel_text" href="./Refund_Policy.html">
              Refund Policy
            </a>
          </div>
          <div class="side_panel_background">
            <a class="side_panel_text">Contact Us</a>
          </div>
          <div class="side_panel_active_background">
            <a class="side_panel_active" href="About_Us.html">
              About Us
            </a>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
