import "./Navigation.css"
import logo from "../images/netflix_logo.png"
import { FaRegBell, GrEdit } from 'react-icons/fa';
import netflix_avatar_smile from "../images/netflix-avatar-smile.gif"
import SearchMoviesButton from "./SearchMoviesButton";
import { useEffect } from "react"

const Navigation = () => {

    useEffect(() => {
        document.querySelector(".netflix-dropdown-opener").addEventListener("click", () => {
            document.querySelector(".user-dropdown-menu").classList.toggle("hide")
        })
    })
    
    return (
        <header>
            <div className="navigation wrapper">
                <div className="nav-left">
                    <img src={logo} alt="netflix_logo" id="netflix-logo" />
                    <ul className="nav">
                        <li><a href="#" className="active">Domovská stránka</a></li>
                        <li><a href="#">Pořady</a></li>
                        <li><a href="#">Filmy</a></li>
                        <li><a href="#">Nové a oblíbené</a></li>
                        <li><a href="#">Můj seznam</a></li>
                        <li><a href="#">Procházet podle jazyků</a></li>
                    </ul>
                </div>
                <div className="nav-right">
                    <li><SearchMoviesButton /></li>
                    <li><a className="user-name" href="#">Děti</a></li>
                    <li><FaRegBell /></li>
                    <li><img src={netflix_avatar_smile} alt="netflix-avatar-smile" className="netflix-dropdown-opener"/></li>
                    <div className="user-dropdown-menu hide">
                        <li>
                            <img src={netflix_avatar_smile} alt="user-avatar" />
                            <a href="#">Petra</a>
                        </li>
                        <li>
                            <img src={netflix_avatar_smile} alt="user-avatar" />
                            <a href="#">David</a>
                        </li>
                        <li>
                            <img src={netflix_avatar_smile} alt="user-avatar" />
                            <a href="#">Daja</a>
                        </li>
                        <li>
                            <img src={netflix_avatar_smile} alt="user-avatar" />
                            <a href="#">Valinka</a>
                        </li>
                        <li>
                            <img src={netflix_avatar_smile} alt="user-avatar" />
                            <a href="#">Spravovat profily</a>
                        </li>
                        <li>
                            <img src={netflix_avatar_smile} alt="user-avatar" />
                            <a href="#">Převést účet</a>
                        </li>
                        <li>
                            <img src={netflix_avatar_smile} alt="user-avatar" />
                            <a href="#">Účet</a>
                        </li>
                        <li>
                            <img src={netflix_avatar_smile} alt="user-avatar" />
                            <a href="#">Centrum zákaznické <br />podpory</a>
                        </li>
                        
                        <li><a href="#" className="sign-out-button">Odhlásit se z Netflixu</a></li>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navigation