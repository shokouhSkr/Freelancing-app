// compound component design

const Table = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-secondary-0 overflow-x-auto">
      <table>{children}</table>
    </div>
  );
};

const TableHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <thead>
      <tr className="title-row">{children}</tr>
    </thead>
  );
};

const TableBody = ({ children }: { children: React.ReactNode }) => {
  return <tbody>{children}</tbody>;
};

const TableRow = ({ children }: { children: React.ReactNode }) => {
  return <tr>{children}</tr>;
};

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;

export default Table;
