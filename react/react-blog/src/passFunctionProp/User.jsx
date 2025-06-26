function User({ displaName, name, getUser }) {
  return (
    <div>
      <button onClick={() => displaName(name)}>Display User</button>
      <button onClick={() => getUser()}>Get User</button>
    </div>
  );
}
export default User;
