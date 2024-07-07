import Layout from '../components/layout/Layout.tsx'
import BlogCard from '../components/BlogCard.tsx'
import MyPovLifeImg from '../assets/MyPovLifeImg.png'

const Blog = () => {
	return (
		<Layout>
			<div className="w-5/12 mx-auto text-white pt-40">
				<h1 className="font-bold">Posts</h1>
				<div className="flex flex-wrap w-full gap-5 items-center pt-4">
					<BlogCard imgSource={MyPovLifeImg} title={'how docker works'} />
					<BlogCard imgSource={MyPovLifeImg} title={"how to customize vim"} />
				</div>
			</div>
		</Layout>
	)
}

export default Blog;
