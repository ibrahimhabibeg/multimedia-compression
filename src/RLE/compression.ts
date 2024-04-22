export const compress = (text: string) => {
  let cnt = 1;
  let res = "";
  for (let i = 1; i < text.length; i++) {
    if (text[i] == text[i - 1]) cnt++;
    else {
      res += text[i-1] + ' ' + cnt + ' ';
      cnt = 1;
    }
  }
  res += text[text.length - 1] + ' ' + cnt;
  return res;
};


export const decompress = (text: string) => {
  let i = 0;
  let res = "";
  while (i < text.length) {
    let c = ''
    do {
      c+=text[i]
      i++;
    } while (i < text.length && text[i]!=' ')
    i++;
    let cnt = "";
    while (i < text.length && text[i]!=' '){ 
      cnt+=text[i]
      i++;
    }
    i++;
    res += c.repeat(Number(cnt));
  }
  return res;
};
