import Link from "next/dist/client/link";

const PostCard = ({ infourl, details, imgUrl }) => {
  return (
    <div className="md:w-[14.5rem] my-5 cursor-pointer text-center">
      <Link href={infourl}>
        <div>
          <div className="rounded-xl md:h-[8rem] md:w-[14rem] overflow-hidden">
            <img
              className="object-cover hover:scale-[1.02]"
              src={imgUrl}
              alt="project_image"
            />
          </div>
          <p className="pt-2">{details.substring(0, 90)}</p>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
