import {useState} from "react";
import Header from "../components/Header";
import TextEditor from "../components/ckeditor/TextEditor";

function WriteBoard() {
  const [data, setData] = useState();
  return (
    <div>
      <Header color="white" />
      <div style={{marginTop: "80px"}}>
        <TextEditor setData={setData} />
      </div>
    </div>
  );
}

export default WriteBoard;
