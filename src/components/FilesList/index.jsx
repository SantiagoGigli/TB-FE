import Table from "react-bootstrap/Table";
import { useFetchFilesList } from "./FilesList.hook";

const renderColumns = (columns) => {
  if (!Array.isArray(columns)) return null;
  return columns?.map((column) => <th key={column}>{column}</th>);
};

const renderRows = (data) => {
  return data?.map(({ file, lines }) => {
    return lines?.map(({ text, number, hex }, index) => {
      const rowId = `${file}-${text}-${number}-${hex}-${index}`;
      return (
        <tr key={rowId}>
          <td>{file}</td>
          <td>{text}</td>
          <td>{number}</td>
          <td>{hex}</td>
        </tr>
      );
    });
  });
};

const FileList = ({ columns }) => {
  const { data, error, isLoading } = useFetchFilesList();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>{renderColumns(columns)}</tr>
      </thead>
      <tbody>{renderRows(Object.values(data))}</tbody>
    </Table>
  );
};

export default FileList;
