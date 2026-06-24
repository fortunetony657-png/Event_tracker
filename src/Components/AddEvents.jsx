import { useState } from "react";
import { FaPlus, FaArrowRight } from "react-icons/fa";
import { TbCalendarSearch } from "react-icons/tb";
import { Trash } from "lucide-react";
function AddEvents(){
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [events, setEvents] = useState([]);
    const [expand, setExpand] = useState(null);
    function handleSubmit(e){
        e.preventDefault();
        const trimmed = name.trim();
        if (!trimmed) return alert("No event has been inputed");
        if (!date) return alert("input Date for your event");
        const newEvent = { id: Date.now(), name: trimmed, date: date };
        setEvents([...events, newEvent]);
        setDate("")
        setName("")
    };
function gettingRemainingDays(date){
    const today = new Date();
    const eventDate = new
    Date(date);
    const doff = eventDate - today;
    return Math.ceil(doff / (1000 * 60 * 60 * 24));
};
function deleteEvent(id){
    setEvents(events.filter((eve)=> eve.id !== id));
    console.log("deleting:", id)
};
function makingExpand(id){
    setExpand(expand === id ? null : id)
};
    return(
        <section>
            <div className="flex items-center gap-2">
                <span> <FaPlus className="border-1 border-green-500 rounded-full text-green-500" /></span>
                <span>
                    Add New Event
                </span>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="">
                    <div>
                        <p>Enter Event Name</p>
                        <textarea
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border-1"
                            placeholder="Event name"
                        ></textarea>
                    </div>
                    <div>
                        <p>Event Date</p>
                        <div>
                            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                        </div>
                    </div>
                </div>
                <button type="submit" className="border-1 flex gap-2 p-2 items-center">
                    Add Event 
                    <span className="border-1 border-green-500 rounded-full text-green-500">
                        <FaArrowRight />
                    </span>
                </button>
            </form>

            <div className="mt-4">
                <h3 className="flex items-center gap-4">
                    <span className="font-[100] text-black/50">
                        <TbCalendarSearch />
                    </span>
                    Current Events 
                    <span className="text-green-700 bg-green-200 px-2 font-[500] rounded-full">
                        {events.length} Events
                    </span>
                </h3>
                <div>
                    {events.map((ev) => (
                        <div key={ev.id} className="flex justify-between items-center p-2 my-2">
                            <div className=" w-30 break-words">
                                <h2 onClick={()=> makingExpand(ev.id)}
                                    className={`cursor-pointer ${expand === ev.id ? "" : "line-clamp-1"}`}
                                    >
                                    {ev.name}
                                </h2>
                                <p className="text-[10px] text-purple-700 bg-purple-300 border-1 border-purple-700 px-2 font-[500] rounded-full w-fit">
                                    Date
                                </p>
                                <p>
                                    {ev.date}
                                </p>
                            </div>
                            
                            <div>
                                    {gettingRemainingDays(ev.date) > 0 ? (
                                        <div className="flex flex-col text-blue-700 justify-center items-center">
                                            <p>{gettingRemainingDays(ev.date)}</p>
                                            <p className="text-black">Days left</p>
                                        </div> 
                                    ) : (
                                        <span className="text-red-500">Event Passed</span>
                                    )}
                                
                            </div>
                            <div>
                                <div onClick={() => deleteEvent(ev.id)}>
                                    <Trash />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};
export default AddEvents;