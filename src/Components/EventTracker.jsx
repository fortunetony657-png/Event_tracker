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
      <div className="flex justify-between">
        <Link to={"/"}>
            <span>
                <FaHome />
            </span>
        </Link>
        <h1><span>CHRONO</span>Track</h1>
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

export default EventTracker
