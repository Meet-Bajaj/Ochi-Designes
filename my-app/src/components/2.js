import Marquee from "react-fast-marquee";
import Cont from "./cont";
import EYE from "./eyeTracking";
function Second(params) {
    const kaibg = {
        backgroundColor: "rgb(131, 157, 6)"
    }
    return (

        <>
            <section className="w-screen">
                <div className="w-full bg-teal-800 h-50-screen flex rounded-2xl  sticky top-0">
                    <hr/>
                    <Marquee speed={200} className="text-res-xl font-bold">WE ARE OCHI</Marquee>
                    <hr/>
                </div>
                <div className="w-full py-24  kaibg rounded-2xl sticky">
                    <p className="text-6xl mx-10 text-start">Ochi is a strategic presentation agency for forward-<br />thinking businesses that need to <span className="underline w-full">raise funds, sell <br /> prod­ucts, ex­plain com­plex ideas, and hire great peo-<br />­ple.</span></p>
                    <div className="border-solid border-white border w-full p-10 pb-20 mt-10 flex  justify-around">
                        <h3 className="text-xl">What you can expect:</h3>
                        <p className="w-1/4 text-xl">We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
                            <br />
                            <br />
                            We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
                        <Cont S="true" />
                    </div>
                    <div className="flex justify-between py-4 px-12">
                        <div className="flex flex-col gap-10">
                        <h3 className="text-7xl font-sans">Our approach:</h3>
                        <button className="bg-black p-4 rounded-full w-48 text-xl">READ MORE &nbsp;&nbsp;&nbsp;<i className="fa-solid fa-2xs fa-circle text-white"/></button>
                        </div>
                        <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" className="h-35rem rounded-2xl" />
                    </div>
                </div>
            </section>
            <section className=" w-screen bg-white">
                <div>
                    <img src="https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg" className="absolute" />
                </div>
                <EYE/> 
            </section>
        </>
    );
}
export default Second;
