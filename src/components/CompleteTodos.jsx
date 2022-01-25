import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack, onClickRecheck } = props;

  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
              <button onClick={() => onClickRecheck(index)}>
                リチェック済
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
