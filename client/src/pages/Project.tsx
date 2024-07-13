import Layout from "../components/layout/Layout";
import MyPovLifeImg from "../assets/MyPovLifeImg.png";
import ProjectCard from "../components/ProjectCard.tsx";
import OnGoing from "../assets/underdevelopmenet.png";

const Project = () => {
  return (
    <Layout>
      <div className="w-7/12 max-md:w-11/12 mx-auto text-white pt-40 max-md:pt-20">
        <h1 className="font-bold">Projects</h1>
        <div className="grid grid-cols-2 max-md:grid-cols-1 w-full gap-5 items-center pt-4">
          <ProjectCard
            title={"MyPovLife"}
            image={MyPovLifeImg}
            live={"https://my-pov-life.vercel.app"}
            source={"https://github.com/Zero-max-ai/MyPovLife"}
          />
          <ProjectCard
            title={"Kaizen (Flux)"}
            image={OnGoing}
            live={"https://flux.vercel.app"}
            source={"https://github.com/Zero-max-ai/Flux"}
          />
          <ProjectCard
            title={"Tech Tales"}
            image={OnGoing}
            live={"https://tech-tales.vercel.app"}
            source={"https://github.com/Zero-max-ai/TechTales"}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Project;
