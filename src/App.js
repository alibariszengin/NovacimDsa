import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Banner from './Banner';
import Resume from './Resume';
import SignUp from './Signup';
import Footer from './Footer';
import GoToTop from './GoToTop';
import Contact from './ContactUs';
function App() {
  return (
    <div className="App ">
      <div className="flex flex-column vh-100">
          <Navbar />
          <Banner />

      </div>
      
      <Resume />
      <SignUp />
      <Contact/>
      <Footer />
      <GoToTop />
    </div>
  );
}

export default App;
