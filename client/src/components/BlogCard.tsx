import { Link } from 'react-router-dom'

interface BlogCardProps {
	imgSource: string;
	title: string;
}

const BlogCard = ({ loc, imgSource, title } : BlogCardProps) => {
	return (
		<Link to={loc} className="flex flex-col flex-grow flex-shrink gap-1 w-52 max-md:text-xs">
			<img src={imgSource} className="rounded-md" />
			<span>{ title }</span>
		</Link>
	)
}

export default BlogCard;
