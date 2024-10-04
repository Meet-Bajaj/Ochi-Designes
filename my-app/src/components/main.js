export default function MAIN() {
    const styles = {
        height: "7rem",
        borderRadius: "0.7rem"
    }
    return (
        <>
            <main className="h-screen flex flex-col w-screen bg-dark ">
                <div className="absolute -right-20 top-1/4 bg-red-600 h-24 w-44 -rotate-90"><p className="text-black text-xl p-2 font-semibold text-center">Site of the day.&nbsp;&nbsp;&nbsp;W.</p></div>
                <div className="text-9xl tracking-tighter font-bold mx-16 my-44 "><p>WE CREATE</p><p><img className="float-left" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" style={styles} />EYE-OPENING</p><p>PRESENTATIONS</p></div>
                <hr />
                <div className="flex justify-between m-4 text-2xl"><p className="">For public and private companies</p><p className="">From the first pitch to IPO</p><button>START THE PROJECT</button>
                </div>
            </main>
        </>
    );
}
