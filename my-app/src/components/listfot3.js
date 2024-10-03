export default function List3(props){
    return (
        <>
        <div className="flex justify-between py-4 px-16 border border-gray-600 border-r-0 border-s-0 ">
        <span className="text-xl w-40 underline">{props.one}</span>
        <span className="text-xl w-40">{props.two}</span>
        <span className="text-xl w-40 underline">READ</span>
        </div>
        </>
    );
}
