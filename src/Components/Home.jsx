import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { TbCalendarSearch } from "react-icons/tb";
function Home(){
    const [loading, setloading] = useState(true);
          useEffect(()=>{
              const timer = setTimeout(() => {
                  setloading(false);
              }, 2000);
              return ()=> clearTimeout(timer)
          }, [])
          if(loading) {
              return <div className="bg-black/20 h-screen flex flex-col justify-center items-center gap-4">
                  <div className="h-16 w-16 rounded-full border-4 border-green-500 border-t-transparent animate-spin"></div>
                      <div className="text-xl font-semibold text-gray-700">
                          Loading...
                      </div>
                  </div>
          };
    return (
        <section className="min-h-screen bg-linear-to-b from-green-50 to-white flex flex-col justify-center items-center text-center px-6">
            <div className="flex items-center justify-center animate-bounce mb-6">
                <TbCalendarSearch className="text-[180px] text-green-500 drop-shadow-lg"/>
            </div>
            <div className="max-w-lg">
                <h1 className="mb-4 text-5xl font-bold text-gray-800">ChronoTrack</h1>
                <p className="text-gray-600 leading-relaxed text-lg">Welcome to chronTrack <br /> Where u can schedule Special occasion with ease, Stay organized and count down to cherished moments. </p>
            </div>
            <Link to={"/EventTracker"}>
                <button className="mt-8 bg-green-500 hover:bg-green-600 transition text-white px-8 py-3 rounded-xl font-semibold shadow-md">
                    View Event
                </button>
            </Link>
        </section>
    )
}
export default Home;