import Layout from "../components/layout/Layout.tsx";
import BlogCard from "../components/BlogCard.tsx";
import MyPovLifeImg from "../assets/MyPovLifeImg.png";

const Blog = () => {
  return (
    <Layout>
      <div className="w-7/12 max-md:w-10/12 mx-auto text-white pt-40 max-md:pt-20">
        <h1 className="font-bold">Posts</h1>
        <div className="flex flex-wrap w-full gap-5 items-center pt-4">
          <BlogCard
            loc={"https://google.co.in"}
            imgSource={MyPovLifeImg}
            title={"how docker works"}
          />
          <BlogCard
            loc={"https://gogole.co.in"}
            imgSource={MyPovLifeImg}
            title={"how to customize vim"}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
