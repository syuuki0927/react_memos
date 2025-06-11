const MemoListItem = ({ memo, index, onClick }) => {
  return (
    <li key={index}>
      <a onClick={onClick}>{memo.content.split("\n")[0]}</a>
    </li>
  );
};

export default MemoListItem;
