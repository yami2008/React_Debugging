function UserInfo({ user }) {
    if (!user) {
        return <p>No user info available.</p>;
    }

    return (
        <div>
            <h2>User Info</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default UserInfo;
