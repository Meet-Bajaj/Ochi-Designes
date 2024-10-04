import CardIn from "./cardForThird"
import List3 from "./listfot3"
export default function THIRD() {
    return (
        <>
            <section className="w-screen bg-dark rounded-t-3xl rounded-b-3xl py-4 border-t border-white sticky top-mys">
                <h1 className="text-6xl mx-10 mt-24 mb-8">Featured projects</h1>
                <hr className="border-gray-400" />
                <div className="grid grid-cols-10 p-20 gap-x-4 gap-y-10">
                    <CardIn title="Fyde" image="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" btns={["BRANDED TEMPLATE", "SALES DECK", "SOCIAL MEDIA TEMPLATES"]} />
                    <CardIn title="Fyde" image="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png" btns={["PITCH DECK"]} />
                    <CardIn title="Fyde" image="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" btns={["AUDIT", "COPYWRITING", "SALES DECK", "SLIDES DESIGN"]} />
                    <CardIn title="Fyde" image="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" btns={["AGENCY", "COMPANY PRESENTATION"]} />
                    <CardIn title="Fyde" image="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg" btns={["BRAND IDENTITY", "DESIGN RESEARCH", "INVESTOR DECK"]} />
                    <CardIn title="Fyde" image="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png" btns={["BRAND TEMPLATE"]} />
                    <div className="col-span-4"></div>
                    <button className="bg-black p-4 my-16 rounded-full text-xl text-center col-span-2">VIEW ALL CASE STUDIES &nbsp;&nbsp;&nbsp;<i className="fa-solid fa-2xs fa-circle text-white" /></button>
                    <div className="col-span-4"></div>
                </div>

                <h1 className="text-6xl mx-10 m-8">Client's reviews</h1>
                <hr className="border-gray-400" />
                <div className="grid grid-cols-12 h-96 px-20 mb-24 mt-8">
                    <div className="col-span-3 text-2xl underline">Karman Ventures</div>
                    <div className="col-span-3 text-2xl"><span>Services:</span></div>
                    <div className="col-span-4 flex flex-col justify-between">
                        <h1 className="text-2xl">William Barnes</h1>
                        <img src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" className="h-28 w-28 rounded-xl" />
                        <p className="text-xl">They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</p>
                    </div>
                    <div className="col-span-2 text-2xl text-right text-gray-400">READ</div>
                </div>
                <div>
                    <List3 one="Planetly" two="Nina Walloch" />
                    <List3 one="Workiz Easy" two="Tomer Levy" />
                    <List3 one="Premium Blend" two="Ellen Kim" />
                    <List3 one="Hypercare System" two="Brendan Goss" />
                    <List3 one="Officevibe" two="Raff Labrie" />
                    <List3 one="Orderlion" two="Stefan Strohmer" />
                    <List3 one="Black Book" two="Jaci Smith" />
                    <List3 one="Trawa Energy" two="David Bubbe" />
                </div>
                <div className="grid grid-cols-12 h-30rem mx-16 mt-40 mb-96 gap-4 ">
                    <div className="col-span-6 rounded-2xl grid place-items-center bg-teal-900">
                        <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" />
                    </div>
                    <div className="col-span-3 bg-gray-950 rounded-2xl grid place-items-center">
                        <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" className="" />
                    </div>
                    <div className="col-span-3 bg-gray-950 rounded-2xl grid place-items-center">
                        <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" className="h-36" />
                    </div>
                </div>
            </section>

        </>
    )
}
