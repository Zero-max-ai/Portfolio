import Navbar from '../Navbar.tsx'
import Footer from '../Footer.tsx'

const Layout = ({children}) => {
	return (
		<div>
			<Navbar />
			{ children }
			<Footer />
		</div>
	)
}

export default Layout;
