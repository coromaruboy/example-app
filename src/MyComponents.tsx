import "./MyComponents.css";
import UserList from "./UserList";

const names = ["John", "Mike", "Camel"];

const MyComponents = () => {
    return (
        <div>
            <div className="title">Hello, World!</div>
            <UserList names={names} />
        </div>
    )
}

export default MyComponents;