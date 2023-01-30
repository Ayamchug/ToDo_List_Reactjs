import React from "react";
import { useState } from "react";
import UseList from "./custom-hooks/UseList";
import { FaTrash } from "react-icons/fa";

export default function App() {
  const { list, push, pull } = UseList();
  const [todo, setTodo] = useState("");

  const onsubmithandler = (event) => {
    event.preventDefault();
    var alerts = document.getElementById("alerts").value;
    if (alerts === "") {
      alert("Please type something to add");
    } else {
      push(todo);
      setTodo("");
    }
  };

  const clearHandler = () => {
    document.getElementsByClassName("ayam")[0].innerHTML = "";
  };

  return (
    <>
      <div>
        <section className="section-center color">
          <header>
            <form
              onSubmit={(event) => {
                onsubmithandler(event);
              }}
            >
              <h2 style={{ marginBottom: "1.5rem", textAlign: "center" }}>
                TODO LIST
              </h2>
              <div className="mb-3 form">
                <input
                  type="text"
                  id="alerts"
                  className="form-control alert"
                  placeholder="Add a new item"
                  onChange={(e) => {
                    setTodo(e.target.value);
                  }}
                  value={todo}
                />
                <button
                  type="submit"
                  className="btn btn-success text-center ms-2 hov"
                >
                  Add Item
                </button>
              </div>
            </form>
            <h4 className="container ayam">
              {list.map((listitem, listindex) => {
                return (
                  <>
                    <ul className="list-group list-group-flush">
                      <li
                        className="list-group-item d-flex justify-content-between align-items-center colour"
                        key={listindex}
                      >
                        {listitem}
                        <button
                          type="button"
                          className="delete-btn"
                          onClick={() => {
                            pull(listindex);
                          }}
                        >
                          <FaTrash />
                        </button>
                      </li>
                    </ul>
                  </>
                );
              })}
            </h4>
            <div className="text-center">
              <button className="btn btn-warning ho" onClick={clearHandler}>
                Clear Items
              </button>
            </div>
          </header>
        </section>
      </div>
    </>
  );
}
