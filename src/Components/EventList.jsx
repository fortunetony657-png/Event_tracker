import { BsTrash2 } from "react-icons/bs";
function EventList(){
    const list = [
        {id : 1, event : 'Vacation', date : "22/22/2222", status : "upcoming", Time: "52"},
        {id : 2, event : 'Work', date : "22/22/2222", status : "upcoming", Time: "52"},
        {id : 3, event : 'Concert', date : "22/22/2222", status : "upcoming", Time: "52"},
        {id : 4, event : 'Nigeria match', date : "22/22/2222", status : "upcoming", Time: "52"},
        {id : 5, event : 'Picnic', date : "22/22/2222", status : "upcoming", Time: "52"},

    ]
    return(
        <section>
            {
                list.map((lis) => (
                    <div key={lis.id}>
                        <div className="flex justify-between border-1 rounded-xl my-2 p-5">
                            <div>
                                <h2>{lis.event}</h2>
                                <p>{lis.date}</p>
                                <p className="text-[12px] border-1 rounded-full text-center bg-purple-200 text-purple-500 font-[700] py-[5px]">{lis.status}</p>
                            </div>
                            <div className="text-center flex flex-col items-center justify-center">
                                <p>{lis.Time}</p>
                                <p className="text-[12px]">Days Remaining</p>
                                <div className="text-red-700">
                                    <BsTrash2 />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </section>
    )
};
export default EventList;