
import React from 'react';
import * as XLSX from '../../../node_modules/xlsx/xlsx.mjs';

const ImportFile = () => {

  const HandleFileChange = async (e) => {
    const file = e.target.files[0];
    const data = await file.arrayBuffer();
    const workbook = XLSX.readFile(data);

    const worksheet = workbook.Sheets[workbook.SheetNames[0]];

    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    const jsonData2 = JSON.stringify(jsonData);
    console.log(jsonData);
    console.log(jsonData2);
  };

  const SubmitFileChange = (e) => {
     
    e.preventDefault();
    console.log('aaaa');
  }

  // const handleUploadClick = () => {
  //     if (!file) {
  //       return;
  //     }

  //     // 👇 Uploading the file using the fetch API to the server
  //     fetch('https://httpbin.org/post', {
  //       method: 'POST',
  //       body: file,
  //       // 👇 Set headers manually for single file upload
  //       headers: {
  //         'content-type': file.type,
  //         'content-length': `${file.size}`, // 👈 Headers need to be a string
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => console.log(data))
  //       .catch((err) => console.error(err));
  //   };




  return (
    <form onSubmit={SubmitFileChange} className='form-wrapper'>
      <input type='file' onChange={(e) => HandleFileChange(e)}></input>
      <button type='submit' className='btn btn-warn mt-2' >Upload File</button>
    </form>
  );


};
export default ImportFile;

