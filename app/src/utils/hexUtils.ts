import { header } from "../constants/constants";
import { TableValue } from "../types/hexTypes";

export const dataToHex = (data: string | Uint8Array): TableValue[][] => {
  const result = Array.prototype.map.call(
    new Uint8Array(data as ArrayBuffer),
    (x) => ("00" + x.toString(16)).slice(-2)
  ) as string[];

  return createRowArray(result);
};

export const dataToText = (data: string | Uint8Array): TableValue[][] => {
  const result = new TextDecoder("ascii")
    .decode(data as BufferSource)
    .replaceAll(/[^\x20-\x7E]/g, ".")
    .split("");

  return createRowArray(result);
};

const createRowArray = (array: string[]): TableValue[][] => {
  let rowArray: TableValue[][] = [];
  let containerArray: TableValue[] = [];
  let column = "0";
  for (let i = 0; i < array.length; i++) {
    if (i === 0 || i % 16 === 0) {
      if (containerArray.length > 0) {
        rowArray.push(containerArray);
      }
      column = i.toString(16);
      containerArray = [];
      const rowColumn = i === 0 ? "0" : column;

      containerArray.push({ id: "column", value: rowColumn });
      containerArray.push({ id: `${column}_${header[1]}`, value: array[i] });
    } else {
      containerArray.push({
        id: `${column}_${header[containerArray.length]}`,
        value: array[i],
      });
    }
  }
  if (containerArray.length > 0) {
    rowArray.push(containerArray);
  }
  return rowArray;
};
