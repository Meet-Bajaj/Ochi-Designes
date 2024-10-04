export default function Cont(props) {
    if (props.S) {
        return (
            <>
                <ul className="text-start text-xl">
                    <h2 className="none">S:</h2>
                    <li>Instagram</li>
                    <li>Behance</li>
                    <li>Facebook</li>
                    <li>Linkedin</li>
                </ul>
            </>

        );
    }
    else if (props.M) {
        return (
            <>
                <ul className="text-start font-underline text-xl">
                    <h2 className="none">M:</h2>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Our Work</li>
                    <li>About Us</li>
                    <li>Insights</li>
                    <li>Contant Us</li>
                </ul>
            </>
        );
    }
    else if (props.L) {
        return (
            <>
                <ul className="text-start font-underline text-xl">
                    <h2 className="none">L:</h2>
                    <li>202-1965 W 4th Ave</li>
                    <li>Vancouver, Canada</li>
                    <br />
                    <li>30 Chukarina St</li>
                    <li>Lviv, Ukraine</li>
                </ul>
            </>
        );

    }
    else if (props.E) {
        return (
            <>
                <ul className="text-start font-underline text-xl">
                    <h2 className="none">E:</h2>
                    <li>hello @ochi.design</li>
                </ul>
            </>
        );

    }
}
