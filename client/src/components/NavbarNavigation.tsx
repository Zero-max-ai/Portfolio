import { Link, NavLink } from 'react-router-dom'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { navbarLinks } from '../utils/index.tsx'
import { useRecoilValue } from 'recoil'
import { hamburgerStatus } from '../recoil/HamburgerStatus.tsx';

type NavLinkType = { title: string, loc: string; }

{/*
const NavbarNavigation = () => {
	const open = useRecoilValue(hamburgerStatus)
	return (
		<div className={`${open ? "relative w-full" : "w-8/12"}`}> 
			{open ? (
				<div className="w-fit gap-5 flex items-center max-md:hidden">
					<div className="flex items-center gap-4 max-md:text-xs">
						{navbarLinks.map(( items : NavLinkType ) => {
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
			) : (
			<div className="w-full gap-5 flex flex-col items-start absolute top-20 left-0 bg-gray-900 px-5 py-3 border">
					<div className="w-full flex flex-col items-start gap-4 max-md:text-xs">
						{navbarLinks.map(( items : NavLinkType ) => {
							return <NavLink key={items.title} to={items.loc} className="p-2 w-full" style={ ({ isActive }) => isActive ? { background: "#0e7490", textDecoration: "underline" } : { background: "transparent" } }>
								{items.title}
							</NavLink> })
						}
					</div>
					<div className="flex gap-3 text-xl">
						<Link to={'https://github.com/Zero-max-ai'} className="p-1"> <FaGithub /> </Link>
						<Link to={'https://www.linkedin.com/in/akshat-gangi-b457a61ab/'} className="p-1"> <FaLinkedin /> </Link>
					</div>
				</div>
				)}
		</div>
	)
}
*/ }

const NavbarNavigation = () => {
	const openMenu = useRecoilValue(hamburgerStatus)
	return (
		<div className={`${openMenu ? "text-xs" : "w-8/12 max-md:hidden"}`}>
			{ openMenu ? (
				<div className="w-full gap-5 flex flex-col items-start absolute top-14 left-0 bg-gray-900 px-5 py-3">
					<div className="w-full flex flex-col items-start gap-4 max-md:text-xs">
				  	{navbarLinks.map(( items : NavLinkType ) => {
							return <NavLink key={items.title} to={items.loc} className="p-2 w-full rounded" onClick style={ ({ isActive }) => isActive ? { background: "#0e7490", textDecoration: "underline" } : { background: "transparent"     } }>
								{items.title}
							</NavLink> })
						}
					</div>
					<div className="flex gap-3 text-xl">
						<Link to={'https://github.com/Zero-max-ai'} className="p-1"> <FaGithub /> </Link>
						<Link to={'https://www.linkedin.com/in/akshat-gangi-b457a61ab/'} className="p-1"> <FaLinkedin /> </Link>
					</div>
				</div>						
			) : (
				<div className="w-fit gap-5 flex items-center max-md:hidden">
					<div className="flex items-center gap-4 max-md:text-xs">
				  	{navbarLinks.map(( items : NavLinkType ) => {
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
			) }
		</div>
	)
}


export default NavbarNavigation;
