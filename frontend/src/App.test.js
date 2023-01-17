import { render, screen } from '@testing-library/react';
import App from './App';
import Login from './Login';
import Signup from './Signup';
import ApplyLeave from './ApplyLeave';
import Profile from './Profile';
import RevokeLeave from './RevokeLeave';
import Home from './Home';
import Leaves from './Leaves';
import { shallow,configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import {BrowserRouter as Router} from 'react-router-dom';

configure({adapter:new Adapter()});
describe("rendering components",()=>{
  test("renders app components without crash",()=>{
    shallow(<App/>)
  });
  
  it("renders Login page without crash",()=>{
    shallow(<Router>
        <Login/>
      </Router>)
  });
  it("renders Signup page without crash",()=>{
    shallow(<Router>
        <Signup/>
      </Router>)
  });
});
describe("rendering leavemanagement components",()=>{
  
  
  it("renders Profile page without crash",()=>{
    shallow(<Router>
        <Profile/>
      </Router>)
  });
  it("renders Home page without crash",()=>{
    shallow(<Router>
        <Home/>
      </Router>)
  });
  it("renders Leaves page without crash",()=>{
    shallow(<Router>
        <Leaves/>
      </Router>)
  });
  it("renders Revoke Leave page without crash",()=>{
    shallow(<Router>
        <RevokeLeave/>
      </Router>)
  });
});
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
