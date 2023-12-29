import Link from "next/link";

const page = () => {
  return (
    <div className="flex justify-start items-start flex-row max-w-full">
      <div class="navbar bg-base-100 rounded-box shadow-xl">
        <Link href={"./"} className="btn btn-ghost">
          <h3 className=" text-3xl font-extrabold blue_gradient text-center lowercase leading-normal">
            &lt;/jtlee.dev&gt;
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default page;
