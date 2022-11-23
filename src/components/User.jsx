import React, { useEffect, useState } from "react";

const User = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  /* const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) throw new Error("Error 404");
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }; */

  const fetchUsers2 = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response) throw new Error("Page Not Found");
      const data = await response.json();
      setUsers(data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // fetchUsers()
    fetchUsers2();
  }, []);

  const errorStyle = {
    color: "red",
    width: "100px",
    backgroundColor: "black",
    textAlign: "center",
    margin: "100px auto",
    padding: "10px",
    fontWeight: "bold",
    borderRadius: "5px",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
  };

  return (
    <div>
      {isLoading ? <p>loading...</p> : null}

      {error ? (
        <p style={errorStyle}>{error}</p>
      ) : (
        users.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default User;
