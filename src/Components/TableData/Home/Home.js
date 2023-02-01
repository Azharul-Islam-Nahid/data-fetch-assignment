import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    const URL = "https://jsonplaceholder.typicode.com/users";


    const [data, setData] = useState(null);
    console.log("🚀 ~ file: Home.js:11 ~ Home ~ data", data)

    useEffect(() => {
        axios.get(URL).then((response) => {
            setData(response.data);
        });
    }, []);

    if (!data) return null;

    return (
        <div>
            <div className="text-center overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>City</th>
                            <th>Username</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        data?.map(userData => <tbody
                            key={userData?.id}
                        >
                            <tr className="hover">
                                <th>{userData?.name}</th>
                                <td>{userData?.phone}</td>
                                <td>{userData?.address?.city}</td>
                                <td>{userData?.username}</td>
                                <td>
                                    <Link to={`/userDetails/${userData?.id}`} className='mt-5'>
                                        <button className='btn-error btn-sm'>details</button>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>)}
                </table>
            </div>
        </div>
    );
};

export default Home;