import AnimeList from "@/components/AnimeList";
import Link from "next/link";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=5`
  );
  const anime = await response.json();

  return (
    <div className="px-4" >
      <div className="flex justify-between items-center" >
      <h1 className="text-2xl font-bold my-2">Popular</h1>
      <Link href="/populer" className="text-lg hover:text-indigo-500 transition-all">Lihat semua</Link>
      </div>
      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid grid-cols-2 gap-4 ">
      {anime.data.map((e) => {
        const {title} = e   
        const images = e.images.webp.image_url
        return <div key={e.mal_id} className="shadow-xl">
          <AnimeList title={title} images={images} id={e.mal_id} />
          </div>
      })}
      </div>
    </div>
  );
};

export default Home;
