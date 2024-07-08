import { FaGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom'

interface ProjectCardProps {
	title: string;
	img: string;
	live: string;
	source: string;
}

const ProjectCard = ({title, image, live, source} : ProjectCardProps) => {
	return (
		<div className="max-md:w-full flex-grow flex-shrink w-5/12 rounded-md p-5 border border-gray-700">
			<img src={image} alt={`${image} image`} className="" />
			<div className="text-sm py-4 flex flex-col gap-2">
				<span className="font-semibold">Title - {title}</span>
				<div className="flex lg:flex-col lg:items-start gap-5 items-center justify-between max-md:text-xs">
					<Link to={live} className="bg-gray-800 hover:bg-gray-700 px-4 py-1 rounded-md">Live Demo</Link>
					<Link to={source} className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-4 py-1 rounded-md"><FaGithub /> Source</Link>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
