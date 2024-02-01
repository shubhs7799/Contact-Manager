import React, { useState } from "react";

const ImportCSVFile = () => {
  const [jsonData, setJsonData] = useState(null);

  const convertCSVTOJson = (csvData) => {
    const lines = csvData.split("\n");
    const headers = lines[0].split(",").map((header) => header.trim().replace(/^"|"$/g, ""));
    const result = [];

    for (let i = 1; i < lines.length; i++) {
      const obj = {};
      const currentLine = lines[i].split(",").map((curL) => curL.trim().replace(/^"|"$/g, ""));

      for (let j = 0; j < headers.length; j++) {
        obj[headers[j].trim()] = currentLine[j].trim();
      }
      result.push(obj);
    }
    return result;
  };

  const handleCSVInputChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const csvData = e.target.result;
      const jsonData = convertCSVTOJson(csvData);
      // const cleanedJsonString = JSON.stringify(jsonData).replace(/\\?\"/g, (match) => match === '\"' ? '' : match);
      // const cleanedJson = JSON.parse(cleanedJsonString);
      
      setJsonData(jsonData);
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <input
        type={"file"}
        id={"csvFileInput"}
        accept={".csv"}
        onChange={handleCSVInputChange}
      />

      {jsonData ? (
        <div className="json-container">

          {/* <div>{JSON.stringify(jsonData[0].name, null, 2)} </div> */}
          <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        </div>
      ) : (
        <p>Please select a CSV file.</p>
      )}
    </div>
  );
};

export default ImportCSVFile;

// How to Import Export Excel & CSV In React 2022

// https://www.ultimateakash.com/blog-details/Ii0zOGAKYAo=/How-to-Import-Export-Excel-&-CSV-In-React-2022

// import React, { useState } from "react";
// import { read, utils, writeFile } from 'xlsx';

// const HomeComponent = () => {
//     const [movies, setMovies] = useState([]);

//     const handleImport = ($event) => {
//         const files = $event.target.files;
//         if (files.length) {
//             const file = files[0];
//             const reader = new FileReader();
//             reader.onload = (event) => {
//                 const wb = read(event.target.result);
//                 const sheets = wb.SheetNames;

//                 if (sheets.length) {
//                     const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
//                     setMovies(rows)
//                 }
//             }
//             reader.readAsArrayBuffer(file);
//         }
//     }

//     const handleExport = () => {
//         const headings = [[
//             'Movie',
//             'Category',
//             'Director',
//             'Rating'
//         ]];
//         const wb = utils.book_new();
//         const ws = utils.json_to_sheet([]);
//         utils.sheet_add_aoa(ws, headings);
//         utils.sheet_add_json(ws, movies, { origin: 'A2', skipHeader: true });
//         utils.book_append_sheet(wb, ws, 'Report');
//         writeFile(wb, 'Movie Report.xlsx');
//     }

//     return (
//         <>
//             <div className="row mb-2 mt-5">
//                 <div className="col-sm-6 offset-3">
//                     <div className="row">
//                         <div className="col-md-6">
//                             <div className="input-group">
//                                 <div className="custom-file">
//                                     <input type="file" name="file" className="custom-file-input" id="inputGroupFile" required onChange={handleImport}
//                                         accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/>
//                                     <label className="custom-file-label" htmlFor="inputGroupFile">Choose file</label>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-6">
//                             <button onClick={handleExport} className="btn btn-primary float-right">
//                                 Export <i className="fa fa-download"></i>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col-sm-6 offset-3">
//                     <table className="table">
//                         <thead>
//                             <tr>
//                                 <th scope="col">Id</th>
//                                 <th scope="col">Movie</th>
//                                 <th scope="col">Category</th>
//                                 <th scope="col">Director</th>
//                                 <th scope="col">Rating</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                                 {
//                                     movies.length
//                                     ?
//                                     movies.map((movie, index) => (
//                                         <tr key={index}>
//                                             <th scope="row">{ index + 1 }</th>
//                                             <td>{ movie.Movie }</td>
//                                             <td>{ movie.Category }</td>
//                                             <td>{ movie.Director }</td>
//                                             <td><span className="badge bg-warning text-dark">{ movie.Rating }</span></td>
//                                         </tr>
//                                     ))
//                                     :
//                                     <tr>
//                                         <td colSpan="5" className="text-center">No Movies Found.</td>
//                                     </tr>
//                                 }
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </>

//     );
// };

// export default HomeComponent;

// import React, { useState } from "react";

// function ImportTable() {
//   const [file, setFile] = useState();
//   const [array, setArray] = useState([]);

//   const fileReader = new FileReader();

//   const handleOnChange = (e) => {
//     setFile(e.target.files[0]);

//   };

//   const csvFileToArray = string => {
//     const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
//     const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");
//     console.log(string,csvHeader)
//     const array = csvRows.map(i => {
//       const values = i.split(",");
//       const obj = csvHeader.reduce((object, header, index) => {
//         object[header] = values[index];
//         // console.log(object[header],values[index],index )

//         return object;
//       }, {});
//       return obj;
//     });

//     console.log(array)
//     setArray(array);
//   };

//   const handleOnSubmit = (e) => {
//     e.preventDefault();

//     if (file) {
//       fileReader.onload = function (event) {
//         const text = event.target.result;
//         csvFileToArray(text);
//       };

//       fileReader.readAsText(file);
//     }
//   };

//   const headerKeys = Object.keys(Object.assign({}, ...array));

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>REACTJS CSV IMPORT EXAMPLE </h1>
//       <form>
//         <input
//           type={"file"}
//           id={"csvFileInput"}
//           accept={".csv"}
//           onChange={handleOnChange}
//         />

//         <button
//           onClick={(e) => {
//             handleOnSubmit(e);
//           }}
//         >
//           IMPORT CSV
//         </button>
//       </form>

//       <br />

//       <table>
//         <thead>
//           <tr key={"header"}>
//             {headerKeys.map((key) => (
//               <th>{key}</th>
//             ))}
//           </tr>
//         </thead>

//         <tbody>
//           {array.map((item) => (
//             <tr key={item.id}>
//               {Object.values(item).map((val) => (
//                 <td>{val}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ImportTable;
