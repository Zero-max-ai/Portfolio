import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { navbarLinks } from '../utils/index.ts'
import { Link } from 'react-router-dom'

type NavLinkType = { title: string, loc: string }

const Navbar = () => {
	return (
		<header className="fixed w-full top-0 left-0 py-2 px-3 bg-transparent text-black shadow-lg backdrop-blur">
			<nav className="w-1/2 mx-auto flex items-center gap-5 rounded-full py-3 px-10">
				<h1 className="w-2/12 ">Akshat Gangi</h1>
				<div className="w-9/12 flex items-center justify-between">
					<div className="flex items-center gap-4">
						{	navbarLinks.map(( items : NavLinkType ) => { return <Link key={items.title} to={items.loc} className="p-2">{items.title}</Link> })}
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
