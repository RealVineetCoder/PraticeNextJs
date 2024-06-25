
export default async function UserPage(){
    const data = await getUsersDetails();
    console.log(data)
    return (
        <div>
            <h1>User Details</h1>
            <ul>
                {data.users.map(user => (
                    <li key={user.id}>
                        <h2>firstName : {user.firstName}</h2>
                        <p>Email: {user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export const getUsersDetails = async () => {
    const res = await fetch('https://dummyjson.com/users');
    const data = await res.json();
    return data;
}
