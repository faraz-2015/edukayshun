import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Course = () => {
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
      <div
        style={{
          backgroundImage: "url(/img/gettyimages-945337412-612x612_f.png)",
        }}
      >
        <div class="row">
          <div id="course_bg_1" class="col-1"></div>
          <div id="course_bg_2" class="col-3">
            <div id="Workshop_on__AWS_Solutions__Ar">
              <span>Workshop on </span>
              <br />
              <span
                style={{
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "42px",
                }}
              >
                AWS Solutions <br />
                Architect
              </span>
            </div>
            <br />
            <div id="Learn_From_Industry_Experts_ff">
              <i
                class="fas fa-badge-check "
                style={{ color: "#789C82", marginRight: "20px" }}
              ></i>
              <span>Learn From Industry Experts</span>
            </div>
            <br />
            <div id="Learn_From_Industry_Experts_ff">
              <i
                class="fas fa-badge-check "
                style={{ color: "#789C82", marginRight: "20px" }}
              ></i>
              <span>Clear Doubts with Trainers</span>
            </div>
            <br />
            <div id="Learn_From_Industry_Experts_ff">
              <i
                class="fas fa-badge-check "
                style={{ color: "#789C82", marginRight: "20px" }}
              ></i>
              <span>100% Online Program</span>
            </div>
            <br />
            <div id="Learn_From_Industry_Experts_ff">
              <i
                class="fas fa-badge-check "
                style={{ color: "#789C82", marginRight: "20px" }}
              ></i>
              <span>Certification of Completition</span>
            </div>
            <br />
            <br />
            <br />
            <br />
          </div>
          <div id="course_bg_3" class="col-8"></div>
        </div>
      </div>

      <div class="row" style={{ marginTop: "-3%" }}>
        <div class="col-sm-1"></div>
        <div
          class="col-sm-10"
          style={{
            background: "#FFFFFF 0% 0% no-repeat padding-box",
            boxShadow: "0px 3px 6px #00000029",
            borderRadius: "5px",
            opacity: 1,
          }}
        >
          <div class="row">
            <div class="course_nav_txt">
              <span>Description</span>
            </div>
            <div class="course_nav_txt">
              <span>What Will You Learn</span>
            </div>
            <div class="course_nav_txt">
              <span>Prerequisites</span>
            </div>
            <div class="course_nav_txt">
              <span>Course Content</span>
            </div>
            <div class="course_nav_txt">
              <span>Benefits</span>
            </div>
            <div class="course_nav_txt">
              <span>Career Tools</span>
            </div>
            <div class="course_nav_txt">
              <span>FAQs</span>
            </div>
          </div>
        </div>
        <div class="col-sm-1"></div>
      </div>
      <br />
      <br />
      <div class="row">
        <div class="col-sm-1"></div>
        <div class="col-sm-6">
          <div id="Description_fk">
            <span>Description</span>
          </div>
          <br />
          <div id="In_this_AWS_Workshop_you_will_">
            <span>
              In this AWS Workshop, you will learn about Cloud Computing and its
              brief history, introduction to AWS Regions and Availability Zones
              and the basic concepts of AWS Platforms.
            </span>
          </div>

          <br />

          <div
            style={{
              border: "2px solid #118AEF",
              borderRadius: "10px",
              opacity: 1,
            }}
          >
            <div
              id="Description_fk"
              style={{ marginTop: "5%", marginLeft: "5%" }}
            >
              <span>What Will You Learn ?</span>
            </div>

            <br />

            <div class="row">
              <div class="col" style={{ marginLeft: "5%" }}>
                <i class="fal fa-check-circle" style={{ color: "#118AEF" }}></i>
                <span class="points_course">
                  Introduction to Cloud Computing
                </span>
              </div>
              <div class="col">
                <i class="fal fa-check-circle" style={{ color: "#118AEF" }}></i>
                <span class="points_course">
                  Brief History of Cloud Computing
                </span>
              </div>
            </div>
            <br />

            <div class="row">
              <div class="col" style={{ marginLeft: "5%" }}>
                <i class="fal fa-check-circle" style={{ color: "#118AEF" }}></i>
                <span class="points_course">
                  Introduction to AWS Regions and Availability Zones
                </span>
              </div>
              <div class="col">
                <i class="fal fa-check-circle" style={{ color: "#118AEF" }}></i>
                <span class="points_course">
                  Terminology and concepts related to the AWS platform
                </span>
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col" style={{ marginLeft: "5%" }}>
                <i class="fal fa-check-circle" style={{ color: "#118AEF" }}></i>
                <span class="points_course">The Five Pillars of AWS</span>
              </div>
              <div class="col">
                <i class="fal fa-check-circle" style={{ color: "#118AEF" }}></i>
                <span class="points_course">
                  The Basic Concepts of AWS Platforms
                </span>
              </div>
            </div>
            <br />

            <div class="row">
              <div class="col" style={{ marginLeft: "5%" }}>
                <i class="fal fa-check-circle" style={{ color: "#118AEF" }}></i>
                <span class="points_course">
                  How to navigate the AWS Management Console
                </span>
              </div>
              <div class="col">
                <i class="fal fa-check-circle" style={{ color: "#118AEF" }}></i>
                <span class="points_course">
                  Key concepts of AWS security measures and AWS Identity and
                  Access
                </span>
              </div>
            </div>

            <br />

            <div class="row">
              <div class="col" style={{ marginLeft: "5%" }}>
                <i class="fal fa-check-circle" style={{ color: "#118AEF" }}></i>
                <span class="points_course">
                  Understand and use Elastic Load Balancing (distributing
                  traffic)
                </span>
              </div>
              <div class="col">
                <i class="fal fa-check-circle" style={{ color: "#118AEF" }}></i>
                <span class="points_course">
                  Introduction to AWS Management tools such as CloudWatch and
                  DynamoDB
                </span>
              </div>
            </div>

            <br />

            <div class="row">
              <div class="col" style={{ marginLeft: "5%" }}>
                <i class="fal fa-check-circle" style={{ color: "#118AEF" }}></i>
                <span class="points_course">
                  AWS Management and Governance Practices
                </span>
              </div>
              <div class="col">
                <i class="fal fa-check-circle" style={{ color: "#118AEF" }}></i>
                <span class="points_course">
                  Creating architecture that highlights reliability, operational
                  excellence
                </span>
              </div>
            </div>

            <br />

            <div class="row">
              <div class="col" style={{ marginLeft: "5%" }}>
                <i class="fal fa-check-circle" style={{ color: "#118AEF" }}></i>
                <span class="points_course">
                  Define a solution using architectural design principles based
                  on customer requirements
                </span>
              </div>
              <div class="col">
                <i class="fal fa-check-circle" style={{ color: "#118AEF" }}></i>
                <span class="points_course">
                  Design and deploy dynamically scalable, highly available,
                  fault-tolerant and reliable applications on AWS
                </span>
              </div>
            </div>

            <br />

            <div class="row">
              <div class="col" style={{ marginLeft: "5%" }}>
                <i class="fal fa-check-circle" style={{ color: "#118AEF" }}></i>
                <span class="points_course">
                  Design and deploy enterprise-wide scalable operations on AWS
                </span>
              </div>
              <div class="col">
                <i class="fal fa-check-circle" style={{ color: "#118AEF" }}></i>
                <span class="points_course">
                  Migrate complex, multi-tier applications on AWS
                </span>
              </div>
            </div>

            <br />

            <div class="row">
              <div class="col" style={{ marginLeft: "5%" }}>
                <i class="fal fa-check-circle" style={{ color: "#118AEF" }}></i>
                <span class="points_course">
                  Estimate AWS usage costs and identify operational cost control
                  mechanisms
                </span>
              </div>
              <div class="col"></div>
            </div>
          </div>
        </div>
        <div class="col-sm-1"></div>
        <div class="col-sm-3" style={{ marginTop: "-3%" }}>
          <div style={{ textAlign: "left" }}>
            <img src="/img/aws_logo.png" alt="" height="170" width="170" />
          </div>
          <br />
          <div id="Live_Training" style={{ marginTop: "5%" }}>
            <span>Live Training</span>
          </div>
          <br />
          <div
            style={{
              font:
                "var(--unnamed-font-style-normal) normal 600 16px/19px Work Sans",
              letterSpacing: "var(--unnamed-character-spacing-0)",
              textAlign: "left",
              font: "normal normal 600 16px/19px Work Sans",
              letterSpacing: "0px",
              color: "#2E3847",
              opacity: 1,
            }}
          >
            <span
              style={{
                font:
                  "var(--unnamed-font-style-normal) normal 600 16px/19px Work Sans",
                letterSpacing: "var(--unnamed-character-spacing-0)",
                textAlign: "left",
                font: "normal normal 600 16px/19px Work Sans",
                letterSpacing: "0px",
                color: "#2E3847",
                opacity: 1,
              }}
              className="font1"
            >
              • Date: April 03, 2021
              <br /> • Time: 1900 <br /> • Duration: 1 Month <br /> • Next
              Batch: May 01,2021
            </span>
          </div>
          <br />
          <div id="Prerequisites">
            <span>Prerequisites</span>
          </div>
          <br />
          <div id="_Anyone_who_has_a_desire_to_le">
            <p id="_Anyone_who_has_a_desire_to_le">
              • Anyone who has a desire to learn AWS and get Hands-on experience
              using their cloud platform.
            </p>
          </div>
          <br />
          <div id="Benefits">
            <span>Benefits</span>
          </div>
          <br />
          <div id="_Learn_cloud_computing__its_br">
            <span id="_Learn_cloud_computing__its_br">
              • Learn cloud computing & its brief history.
              <br />• Learn the Fundamental Concepts and terminology of AWS
              Platforms.
              <br />• You will know how to navigate around the AWS Management
              Console.
              <br />• You will become familiar with the AWS Security Measures
              and Identity and Access Management
              <br />• You will learn how to identify elastic and scalable
              compute solutions for a workload and how to select high-performing
              and scalable storage solutions for a workload.
              <br />• Understand and use Elastic Load Balancing (distributing
              traffic).
              <br />• AWS Management and Governance Practices.
              <br />• You will learn how to identify and select appropriate data
              security options.
              <br />• You will be equipped with migration tools and services and
              strategize for migrating existing on-premises workloads to the
              cloud.
              <br />• Acquire knowledge about the pricing models for a solution
              and how to optimize cost and identify opportunities to reduce cost
              in an existing solution.
            </span>
          </div>
        </div>
        <div class="col-sm-1"></div>
      </div>
      <br />
      <div class="row" style={{ padding: "2%" }}>
        <div class="col-sm-1"></div>
        <div id="Job_Titles__Designations" class="col-sm-3">
          <span>Job Titles & Designations</span>
        </div>
        <div id="Annual_Salary" class="col-sm-3">
          <span>Annual Salary</span>
        </div>
        <div id="Hiring_Companies" class="col-sm-4">
          <span>Hiring Companies</span>
        </div>
        <div class="col-sm-1"></div>
      </div>
      <div class="row">
        <div class="col-sm-1"></div>
        <div
          class="col-sm-10"
          style={{
            background: "#FFFFFF 0% 0% no-repeat padding-box",
            boxShadow: "0px 3px 6px #00000029",
            border: "2px solid #118AEF",
            borderRadius: "5px",
            opacity: 1,
          }}
        >
          <div class="row">
            <div
              class="col-sm-4"
              style={{
                textAlign: "center",
                marginTop: "5%",
                marginBottom: "5%",
              }}
            >
              <div id="Cloud_Solution_Architect">
                <span>Cloud Solution Architect</span>
              </div>
              <div id="Cloud_Administrator">
                <span>Cloud Administrator</span>
              </div>
              <div id="Cloud_Developer">
                <span>Cloud Developer</span>
              </div>
            </div>
            <div class="col-sm-3">
              <div
                class="halves-circle"
                style={{
                  marginLeft: "15%",
                  marginTop: "5%",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    font:
                      "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 12px/14px var(--unnamed-font-family-raleway)",
                    letterSpacing: "var(--unnamed-character-spacing-0)",
                    textAlign: "center",
                    font: "normal normal bold 16px Raleway",
                    letterSpacing: "0px",
                    color: "#2E3847",
                    opacity: 1,
                    marginTop: "25%",
                  }}
                >
                  <span className="font">Average</span>
                </div>
                <div
                  style={{
                    font:
                      "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 12px/14px var(--unnamed-font-family-raleway)",
                    letterSpacing: "var(--unnamed-character-spacing-0)",
                    textAlign: "center",
                    font: "normal normal bold 12px/14px Work Sans",
                    letterSpacing: "0px",
                    color: "#2E3847",
                    opacity: 1,
                  }}
                >
                  <span className="font1">₹16L</span>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-6">
                  <div
                    style={{
                      font:
                        "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 12px/14px var(--unnamed-font-family-raleway)",
                      letterSpacing: "var(--unnamed-character-spacing-0)",
                      textAlign: "center",
                      font: " normal normal bold 12px/14px Raleway",
                      letterSpacing: "0px",
                      color: "#2E3847",
                      opacity: 1,
                    }}
                  >
                    <span className="font">Minimum</span>
                  </div>
                  <div
                    style={{
                      font:
                        "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 12px/14px var(--unnamed-font-family-raleway)",
                      letterSpacing: "var(--unnamed-character-spacing-0)",
                      textAlign: "center",
                      font: "normal normal bold 12px/14px Work Sans",
                      letterSpacing: "0px",
                      color: "#2E3847",
                      opacity: 1,
                    }}
                  >
                    <span className="font1">₹6.6L</span>
                  </div>
                </div>
                <div class="col-sm-6" style={{ marginLeft: "-5%;" }}>
                  <div
                    style={{
                      font:
                        "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 12px/14px var(--unnamed-font-family-raleway)",
                      letterSpacing: "var(--unnamed-character-spacing-0)",
                      textAlign: "center",
                      font: " normal normal bold 12px/14px Raleway",
                      letterSpacing: "0px",
                      color: "#2E3847",
                      opacity: 1,
                    }}
                  >
                    <span className="font">Maximum</span>
                  </div>
                  <div
                    style={{
                      font:
                        "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 12px/14px var(--unnamed-font-family-raleway)",
                      letterSpacing: "var(--unnamed-character-spacing-0)",
                      textAlign: "center",
                      font: "normal normal bold 12px/14px  Work Sans",
                      letterSpacing: "0px",
                      color: "#2E3847",
                      opacity: 1,
                    }}
                  >
                    <span className="font">₹33L</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-5" style={{ margin: "auto" }}>
              <div class="row" style={{ margin: "auto" }}>
                <div class="col-sm-6">
                  <div style={{ margin: "20px" }}>
                    <img src="/img/Edukayshun_Companies_IBM_gct.png" alt="" />
                  </div>
                  <div style={{ margin: "20px" }}>
                    <img
                      src="/img/Edukayshun_Companies_Orange_gcu.png"
                      alt=""
                    />
                  </div>
                </div>
                <div class="col-sm-6" style={{ margin: "auto" }}>
                  <div style={{ margin: "20px" }}>
                    <img src="/img/Edukayshun_Companies_HCL_gcs.png" alt="" />
                  </div>
                  <div style={{ margin: "20px" }}>
                    <img
                      src="/img/Edukayshun_Companies_Nagarro_gcv.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-1"></div>
      </div>
      <br />
      <br />
      <div class="row">
        <div class="col-sm-1"></div>
        <div class="col-sm-6">
          <div id="Course_Content">
            <span>Course Content</span>
          </div>
          <br />
          <div id="We_enhance_and_enrich_our_teac">
            <span>
              We enhance and enrich our teaching experience with a structured
              curriculum. With custom tailor made curriculum designed by
              industry experts, bringing a cohesive approach and connecting all
              the relevant topics with links between the subject areas while
              retaining a core emphasis on the key skills
            </span>
          </div>
          <br />
          <div
            style={{
              background: "#F1F6FC 0% 0% no-repeat padding-box",
              boxShadow: "0px 3px 6px #00000029",
              borderRadius: "5px",
              opacity: 1,
            }}
          >
            <div class="row" style={{ height: "50px" }}>
              <div class="col-sm-1"></div>
              <div class="col-sm-9">
                <div
                  id="Module_1_Cloud_Computing_A_Bri_fw"
                  class="course_modules"
                >
                  <span>
                    Module 1: Cloud Computing: A Brief history and basic
                    concept.
                  </span>
                </div>
              </div>

              <div
                class="col-sm-2"
                style={{ textAlign: "center", marginTop: "2%" }}
              >
                <i class="fal fa-plus" style={{ color: "#118AEF" }}></i>
              </div>
            </div>
          </div>

          <br />
          <div
            style={{
              background: "#F1F6FC 0% 0% no-repeat padding-box",
              boxShadow: "0px 3px 6px #00000029",
              borderRadius: "5px",
              opacity: 1,
            }}
          >
            <div class="row" style={{ height: "50px" }}>
              <div class="col-sm-1"></div>
              <div class="col-sm-9">
                <div id="Module_2_AWS_Regions_and_Avail" class="course_modules">
                  <span>Module 2: AWS Regions and Availability Zones.</span>
                </div>
              </div>

              <div
                class="col-sm-2"
                style={{ textAlign: "center", marginTop: "2%" }}
              >
                <i class="fal fa-plus" style={{ color: "#118AEF" }}></i>
              </div>
            </div>
          </div>
          <br />
          <div
            style={{
              background: "#F1F6FC 0% 0% no-repeat padding-box",
              boxShadow: "0px 3px 6px #00000029",
              borderRadius: "5px",
              opacity: 1,
            }}
          >
            <div class="row" style={{ height: "50px" }}>
              <div class="col-sm-1"></div>
              <div class="col-sm-9">
                <div
                  id="Module_1_Cloud_Computing_A_Bri_fw"
                  class="course_modules"
                >
                  <span>
                    Module 1: Cloud Computing: A Brief history and basic
                    concept.
                  </span>
                </div>
              </div>

              <div
                class="col-sm-2"
                style={{ textAlign: "center", marginTop: "2%" }}
              >
                <i class="fal fa-plus" style={{ color: "#118AEF" }}></i>
              </div>
            </div>
          </div>

          <br />
          <div
            style={{
              background: "#F1F6FC 0% 0% no-repeat padding-box",
              boxShadow: "0px 3px 6px #00000029",
              borderRadius: "5px",
              opacity: 1,
            }}
          >
            <div class="row" style={{ height: "50px" }}>
              <div class="col-sm-1"></div>
              <div class="col-sm-9">
                <div id="Module_2_AWS_Regions_and_Avail" class="course_modules">
                  <span>Module 2: AWS Regions and Availability Zones.</span>
                </div>
              </div>

              <div
                class="col-sm-2"
                style={{ textAlign: "center", marginTop: "2%" }}
              >
                <i class="fal fa-plus" style={{ color: "#118AEF" }}></i>
              </div>
            </div>
          </div>
          <br />
          <div
            style={{
              background: "#F1F6FC 0% 0% no-repeat padding-box",
              boxShadow: "0px 3px 6px #00000029",
              borderRadius: "5px",
              opacity: 1,
            }}
          >
            <div class="row" style={{ height: "50px" }}>
              <div class="col-sm-1"></div>
              <div class="col-sm-9">
                <div
                  id="Module_1_Cloud_Computing_A_Bri_fw"
                  class="course_modules"
                >
                  <span>
                    Module 1: Cloud Computing: A Brief history and basic
                    concept.
                  </span>
                </div>
              </div>

              <div
                class="col-sm-2"
                style={{ textAlign: "center", marginTop: "2%" }}
              >
                <i class="fal fa-plus" style={{ color: "#118AEF" }}></i>
              </div>
            </div>
          </div>

          <br />
          <div
            style={{
              background: "#F1F6FC 0% 0% no-repeat padding-box",
              boxShadow: "0px 3px 6px #00000029",
              borderRadius: "5px",
              opacity: 1,
            }}
          >
            <div class="row" style={{ height: "50px" }}>
              <div class="col-sm-1"></div>
              <div class="col-sm-9">
                <div id="Module_2_AWS_Regions_and_Avail" class="course_modules">
                  <span>Module 2: AWS Regions and Availability Zones.</span>
                </div>
              </div>

              <div
                class="col-sm-2"
                style={{ textAlign: "center", marginTop: "2%" }}
              >
                <i class="fal fa-plus" style={{ color: "#118AEF" }}></i>
              </div>
            </div>
          </div>
          <br />
          <div
            style={{
              background: "#F1F6FC 0% 0% no-repeat padding-box",
              boxShadow: "0px 3px 6px #00000029",
              borderRadius: "5px",
              opacity: 1,
            }}
          >
            <div class="row" style={{ height: "50px" }}>
              <div class="col-sm-1"></div>
              <div class="col-sm-9">
                <div
                  id="Module_1_Cloud_Computing_A_Bri_fw"
                  class="course_modules"
                >
                  <span>
                    Module 1: Cloud Computing: A Brief history and basic
                    concept.
                  </span>
                </div>
              </div>

              <div
                class="col-sm-2"
                style={{ textAlign: "center", marginTop: "2%" }}
              >
                <i class="fal fa-plus" style={{ color: "#118AEF" }}></i>
              </div>
            </div>
          </div>

          <br />
          <div
            style={{
              background: "#F1F6FC 0% 0% no-repeat padding-box",
              boxShadow: "0px 3px 6px #00000029",
              borderRadius: "5px",
              opacity: 1,
            }}
          >
            <div class="row" style={{ height: "50px" }}>
              <div class="col-sm-1"></div>
              <div class="col-sm-9">
                <div id="Module_2_AWS_Regions_and_Avail" class="course_modules">
                  <span>Module 2: AWS Regions and Availability Zones.</span>
                </div>
              </div>

              <div
                class="col-sm-2"
                style={{ textAlign: "center", marginTop: "2%" }}
              >
                <i class="fal fa-plus" style={{ color: "#118AEF" }}></i>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-4">
          <div style={{ marginTop: "15%", marginLeft: "15%" }}>
            <div id="card_1" class="card mb-2 shadow-sm">
              <div class="card-body position-relative">
                <div class="col-12">
                  <div id="Become_A_Mentor_ghw">
                    <span>Request More Information</span>
                  </div>
                  <br />
                  <div>
                    <input
                      type="text"
                      class="form-control"
                      id=""
                      placeholder="Name*"
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
                      placeholder="Email Address*"
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
                      type="number"
                      class="form-control"
                      id=""
                      placeholder="Phone Number*"
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
                  <div>
                    <span
                      style={{
                        font:
                          "var(--unnamed-font-style-normal) normal medium 14px/16px var(--unnamed-font-family-raleway)",
                        letterSpacing: "var(--unnamed-character-spacing-0)",
                        textAlign: "left",
                        font: "normal normal medium 14px/16px Raleway",
                        letterSpacing: "0px",
                        color: "#707070",
                        opacity: 1,
                        marginLeft: "3%",
                      }}
                      className="font"
                    >
                      Enter an Optional Message
                    </span>
                  </div>
                  <div>
                    <textarea
                      type="text"
                      class="form-control"
                      id=""
                      style={{
                        border: 0,
                        outline: 0,
                        background: "transparent",
                        border: "1px solid #D0D2D3",
                        marginTop: "10px",
                        height: "150px",
                      }}
                    ></textarea>
                  </div>
                  <br />
                  <div id="By_providing_your_contact_deta_gib">
                    <span>
                      By providing your contact details, you agree to our
                      Privacy Policy
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ textAlign: "center", marginBottom: "-5%;" }}>
                <button
                  type="button"
                  class="btn "
                  style={{
                    backgroundColor: "#789C82",
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
                    Submit
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-1"></div>
      </div>
      <br />
      <br />
      <div style={{ backgroundColor: "#F8FBFF" }}>
        <div>
          <div
            id="exp_now"
            class="row"
            style={{ marginLeft: "10%", marginRight: "10%" }}
          >
            <div
              class="col-sm-5"
              style={{ marginTop: "5%", marginBottom: "5%" }}
            >
              <div id="Explore_Our_Career_Tools">
                <span>Explore Our</span>
                <br />
                <span style={{ fontStyle: "normal", fontWeight: "bold" }}>
                  Career Tools!
                </span>
              </div>
              <div id="Explore_our_career_tools__and_">
                <span>
                  Explore our career tools <br />
                  and stand out of the crowd
                </span>
              </div>
              <div id="get_now_btn">
                <button
                  type="button"
                  class="btn btn-danger"
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

            <div
              class="col-sm-6"
              style={{ marginTop: "5%", marginBottom: "5%" }}
            >
              <div style={{ boxShadow: "#3E3358 -10px 0px 0px 0px" }}>
                <div id="card_1" class="card mb-2 shadow-sm">
                  <div class="card-body position-relative">
                    <div class="row">
                      <div class="col-2" style={{ margin: "auto" }}>
                        <img src="/img/Resume Building Icon.png" alt="" />
                      </div>
                      <div class="col-1"></div>
                      <div class="col-8" style={{ textAlign: "left" }}>
                        <div
                          style={{
                            font:
                              "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 22px/26px var(--unnamed-font-family-raleway)",
                            letterSpacing: "var(--unnamed-character-spacing-0)",
                            textAlign: "left",
                            font: "normal normal bold 22px/26px Raleway",
                            letterSpacing: "0px",
                            color: "#3E3358",
                            opacity: 1,
                          }}
                        >
                          <span className="font">Resume Building</span>
                        </div>
                        <div
                          style={{
                            font:
                              "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 12px/14px var(--unnamed-font-family-raleway)",
                            letterSpacing: "var(--unnamed-character-spacing-0)",
                            textAlign: "left",
                            font: "normal normal  12px/14px Raleway",
                            letterSpacing: "0px",
                            color: "#3E3358",
                            opacity: 1,
                            marginTop: "10px",
                          }}
                        >
                          <span className="font">
                            To get the right job you need to showcase your
                            skills. We help you connect and build your profile
                            to get you market ready.
                          </span>
                        </div>

                        <div id="hide_price_1">
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
                              className="font"
                            >
                              Rs. 1,500/-
                            </h6>
                          </div>
                          <div class="row">
                            <div>
                              <button
                                type="button"
                                class="btn"
                                style={{
                                  backgroundColor: "#478CE3",
                                  color: "#fff",
                                  font: "Raleway;",
                                }}
                                className="font"
                              >
                                {" "}
                                <i
                                  class="fal fa-credit-card"
                                  style={{
                                    marginRight: "15px",
                                    borderRadius: "10px",
                                  }}
                                ></i>
                                Buy Now{" "}
                              </button>
                            </div>
                            <div>
                              <button
                                type="button"
                                class="btn "
                                style={{
                                  backgroundColor: "#FFFFFF",
                                  color: "black",
                                  borderColor: "black",
                                  marginLeft: "10px",
                                  font: "Raleway",
                                }}
                                className="font"
                              >
                                <i
                                  class="fal fa-shopping-cart"
                                  style={{
                                    marginRight: "10px",
                                    borderRadius: "10px",
                                  }}
                                ></i>{" "}
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-1" style={{ margin: "auto" }}>
                        <i
                          class="fas fa-arrow-circle-right fa-3x"
                          style={{ color: "#118AEF" }}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div style={{ boxShadow: "#3E3358 -10px 0px 0px 0px" }}>
                <div id="card_2" class="card mb-2 shadow-sm">
                  <div class="card-body position-relative">
                    <div class="row">
                      <div class="col-2" style={{ margin: "auto" }}>
                        <img src="/img/1-1 Mentorship Icon.png" alt="" />
                      </div>
                      <div class="col-1"></div>
                      <div class="col-8" style={{ textAlign: "left" }}>
                        <div
                          style={{
                            font:
                              "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 22px/26px var(--unnamed-font-family-raleway)",
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
                          <span className="font">
                            Mentor helps you understand the market trend. You
                            can talk to a mentor and get your questions
                            answered. Whether it's an interview or changing your
                            career to cloud. Talk Today.
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
                              className="font1"
                            >
                              Rs. 2,500/- Hour
                            </h6>
                          </div>
                          <div class="row">
                            <div>
                              <button
                                type="button"
                                class="btn"
                                style={{
                                  backgroundColor: "#478CE3",
                                  color: "#fff",
                                  font: "Raleway",
                                }}
                              >
                                {" "}
                                <i
                                  class="fal fa-credit-card"
                                  style={{ marginRight: "15px" }}
                                ></i>
                                Buy Now{" "}
                              </button>
                            </div>
                            <div>
                              <button
                                type="button"
                                class="btn "
                                style={{
                                  backgroundColor: "#FFFFFF",
                                  color: "black",
                                  borderColor: "black",
                                  marginLeft: "10px",
                                  font: "Raleway",
                                }}
                                className="font"
                              >
                                <i
                                  class="fal fa-shopping-cart"
                                  style={{ marginRight: "10px" }}
                                ></i>{" "}
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-sm-1" style={{ margin: "auto" }}>
                        <i
                          class="fas fa-arrow-circle-right fa-3x"
                          style={{ color: "#118AEF" }}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-1"></div>
          </div>
        </div>
      </div>
      <div>
        <br />
        <div class="row">
          <div class="col-sm-1"></div>
          <div class="col-sm-1">
            <i
              class="fad fa-question-square fa-4x"
              style={{ color: "#789C82" }}
            ></i>
          </div>
          <div class="col-sm-8">
            <div id="FAQs">
              <span id="FAQs">FAQs</span>
            </div>
            <div id="Frequently_asked_questionFAQs_">
              <span id="Frequently_asked_questionFAQs_">
                Frequently asked question(FAQs)
              </span>
              <br />
            </div>
          </div>
        </div>
      </div>
      <br />
      <div
        style={{
          width: "100%",
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          boxShadow: "0px 3px 6px #00000029",
          opacity: 1,
        }}
      >
        <div class="row">
          <div class="col-2"></div>
          <div
            class="col-8"
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            <div id="How_will_I_get_rewarded_with_t" class="faq_titles">
              <span>
                How will I get rewarded with the certificate of course
                completion from Edukayshun?
              </span>
            </div>
            <div id="To_get_the_right_job_you_need__fut">
              <span>
                To get the right job you need to showcase your skills. We help
                you connect and build your profile to get you market ready.
              </span>
            </div>
          </div>

          <div class="col-2" style={{ textAlign: "center", margin: "auto" }}>
            <i
              class="far fa-chevron-right fa-2x"
              style={{ color: "#28303B", opacity: 1 }}
            ></i>
          </div>
        </div>
      </div>
      <br />
      <div
        style={{
          width: "100%",
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          boxShadow: "0px 3px 6px #00000029",
          opacity: 1,
        }}
      >
        <div class="row">
          <div class="col-2"></div>
          <div
            class="col-8"
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            <div id="Can_I_learn_AWS_along_with_the" class="faq_titles">
              <span>
                Can I learn AWS along with the Azure courses for better cloud
                computing knowledge from Edukayshun?
              </span>
            </div>
            <div id="To_get_the_right_job_you_need__fut">
              <span>
                To get the right job you need to showcase your skills. We help
                you connect and build your profile to get you market ready.
              </span>
            </div>
          </div>

          <div class="col-2" style={{ textAlign: "center", margin: "auto" }}>
            <i
              class="far fa-chevron-right fa-2x"
              style={{ color: "#28303B", opacity: 1 }}
            ></i>
          </div>
        </div>
      </div>
      <br />
      <div
        style={{
          width: "100%",
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          boxShadow: "0px 3px 6px #00000029",
          opacity: 1,
        }}
      >
        <div class="row">
          <div class="col-2"></div>
          <div
            class="col-8"
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            <div id="How_can_I_learn_different_cour" class="faq_titles">
              <span>
                How can I learn different courses through Edukayshun's Live
                Lessons?
              </span>
            </div>
            <div id="To_get_the_right_job_you_need__fut">
              <span>
                To get the right job you need to showcase your skills. We help
                you connect and build your profile to get you market ready.
              </span>
            </div>
          </div>

          <div class="col-2" style={{ textAlign: "center", margin: "auto" }}>
            <i
              class="far fa-chevron-right fa-2x"
              style={{ color: "#28303B", opacity: 1 }}
            ></i>
          </div>
        </div>
      </div>
      <br />
      <div
        style={{
          width: "100%",
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          boxShadow: "0px 3px 6px #00000029",
          opacity: 1,
        }}
      >
        <div class="row">
          <div class="col-2"></div>
          <div
            class="col-8"
            style={{ margintop: "20px", marginBottom: "20px" }}
          >
            <div id="Will_I_be_able_to_interact_wit" class="faq_titles">
              <span>
                Will I be able to interact with the Expert trainer in a Live
                Lesson of any course on Edukayshun?
              </span>
            </div>
            <div id="To_get_the_right_job_you_need__fut">
              <span>
                To get the right job you need to showcase your skills. We help
                you connect and build your profile to get you market ready.
              </span>
            </div>
          </div>

          <div class="col-2" style={{ textAlign: "center", margin: "auto" }}>
            <i
              class="far fa-chevron-right fa-2x"
              style={{ color: "#28303B", opacity: 1 }}
            ></i>
          </div>
        </div>
      </div>
      <br />
      <div
        style={{
          width: "100%",
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          boxShadow: "0px 3px 6px #00000029",
          opacity: 1,
        }}
      >
        <div class="row">
          <div class="col-2"></div>
          <div
            class="col-8"
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            <div id="Why_should_I_choose_Edukayshun" class="faq_titles">
              <span>
                Why should I choose Edukayshun Video Lessons for learning about
                cloud computing?
              </span>
            </div>
            <div id="To_get_the_right_job_you_need__fut">
              <span>
                To get the right job you need to showcase your skills. We help
                you connect and build your profile to get you market ready.
              </span>
            </div>
          </div>

          <div class="col-2" style={{ textAlign: "center", margin: "auto" }}>
            <i
              class="far fa-chevron-right fa-2x"
              style={{ color: "#28303B", opacity: 1 }}
            ></i>
          </div>
        </div>
      </div>

      <br />
      <div
        style={{
          width: "100%",
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          boxShadow: "0px 3px 6px #00000029",
          opacity: 1,
        }}
      >
        <div class="row">
          <div class="col-2"></div>
          <div
            class="col-8"
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            <div id="What_different_Edukayshuns_Liv" class="faq_titles">
              <span>
                What different Edukayshun's Live Lessons offer when compared to
                other online Education-providers?
              </span>
            </div>
            <div id="To_get_the_right_job_you_need__fut">
              <span>
                To get the right job you need to showcase your skills. We help
                you connect and build your profile to get you market ready.
              </span>
            </div>
          </div>

          <div class="col-2" style={{ textAlign: "center", margin: "auto" }}>
            <i
              class="far fa-chevron-right fa-2x"
              style={{ color: "#28303B", opacity: 1 }}
            ></i>
          </div>
        </div>
      </div>

      <br />
      <div
        style={{
          width: "100%",
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          boxShadow: "0px 3px 6px #00000029",
          opacity: 1,
        }}
      >
        <div class="row">
          <div class="col-2"></div>
          <div
            class="col-8"
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            <div id="What_is_the_difference_between " class="faq_titles">
              <span>
                What is the difference between Live Lessons and Video Lessons
                for learning cloud computing on Edukayshun?
              </span>
            </div>
            <div id="To_get_the_right_job_you_need__fut">
              <span>
                To get the right job you need to showcase your skills. We help
                you connect and build your profile to get you market ready.
              </span>
            </div>
          </div>

          <div class="col-2" style={{ textAlign: "center", margin: "auto" }}>
            <i
              class="far fa-chevron-right fa-2x"
              style={{ color: "#28303B", opacity: 1 }}
            ></i>
          </div>
        </div>
      </div>
      <br />
      <div
        style={{
          width: "100%",
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          boxShadow: "0px 3px 6px #00000029",
          opacity: 1,
        }}
      >
        <div class="row">
          <div class="col-2"></div>
          <div
            class="col-8"
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            <div id="Can_I_learn_from_the_same_clou" class="faq_titles">
              <span>
                Can I learn from the same cloud computing course again after
                purchasing it from the Edukayshun platform?
              </span>
            </div>
            <div id="To_get_the_right_job_you_need__fut">
              <span>
                To get the right job you need to showcase your skills. We help
                you connect and build your profile to get you market ready.
              </span>
            </div>
          </div>

          <div class="col-2" style={{ textAlign: "center", margin: "auto" }}>
            <i
              class="far fa-chevron-right fa-2x"
              style={{ color: "#28303B", opacity: 1 }}
            ></i>
          </div>
        </div>
      </div>

      <br />
      <div
        style={{
          width: "100%",
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          boxShadow: "0px 3px 6px #00000029",
          opacity: 1,
        }}
      >
        <div class="row">
          <div class="col-2"></div>
          <div
            class="col-8"
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            <div id="What_kind_of_E-learning_course" class="faq_titles">
              <span>
                What kind of E-learning courses does Edukayshun provide?
              </span>
            </div>
            <div id="To_get_the_right_job_you_need__fut">
              <span>
                To get the right job you need to showcase your skills. We help
                you connect and build your profile to get you market ready.
              </span>
            </div>
          </div>

          <div class="col-2" style={{ textAlign: "center", margin: "auto" }}>
            <i
              class="far fa-chevron-right fa-2x"
              style={{ color: "#28303B", opacity: 1 }}
            ></i>
          </div>
        </div>
      </div>

      <br />
      <div
        style={{
          width: "100%",
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          boxShadow: "0px 3px 6px #00000029",
          opacity: 1,
        }}
      >
        <div class="row">
          <div class="col-2"></div>
          <div
            class="col-8"
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            <div id="How_can_I_sign_up_and_start_le" class="faq_titles">
              <span>
                How can I sign up and start learning cloud-computing courses
                from Edukayshun?
              </span>
            </div>
            <div id="To_get_the_right_job_you_need__fut">
              <span>
                To get the right job you need to showcase your skills. We help
                you connect and build your profile to get you market ready.
              </span>
            </div>
          </div>

          <div class="col-2" style={{ textAlign: "center", margin: "auto" }}>
            <i
              class="far fa-chevron-right fa-2x"
              style={{ color: "#28303B", opacity: 1 }}
            ></i>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div class="row">
        <div class="col-sm-1"></div>
        <div class="col-sm-10">
          <div id="Other_related_workshops">
            <span>Other related workshops</span>
          </div>
          <div id="Learn_from_leading_industry_ex">
            <span>Learn from leading industry experts with more.</span>
          </div>
          <br />
        </div>
        <div class="col-sm-1"></div>
      </div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container">
              <div class="row">
                <div class="col-sm-12 col-lg-4">
                  <div class="card" style={{ marginLeft: "30px" }}>
                    <img
                      src="/img/gettyimages-945337412-612x612.png"
                      class="card-img-top"
                    />
                    <div class="card-body">
                      <h4 class="card-title car_card_title">
                        Workshop on AWS Solutions Architect
                      </h4>
                      <br />
                      <br />
                      <p class="card-text" car_card_text>
                        <i class="fal fa-calendar"></i> Duration: 1 Month(s)
                      </p>
                      <br />
                      <div class="row">
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
                            class="btn car_btn"
                            style={{ borderRadius: "10px" }}
                          >
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-lg-4">
                  <div class="card" style={{ margin: "auto" }}>
                    <img
                      src="/img/ID4d671f202f175a16771cf1afe320.png"
                      class="card-img-top"
                    />
                    <div class="card-body">
                      <h4 class="card-title car_card_title">
                        Workshop on Microsoft Azure
                      </h4>
                      <br />
                      <br />
                      <p class="card-text" car_card_text>
                        <i class="fal fa-calendar"></i> Duration: 1 Month(s)
                      </p>
                      <br />

                      <div class="row">
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
                            class="btn car_btn"
                            style={{ borderRadius: "10px" }}
                          >
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-lg-4">
                  <div class="card" style={{ margin: "auto" }}>
                    <img
                      src="/img/gettyimages-1252898695-612x612.png"
                      class="card-img-top"
                    />
                    <div class="card-body">
                      <h4 class="card-title car_card_title">
                        Workshop on Google Cloud Platform Cloud Architect
                      </h4>
                      <br />
                      <p class="card-text" car_card_text>
                        <i class="fal fa-calendar"></i> Duration: 1 Month(s)
                      </p>
                      <br />
                      <div class="row">
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
                            class="btn car_btn"
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
          <div class="carousel-item">
            <div class="container">
              <div class="row">
                <div class="col-sm-12 col-lg-4">
                  <div class="card" style={{ marginLeft: "30px" }}>
                    <img
                      src="/img/gettyimages-945337412-612x612.png"
                      class="card-img-top"
                    />
                    <div class="card-body">
                      <h4 class="card-title car_card_title">
                        Workshop on AWS Solutions Architect
                      </h4>
                      <br />
                      <br />
                      <p class="card-text" car_card_text>
                        <i class="fal fa-calendar"></i> Duration: 1 Month(s)
                      </p>
                      <br />
                      <div class="row">
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
                            class="btn car_btn"
                            style={{ borderRadius: "10px" }}
                          >
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-lg-4">
                  <div class="card" style={{ margin: "auto" }}>
                    <img
                      src="/img/ID4d671f202f175a16771cf1afe320.png"
                      class="card-img-top"
                    />
                    <div class="card-body">
                      <h4 class="card-title car_card_title">
                        Workshop on Microsoft Azure
                      </h4>
                      <br />
                      <br />
                      <p class="card-text" car_card_text>
                        <i class="fal fa-calendar"></i> Duration: 1 Month(s)
                      </p>
                      <br />

                      <div class="row">
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
                            class="btn car_btn"
                            style={{ borderRadius: "10px" }}
                          >
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-lg-4">
                  <div class="card" style={{ margin: "auto" }}>
                    <img
                      src="/img/gettyimages-1252898695-612x612.png"
                      class="card-img-top"
                    />
                    <div class="card-body">
                      <h4 class="card-title car_card_title">
                        Workshop on Google Cloud Platform Cloud Architect
                      </h4>
                      <br />
                      <p class="card-text" car_card_text>
                        <i class="fal fa-calendar"></i> Duration: 1 Month(s)
                      </p>
                      <br />
                      <div class="row">
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
                            class="btn car_btn"
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
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true">
            <i
              class="fad fa-arrow-circle-left fa-3x"
              style={{ color: "#789C82" }}
            ></i>
          </span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true">
            <i
              class="fad fa-arrow-circle-right fa-3x"
              style={{ color: "#789C82" }}
            ></i>
          </span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <br />
      <br />
     <Footer/>
    </div>
  );
};
export default Course;
