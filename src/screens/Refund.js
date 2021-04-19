import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Refund = () => {
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
      <Header/>
      <div class="row">
        <div class="col-sm-2"></div>

        <div class="col-sm-7">
          <p class="head">Refund Policy</p>
          <span
            style={{
              font:
                " var(--unnamed-font-style-normal) normal 600 12px/14px var(--unnamed-font-family-raleway)",
              letterSpacing: "var(--unnamed-character-spacing-0)",
              textAlign: "left",
              font: "normal normal 600 12px/14px Raleway",
              letterSpacing: "0px",
              color: "#2E3847",
              opacity: 1,
            }}
            className="font"
          >
            We are grateful for buying our courses as we assure our users have a
            lifetime learning experience while they purchase our courses,
            whether it is a live class or learn by lesson. On purchase of any
            course on Edukayshun, you agree to our Privacy Policy, Terms &
            Conditions and Refund Policy.
            <br />
            On purchase of any course on Edukayshun, you agree to our Privacy
            Policy, Terms & Conditions and Refund Policy.
            <br />
            Our Refund Policy is as follows:
            <br />
            Cancellation & Refund by Participant:
            <br />
            The following are the policies if a participant cancels and requests
            for refund of the paid session amount.
            <br />· Raise refund request within 07 days of purchase of course.
            <br />· Any refund request beyond 07 days of purchase of course will
            be declined.
            <br />· Refund stands void if the participant has accessed more than
            25% of the content of any live class or learn by lesson.
            <br />· Enrollment cancellation prior to 07 days of commencement of
            the session, will lead to 20?duction of the total fees paid by the
            participant and rest will be refunded.
            <br />· Enrollment cancellation within 07 days of commencement of
            the session, will lead to 100?duction of the total fees paid by the
            participant and no amount will be refunded.
            <br />
            Cancellation & Refund by Edukayshun:
            <br />
            Edukayshun reserves the right to postpone/cancel a session or change
            the location of session if bear insufficient enrollments, instructor
            illness, natural calamity, political instability etc.
            <br />· In case Edukayshun cancels a session, full course fees will
            be refunded if the refund request is raised within 04 days of
            purchase of course. Edukayshun is not responsible for any travel,
            logistics or personal expense incurred by the participants to attend
            the course.
            <br />· In case Edukayshun cancels/postpones a session, willing
            participants will be rescheduled to the next upcoming session of any
            live class or learn by lesson.
            <br />
            Refund Request
            <br />
            Refund request can be initiated only be clicking on “Initiate
            Refund”.
          </span>
        </div>

        <div class="col-sm-2" style={{ marginTop: "10%" }}>
          <div class="side_panel_background">
            <a class="side_panel_text" href="./Terms_conditions.html">
              Terms & Conditions
            </a>
          </div>
          <div class="side_panel_background">
            <a class="side_panel_text" href="./Privacy_Policy.html">
              Privacy Policy
            </a>
          </div>
          <div class="side_panel_active_background">
            <a class="side_panel_active" href="./Refund_Policy.html">
              Refund Policy
            </a>
          </div>
          <div class="side_panel_background">
            <a class="side_panel_text">Contact Us</a>
          </div>
          <div class="side_panel_background">
            <a class="side_panel_text" href="About_Us.html">
              About Us
            </a>
          </div>
        </div>
        <div class="col-sm-1"></div>
      </div>
      <br />
     <Footer/>
    </div>
  );
};

export default Refund;
