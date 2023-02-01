import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TableData from '../TableData';

const Home = () => {

    const URL = "https://jsonplaceholder.typicode.com/users";


    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(URL).then((response) => {
            setData(response.data);
        });
    }, []);

    if (!data) return null;


    console.log(data);
    return (
        <div>
            <h1>Total users {data?.length}</h1>
            {
                data?.map(userData => <TableData
                    data={userData}
                ></TableData>)
            }
        </div>
    );
};

export default Home;