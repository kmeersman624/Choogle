import React from 'react'
import "./styles.css";

export default function SearchBar() {
    return (
<<<<<<< HEAD
        <div>
            <form action="https://www.google.com/search" method="GET">
                <div>
                    <input type="text" name="q" placeholder="Google Search" className="inline" />
                    <input type="submit" value="Google Search" className="inline" />
=======
        <>
            <form action="https://www.google.com/search" method="GET" className="row inline">
                <div className="inline">
                    <input type="text" name="q" placeholder="Google Search" />
                </div>
                <div className="inline">
                    <input type="submit" value="Google Search" />
>>>>>>> 95de515411ce5b8d97ae1fa61a6b422ec9ac9950
                </div>
            </form>
        </>
    )
}
