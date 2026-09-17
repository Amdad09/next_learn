import type { Metadata } from "next";
import Link from "next/link";

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;

    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;

        geo: {
            lat: string;
            lng: string;
        };
    };

    phone: string;
    website: string;

    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

export const metadata: Metadata = {
    title: 'Active user',
    description: 'User details',
};

const UsersPage = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
  return (
      <div className="overflow-x-auto py-12">
          <table className="table">
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Username</th>
                      <th>Email</th>
                      <th>City</th>
                      <th>Company</th>
                      <th>Action</th>
                  </tr>
              </thead>

              <tbody>
                  {users.map((user: User) => (
                      <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.username}</td>
                          <td>{user.email}</td>
                          <td>{user.address.city}</td>
                          <td>{user.company.name}</td>

                          <td>
                              <Link
                                  href={`/users/${user.id}`}
                                  className="btn bg-black text-white hover:bg-slate-950 py-1 px-3 text-sm font-light rounded-xl"
                              >
                                  View Details
                              </Link>
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
  );
};

export default UsersPage;