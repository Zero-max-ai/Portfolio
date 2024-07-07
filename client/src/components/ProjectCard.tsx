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
		<div className="flex-grow flex-shrink w-4/12 rounded-md p-5 border border-gray-700">
			<img src={image} alt={`${image} image`} className="" />
			<div className="text-sm py-4 flex flex-col gap-2">
				<span className="font-semibold">Title - {title}</span>
				<div className="flex items-center justify-between">
					<Link to={live} className="bg-gray-800 hover:bg-gray-700 px-4 py-1 rounded-md">Live Demo</Link>
					<Link to={source} className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-4 py-1 rounded-md"><FaGithub /> Source</Link>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
