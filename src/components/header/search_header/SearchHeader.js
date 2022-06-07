import React from "react";
import '../search_header/searchHeader.css';


export default function SearchHeader (props) {

    const { openSearch } = props;



    return (
        <div className="search">
           <div className="open" onClick={openSearch}></div>
        </div>
    )
}