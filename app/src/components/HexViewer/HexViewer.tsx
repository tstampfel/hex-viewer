import { Grid } from "@mui/material";
import React from "react";
import { dataToHex, dataToText } from "../../utils/hexUtils";
import HexTable from "./HexTable";
import TextTable from "./TextTable";

interface HexViewerProps {
  data: string | Uint8Array;
}

export default function HexViewer({ data }: HexViewerProps) {
  /*
   * This component is the main challenge. You can be wild here and change
   * everything!
   */

  return (
    <>
      <pre
        style={{
          overflowWrap: "break-word",
          whiteSpace: "pre-wrap",
          wordBreak: "break-all",
        }}
      >
        Here comes the HexViewer
        <br />
      </pre>
      <Grid container id="table-container">
        <Grid container item xs={12} md={6}>
          <HexTable hexArray={dataToHex(data)} />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextTable textArray={dataToText(data)} />
        </Grid>
      </Grid>
    </>
  );
}

//new TextDecoder("utf-8").decode(props.data as BufferSource)
