// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { fetchTableData } from "../../services/api";
// import './CustomTable.css';


// const CustomTable = () => {
//   const { url } = useParams();
//   const [tableData, setTableData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     console.log("CustomTable component mounted");
//     const fetchData = async () => {
//       try {
//         console.log("try")
//         setLoading(true);
//         const data = await fetchTableData(url);
//         setTableData(data);
//         setLoading(false);
//       } catch (error) {
//         console.log("catch")
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [url]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div className="custom-table">
//       <h2>Table Data for URL: {url}</h2>
//       <table>
//         {/* Render table headers */}
//         <thead>
//           <tr>
//             {tableData.headers.map((header, index) => (
//               <th key={index}>{header}</th>
//             ))}
//           </tr>
//         </thead>
//         {/* Render table body */}
//         <tbody>
//           {tableData.rows.map((row, rowIndex) => (
//             <tr key={rowIndex}>
//               {row.map((cell, cellIndex) => (
//                 <td key={cellIndex}>{cell}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CustomTable;

import React, { useEffect, useState } from "react";
import {useSearchParams } from "react-router-dom";
import { fetchTableData } from "../../api";
import "./CustomTable.css"; 
import { useRef } from "react";
import fetchIcon from "../../assets/fetchIcon.png";



const CustomTable = () => {
  const [searchParams] = useSearchParams();
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  const tableRef = useRef(null);

  useEffect(() => {
    console.log("CustomTable component mounted");
    const fetchData = async () => {
      try {
        console.log("try",searchParams.get('url'));
        setLoading(true);
        const data = await fetchTableData(searchParams.get('url'));
        setTableData(data);
        setLoading(false);
      } catch (error) {
        console.log("catch");
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tableRef.current && !tableRef.current.contains(event.target)) {
        setSelectedRow(null); 
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (loading) return <div className="page-loader">
  <div className="loader"></div>
  <p>Loading...</p>
</div>;
  if (error) return <div className="table-container">Error: {error.message}</div>;

  return (
    <div className="table-container" ref={tableRef}>
      <img src={fetchIcon} alt="Logo" className="table-logo" />
      <h2 className="table-header">Table Data for URL: {searchParams.get('url')}</h2>
      <table className="table">
        <thead>
          <tr>
            {tableData.headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
  {tableData.rows.map((row, rowIndex) => (
    <tr
      key={rowIndex}
      style={
        rowIndex === selectedRow
          ? { backgroundColor: "#d5e6f0", color: "#0a3d62", fontWeight: "bold" }
          : {}
      }
      onClick={() => setSelectedRow(rowIndex)}
    >
      {tableData.headers.map((_, colIndex) => (
        <td key={colIndex}>{row[colIndex] || ""}</td>
      ))}
    </tr>
  ))}
</tbody>
      </table>
    </div>
  );
};

export default CustomTable;