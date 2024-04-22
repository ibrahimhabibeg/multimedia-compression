const map: { [key: string]: string } = {
  "0": "a",
  "1": "b",
  "2": "c",
  "3": "d",
  "4": "e",
  "5": "f",
  "6": "g",
  "7": "h",
  "8": "i",
  "9": "j",
};

const mapInv: { [key: string]: string } = {
  a: "0",
  b: "1",
  c: "2",
  d: "3",
  e: "4",
  f: "5",
  g: "6",
  h: "7",
  i: "8",
  j: "9",
};

export const compress = (text: string) => {
  let cnt = 1;
  let res = "";
  for (let i = 1; i < text.length; i++) {
    if (text[i] == text[i - 1]) cnt++;
    else {
      res += compressSequence(text[i - 1], cnt);
      cnt = 1;
    }
  }
  res += compressSequence(text[text.length - 1], cnt);
  return res;
};

const compressSequence = (c: string, cnt: number) => {
  if (cnt == 1) return map[c];
  return map[c] + cnt.toString();
};

export const decompress = (text: string) => {
  const regex = new RegExp("[0-9]");
  let i = 0;
  let res = "";
  while (i < text.length) {
    const c = mapInv[text[i]];
    i++;
    let cnt = "";
    while (i < text.length && regex.test(text[i])) {
      cnt += text[i];
      i++;
    }
    if (cnt.length) res += c.repeat(Number(cnt));
    else res += c;
  }
  return res;
};
