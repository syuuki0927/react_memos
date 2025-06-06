import { useEffect, useState } from "react";

const EditMemo = ({ memo, onClickSave, onClickDelete }) => {
  const [memoText, setMemoText] = useState("");
  useEffect(() => {
    setMemoText(memo.content);
  }, []);

  return (
    <>
      <textarea
        defaultValue={memo.content}
        onChange={(e) => {
          setMemoText(e.target.value);
        }}
      />
      <button onClick={() => onClickSave(memoText)}>保存</button>
      <button onClick={() => onClickDelete()}>削除</button>
    </>
  );
};

export default EditMemo;
