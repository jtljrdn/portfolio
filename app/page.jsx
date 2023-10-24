import CardFeed from "@/components/CardFeed";

const page = () => {
  return (
    <div>
      <section className="w-full flex-center flex-col mt-10">
        <h1 className="head_text blue_gradient text-center">Jordan Lee</h1>
        <p className="text-center desc mb-5">
          Welcome to my personal portfolio! Below is some of my
          experience/personal projects
        </p>
      </section>
      <div class="divider"></div>

      <h2 className="sub_text text-center mt-3">
        <span className="green_gradient">Experience</span> and{" "}
        <span className="orange_gradient">Projects</span>
      </h2>
      <div>
        <CardFeed />
      </div>
    </div>
  );
};

export default page;
