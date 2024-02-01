import Image from "next/image";
import Link from "next/link";

const Card = ({ name, dates, data, link, picture, imgSource }) => {
  if (!picture) {
    return (
      <Link href={link}>
        <div className="card w-72 bg-base-100 shadow-xl hover">
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{data}</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </Link>
    );
  } else {
    return (
      <Link href={link} target="blank">
        <div className="card w-72 bg-base-100 shadow-xl hover">
          <figure className="px-10 pt-10">
            <Image
              src={imgSource}
              width={300}
              height={200}
              className="rounded-xl"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <div className="badge badge-neutral">{dates}</div>
            <p>{data}</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </Link>
    );
  }
};

export default Card;
