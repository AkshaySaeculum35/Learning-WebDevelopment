const Student = ({ student }) => {
  return (
    <div>
      <h3>Students:</h3>
      {student.map((student) => {
        return (
          <ul>
            <li>Name: {student.name}</li>
            <li>Age: {student.age}</li>
            <li>Email: {student.email}</li>
            <hr />
          </ul>
        );
      })}
    </div>
  );
};
export default Student;
