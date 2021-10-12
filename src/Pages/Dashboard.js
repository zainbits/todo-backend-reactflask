import { useEffect, useReducer } from "react";
import { useHistory } from "react-router-dom";
import { TitleBar } from "../Components/RightTitleBar";
import { MagicSlate } from "../Components/MagicSlate";
import { Card } from "../Components/Card";

import "../App.css";
import API from "../api";

export const Dashboard = () => {
  const token = localStorage.getItem("token");

  const ACTION = {
    TOGGLE: "toggle",
    FETCH_TODO: "fetch_todos",
    DELETE_TODO: "delete_todo",
  };

  const reducer = (todos, action) => {
    switch (action.type) {
      case ACTION.TOGGLE:
        return todos.map((todo) => {
          if (todo.id === action.payload.id) {
            API.put(
              `/todo/${todo.id}`,
              {
                complete: !todo.complete,
              },
              {
                headers: {
                  Authorization: "Bearer " + token,
                },
              }
            )
              .then((response) => {
                todo.complete = !todo.complete;
              })
              .catch((error) => {
                console.log(error.response.status);
              });
            return { ...todo, complete: !todo.complete };
          } else {
            return { ...todo };
          }
        });

      case ACTION.DELETE_TODO:
        return todos.filter((todo) => todo.id !== action.payload.id);

      case ACTION.FETCH_TODO:
        return action.payload.data;

      default:
        return todos;
    }
  };

  const history = useHistory();
  const [todos, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const opts = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    API.get("/todo", opts)
      .then((response) => {
        dispatch({ type: ACTION.FETCH_TODO, payload: { data: response.data } });
      })
      .catch((err) => {
        if (err.response.status === 422) {
          history.push("/");
        } else if (err.response.status === 401) {
          alert("you have been logged out");
          history.push("/");
        }
      });
  }, [history, token, ACTION.FETCH_TODO]);

  const addTodo = () => {
    alert("pressed addTodo");
  };

  return (
    <>
      <TitleBar title="Dashboard" />
      <MagicSlate className="block__slate--dashboard">
        <div>
          {todos.length !== 0 &&
            todos.map((item) => {
              return (
                <Card key={item.id}>
                  <h3>{item.text}</h3>
                  <hr className="elem__hr" />
                  {item.complete ? (
                    <span>Completed</span>
                  ) : (
                    <span>Incomplete</span>
                  )}
                  <hr className="elem__hr" />
                  <div className="block__actions">
                    <button
                      onClick={() => {
                        dispatch({
                          type: ACTION.DELETE_TODO,
                          payload: { id: item.id },
                        });
                      }}
                      className="delete"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => {
                        dispatch({
                          type: ACTION.TOGGLE,
                          payload: { id: item.id },
                        });
                      }}
                      className="toggle"
                    >
                      Toggle
                    </button>
                  </div>
                </Card>
              );
            })}
        </div>
        <button onClick={addTodo} className="block__add--bottomRight">
          +
        </button>
      </MagicSlate>
    </>
  );
};
