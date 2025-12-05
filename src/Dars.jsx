import React, { useState } from "react";

function Dars() {
  // 4-amaliy ish (matnni almashtirish)
  const [text, setText] = useState("salom");

  // 5–6-amaliy ish (list + delete)
  const [items, setItems] = useState([
    { id: 1, title: "React" },
    { id: 2, title: "JSX" },
    { id: 3, title: "Props" },
  ]);

  const deleteItem = (id) => {
    setItems(items.filter((i) => i.id !== id));
  };

  // 9-amaliy ish (jonli input)
  const [inputText, setInputText] = useState("");

  // 10-amaliy ish (students)
  const students = [
    { ism: "Ali", yosh: 16 },
    { ism: "Laylo", yosh: 17 },
    { ism: "Sardor", yosh: 16 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      {/* 1-amaliy ish */}
      <h1>React ga xush kelibsiz!</h1>

      {/* 2-amaliy ish */}
      <h2>Bu Header component</h2>

      {/* 3-amaliy ish */}
      <h3>Salom, Ali!</h3>
      <h3>Salom, Laylo!</h3>
      <h3>Salom, Sardor!</h3>

      <hr />

      {/* 4-amaliy ish */}
      <h2>{text}</h2>
      <button onClick={() => setText(text === "salom" ? "hayr" : "salom")}>
        Matnni almashtirish
      </button>

      <hr />

      {/* 5–6-amaliy ish */}
      <h2>Ro‘yxat</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title}
            <button
              style={{ marginLeft: "10px", background: "red", color: "white" }}
              onClick={() => deleteItem(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <hr />

      {/* 7-amaliy ish – Cardlar */}
      <h2>Cardlar</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ border: "1px solid #ccc", padding: "10px", width: "150px" }}>
          <img src="https://via.placeholder.com/100" alt="" />
          <h3>React</h3>
          <p>Bu React haqida card.</p>
        </div>

        <div style={{ border: "1px solid #ccc", padding: "10px", width: "150px" }}>
          <img src="https://via.placeholder.com/100" alt="" />
          <h3>JSX</h3>
          <p>JSX haqida card.</p>
        </div>

        <div style={{ border: "1px solid #ccc", padding: "10px", width: "150px" }}>
          <img src="https://via.placeholder.com/100" alt="" />
          <h3>Props</h3>
          <p>Props nima?</p>
        </div>
      </div>

      <hr />

      {/* 8-amaliy ish */}
      <button style={{ background: "blue", color: "white", padding: "10px" }}>
        Bos!
      </button>
      <button
        style={{
          background: "green",
          color: "white",
          padding: "10px",
          marginLeft: "10px",
        }}
      >
        Yuborish
      </button>

      <hr />

      {/* 9-amaliy ish */}
      <h2>Live input preview</h2>
      <input
        type="text"
        placeholder="Nimadir yozing..."
        onChange={(e) => setInputText(e.target.value)}
      />
      <p>{inputText}</p>

      <hr />

      {/* 10-amaliy ish */}
      <h2>O‘quvchilar ro‘yxati</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Ism</th>
            <th>Yosh</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, i) => (
            <tr key={i}>
              <td>{s.ism}</td>
              <td>{s.yosh}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Bu Footer component</h2>
    </div>
  );
}

export default Dars;
