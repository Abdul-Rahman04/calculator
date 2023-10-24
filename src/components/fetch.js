// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import { Table } from "react-bootstrap";

// function Fetch() {
//   const [temp, setTemp] = useState([]);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/photos`)
//       .then((response) => response.json())
//       .then((data) => setTemp(data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div>
//       {temp.map((photos) => (
//         <>
//           <Table>
//             <tr>
//               <th> {photos.id}</th>

//               <th> {photos.title}</th>
//               <td>
//                 <img
//                   src={photos.url}
//                   alt=""
//                   style={{ width: "20px", height: "20px" }}
//                 />
//               </td>
//               <td>
//                 <img
//                   src={photos.thumbnailUrl}
//                   alt=""
//                   style={{ width: "20px", height: "20px" }}
//                 />
//               </td>
//             </tr>
//           </Table>
//         </>
//       ))}
//     </div>
//   );
// }

// export default Fetch;
