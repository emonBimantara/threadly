import { ArrowDown, ArrowUp, User } from "lucide-react";

interface DetailCardProps{
    threadDetail: 
}

export default function DetailCard() {
    return (
        <div className="py-5 px-3">
            <div className=" flex flex-col gap-4 p-5 border border-gray-300 bg-white rounded-md">
                <div className="flex justify-between items-center">

                    <div className="flex gap-2 items-center">
                        <User size={30} />

                        <div>
                            <p className="font-medium">Febriane Valentina</p>
                            <p className="text-gray-400">October 24, 2024 at 10:30AM</p>
                        </div>
                    </div>


                    <div className="rounded-sm bg-indigo-100 text-indigo-700 px-2 py-1 text-sm font-medium">
                        React
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h1 className="font-semibold text-2xl">Best Practices for Microservices Event Sourcing</h1>
                    <p className="text-[#464555] text-md">
                        I'm currently designing a new
                        microservices architecture and we are
                        leaning heavily towards event sourcing.
                        However, I'm concerned about the
                        complexity of managing schema
                        evolution and snapshotting large event
                        streams.

                        Does anyone have production
                        experience with managing these
                        specific challenges? We are considering
                        Kafka for the event log and PostgreSQL
                        for read projections, but the operational
                        overhead seems daunting.
                    </p>
                    <hr />
                </div>

                <div>
                    <button className="flex items-center gap-3 rounded-md bg-indigo-100 px-3 py-2 transition hover:bg-indigo-200">
                        <ArrowUp
                            size={18}
                            className="text-gray-700 hover:text-green-600"
                        />

                        <span className="font-semibold text-black">0</span>

                        <ArrowDown
                            size={18}
                            className="text-gray-700 hover:text-red-600"
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}