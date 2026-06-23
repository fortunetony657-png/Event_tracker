import { FaPlus } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
function AddEvents(){
    return(
        <section>
            <div className="flex items-center gap-2">
                <span> <FaPlus className="border-1 border-green-500 rounded-full text-green-500" /></span>
                <span>
                    Add New Event
                </span>
            </div>
            <form>
                <div className="flex">
                    <div>
                        <p>Enter Event Name</p>
                        <textarea name="" id="" className="border-1"></textarea>
                    </div>
                    <div>
                        <p>Event Date</p>
                        <div>
                            <input type="date" />
                        </div>
                    </div>
                </div>
                <button type="submit" className="border-1 flex gap-2 items-center">
                    Add Event 
                    <span className="border-1 border-green-500 rounded-full text-green-500">
                        <FaArrowRight />
                    </span>
                </button>
            </form>
        </section>
    )
};
export default AddEvents;