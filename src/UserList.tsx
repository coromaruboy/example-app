import "./UserList.css";

const UserList = (props: { names: string[] }) => {
    return (
        <ul className="name-list">
            {props.names.map((name) => (
                <li>{name}</li>
            ))}
        </ul>
    );
};

export default UserList;