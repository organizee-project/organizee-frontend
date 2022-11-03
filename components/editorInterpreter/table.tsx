import { StyledTable } from "./styles";

export const Table = ({ block }) => {
  return (
    <StyledTable withHeadings={block.data.withHeadings}>
      {block.data.content.map((row, rowIndex) => (
        <tr key={`row${rowIndex}`}>
          {row.map((col, colIndex) => (
            <td key={`row${rowIndex}col${colIndex}`}>{col}</td>
          ))}
        </tr>
      ))}
    </StyledTable>
  );
};
