const Skills = () => {
    const skills = [
        { name: "Photoshop", bg: "bg-blue-400", tC:"text-blue-400", rank:"75"},
        { name: "jQuery", bg: "bg-red-400", tC: "text-red-400", rank:"60"},
        { name: "HTML5", bg: "bg-yellow-400", tC: "text-yellow-400", rank:"85"},
        { name: "CSS3", bg: "bg-violet-500", tC: "text-violet-500", rank:"90"},
        { name: "WordPress", bg: "bg-emerald-600", tC: "text-emerald-600", rank:"70"},
        { name: "SEO", bg: "bg-blue-800", tC: "text-blue-800", rank:"80"},
    ]
    return (
        <section id="skills" className="text-justify leading-7 mt-14 px-4 lg:mt-24 lg:px-48">
            <span className="text-[10px] text-gray-500 tracking-[5px]">MY SPECIALTY</span>

            <h2 className="text-lg  font-main tracking-[5px] mt-4 font-bold">MY SKILLS</h2>

            <p className="text-gray-500 mt-7">The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>

            <div className="skills-rank grid grid-cols-1 md:grid-cols-2 gap-5 mb-6 mt-12">
                {skills.map(({name,bg,rank,tC}, idx) => <div key={idx}>
                    <h3 className="font-[350] mb-1">{name}</h3>
                    <div className="progress-bar bg-gray-100 h-1.5 rounded-full">
                        <div className={`${bg} h-full rounded-full relative`} style={{ width: `${rank}%` }}>
                            <span className={`${tC} text-[12px] font-bold absolute -top-3 right-0 -translate-y-1/2`}>{rank}%</span>
                            <div className={`w-3 h-3 rounded-full absolute top-1/2 right-0 -translate-y-1/2 ${bg}`}></div>
                        </div>
                    </div>
                </div>)}
            </div>
        </section>
    )
}

export default Skills
