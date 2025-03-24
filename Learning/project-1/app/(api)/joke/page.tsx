import React from 'react';

const page = async () => {
    const data = await fetch("https://icanhazdadjoke.com", {
        headers: {
            Accept: "application/json",
        }
    });
    
    const joke = await data.json();

    return (
        <div>
            <h1>{joke.joke}</h1>
        </div>
    )
}

export default page