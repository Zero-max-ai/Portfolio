import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { navbarLinks } from '../utils/index.tsx'
import { NavLink, Link } from 'react-router-dom'

type NavLinkType = { title: string, loc: string }

const Navbar = () => {
	return (
		<header className="z-50 fixed w-full top-0 left-0 py-2 px-3 bg-transparent text-white shadow-lg backdrop-blur">
			<nav className="w-6/12 max-md:w-11/12 mx-auto flex items-center gap-5 py-3">
				<Link to={'/'} className="w-fit font-bold text-lg">Akshat Gangi</Link>
				<div className="w-fit gap-5 flex items-center justify-between">
					<div className="flex items-center gap-4">
						{	navbarLinks.map(( items : NavLinkType ) => {
							return <NavLink key={items.title} to={items.loc} className="p-2" style={ ({ isActive }) => isActive ? { background: "#0e7490", textDecoration: "underline" } : { background: "transparent" } }>
								{items.title}
							</NavLink> })
						}
					</div>
					<div className="flex gap-3 text-xl">
						<Link to={'https://github.com/Zero-max-ai'} className="p-1"> <FaGithub /> </Link>
						<Link to={'https://www.linkedin.com/in/akshat-gangi-b457a61ab/'} className="p-1"> <FaLinkedin /> </Link>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Navbar;
