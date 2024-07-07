import Layout from '../components/layout/Layout'
import MyPovLifeImg from '../assets/MyPovLifeImg.png'
import ProjectCard from '../components/ProjectCard.tsx'

const Project = () => {
	return (
		<Layout>
			<div className="w-5/12 mx-auto text-white pt-40">
				<h1 className="font-bold">Projects</h1>
				<div className="flex flex-wrap w-full gap-5 items-center pt-4">
					<ProjectCard title={'MyPovLife'} image={MyPovLifeImg} live={'https://my-pov-life.vercel.app'} source={'https://github.com/Zero-max-ai/MyPovLife'} />
					<ProjectCard title={'Flux'} image={MyPovLifeImg} live={'https://flux.vercel.app'} source={'https://github.com/Zero-max-ai/Flux'} />
					<ProjectCard title={'Tech Tales'} image={MyPovLifeImg} live={'https://tech-tales.vercel.app'} source={'https://github.com/Zero-max-ai/techtales.com'} />
				</div>
			</div>
		</Layout>
	)
}

export default Project
