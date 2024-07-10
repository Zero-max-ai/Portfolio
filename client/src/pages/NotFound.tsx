import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import NotFoundImg from '../assets/NotFound.svg'

const NotFound = () => {
	return (
		<Layout>
			<div className="w-full h-[90vh] flex items-center justify-center">
				<div className="w-1/2 mx-auto flex gap-5 items-center justify-between text-white font-bold">
					<div className="flex flex-col gap-2 items-start">
						<span className="text-4xl">404</span>
						<span className="text-4xl">Page Not Found</span>
						<Link to={'/'} className="bg-sky-900 rounded-lg px-4 py-1 text-md underline max-md:text-xs">Back to home</Link>
					</div>
					<img src={NotFoundImg} alt={'page not found'} className="w-full" />
				</div>
			</div>
		</Layout>
	)
}

export default NotFound;
