export const dataToHex = (data: string | Uint8Array): string[][] => {
  const result = Array.prototype.map.call(
    new Uint8Array(data as ArrayBuffer),
    (x) => ("00" + x.toString(16)).slice(-2)
  ) as string[];

  return createRowArray(result);
};

export const dataToText = (data: string | Uint8Array): string[][] => {
  const result = new TextDecoder("ascii")
    .decode(data as BufferSource)
    .replaceAll(/[^\x20-\x7E]/g, ".")
    .split("");

  return createRowArray(result);
};

const createRowArray = (array: string[]): string[][] => {
  let rowArray: string[][] = [];
  let containerArray: string[] = [];
  for (let i = 0; i < array.length; i++) {
    if (i === 0 || i % 16 === 0) {
      if (containerArray.length > 0) {
        rowArray.push(containerArray);
      }

      containerArray = [];
      const rowColumn = i === 0 ? "0" : i.toString(16);
      containerArray.push(rowColumn);
      containerArray.push(array[i]);
    } else {
      containerArray.push(array[i]);
    }
  }
  if (containerArray.length > 0) {
    rowArray.push(containerArray);
  }
  return rowArray;
};
