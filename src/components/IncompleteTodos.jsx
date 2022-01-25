import React from "react";

export const IncompleteTodos = (props) => {
  const {
    todos,
    onClickComplete,
    onClickDelete,
    setIncompleteTodos,
    todoText,
    onChange,
    setTodoText,
  } = props;
  const [display, setDisplay] = React.useState(true);
  const [buttonChange, setButtonChange] = React.useState(true);
  const [beforeName, setBeforeName] = React.useState();

  const onClickEdit = (index) => {
    setBeforeName(todos[index]);
    setDisplay((prev) => !prev);
    setButtonChange((prev) => !prev);

    // setIncompleteTodos([todoText]);
  };
  const onClickOk = (index) => {
    const newTodoEdit = [...todos];
    newTodoEdit[index] = todoText;

    setButtonChange((prev) => !prev);
    setDisplay((prev) => !prev);
    if (todoText === "") {
      setTodoText(beforeName);
    }
    if (todoText) {
      setIncompleteTodos(newTodoEdit);
      setTodoText("");
    }
    // a, b, c
    // a, b, c, z
    // a, z, c
  };

  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={`${todo}-${index}`} className="list-row">
              {display ? (
                <li>{todo}</li>
              ) : (
                <li>
                  <input
                    placeholder="TODOを編集!"
                    value={todoText}
                    onChange={onChange}
                  />
                </li>
              )}
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
              {buttonChange ? (
                <button onClick={() => onClickEdit(index)}>編集</button>
              ) : (
                <button onClick={() => onClickOk(index)}>OK</button>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
};
