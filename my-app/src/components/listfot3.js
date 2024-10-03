export default function List3(props){
    return (
        <>
        <div className="flex justify-between py-4 px-16 border border-gray-600 border-r-0 border-s-0 ">
        <span className="text-xl underline">{props.one}</span>
        <span className="text-xl ">{props.two}</span>
        <span className="text-xl underline">READ</span>
        </div>
        </>
    );
}
