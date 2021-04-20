import React from 'react';


const Header = () =>{
    return(
        <div 
        style={{
            width: "100%",
            height: "100%",
            margin: 0,
            padding: 0,
            overflow: "hidden",
          }}
          >
        <div className="t_head"></div>
        <div className="t_head2">
          <div className="row">
            <div className="col-sm-6"></div>
            <div className="col-sm-2">
              <a className="top_div font" href="">
                Corporate Training
              </a>
            </div>
            <div className="col-sm-2">
              <a href="./becomeMentor" className="top_div font">
                Become A Mentor
              </a>
            </div>
            <div className="col-sm-2">
              <a href="./careerTool" className="top_div font">
                Career Tools
              </a>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a
            style={{ marginLeft: "8%", marginRight: "50px" }}
            className="navbar-brand"
            href="/"
          >
            <img src="/img/Edukayshun.png" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li
                className="nav-item active"
                style={{ marginTop: "2%", marginRight: "0%" }}
              >
                <img src="/img/Live Workshops Icon.png" />
              </li>
              <li className="nav-item">
                <a className="nav-link font" href="#">
                  Live Workshps
                </a>
              </li>
  
              <li
                className="nav-item active"
                style={{ marginTop: "2%", marginRight: "0%" }}
              >
                <i className="fad fa-search" style={{ color: "#3E3358" }}></i>
              </li>
              <li className="nav-item">
                <a className="nav-link font" href="career_tool.html">
                  Career Tools
                </a>
              </li>
            </ul>
            <form
              className="form-inline my-2 my-lg-0"
              style={{ marginRight: "10%" }}
            >
              <button
                className="btn-sm btn"
                style={{
                  color: "#000",
                  backgroundColor: "#fff",
                  marginRight: "25px",
                }}
              >
                <div className="row">
                  <div>
                    <i className="far fa-shopping-cart fa-2x"></i>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#118AEF",
                      borderRadius: "15px",
                      height: "18px",
                      width: "18px",
                      color: "#fff",
                      marginLeft: "-8px",
                      marginTop: "-7px",
                    }}
                  >
                    <p style={{ marginTop: "-2px" }}>5</p>
                  </div>
                </div>
              </button>
              <a
                href="./login"
                className="btn font"
                style={{
                  borderColor: "#000",
                  backgroundColor: "#fff",
                  fontFamily: "'Raleway',sans sarif",
                  marginRight: "20px",
                  fontStyle: "normal",
                  fontize: "14px",
                  color: "#000",
                }}
              >
                <i className="fal fa-sign-in"></i>
                <span className="font" style={{ marginLeft: "5px" }}>
                  Log in
                </span>
              </a>
              <a
                className="btn font"
                style={{
                  backgroundColor: "#C1272D",
                  fontFamily: "'Raleway',sans sarif",
                  color: "#fff",
                  fontStyle: "normal",
                  fontSize: "14px",
                }}
                href='./register'
              >
                <i className="fal fa-user-plus"></i>
                <span className="font" style={{ marginLeft: "5px" }}>
                  Sign up
                </span>
              </a>
            </form>
          </div>
        </nav>
        </div>
    )
}

export default Header;