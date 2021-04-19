import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Homepage = lazy(() => import("./screens/home_page"));
const Mentor = lazy(() => import("./screens/BecomeMentor"));
const CareerTool = lazy(() => import("./screens/career_tools"));
const Courses = lazy(() => import("./screens/courses"));
const Login = lazy(() => import("./screens/Login"));
const PrivatePolicy = lazy(() => import("./screens/PeivatePolicy"));
const Refund = lazy(() => import("./screens/Refund"));
const Terms = lazy(() => import("./screens/Terms&Condition"));
const Blogs = lazy(() => import("./screens/home_page"));

const About = lazy(() => import("./screens/About us"));

const Routing = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/becomeMentor" component={Mentor} />
          <Route path="/careerTool" component={CareerTool} />
          <Route path="/courses" component={Courses} />
          <Route path="/login" component={Login} />
          <Route path="/privatePolicy" component={PrivatePolicy} />
          <Route path="/refund" component={Refund} />
          <Route path="/terms" component={Terms} />
          <Route path="/blogs" component={Blogs} />

          <Route path="/about" component={About} />

          {/* <Route
           path="/"
           exact
           render={() => (
           <div>
              <h1>This is the main page</h1>
              <a href="/about">Click here</a>
           </div>
           )}
        /> */}
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routing;
