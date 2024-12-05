import { Pencil } from "lucide-react"
import Style from "./Experience.module.css";
const Experience = () => {
    const experiences = [
        { header: 'Full Stack Developer', date: '2017-2018', desc: 'Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.',bg:'bg-blue-500' },
        { header: 'Front End Developer at Google Company', date: '2017-2018', desc: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.', bg: 'bg-red-500' },
        { header: 'System Analyst', date: '2017-2018', desc: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.', bg: 'bg-orange-500' }
    ];


    const renderExperiences = experiences.map(({header,date,desc,bg}, idx) => <div key={idx} className="experience ps-10 py-3 border-s-[3.5px] border-gray-200 relative">
        <div className={`${Style.expIcon}`}>
            <div className={`p-3 text-white ${bg} border-4 rounded-full`}>
                <Pencil />
            </div>
        </div>
        <div className="experience-content relative bg-gray-100 text-gray-500 pt-5 px-5">
            <div className={`${Style.expArrow}`}>
                <div className="bg-gray-100 w-5 h-5">
                </div>
            </div>
            <div className="lg:flex lg:items-center lg:gap-4">
                <h1 className="text-xl text-black">{header}</h1>
                <span>{date}</span>
            </div>
            <p className="py-8">{desc}</p>
        </div>
    </div>)
    return (
        <section id="experience" className="text-justify leading-7 mt-14 px-4 lg:mt-8 lg:px-48">
            <span className="text-[10px] text-gray-500 tracking-[5px]">EXPERIENCE</span>
            <h2 className="text-lg  font-main tracking-[5px] mt-4 font-bold"> WORK EXPERIENCE</h2>
            <div className="experiences px-7 mt-7">
                {renderExperiences}
                <div className="experience ps-10 pt-5 mb-10 border-s-[3.5px] border-gray-200 relative">
                    <div className={`${Style.expIcon}`}>
                        <div className={`p-5 border-4 bg-white rounded-full`}>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
