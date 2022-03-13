import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Spinner from './Spinner/Spinner';
import SearchBar from "./SearchBar";

const Table = () => {
    const [initialData, setInitialData] = useState([]);
    const [userData, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get("https://randomapi.com/api/eba740a2f505e3b013dfdfa80d0c6977").then(res => {
            setUserData(res?.data?.results[0]?.users);
            setInitialData(res?.data?.results[0]?.users);
            setIsLoading(false);
        });
    }, [])

    return (
        <>
            <SearchBar initialData={initialData} setUserData={setUserData} />
            <div className='table'>
                {isLoading ? <Spinner /> : (
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Email</th>
                                <th>DOB</th>
                            </tr>
                        </thead>
                        {userData.map((val, key) => { 
                            return (
                                <tr key={key}>
                                    <td>{val.name}</td>
                                    <td>{val.gender}</td>
                                    <td>{val.email}</td>
                                    <td>{val.dob}</td>
                                </tr>
                            )
                        })}
                    </table>)}
            </div>
        </>
    )
}
export default Table;
