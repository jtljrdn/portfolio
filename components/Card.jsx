import Image from "next/image";

const Card = ({ name, dates, data, link, picture, imgSource }) => {
  if (!picture) {
    return (
      <div className="card w-72 bg-base-100 shadow-xl ">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{data}</p>
          <div className="card-actions justify-end">
            <a className="btn btn-primary" href={link}>
              Visit
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card w-72 bg-base-100 shadow-xl">
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
          <div class="badge badge-neutral">{dates}</div>
          <p>{data}</p>
          <div className="card-actions justify-end">
            <a className="btn btn-primary" href={link}>
              Visit
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default Card;
