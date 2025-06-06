import MemoListItem from "./MemoListItem";

const MemoList = ({ memos, createNewMemo, selectMemo }) => {
  return (
    <ul style={{ textAlign: "left" }}>
      {memos.map((memo, index) => {
        return (
          <MemoListItem
            memo={memo}
            key={index}
            index={index}
            onClick={selectMemo(index)}
          />
        );
      })}
      <li key={memos.length}>
        <a onClick={createNewMemo}>+</a>
      </li>
    </ul>
  );
};

export default MemoList;
