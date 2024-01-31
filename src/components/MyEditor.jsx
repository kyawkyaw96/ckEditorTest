// MyEditor.jsx

import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const MyEditor = ({ editorData, setEditorData }) => {
  return (
    <div className='  border rounded-md outline-[#007bff]'>
      <CKEditor
        editor={ClassicEditor}
        data={editorData}
        onChange={(e, editor) => setEditorData(editor.getData())}
      />
      {/* <div>
        <p>Editor Content:</p>
        <div dangerouslySetInnerHTML={{ __html: editorData }} />
      </div> */}
    </div>
  );
};

export default MyEditor;
