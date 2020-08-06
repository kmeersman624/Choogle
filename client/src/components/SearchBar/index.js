import React from 'react'

export default function SearchBar() {
    return (
        <div>
            <form action="https://www.google.com/search" method="GET">
                    <input type="text" name="q" placeholder="Google Search" className="inline" />
                    <input type="submit" value="Google Search" className="inline" />
            </form>
        </div>
    )
}
