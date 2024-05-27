// <path-to-your-build>/src/ckeditor.ts or file containing editor configuration if you are integrating an editor from source.

// The editor creator to use.
import Editor from "ckeditor5-custom-build/build/ckeditor";
import {CKEditor} from "@ckeditor/ckeditor5-react";

const TextEditor = ({setData}) => {
  const edrtorConfiguration = {
    toolbar: {
      items: [
        "heading",
        "|",
        "bold",
        "italic",
        "link",
        "bulletedList",
        "numberedList",
        "|",
        "outdent",
        "indent",
        "|",
        "imageUpload",
        "blockQuote",
        "mediaEmbed",
        "undo",
        "redo",
      ],
    },
    language: "ko",
    image: {
      toolbar: ["imageTextAlternative"],
    },
  };

  return (
    <CKEditor
      editor={Editor}
      config={edrtorConfiguration}
      data="<p> 이곳에 내용을 작성해 주세요!</p>"
      onChange={(event, editor) => {
        setData(editor.getData()); // 에디터 작성 내용 저장
      }}
    />
  );
};

export default TextEditor;
