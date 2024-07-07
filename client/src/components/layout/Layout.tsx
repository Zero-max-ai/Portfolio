import React from 'react'
import Navbar from '../Navbar.tsx'
import Footer from '../Footer.tsx'

interface LayoutProps {
	children: React.ReactNode
}

const Layout : React.FC<LayoutProps> = ({ children }) => {
	return (
		<div>
			<Navbar />
			{ children }
			<Footer />
		</div>
	)
}

export default Layout;
