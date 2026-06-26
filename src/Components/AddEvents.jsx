import { useState } from "react";
import { FaPlus, FaArrowRight, FaTrash } from "react-icons/fa";
import { TbCalendarSearch } from "react-icons/tb";
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
        <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 border">
            <div className="flex items-center gap-2 mb-4">
                <span> <FaPlus className="border border-green-500 rounded-full text-green-500 p-1 text-xl" /></span>
                <span className="font-semibold text-gray-700">
                    Add New Event
                </span>
            </div>
            <form 
            onSubmit={handleSubmit}
            className=" bg-white border rounded-xl p-4">
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <p className="text-xs text-gray-500 mb-2">Enter Event Name</p>
                        <textarea
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder="Event name"
                        ></textarea>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-2">Event Date</p>
                        <div>
                            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                        </div>
                    </div>
                </div>
                <button type="submit" className="mt-4 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-lg flex items-center gap-2">
                    Add Event 
                    <span className="bg-white text-green-500 rounded-full p-1">
                        <FaArrowRight />
                    </span>
                </button>
            </form>

            <div className="mt-8">
                <h3 className="flex items-center gap-3 font-semibold">
                    <span className="text-gray-500">
                        <TbCalendarSearch />
                    </span>
                    Current Events 
                    <span className="text-green-700 bg-green-100 px-3 py-1 text-sm rounded-full">
                        {events.length} Events
                    </span>
                </h3>
                <div>
                    {events.map((ev) => (
                        <div key={ev.id} className="flex flex-col justify-between w-[100%] items-center border-1 break-words rounded-xl px-0 py-5 my-4 shadow-sm hover:shadow-md transition">
                            <div className="w-[100%] px-5 flex justify-between">
                                <h2 onClick={()=> makingExpand(ev.id)}
                                    className={`cursor-pointer ${expand === ev.id ? "break-words w-20" : "line-clamp-1 w-20 break-words mb-2"}`}
                                    >
                                    {ev.name}
                                </h2>
                                
                                <p className="text-sm text-gray-500 mt-2 flex flex-col">
                                    <span className="text-[10px] text-purple-700 bg-purple-300 border border-purple-700 px-2 font-medium rounded-full w-fit">
                                    Date
                                    </span>
                                    {ev.date}
                                </p>
                            </div>
                            
                            <div>
                                    {gettingRemainingDays(ev.date) > 0 ? (
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="text-4xl font-bold text-blue-600">{gettingRemainingDays(ev.date)}</p>
                                            <p className="text-[10px] text-gray-400 uppercase">Days left</p>
                                        </div> 
                                    ) : (
                                        <span className="text-red-500 font-semibold">Event Passed</span>
                                    )}
                                
                            </div>
                            <div>
                                <div onClick={() => deleteEvent(ev.id)}
                                    className="cursor-pointer border border-red-300 text-red-500 rounded-lg px-4 py-2 hover:bg-red-50">
                                    <FaTrash />
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