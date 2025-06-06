const ShowMemo = ({ memo, editOnClick }) => {
  return (
    <>
      {memo.content}
      <button onClick={editOnClick}>編集</button>
    </>
  );
};

export default ShowMemo;
