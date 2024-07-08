import { Link } from 'react-router-dom'
import Hamburger from './Hamburger.tsx'
import NavbarNavigation from './NavbarNavigation.tsx'

const Navbar = () => {
	return (
		<header className="z-50 fixed w-full top-0 left-0 py-2 px-3 bg-transparent text-white shadow-lg backdrop-blur-2xl">
			<nav className="w-7/12 max-md:w-11/12 mx-auto flex items-center justify-between gap-5 py-3">
				<div className="w-full flex items-center justify-start gap-5">
					<Link to={'/'} className="w-fit font-bold text-lg max-md:text-sm">Akshat Gangi</Link>
					<NavbarNavigation />
				</div>
				<Hamburger />
			</nav>
		</header>
	)
}

export default Navbar;
