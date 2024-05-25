function User() {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div>
            <h1>Welcome, {user.fname} {user.lname}</h1>
            <p>{user.email}</p>
            <p>{user.password}</p>
        </div>
    );
}

export default User;
