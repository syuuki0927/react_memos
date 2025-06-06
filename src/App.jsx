import { useState, useEffect } from "react";
import MemoList from "./MemoList";
import "./App.css";
import DetailMemo from "./DetailMemo";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [memos, setMemos] = useState([]);
  const [newMemo, setNewMemo] = useState(null);

  const showMemo = () => {
    if (newMemo) {
      return newMemo;
    } else if (selectedIndex !== null) {
      return memos[selectedIndex];
    } else {
      return undefined;
    }
  };

  const storeMemos = (memos) => {
    localStorage.setItem("memos", JSON.stringify(memos));
  };

  const createNewMemo = () => {
    setNewMemo({ content: "新規メモ" });
  };

  const saveMemos = (content) => {
    if (newMemo) {
      newMemo.content = content;
      setMemos([...memos, newMemo]);
      setNewMemo(null);
      setSelectedIndex(null);
    } else {
      setMemos([
        ...memos.slice(0, selectedIndex),
        { content: content },
        ...memos.slice(selectedIndex + 1),
      ]);
      setSelectedIndex(null);
    }
  };

  const deleteMemo = () => {
    if (newMemo) {
      setNewMemo(null);
    } else {
      setMemos([
        ...memos.slice(0, selectedIndex),
        ...memos.slice(selectedIndex + 1),
      ]);
    }
  };

  useEffect(() => {
    const checkMemos = JSON.parse(localStorage.getItem("memos"));
    setMemos(checkMemos);
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
