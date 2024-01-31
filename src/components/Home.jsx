import React, { useState } from "react";
import MyEditor from "./MyEditor";

const Home = () => {
  const [editorData, setEditorData] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, phone, editorData };
    console.log(data);
  };
  return (
    <div>
      <form className='ml-auo space-y-4'>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Name'
          className='w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]'
        />
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          className='w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]'
        />{" "}
        <input
          type='number'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder='Phone'
          className='w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]'
        />{" "}
        <MyEditor setEditorData={setEditorData} editorData={editorData} />
        <button
          className=' py-1 px-3 rounded-md text-white bg-blue-500'
          type='submit'
          onClick={formSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
