// MyEditor.jsx

import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const MyEditor = () => {
  const [editorData, setEditorData] = useState("<p>Hello CKEditor!</p>");

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorData(data);
  };

  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data={editorData}
        onChange={handleEditorChange}
      />
      {/* <div>
        <p>Editor Content:</p>
        <div dangerouslySetInnerHTML={{ __html: editorData }} />
      </div> */}
    </div>
  );
};

export default MyEditor;
