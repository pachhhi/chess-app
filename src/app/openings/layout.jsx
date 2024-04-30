import OpeningsComp from "@/comp/OpeningsComp";
import Link from "next/link";

export default function navLayaout() {

    return (
        <div>
            <nav>
                <ul className="flex justify-center gap-6 m-4">
                    <li><Link href="/" className="">Home</Link></li>
                    <li><Link href="/openings">Openings</Link></li>
                </ul>
            </nav>
            <OpeningsComp/>
        </div>
    )
}