import { Grid } from "@mui/material";
import { FunctionComponent } from "react";
import { TableValue } from "../../types/hexTypes";
import TableHeader from "./TableHeader";

interface HexTableProps {
  hexArray: TableValue[][];
  handleClick: (id: string) => void;
}

const HexTable: FunctionComponent<HexTableProps> = ({
  hexArray,
  handleClick,
}: HexTableProps) => {
  return (
    <Grid container>
      <TableHeader />

      <Grid container columns={19} className="hex-table">
        {hexArray.map((rowArray: TableValue[]) =>
          rowArray.map((item: TableValue, index: number) => {
            if (index === 0) {
              return (
                <Grid
                  key={`hex-viewer-item-hex-${item.id}-${index}`}
                  item
                  xs={3}
                  md={3}
                  className="hex-table-item"
                >
                  <span style={{ fontWeight: "bold" }}>{item.value}</span>
                </Grid>
              );
            } else {
              return (
                <Grid
                  key={`hex-viewer-item-hex-${item.id}`}
                  item
                  xs={1}
                  md={1}
                  className={`hex-table-item-value ${item.id}`}
                  onClick={() => handleClick(item.id)}
                >
                  <span>{item.value}</span>
                </Grid>
              );
            }
          })
        )}
      </Grid>
    </Grid>
  );
};

export default HexTable;
