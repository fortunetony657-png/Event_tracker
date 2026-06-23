import { FaCalendar } from "react-icons/fa"
import EventList from "./Components/EventList"
import AddEvents from "./Components/AddEvents"
function App() {
  return (
    <section className="">
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
              <span>june</span> /<span>28</span> /<span>2025</span>
            </p>
          </div>
        </div>

      </div>
      {/* add event section */}
      <AddEvents/>
      <EventList />
    </section>
  )
}

export default App
