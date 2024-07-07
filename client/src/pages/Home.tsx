import Layout from '../components/layout/Layout.tsx'
import Mouse from '../components/icons/Mouse.tsx'
import SkillCard from '../components/SkillCard.tsx'
import { Link } from 'react-router-dom' 
import AkshatImg from '../assets/Akshat_me.jpeg'
import { frontend, backend, devops, languages } from '../utils/index.tsx'

const Home = () => {
	return (
		<Layout>
			<div className="text-white">
				<div className="h-[90vh] w-1/2 max-md:w-11/12 mx-auto flex items-center justify-between">
					<div className="flex flex-col gap-4">
						<h1 className="text-3xl">Akshat Gangi</h1>
							<span>MERN / Frontend Developer / Designer</span>
						<span className="flex items-center gap-3 text-gray-600">
							<Mouse /> <span>Scroll down to see more details.</span>
						</span>
						<Link to={'/work'} className="bg-cyan-800 hover:bg-cyan-700 duration-150 px-3 py-1 rounded-md w-fit hover:underline">Projects</Link>
					</div>
					<div className="w-1/5">
						<img src={AkshatImg} alt={'Akshat Gangi pfp'} className="rounded-full" />
					</div>
				</div>
				<div className="w-1/2 max-md:w-11/12 mx-auto flex flex-col gap-3 pt-10 pb-40 border-t">
					<h1 className="text-xl font-bold">Skills</h1>
					<SkillCard title={'Frontend'} icons={frontend} />
					<SkillCard title={'Backend'} icons={backend} />
					<SkillCard title={'Devops'} icons={devops} />
					<SkillCard title={'Languages'} icons={languages} />
				</div>
			</div>
		</Layout>
	)
}

export default Home;
