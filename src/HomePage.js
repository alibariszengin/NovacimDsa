import Navbar from './Navbar';
import Banner from './Banner';
import Resume from './Resume';
import SignUp from './Signup';
import Footer from './Footer';
import GoToTop from './GoToTop';
import Contact from './ContactUs';

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


