import { Database, Earth, Lightbulb, Smartphone } from "lucide-react"

const About = () => {
    const services = [
        { name: "Graphic Design", icon: <Lightbulb size={32} />, color: 'text-blue-400', bg: "bg-blue-400" },
        { name: "Web Design", icon: <Earth size={32} />, color: 'text-red-400', bg: "bg-red-400" },
        { name: "Software", icon: <Database size={32} />, color: 'text-yellow-400', bg: "bg-yellow-400" },
        { name: "Application", icon: <Smartphone size={32} />, color: 'text-indigo-400', bg: "bg-indigo-400" },
    ];

    //<-------- renders --------->
    const renderServices = services.map(({ color, icon, name, bg }, idx) => <div key={idx}>
        <div className="px-6 shadow-lg py-8 h-full">
            <div className={`${color} mb-3`}>
                {icon}
            </div>
            <h3>{name}</h3>
        </div>
        <div className={`${bg} h-0.5`}></div>
    </div>);


    
    return (
        <>
            <section id="about" className="text-justify leading-7 mt-14 px-4 lg:mt-24 lg:px-48">

                <span className="text-[10px] text-gray-500 tracking-[5px]">ABOUT US</span>

                <h2 className="text-lg font-main tracking-[5px] mt-4 font-bold">WHO AM I?</h2>

                <p className="text-gray-500 mt-7"><span className="text-black/85 font-semibold">Hi Im Jackson Ford</span> On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word (and) and the Little Blind Text should turn around and return to its own, safe country.</p>

                <p className="text-gray-500 mt-8">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>

                <div className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 md:gap-12 lg:gap-6 my-5">
                    {renderServices}
                </div>
            </section>

        </>
    )
}

export default About
