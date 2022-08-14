import Link from "next/dist/client/link";

const ProjectCard = ({slug , details , imgUrl , title}) => {
  return (
    <div data-aos="fade-up" className="md:w-[14.5rem] my-5 cursor-pointer text-center">
      <Link href={`/works/${encodeURIComponent(slug)}`}>
        <div>
          <div className="rounded-xl md:h-[8rem] md:w-[14rem] overflow-hidden">
            <img
              className="object-cover hover:scale-[1.02]"
              src={imgUrl}
              alt="project_image"
            />
          </div>
          <h2 className="font-semibold mt-2 text-lg">{title}</h2>
          <p className="text-sm">{details.substring(0, 90)}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
