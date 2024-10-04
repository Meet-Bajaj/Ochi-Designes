import Cont from "./cont"
import EYE from "./eyeTracking"
function Footer(params) {
    return (
        <>
            <div className="kaibg w-screen rounded-2xl pb-44 sticky -top-24">
                <div className="pos-center">
                    <p className="text-xxl font-extrabold tracking-tight text-balance text-center ">READY<br />TO START<br /> PROJECT ?</p>
                    <div className="flex flex-col align-center gap-4 my-32">
                        <button className="bg-black p-4 rounded-full">START THE PROJECT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-2xs fa-circle text-white" /></button>
                        <p>Or</p>
                        <button className="border border-white p-4 rounded-full">START THE PROJECT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-2xs fa-circle text-white" /></button>
                    </div>
                </div>
                <EYE />
            </div>
            <footer className="bg-dark w-screen h-screen pt-6 rounded-t-3xl sticky">
                <div className="flex flex-row h-full p-10 justify-between">
                    <h1 className="font-self text-9xl font-bold tracking-tighter p-10">EYE-<br />OPENING</h1>
                    <div className="my-10">
                        <h1 className="text-9xl font-self font-bold tracking-tighter mr-20">PRESENTATIONS</h1>

                        <div className="flex flex-col my-4 gap-10">
                            <Cont S="true" />
                            <div className="flex justify-between">
                            <Cont L="true" />
                            <Cont M="true" />
                            </div>
                            <Cont E="true" />
                            <div className="flex justify-between"></div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;
