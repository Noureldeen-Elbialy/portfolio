import { useState } from "react"
import img1 from "../../assets/project-assets/1.jpg";
import img2 from "../../assets/project-assets/2.jpg";
import img3 from "../../assets/project-assets/3.jpg";
import img4 from "../../assets/project-assets/4.jpg";
import img5 from "../../assets/project-assets/5.jpg";
import img6 from "../../assets/project-assets/6.jpg";
import { Link } from "react-router-dom";
import { Eye, Heart, Share2 } from "lucide-react";
const Work = () => {

    // <---------- states ------------
    let [category, setCategory] = useState('Graphic Design');


    // <--------- data-------------->
    const taps = ['Graphic Design', 'Apps', 'Software'];
    const itemsData = [
        { title: 'Work 1', url: img1, views: '100', love: '70', cat: 'Graphic Design' },
        { title: 'Work 2', url: img2, views: '150', love: '90', cat: 'Graphic Design' },
        { title: 'Work 3', url: img3, views: '130', love: '50', cat: 'Apps' },
        { title: 'Work 4', url: img4, views: '120', love: '60', cat: 'Apps' },
        { title: 'Work 5', url: img5, views: '157', love: '86', cat: 'Software' },
        { title: 'Work 6', url: img6, views: '117', love: '82', cat: 'Software' },
    ];



    //<------------- renders ------------>
    const renderTaps = taps.map((tap, idx) => <button className={`${category === tap && 'text-blue-500'}`} key={idx} onClick={() => setCategory(tap)} >{tap}</button>);
    const renderSelectedCategory = itemsData.map(({ title, url, cat, love, views }, idx) => <>
        {cat === category && <>
            <div key={idx} className="item bg-black  h-[350px] relative">
                <img src={url} className="w-full h-full" alt={title} />
                <div className="item-layer absolute top-0 left-0 bg-blue-400 w-full h-full px-5 py-12 flex flex-col justify-between opacity-0 hover:opacity-100 duration-500">
                    <div className="text-white">
                        <Link className="underline underline-offset-4 text-xl" to={'/work'}>{title}</Link>
                        <span className="block">Animation</span>
                    </div>
                    <ul className="flex gap-4 items-center text-sm">
                        <span className="py-1 px-2 bg-gray-100 rounded-lg"><Share2 size={16} /></span>
                        <span className="py-1 px-2 bg-gray-100 rounded-lg"><Eye className="inline-block" size={16} /> {views}</span>
                        <span className="py-1 px-2 bg-gray-100 rounded-lg"><Heart className="inline-block" size={16} /> {love}</span>
                    </ul>
                </div>
            </div>
        </>}
    </>);


    
    return (
        <section id="work" className="text-justify leading-7 mt-14 px-4 lg:mt-8 lg:px-48">
            <span className="text-[10px] text-gray-500 tracking-[5px]">MY WORK</span>
            <h2 className="text-lg  font-main tracking-[5px] mt-4 font-bold">RECENT WORK</h2>
            <div className="navsTaps my-10">
                <div className={`btns flex gap-4`}>
                    {renderTaps}
                </div>
                <div className="navs-taps-content grid grid-cols-1 md:grid-cols-2 my-10 gap-10">
                    {renderSelectedCategory}
                </div>
            </div>
        </section>
    )
}

export default Work
