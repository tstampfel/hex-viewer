import { Grid } from "@mui/material";
import { FunctionComponent } from "react";
import TableHeader from "./TableHeader";

interface HexTableProps {}

const HexTable: FunctionComponent<HexTableProps> = () => {
  return (
    <Grid container>
      <TableHeader />

      <Grid item xs={1}>
        <div>xs=4</div>
      </Grid>
      <Grid item xs={4}>
        <div>xs=4</div>
      </Grid>
      <Grid item xs={8}>
        <div>xs=8</div>
      </Grid>
    </Grid>
  );
};

export default HexTable;
