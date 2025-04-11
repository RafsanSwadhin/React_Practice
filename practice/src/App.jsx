import React from "react";

const users = [
  {
    fullName: "Rafsan Jani",
    age: 25,
    phones: [{ home: "0124575" }, { office: "852147" }],
  },
  {
    fullName: "Akash Mia",
    age: 28,
    phones: [{ home: "017123575" }, { office: "85512147" }],
  },
];

function App() {
  return (
    <div>
      <h1 className="headingStyle largeText">Todo App</h1>

{/* {Data.map((item,index)=> <Card key={index} titleText={item.title} descText ={item.desc}/>)} */}

      {users.map((user, index) => (
        <article key={index}>
          <h3>{user.fullName}</h3>
          <p>{user.age}</p>
          {user.phones.map((phone, index) => (
            <div key={index}>
              {phone.home && <p>Home: {phone.home}</p>}
              {phone.office && <p>Office: {phone.office}</p>}
            </div>
          ))}
        </article>
      ))}
    </div>
  );
}

export default App;
