import { useState } from "react";
import ShowMemo from "./ShowMemo";
import EditMemo from "./EditMemo";

const DetailMemo = ({ selectedMemo, saveMemo, deleteMemo }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      {isEditing ? (
        <EditMemo
          memo={selectedMemo}
          onClickSave={saveMemo}
          onClickDelete={deleteMemo}
        />
      ) : (
        <ShowMemo memo={selectedMemo} editOnClick={() => setIsEditing(true)} />
      )}
    </>
  );
};

export default DetailMemo;
