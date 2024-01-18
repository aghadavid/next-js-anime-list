import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ title, images, id }) => {
  return (
    <div className=" bg-zinc-950 rounded-md"> 
    <Link href={`/${id}`} className="cursor-pointer">
      <Image src={images} width={600} height={400} alt="..." className="object-cover w-full max-h-64"/>
      <h3 className="text-bold md:text-xl text-md p-4 " >{title}</h3>
    </Link>
    </div>
  );
};

export default AnimeList;
