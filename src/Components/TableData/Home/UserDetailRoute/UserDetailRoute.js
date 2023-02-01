import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const UserDetailRoute = () => {

    const UserDetails = useLoaderData();
    console.log("🚀 ~ file: UserDetailRoute.js:7 ~ UserDetailRoute ~ UserDetails", UserDetails)
    return (
        <div className="mt-24 m-auto card w-4/12 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{UserDetails?.name}({UserDetails?.username})</h2>
                <p>city: {UserDetails?.address?.city}</p>
                <p>street: {UserDetails?.address?.street}</p>   <p>company: {UserDetails?.company?.name}</p>
                <p>email: {UserDetails?.email}</p>
                <p>phone: {UserDetails?.phone}</p>
                <p>website: {UserDetails?.website}</p>
                <div className="card-actions justify-end">
                    <Link to='/'>
                        <button className="btn btn-primary btn-md">Go back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UserDetailRoute;