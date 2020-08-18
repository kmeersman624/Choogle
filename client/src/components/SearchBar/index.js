import React from 'react'
import "./styles.css";
// import searchicon from '../../images/searchicon.png'

export default function SearchBar() {
    return (
        <>
            <form action="https://www.google.com/search" method="GET" className="row inline searchbox">
                <div className="inline td">
                    <input type="text" name="q" placeholder="Google Search" size="25" className="search" />
                </div>

                <div class="inline">
                    <button type="submit" className="waves-effect waves-light btn submit2">Search</button>
                </div>
            </form>
        </>
    )
}
