import { Grid } from "@mui/material";
import { FunctionComponent } from "react";
import TableHeader from "./TableHeader";

interface TextTableProps {
  textArray: string[][];
}

const TextTable: FunctionComponent<TextTableProps> = ({
  textArray,
}: TextTableProps) => {
  return (
    <Grid container>
      <TableHeader />
      <Grid container columns={20} className="hex-table-header">
        {textArray.map((rowArray: string[]) =>
          rowArray.map((value: string, index: number) => {
            if (index === 0) {
              return (
                <Grid item xs={3} md={3} className="hex-table-item">
                  <span style={{ fontWeight: "bold" }}>{value}</span>
                </Grid>
              );
            } else {
              return (
                <Grid item xs={1} md={1} className="hex-table-item">
                  <span>{value}</span>
                </Grid>
              );
            }
          })
        )}
      </Grid>
    </Grid>
  );
};

export default TextTable;
