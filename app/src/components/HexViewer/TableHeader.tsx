import { Grid } from "@mui/material";
import { FunctionComponent } from "react";
import { header } from "../../constants/constants";

interface TableHeaderProps {}

const TableHeader: FunctionComponent<TableHeaderProps> = () => {
  return (
    <>
      <Grid container columns={20} className="hex-table-header">
        {header.map((value: string, index: number) => {
          if (index === 0) {
            return (
              <Grid item xs={2} md={2} className="hex-table-item">
                <span>{value}</span>
              </Grid>
            );
          } else if (index === 17) {
            return (
              <Grid item xs={2} md={2} className="hex-table-item">
                <span>{value}</span>
              </Grid>
            );
          } else {
            return (
              <Grid item xs={1} md={1} className="hex-table-item">
                <span>{value}</span>
              </Grid>
            );
          }
        })}
      </Grid>
    </>
  );
};

export default TableHeader;
