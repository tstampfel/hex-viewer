export const dataToHex = (data: string | Uint8Array): string[] => {
  return Array.prototype.map.call(new Uint8Array(data as ArrayBuffer), (x) =>
    ("00" + x.toString(16)).slice(-2)
  ) as string[];
};

export const dataToUtf8 = (data: string | Uint8Array): string[] => {
  return new TextDecoder("utf-8")
    .decode(data as BufferSource)
    .replaceAll("�", ".")
    .split("");
};

// const createRowArray = (array: string[]) => {
// for (const iterator of object) {

// }
// }
