import Link from "next/link";

const Users = () => {
  return (
    <div>
      <h1>Dashboard Users</h1>
      <ul>
        <li>
          <Link href="/dashboard/users/1">user 1</Link>
        </li>
        <li>
          <Link href="/dashboard/users/1"></Link>
        </li>
        <li>
          <Link href="/dashboard/users/1"></Link>
        </li>
      </ul>
    </div>
  );
};

export default Users;
