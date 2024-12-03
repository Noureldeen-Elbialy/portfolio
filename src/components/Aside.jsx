/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"
import Img from "../assets/project-assets/about-BgAkqdr2.jpg";
const Aside = ({ setOpen }) => {
    return (
        <>
            <aside className="bg-gray-100 text-center sticky h-dvh top-0 left-0 bottom-0 pt-10 text-xs">
                <img src={Img} className="w-36 h-36 m-auto rounded-full mt-4 mb-6" alt="person" />
                <h1 className="font-main text-[22px] font-bold">Jackson Ford</h1>
                <p className="mt-4 mb-10"><span className="text-blue-400">UI/UX/DESIGNER</span> IN PHILLIPPINES</p>
                <ul className="space-y-4 tracking-wider">
                    <li><NavLink onClick={() => setOpen(false)} to={'/'}>HOME</NavLink></li>
                    <li><NavLink onClick={() => setOpen(false)} to={'/about'}>ABOUT</NavLink></li>
                    <li><NavLink onClick={() => setOpen(false)} to={'/skills'}>SKILLS</NavLink></li>
                    <li><NavLink onClick={() => setOpen(false)} to={'/experience'}>EXPERIENCE</NavLink></li>
                    <li><NavLink onClick={() => setOpen(false)} to={'/work'}>WORK</NavLink></li>
                </ul>
            </aside>
        </>
    )
}

export default Aside
