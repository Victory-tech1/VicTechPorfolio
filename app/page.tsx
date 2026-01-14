
import LandingPage from "../components/landing-page"

// Import widgets and components
import Navbar from "../components/widgets/navbar"
import Footer from "../components/widgets/footer"

export default function Home() {
  return (
		<>
			<Navbar/>
			<LandingPage/>
			<Footer/>
		</>
  );
}
