import { FaCalendar } from "react-icons/fa"
import { FaHome } from "react-icons/fa";
import AddEvents from "./AddEvents"
import { Link } from "react-router-dom";
function EventTracker() {
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
      <div className="flex justify-between mb-3">
        <Link to={"/"}>
            <span>
                <FaHome />
            </span>
        </Link>
        <h1><span>CHRONO</span>Track</h1>
        <div className="flex gap-1 justify-center items-center">
          <span>
            <FaCalendar />
          </span>
          <div className=" flex flex-col justify-center">
            <p className="text-sm leading-none">Today is</p>
            <p className="text-[10px] text-neutral-500">
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

export default EventTracker
