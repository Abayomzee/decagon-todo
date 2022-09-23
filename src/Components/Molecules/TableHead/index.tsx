import React from "react";

// interface columnProps {
//   label: string;
//   id: string;
// }
interface Props {
  columns?: object[];
}
const TableHead: React.FC<Props> = (props) => {
  const { columns } = props;
  return (
    <thead>
      <tr>
        {columns?.map((column: any, i) => (
          <th key={i} scope="col" className="table-head">
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
