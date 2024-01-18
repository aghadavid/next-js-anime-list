import Link from "next/link"
const Navbar = () => {
    return (
       <header className="bg-zinc-950">
        <div className="flex md:flex-row flex-col gap-2 justify-between p-4">
            <Link href="/" className="font-bold text-white text-2xl">AnimeList</Link>
            <input placeholder="Cari Anime....." className="p-1 rounded"/>
        </div>
     </header>
    )
}

export default Navbar