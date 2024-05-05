import OpeningsComp from "@/comp/OpeningsComp";
import Link from "next/link";

export default function navLayaout() {

    return (
        <div>
            <nav className="w-full">
                <ul className="flex justify-center gap-10 uppercase mb-1 pt-2 pb-2 bg-grayy ">
                    <li className="bg-grayy px-4 rounded-xl text-white  hover:brightness-60 hover:"><Link href="/"><b>Home</b></Link></li>
                    <li><Link href="/openings"><b>Openings</b></Link></li>
                </ul>
            </nav>
            <OpeningsComp/>
        </div>
    )
}