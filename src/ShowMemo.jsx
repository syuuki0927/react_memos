const ShowMemo = ({ memo, editOnClick }) => {
  return (
    <>
      <p>{memo.content}</p>
      <button onClick={editOnClick}>編集</button>
    </>
  );
};

export default ShowMemo;
