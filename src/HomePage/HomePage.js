import Navbar from './Navbar&Banner/Navbar';
import Banner from './Navbar&Banner/Banner';
import Resume from './Resume&SignUp/Resume';
import SignUp from './Resume&SignUp/Signup';
import Footer from './ContactUs&Footer/Footer';
import Contact from './ContactUs&Footer/ContactUs';
import GoToTop from './GoToTop';

function HomePage() {

  return (
  	<div>
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

export default HomePage;


