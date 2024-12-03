import { Outlet } from "react-router-dom"
import Aside from "../../components/Aside"
import { AlignJustify, X } from "lucide-react"
import { useState } from "react"

const Layout = () => {
    //open or close aside on small screens
    let [open, setOpen] = useState(false);
    return (
        <div>
            <div className="grid grid-cols-6">

                <div className={`lg:grid col-span-1 ${open ? 'fixed top-0 right-0 bottom-0 left-0 z-50' : "hidden"}`}>
                    <Aside setOpen={setOpen} />
                </div>

                <button onClick={() => setOpen(!open)} className={`lg:hidden opacity-25 hover:opacity-100 duration-500 fixed z-50 top-5 ${open ? "right-2" : "left-2"} bg-gray-100 p-2 rounded-md`}>{open ? <X /> : <AlignJustify />}</button>


                <div className="col-span-6 lg:col-span-5">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
export default Layout
