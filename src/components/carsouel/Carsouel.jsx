import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BriefcaseBusiness, HardDriveDownload } from "lucide-react";
import cv from "../../assets/cv.pdf";
import Style from "./Carsouel.module.css";
// import Home2 from "../assets/project-assets/home2.jpg";
const Carsouel = () => {
    const settings = {
        infinite: true,
        autoplay: true,
        fade: true,
        autoplaySpeed: 3000,
        speed: 750,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        pauseOnHover: false
    };
    return (
        <>
            <div className="slider-container h-full overflow-hidden">
                <Slider {...settings}>
                    <div className={`${Style.img1} w-full h-dvh`}>
                        <section id="home" className="h-dvh w-full relative ps-12 pt-40 lg:ps-52 lg:pt-52">
                            <h1 className="text-6xl font-bold font-main">Hi!<br />Im Jackson</h1>
                            <p className="my-8 font-light text-lg">100% html5 bootstrap templates Made<br /> By <a className="text-blue-400 underline underline-offset-4" href="Colorlib.com">Colorlib.com</a></p>

                            <button className="text-sm leading-2 text-black/75 items-center border border-black py-2 px-4"><a className="flex gap-2" href={cv} download={cv}>DOWNLOAD CV <HardDriveDownload size={18} /></a></button>
                        </section>
                    </div>
                    <div className={`${Style.img2} w-full h-dvh`}>
                        <section id="home" className="h-dvh w-full relative ps-12 pt-40 lg:ps-52 lg:pt-52">
                            <h1 className="text-6xl font-bold font-main">I am<br />a Designer</h1>
                            <p className="my-8 font-light text-lg">100% html5 bootstrap templates Made<br /> By <a className="text-blue-400 underline underline-offset-4" href="Colorlib.com">Colorlib.com</a></p>

                            <button className="text-sm leading-2 text-black/75 items-center border border-black py-2 px-4"><a className="flex gap-2">VIEW PORTFOLIO<BriefcaseBusiness size={18} /></a></button>
                        </section>
                    </div>
                </Slider>
            </div>
        </>
    )
}
export default Carsouel;
