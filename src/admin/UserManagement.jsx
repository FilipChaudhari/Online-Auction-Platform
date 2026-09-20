import { useState } from "react";

function UserManagement() {

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Rahul Patel",
      email: "rahul@gmail.com",
      trust: 92,
      status: "Active"
    },
    {
      id: 2,
      name: "Amit Shah",
      email: "amit@gmail.com",
      trust: 78,
      status: "Active"
    },
    {
      id: 3,
      name: "John Smith",
      email: "john@gmail.com",
      trust: 41,
      status: "Suspended"
    }
  ]);

  const toggleStatus = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id
          ? {
              ...user,
              status:
                user.status === "Active"
                  ? "Suspended"
                  : "Active"
            }
          : user
      )
    );
  };

  return (
    <div>

      <div className="page-title">
        <div>
          <h2>User Management</h2>
          <p>Manage bidders and user trust scores</p>
        </div>

        <button className="btn btn-primary">
          <i className="bi bi-person-plus me-2"></i>
          Add User
        </button>
      </div>

      <div className="dashboard-card">

        <div className="table-responsive">

          <table className="table align-middle">

            <thead>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Email</th>
                <th>Trust Score</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {users.map((user) => (

                <tr key={user.id}>

                  <td>#{user.id}</td>

                  <td>
                    <strong>{user.name}</strong>
                  </td>

                  <td>{user.email}</td>

                  <td>
                    <div className="progress">
                      <div
                        className={`progress-bar ${
                          user.trust >= 70
                            ? "bg-success"
                            : "bg-danger"
                        }`}
                        style={{ width: `${user.trust}%` }}
                      >
                        {user.trust}%
                      </div>
                    </div>
                  </td>

                  <td>
                    <span
                      className={`badge ${
                        user.status === "Active"
                          ? "bg-success"
                          : "bg-danger"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td>
                    <button
                      className="btn btn-sm btn-outline-primary me-2"
                    >
                      <i className="bi bi-eye"></i>
                    </button>

                    <button
                      className="btn btn-sm btn-outline-warning"
                      onClick={() => toggleStatus(user.id)}
                    >
                      {user.status === "Active"
                        ? "Suspend"
                        : "Activate"}
                    </button>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default UserManagement;