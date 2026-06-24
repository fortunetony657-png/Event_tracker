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
              return <div className="bg-black/30 h-screen flex justify-center items-center">
                  <div className="border-1 h-20 w-20 border-purple-500 animate-spin"></div>
                      <div className="text-[20px]">
                          Loading...
                      </div>
                  </div>
          };
    return (
        <section className="text-center flex flex-col p-3 justify-center items-center gap-2 h-screen">
            <div className="flex items-center justify-center animate-bounce">
                <TbCalendarSearch className="text-[200px]"/>
            </div>
            <div>
                <h1 className="mb-2 text-2xl font-[700]">ChronoTrack</h1>
                <p>Welcome to chronTrack <br /> Where u can schedule Special occasion with ease, Stay organized and count down to cherished moments. </p>
            </div>
            <Link to={"/EventTracker"}>
                <button className="bg-black p-2 rounded-xl text-white ">
                    View Event
                </button>
            </Link>
        </section>
    )
}
export default Home;