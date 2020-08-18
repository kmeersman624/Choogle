import React from 'react'
import "./styles.css";

export default function SearchBar() {
    return (
        <>
                <div className="searchBorder">
                    <form action="https://www.google.com/search" method="GET" className="row inline">
                        <div className="inline">
                            <input type="text" name="q" placeholder="Google Search" />
                        </div>
                        <div className="inline">
                            <input type="submit" value="Google Search" />
                        </div>
                    </form>
                </div>
        </>
    )
}
