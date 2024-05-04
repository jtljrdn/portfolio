import Image from "next/image";
import Link from "next/link";

const Card = ({ href, children }) => {
  return (
    <Link href={href} target="blank">
      <div className=" card w-72 bg-base-100 shadow-xl hover">
        <div className="card-body">
          {children}
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </Link>
  );
};

const CardHeader = ({ name, dates, title }) => {
  return (
    <>
      <h2 className="card-title">{name}</h2>
      <h3 className="text-m -mt-2.5 text-gray-600">{title}</h3>
      {dates && <div className="badge badge-neutral">{dates}</div>}
    </>
  );
};

const CardImage = ({ imgSource }) => {
  return (
    <>
      <Image src={imgSource} width={300} height={200} className="rounded-xl" />
    </>
  );
};

const CardBody = ({ children }) => {
  return (<div>{children}</div>);
};

export { Card, CardHeader, CardImage, CardBody };
