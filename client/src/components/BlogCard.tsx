interface BlogCardProps {
	imgSource: string;
	title: string;
}

const BlogCard = ({ imgSource, title } : BlogCardProps) => {
	return (
		<div className="flex-grow flex-shrink w-52">
			<img src={imgSource} className="rounded-md" />
			<span>{ title }</span>
		</div>
	)
}

export default BlogCard;
