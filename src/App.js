import logo from './logo.svg';
import './App.css';
import './styles/home_page.css';
import './styles/style1.css';
import './styles/career_tool.css';
import './styles/common.css';
import './styles/become_mentor.css';
import './styles/blogs.css';
import './styles/course.css';
import './styles/login_page.css';
import Homepage from './screens/home_page';
import Home from './screens/home';
import About from './screens/About us';
import Career from './screens/career_tools';
import Mentor from './screens/BecomeMentor';
import Blogs from './screens/blogs';
import Course from './screens/courses';
import Login from './screens/Login';
import Private from './screens/PeivatePolicy';
import Refund  from './screens/Refund';
import Terms from './screens/Terms&Condition';
import Routing from './Router';


function App() {
  return (
    <div style={{width:'100%',height:"100%"}}>
      {/* <Career /> */}
      <Routing />
      {/* <Homepage/> */}
    </div>
  );
}

export default App;
