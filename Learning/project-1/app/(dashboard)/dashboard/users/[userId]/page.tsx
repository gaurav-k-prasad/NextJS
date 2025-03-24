import React from 'react';

const User = ({ params }: { params: { userId: string } }) => {
    const { userId } = params;

    return (
        <div>This is User {userId}</div>
    )
}

export default User