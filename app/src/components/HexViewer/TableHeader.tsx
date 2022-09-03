import { Grid } from "@mui/material";
import { FunctionComponent } from "react";
import { header } from "../../constants/constants";

interface TableHeaderProps {}

const TableHeader: FunctionComponent<TableHeaderProps> = () => {
  return (
    <>
      <Grid
        container
        columns={19}
        className="hex-table"
        style={{ borderBottom: "1px solid black" }}
      >
        {header.map((value: string, index: number) => {
          if (index === 0) {
            return (
              <Grid
                key={`hex-viewer-header-${value}-${index}`}
                item
                xs={3}
                md={3}
                className="hex-table-item"
              >
                <span style={{ fontWeight: "bold" }}>{value}</span>
              </Grid>
            );
          } else {
            return (
              <Grid
                key={`hex-viewer-header-${value}-${index}`}
                item
                xs={1}
                md={1}
                className="hex-table-item"
              >
                <span style={{ fontWeight: "bold" }}>{value}</span>
              </Grid>
            );
          }
        })}
      </Grid>
    </>
  );
};

export default TableHeader;
