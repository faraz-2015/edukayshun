import React from "react";
import Footer from "../components/Footer";
import Header from '../components/Header';

const Homepage = () => {
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
      <div style={{ backgroundImage: "url(/img/lTLiAbannerheader.png)" }}>
        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm"></div>
          <div className="col-sm-6">
            <div id="Edukayshun_Logo">
              <img src="/img/Edukayshun Logo.png" alt="" />
            </div>
            <div id="logo_line" style={{}}></div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm"></div>
          <div className="col-sm-6" style={{ textAlign: "center" }}>
            <div id="A_Quality_Place__For_Learning">
              <span className="font">A Quality Place </span>
              <br />
              <span style={{ fontSize: "50px" }}>For Learning</span>
            </div>
          </div>
        </div>
        <div class="row" style={{ marginTop: "10px" }}>
          <div class="col-sm"></div>
          <div class="col-sm"></div>
          <div class="col-sm-5">
            <div class="form-group" style={{ marginLeft: "28%", width: "60%" }}>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Explore Courses Workshops and more"
              />
            </div>
            <span style={{ marginLeft: "32%", color: "#fff" }}>
              or Browse All Workshop and Programs
            </span>
          </div>
          <div
            class="col-sm-1"
            style={{
              textAlign: "left",
              marginRight: "80px",
              marginLeft: "-80px",
              marginBottom: 36,
            }}
          >
            <button
              type="button"
              class="btn btn-danger"
              style={{ backgroundColor: "#C1272D" }}
            >
              Search
            </button>
          </div>
        </div>
        <br />
      </div>
      <div>
        <div id="Partnering_with_worlds_leading">
          <span>Partnering with world's leading cloud computing companies</span>
        </div>
        <div
          className="w-100"
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "70%",
            }}
          >
            <img src="/img/amazon-web-services Logo.png" alt="" />
            <img src="/img/Microsoft Logo.png" alt="" />
            <img src="/img/Google Cloud Logo.png" alt="" />

            <img src="/img/microsoft Azure Logo.png" alt="" />
          </div>
        </div>
      </div>
      <br />
      <div
        style={{
          height: "433px",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#F8FBFF",
        }}
      >
        <div id="exp_now" className="row" style={{ marginRight: "10%" }}>
          <div className="col-sm-5" style={{ height: 300, marginRight: "7%" }}>
            <div id="Explore_Our_Career_Tools">
              <span className="t1">Explore Our</span>
              <br />
              <span
                style={{ fontStyle: "normal", fontWeight: "bold" }}
                className="t2"
              >
                Career Tools!
              </span>
            </div>
            <div id="Explore_our_career_tools__and_">
              <span className="t3">
                Explore our career tools <br />
                and stand out of the crowd
              </span>
            </div>
            <div id="get_now_btn">
              <button
                type="button"
                className="btn btn-danger"
                style={{
                  backgroundColor: "#C1272D",
                  width: "291px",
                  height: "58px",
                  textAlign: "center",
                  fontFamily: "Raleway",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "22px",
                  borderRadius: "10px",
                }}
              >
                Get Started Now
              </button>
            </div>
          </div>
          <div className="col-sm-6">
            <div style={{ boxShadow: "#3E3358 -10px 0px 0px 0px" }}>
              <div id="card_1" className="card mb-2 shadow-sm">
                <div className="card-body position-relative">
                  <div className="row">
                    <div className="col-2" style={{ margin: "auto" }}>
                      <img src="/img/Resume Building Icon.png" alt="" />
                    </div>
                    <div className="col-1"></div>
                    <div className="col-8" style={{ textAlign: "left" }}>
                      <div>
                        <span
                          className="font"
                          style={{
                            font:
                              " var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 22px/26px var(--unnamed-font-family-raleway)",
                            letterSpacing:
                              " var(--unnamed-character-spacing-0)",
                            textAlign: "left",
                            font: "normal normal bold 22px/26px Raleway",
                            letterSpacing: "0px",
                            color: "#3E3358",
                            opacity: "1",
                          }}
                        >
                          Resume Building
                        </span>
                      </div>
                      <div
                        style={{
                          font:
                            " var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 12px/14px var(--unnamed-font-family-raleway)",
                          letterSpacing: "var(--unnamed-character-spacing-0)",
                          textAlign: "left",
                          font: "normal normal  12px/14px Raleway",
                          letterSpacing: "0px",
                          color: "#3E3358",
                          opacity: 1,
                          marginTop: "10px",
                        }}
                      >
                        <span
                          className="font"
                          style={{
                            font:
                              " var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 12px/14px var(--unnamed-font-family-raleway)",
                            letterSpacing: "var(--unnamed-character-spacing-0)",
                            textAlign: "left",
                            font: "normal normal  12px/14px Raleway",
                            letterSpacing: "0px",
                            color: "#3E3358",
                            opacity: 1,
                          }}
                        >
                          To get the right job you need to showcase your skills.
                          We help you connect and build your profile to get you
                          market ready.
                        </span>
                      </div>

                      <div id="hide_price_1">
                        <div style={{ textAlign: "right" }}>
                          <h6
                            style={{
                              font:
                                " var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 29px/59px Work Sans",
                              letterSpacing:
                                "var(--unnamed-character-spacing-0)",
                              textAlign: "right",
                              font: "normal normal normal 22px Work Sans",
                              letterSpacing: "0px",
                              color: "#3E3358",
                              opacity: 1,
                            }}
                          >
                            Rs. 1,500/-
                          </h6>
                        </div>
                        <div className="row">
                          <div>
                            <button
                              type="button"
                              className="btn"
                              style={{
                                backgroundColor: "#478CE3",
                                color: "#fff",
                                font: "Raleway",
                              }}
                            >
                              <i
                                className="fal fa-credit-card"
                                style={{
                                  marginRight: "15px",
                                  borderRadius: "10px",
                                }}
                              ></i>
                              Buy Now
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="btn "
                              style={{
                                backgroundColor: "#FFFFFF",
                                color: "black",
                                borderColor: "black",
                                marginLeft: "10px",
                                font: "Raleway",
                              }}
                            >
                              <i
                                className="fal fa-shopping-cart"
                                style={{
                                  marginRight: "10px",
                                  borderRadius: "10px",
                                }}
                              ></i>
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-1" style={{ margin: "auto" }}>
                      <i
                        className="fas fa-arrow-circle-right fa-3x"
                        style={{ color: "#118AEF" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div style={{ boxShadow: "#3E3358 -10px 0px 0px 0px " }}>
              <div id="card_2" className="card mb-2 shadow-sm">
                <div className="card-body position-relative">
                  <div className="row">
                    <div className="col-2" style={{ margin: "auto" }}>
                      <img src="/img/1-1 Mentorship Icon.png" alt="" />
                    </div>
                    <div className="col-1"></div>
                    <div className="col-8" style={{ textAlign: "left" }}>
                      <div
                        style={{
                          font:
                            " var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 22px/26px var(--unnamed-font-family-raleway)",
                          letterSpacing: "var(--unnamed-character-spacing-0)",
                          textAlign: "left",
                          font: "normal normal bold 22px/26px Raleway",
                          letterSpacing: "0px",
                          color: "#3E3358",
                          opacity: 1,
                        }}
                      >
                        <span>1-1 Mentorship</span>
                      </div>
                      <div
                        style={{
                          font:
                            "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 12px/14px var(--unnamed-font-family-raleway)",
                          letterSpacing: "var(--unnamed-character-spacing-0)",
                          textAlign: "left",
                          font: "normal normal normal 12px/14px Raleway",
                          letterSpacing: "0px",
                          color: "#3E3358",
                          opacity: 1,
                          marginTop: "10px",
                        }}
                      >
                        <span>
                          Mentor helps you understand the market trend. You can
                          talk to a mentor and get your questions answered.
                          Whether it's an interview or changing your career to
                          cloud. Talk Today.
                        </span>
                      </div>
                      <div id="hide_price_2">
                        <div style={{ textAlign: "right" }}>
                          <h6
                            style={{
                              font:
                                "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 29px/59px Work Sans",
                              letterSpacing:
                                "var(--unnamed-character-spacing-0)",
                              textAlign: "right",
                              font: "normal normal normal 22px Work Sans",
                              letterSpacing: "0px",
                              color: "#3E3358",
                              opacity: 1,
                            }}
                          >
                            Rs. 2,500/- Hour
                          </h6>
                        </div>
                        <div className="row">
                          <div>
                            <button
                              type="button"
                              className="btn"
                              style={{
                                backgroundColor: "#478CE3",
                                color: "#fff",
                                font: "Raleway",
                              }}
                            >
                              <i
                                className="fal fa-credit-card"
                                style={{ marginRight: "15px" }}
                              ></i>
                              Buy Now
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="btn "
                              style={{
                                backgroundColor: "#FFFFFF",
                                color: "#000",
                                borderColor: "#000",
                                marginLeft: "10px",
                                font: "Raleway",
                              }}
                            >
                              <i
                                className="fal fa-shopping-cart"
                                style={{ marginRight: "10px" }}
                              ></i>
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-1" style={{ margin: "auto" }}>
                      <i
                        className="fas fa-arrow-circle-right fa-3x"
                        style={{ color: "#118AEF" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-sm-1"></div> */}
        </div>
      </div>
      <br />
      <div>
        <div id="Take_Steps_Towards_a_Successfu">
          <span>Take Steps, </span>
          <span style={{ fontStyle: "normal", fontWeight: "normal" }}>
            Towards a Successful Career with us
          </span>
        </div>
        <div id="Learn_Anytime_Anywhere">
          <span>Learn Anytime, Anywhere</span>
        </div>
        <div className="row" style={{ marginTop: "10px" }}>
          <div className="col-2"></div>

          <div className="col-2" style={{ textAlign: "center" }}>
            <i className="fas fa-badge-check " style={{ color: "#789C82" }}></i>
            <span className="green_tick_text">Learn From Industry Experts</span>
          </div>
          <div className="col-2" style={{ textAlign: "center" }}>
            <i className="fas fa-badge-check " style={{ color: "#789C82" }}></i>
            <span className="green_tick_text">Clear Doubts with Trainers</span>
          </div>
          <div className="col-2" style={{ textAlign: "center" }}>
            <i className="fas fa-badge-check " style={{ color: "#789C82" }}></i>
            <span className="green_tick_text">100% Online Program</span>
          </div>
          <div className="col-2" style={{ textAlign: "center" }}>
            <i className="fas fa-badge-check " style={{ color: "#789C82" }}></i>
            <span className="green_tick_text font">
              Certification of Completition
            </span>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
      <br />
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-lg-4">
                  <div className="card" style={{ marginLeft: "30px" }}>
                    <img
                      src="/img/gettyimages-945337412-612x612.png"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h4 className="card-title car_card_title">
                        Workshop on AWS Solutions Architect
                      </h4>
                      <br />
                      <br />
                      <p className="card-text" car_card_text>
                        <i className="fal fa-calendar"></i> Duration: 1 Month(s)
                      </p>
                      <br />
                      <div className="row">
                        <div style={{ margin: "auto" }}>
                          <img
                            src="/img/aws_logo.png"
                            alt=""
                            width="60"
                            height="60"
                          />
                        </div>
                        <div style={{ margin: "auto" }}>
                          <button
                            type="button"
                            className="btn car_btn"
                            style={{ borderRadius: "10px" }}
                          >
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-4">
                  <div className="card" style={{ margin: "auto" }}>
                    <img
                      src="/img/ID4d671f202f175a16771cf1afe320.png"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h4 className="card-title car_card_title">
                        Workshop on Microsoft Azure
                      </h4>
                      <br />
                      <br />
                      <p className="card-text" car_card_text>
                        <i className="fal fa-calendar"></i> Duration: 1 Month(s)
                      </p>
                      <br />

                      <div className="row">
                        <div style={{ margin: "auto" }}>
                          <img
                            src="/img/azure_logo.png"
                            alt=""
                            width="100"
                            height="60"
                          />
                        </div>
                        <div style={{ margin: "auto" }}>
                          <button
                            type="button"
                            className="btn car_btn"
                            style={{ borderRadius: "10px" }}
                          >
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-4">
                  <div className="card" style={{ margin: "auto" }}>
                    <img
                      src="/img/gettyimages-1252898695-612x612.png"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h4 className="card-title car_card_title">
                        Workshop on Google Cloud Platform Cloud Architect
                      </h4>
                      <br />
                      <p className="card-text" car_card_text>
                        <i className="fal fa-calendar"></i> Duration: 1 Month(s)
                      </p>
                      <br />
                      <div className="row">
                        <div style={{ margin: "auto" }}>
                          <img
                            src="/img/google_cloud_logo.webp"
                            alt=""
                            width="60"
                            height="60"
                          />
                        </div>
                        <div style={{ margin: "auto" }}>
                          <button
                            type="button"
                            className="btn car_btn"
                            style={{ borderRadius: "10px" }}
                          >
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true">
            <i
              className="fad fa-arrow-circle-left fa-3x"
              style={{ color: "#789C82" }}
            ></i>
          </span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true">
            <i
              className="fad fa-arrow-circle-right fa-3x"
              style={{ color: "#789C82" }}
            ></i>
          </span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <br />
      <div
        style={{
          backgroundColor: "#F1F6FC",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <div id="How_Edukayshun_Works_">
            <span style={{ marginTop: "30px" }}>How Edukayshun Works ?</span>
          </div>

          <br />

          <div class="row">
            {/* <div class="col-3"></div> */}

            <div id="why_edu_steps" style={{ border: "1px solid blacks" }}>
              <img src="/img/steps.PNG" alt="" />
            </div>
            <div
              id="why_edu_steps_mob"
              class="col-6"
              style={{ marginLeft: "-50px" }}
            >
              <img src="/img/steps_mobile.PNG" alt="" />
            </div>
            {/* <div class="col-3"></div> */}
          </div>
        </div>
      </div>
      <div
        style={{
          left: "0px",
          height: "99px",
          background:
            "transparent linear-gradient(180deg, #F1F6FC 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box",
          opacity: 1,
        }}
      ></div>
      <div>
        <br />
        <div id="How_Edukayshun_Works_">
          <span style={{ marginTop: "30px" }}>Why Edukayshun ?</span>
        </div>
        <div>
          <div class="row">
            <div class="col-1"></div>
            <div class="col-10">
              <div class="row">
                <div class="col-4">
                  <div class="card-body position-relative">
                    <div class="row">
                      <div class="col-2" style={{ marginBottom: "50px" }}>
                        <img src="/img/Missed A Class Icon.png" alt="" />
                      </div>
                      <div class="col-10" style={{ textAlign: "left" }}>
                        <div class="why_edu_card_title">
                          <span>WORLD-CLASS FACULTY</span>
                        </div>
                        <div class="why_edu_card_text">
                          <span>
                            Learn from the accomplished teachers with an
                            in-depth understanding of the subject.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-4">
                  <div class="card-body position-relative">
                    <div class="row">
                      <div class="col-2" style={{ marginBottom: "50px" }}>
                        <img src="/img/Missed A Class Icon.png" alt="" />
                      </div>
                      <div class="col-10" style={{ textAlign: "left" }}>
                        <div class="why_edu_card_title">
                          <span>CUTTING EDGE CURRICULUM</span>
                        </div>
                        <div class="why_edu_card_text">
                          <span>
                            Educate yourself with the top-notch study material
                            designed by the EXPERTS.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-4">
                  <div class="card-body position-relative">
                    <div class="row">
                      <div class="col-2" style={{ marginBottom: "50px" }}>
                        <img src="/img/Missed A Class Icon.png" alt="" />
                      </div>
                      <div class="col-10" style={{ textAlign: "left" }}>
                        <div class="why_edu_card_title">
                          <span>LIVE CLASSES</span>
                        </div>
                        <div class="why_edu_card_text">
                          <span>
                            Learn concepts, practice questions & get your doubts
                            cleared instantly in the LIVE Classes.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-1"></div>
          </div>
          <br />
          <div class="row">
            <div class="col-1"></div>
            <div class="col-10">
              <div class="row">
                <div class="col-4">
                  <div class="card-body position-relative">
                    <div class="row">
                      <div class="col-2" style={{ marginBottom: "50px" }}>
                        <img src="/img/Missed A Class Icon.png" alt="" />
                      </div>
                      <div class="col-10" style={{ textAlign: "left" }}>
                        <div class="why_edu_card_title">
                          <span>AFFORDABLE FEE STRUCTURE</span>
                        </div>
                        <div class="why_edu_card_text">
                          <span>
                            Learn from the best in the industry with an
                            affordable payment plan.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-4">
                  <div class="card-body position-relative">
                    <div class="row">
                      <div class="col-2" style={{ marginBottom: "50px" }}>
                        <img src="/img/Missed A Class Icon.png" alt="" />
                      </div>
                      <div class="col-10" style={{ textAlign: "left" }}>
                        <div class="why_edu_card_title">
                          <span>RECORDED SESSIONS</span>
                        </div>
                        <div class="why_edu_card_text">
                          <span>
                            Missed a class ? No problem. We record each session
                            for your convenience.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-4">
                  <div class="card-body position-relative">
                    <div class="row">
                      <div class="col-2" style={{ marginBottom: "50px" }}>
                        <img src="/img/Missed A Class Icon.png" alt="" />
                      </div>
                      <div class="col-10" style={{ textAlign: "left" }}>
                        <div class="why_edu_card_title">
                          <span>LEARN ANYTIME ANYWHERE</span>
                        </div>
                        <div class="why_edu_card_text">
                          <span>
                            Learn at your own pace through our easy to navigate
                            platform.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-1"></div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#F9FCFF" }}>
        <div>
          <div id="exp_now" class="row">
            <div class="col-sm-4" style={{ marginTop: "7%" }}>
              <div id="Employee_and_Team__Training_So">
                <span>
                  Employee and Team <br />
                  Training Solutions
                </span>
              </div>
              <br />
              <div id="Curriculum_tailored_to_your_co">
                <span>
                  Curriculum tailored to your company, delivered with
                  white-glove service and support
                </span>
              </div>
              <br />
              <div>
                <button
                  type="button"
                  class="btn "
                  style={{
                    backgroundColor: "#3E3358",
                    width: "291px",
                    color: " #fff",
                    height: "58px",
                    textAlign: "center",
                    fontFamily: "Raleway",
                    fontSize: "20px",
                    borderRadius: "10px",
                  }}
                >
                  Request A Free Demo
                </button>
              </div>
              <br />
              <br />
            </div>

            <div
              class="col-sm-7"
              style={{ backgroundImage: "url(/img/World Map Backdrop.png)" }}
            >
              <div id="Student_Trained_By_Us_Working_">
                <span>
                  Student Trained By Us Working with Leading Tech Companies
                </span>
              </div>
              <div class="row" style={{ marginTop: "4%" }}>
                <div
                  class="col-sm-3"
                  style={{
                    background: "#FFFFFF 0% 0% no-repeat padding-box",
                    boxShadow: "0px 4px 14px #000029",
                    borderRadius: "5px",
                    opacity: 1,
                    width: "175px",
                    height: "74px",
                    textAlign: "center",
                  }}
                >
                  <img
                    style={{ marginTop: "10px" }}
                    src="/img/Edukayshun_Companies_Cisco.png"
                    alt=""
                  />
                </div>

                <div class="col-sm-1"></div>
                <div
                  class="col-sm-3"
                  style={{
                    background: "#FFFFFF 0% 0% no-repeat padding-box",
                    boxShadow: "0px 4px 14px #000029",
                    borderRadius: "5px",
                    opacity: 1,
                    width: "175px",
                    height: "74px",
                    textAlign: "center",
                  }}
                >
                  <img
                    style={{ marginTop: "10px" }}
                    src="/img/Edukayshun_Companies_hanu.png"
                    alt=""
                  />
                </div>

                <div class="col-sm-1"></div>
                <div
                  class="col-sm-3"
                  style={{
                    background: "#FFFFFF 0% 0% no-repeat padding-box",
                    boxShadow: "0px 4px 14px #000029",
                    borderRadius: "5px",
                    opacity: 1,
                    width: "175px",
                    height: "74px",
                    textAlign: "center",
                  }}
                >
                  <img
                    style={{ marginTop: "10px" }}
                    src="/img/Edukayshun_Companies_HCL.png"
                    alt=""
                  />
                </div>
              </div>

              <div class="row" style={{ marginTop: "5%" }}>
                <div
                  class="col-sm-3"
                  style={{
                    background: "#FFFFFF 0% 0% no-repeat padding-box",
                    boxShadow: "0px 4px 14px #000029",
                    borderRadius: "5px",
                    opacity: 1,
                    width: "175px",
                    height: "74px",
                    textAlign: "center",
                  }}
                >
                  <img
                    style={{ marginTop: "10px" }}
                    src="/img/Edukayshun_Companies_IBM.png"
                    alt=""
                  />
                </div>

                <div class="col-sm-1"></div>
                <div
                  class="col-sm-3"
                  style={{
                    background: "#FFFFFF 0% 0% no-repeat padding-box",
                    boxShadow: "0px 4px 14px #000029",
                    borderRadius: "5px",
                    opacity: 1,
                    width: "175px",
                    height: "74px",
                    textAlign: "center",
                  }}
                >
                  <img
                    style={{ marginTop: "10px" }}
                    src="/img/Edukayshun_Companies_Logitech.png"
                    alt=""
                  />
                </div>

                <div class="col-sm-1"></div>
                <div
                  class="col-sm-3"
                  style={{
                    background: "#FFFFFF 0% 0% no-repeat padding-box",
                    boxShadow: "0px 4px 14px #000029",
                    borderRadius: "5px",
                    opacity: 1,
                    width: "175px",
                    height: "74px",
                    textAlign: "center",
                  }}
                >
                  <img
                    style={{ marginTop: "10px" }}
                    src="/img/Edukayshun_Companies_Nagarro.png"
                    alt=""
                  />
                </div>
              </div>

              <div class="row" style={{ marginTop: "5%" }}>
                <div
                  class="col-sm-3"
                  style={{
                    background: "#FFFFFF 0% 0% no-repeat padding-box",
                    boxShadow: "0px 4px 14px #000029",
                    borderRadius: "5px",
                    opacity: 1,
                    width: "175px",
                    height: "74px",
                    textAlign: "center",
                  }}
                >
                  <img
                    style={{ marginTop: "10px" }}
                    src="/img/Edukayshun_Companies_Orange.png"
                    alt=""
                  />
                </div>

                <div class="col-sm-1"></div>
                <div
                  class="col-sm-3"
                  style={{
                    background: "#FFFFFF 0% 0% no-repeat padding-box",
                    boxShadow: "0px 4px 14px #000029",
                    borderRadius: "5px",
                    opacity: 1,
                    width: "175px",
                    height: "74px",
                    textAlign: "center",
                  }}
                >
                  <img
                    style={{ marginTop: "10px" }}
                    src="/img/Edukayshun_Companies_Redback_N.png"
                    alt=""
                  />
                </div>

                <div class="col-sm-1"></div>
                <div
                  class="col-sm-3"
                  style={{
                    background: "#FFFFFF 0% 0% no-repeat padding-box",
                    boxShadow: "0px 4px 14px #000029",
                    borderRadius: "5px",
                    opacity: 1,
                    width: "175px",
                    height: "74px",
                    textAlign: "center",
                  }}
                >
                  <img
                    style={{ marginTop: "10px" }}
                    src="/img/Edukayshun_Companies_Symantec.png"
                    alt=""
                  />
                </div>
              </div>

              <br />
            </div>
            <div class="col-sm-1"></div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Homepage;
