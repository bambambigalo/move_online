import React,{useState} from "react";
import '../header/header.css';
import SearchHeader from "./search_header/SearchHeader";

export default function Header () {
    



     const [open, setOpen] = useState(false)
    
    function openSearch () {
        
       
        setOpen(!open);
    }
    function closeSearch () {
        setOpen(false)
    }
   
    return (
        <div className="header">
            <div className="headerContent">
                <div className="leftPart">
                     <a className="lavr">LAVRFILMS</a>
                </div>
                <form  className={open?'openSearch':'closeSearch'}  >
                    <input className="inputTitle"></input>
                    <button className="btn_search">Найти</button>
                    <span className="close" onClick={closeSearch}></span>
                </form>
                <div className= {open?'midlePartClose':'midlePart'}>
                    <a className="linkHeader">ФИЛЬМЫ</a>
                    <a className="linkHeader">СЕРИАЛЫ</a>
                    <a className="linkHeader">МУЛЬТФИЛЬМЫ</a>
                    <a className="linkHeader">АНИМЕ</a>
                    <a className="linkHeader">НОВИНКИ 2020</a>
                </div>
                <div className={open?'rightPartClose':'rightPart'}>
                    <SearchHeader openSearch = {openSearch}/>
                </div>
               
            </div>
        </div>
    )
}