import College from "./College";

const Loop = () => {
  const collegeData = [
    {
      name: "JIT",
      city: "Khargone",
      website: "jit.com",
      student: [
        {
          name: "akshay",
          age: "22",
          email: "akshay@gmail.com",
        },
        {
          name: "ashu",
          age: "20",
          email: "ashu@gmail.com",
        },
        {
          name: "sneha",
          age: "22",
          email: "sneha@gmail.com",
        },
      ],
    },
    {
      name: "NIT",
      city: "Indore",
      website: "nit.com",
      student: [
        {
          name: "akshay",
          age: "22",
          email: "akshay@gmail.com",
        },
        {
          name: "ashu",
          age: "20",
          email: "ashu@gmail.com",
        },
        {
          name: "sneha",
          age: "22",
          email: "sneha@gmail.com",
        },
      ],
    },
    {
      name: "IPS",
      city: "Indore",
      website: "ips.com",
      student: [
        {
          name: "aman",
          age: "22",
          email: "aman@gmail.com",
        },
        {
          name: "abhi",
          age: "20",
          email: "abhi@gmail.com",
        },
        {
          name: "sandeep",
          age: "22",
          email: "sandeep@gmail.com",
        },
      ],
    },
    {
      name: "IIT",
      city: "Indore",
      website: "iit.com",
      student: [
        {
          name: "shyam",
          age: "22",
          email: "shyam@gmail.com",
        },
        {
          name: "gun",
          age: "20",
          email: "gun@gmail.com",
        },
        {
          name: "amit",
          age: "22",
          email: "amit@gmail.com",
        },
      ],
    },
  ];
  return (
    <div>
      <h1>Nested Looping with Component</h1>
      {collegeData.map((college, index) => {
        return (
          <div key={index}>
            <College college={college} />
          </div>
        );
      })}
    </div>
  );
};
export default Loop;
