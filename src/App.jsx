import { FaCalendar } from "react-icons/fa"
import AddEvents from "./Components/AddEvents"
import { useEffect, useState } from "react";
function App() {
  const [loading, setloading] = useState(true);
      useEffect(()=>{
          const timer = setTimeout(() => {
              setloading(false);
          }, 4000);
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
  const today = new Date();
  const dateFormat = today.toLocaleDateString(
    'en-us',
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <section className="p-4">
      <div className="flex justify-between">
        <span>
          <FaCalendar />
        </span>
        <h1><span>Countdown</span>  Event Tracker</h1>
        <div>
          <span>
            <FaCalendar />
          </span>
          <div className="text-sm">
            <p>Today is</p>
            <p>
              {dateFormat}
            </p>
          </div>
        </div>

      </div>
      {/* add event section */}
      <AddEvents/>
      {/* <EventList /> */}
    </section>
  )
}

export default App
