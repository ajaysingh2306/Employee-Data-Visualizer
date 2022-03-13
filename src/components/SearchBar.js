import React, { useState, useEffect } from 'react';

const SearchBar = ({ initialData, setUserData }) => {
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const query = searchQuery.toLowerCase();
        const filteredData = initialData.filter(data => {
            const name = data.name?.toLowerCase();
            const email = data.email?.toLowerCase();
            const dob = data.dob?.toLowerCase();
            const gender = data.gender?.toLowerCase();
            return name?.includes(query) || email?.includes(query) || dob?.includes(query) || gender === query;
        })
        setUserData(filteredData);
    }, [searchQuery])

    return (
        <form action="/" method="get">
            <input
                type="text"
                id="header-search"
                placeholder="Search User"
                name="s"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;