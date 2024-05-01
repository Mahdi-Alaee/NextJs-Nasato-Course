import { FaArrowsRotate } from "react-icons/fa6";

export default function Loading(){
    return (
        <div className="flex justify-center">
            <FaArrowsRotate className="animate-spin text-orange-400" />
        </div>
    )
}