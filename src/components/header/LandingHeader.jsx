import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png';

export default function LandingHeader() {
    return(
        <header className="header-wrapper">
            <div className="container">
                <Link to="/">
                    <img src={Logo} alt="BPO Solutions Group" />
                </Link>
            </div>
        </header>
    )
}