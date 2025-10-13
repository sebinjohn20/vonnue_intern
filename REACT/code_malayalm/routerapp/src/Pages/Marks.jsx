import React from "react";
import { useOutletContext } from "react-router-dom";
import "./marks.css";

function Marks() {
  const { marks } = useOutletContext();
  const terms = ["Term 1", "Term 2", "Term 3", "Term 4", "Term 5"];

  return (
   <div className="marks-container">
    <table className="marks-table">
        <thead> 
            <tr>
                <th>
                    Subject
                </th>
                {terms.map((term, i) => (
                    <th key={i}>{term}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {Object.keys(marks).map((subject) => (
                <tr key={subject}>
                    <td className="subject-name">{subject}</td>
                    {marks[subject].map((score, i) => (
                        <td key={i}>{score}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
   </div>
  )
}

export default Marks;
