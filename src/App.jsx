import { useState, useEffect } from "react";
import MemoList from "./MemoList";
import "./App.css";
import DetailMemo from "./DetailMemo";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [memos, setMemos] = useState([]);

  const showMemo = () => {
    if (selectedIndex !== null) {
      return memos[selectedIndex];
    } else {
      return undefined;
    }
  };

  const storeMemos = (memos) => {
    localStorage.setItem("memos", JSON.stringify(memos));
  };

  const createNewMemo = () => {
    setMemos([...memos, { content: "新規メモ" }]);
    setSelectedIndex(memos.length);
  };

  const saveMemos = (content) => {
    setMemos([
      ...memos.slice(0, selectedIndex),
      { content: content },
      ...memos.slice(selectedIndex + 1),
    ]);
    setSelectedIndex(null);
  };

  const deleteMemo = () => {
    setMemos([
      ...memos.slice(0, selectedIndex),
      ...memos.slice(selectedIndex + 1),
    ]);
    setSelectedIndex(null);
  };

  useEffect(() => {
    const checkMemos = JSON.parse(localStorage.getItem("memos"));
    setMemos(checkMemos ? checkMemos : []);
  }, []);

  useEffect(() => {
    if (memos.length > 0) {
      storeMemos(memos);
    }
  }, [memos]);

  const selectMemo = (index) => () => {
    setSelectedIndex(index);
  };

  return (
    <>
      <div style={{ display: "flex", gap: "1rem" }}>
        <MemoList
          memos={memos}
          createNewMemo={createNewMemo}
          selectMemo={selectMemo}
        />
        {showMemo() && (
          <DetailMemo
            selectedMemo={showMemo()}
            saveMemo={saveMemos}
            deleteMemo={deleteMemo}
          />
        )}
      </div>
    </>
  );
}

export default App;
