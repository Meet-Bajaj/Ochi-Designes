import { useRef, useEffect } from 'react';

export default function EYE() {
    const leftEyeRef = useRef(null);
    const rightEyeRef = useRef(null);

    useEffect(() => {
        document.onmousemove = (event) => {
            var x = event.clientX * 100 / window.innerWidth + "%";
            var y = event.clientY * 100 / window.innerHeight + "%";
            leftEyeRef.current.style.left = x;
            leftEyeRef.current.style.top = y;
            rightEyeRef.current.style.left = x;
            rightEyeRef.current.style.top = y;
        }
        document.onmouseout = (event) => {
            leftEyeRef.current.style.transition = "0.1s";
            leftEyeRef.current.style.left = "50%";
            leftEyeRef.current.style.top = "50%";
            rightEyeRef.current.style.transition = "0.1s";
            rightEyeRef.current.style.left = "50%";
            rightEyeRef.current.style.top = "50%";
        }
    }, []);

    return (
        <>
            <div className="flex h-screen w-screen justify-center gap-4 align-center">
                <div id="leftEye" >
                    <div ref={leftEyeRef} id="leftEyeBall"><div className='bg-white h-6 w-6 rounded-full absolute bottom-16 left-16'></div></div>
                </div>
                <div id="rightEye" >
                    <div ref={rightEyeRef} id="rightEyeBall"><div className='bg-white h-6 w-6 rounded-full absolute bottom-16 left-16'></div></div>
                </div>
            </div>
        </>
    );
}
