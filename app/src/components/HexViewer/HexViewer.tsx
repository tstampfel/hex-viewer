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

  const handleClick = (id: string) => {
    const allActiveClasses = Array.from(
      document.getElementsByClassName("active-element")
    );
    allActiveClasses.forEach((element) => {
      element.classList.remove("active-element");
    });
    const allWithClass = Array.from(document.getElementsByClassName(id));
    allWithClass.forEach((element) => {
      element.classList.add("active-element");
    });
  };

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
        <Grid container item xs={12} md={6} className="table-viewer">
          <Grid container item xs={1} md={1} />
          <Grid container item xs={10} md={10}>
            <HexTable hexArray={dataToHex(data)} handleClick={handleClick} />
          </Grid>
          <Grid container item xs={1} md={1} />
        </Grid>

        <Grid container item xs={12} md={6} className="table-viewer">
          <Grid container item xs={1} md={1} />
          <Grid container item xs={10} md={10}>
            <TextTable textArray={dataToText(data)} handleClick={handleClick} />
          </Grid>
          <Grid container item xs={1} md={1} />
        </Grid>
      </Grid>
    </>
  );
}
