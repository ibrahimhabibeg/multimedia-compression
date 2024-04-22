export const replacement = ["^", "~", "*", "$"];

export const compress = (text: string) => {
  const words = text.split(" ");
  const wordsCount = words.reduce(
    (acc: Array<{ word: string; count: number }>, word) => {
      if (word.length > 1) {
        const index = acc.findIndex((val) => val.word === word);
        if (index === -1) acc.push({ word, count: 1 });
        else acc[index].count++;
      }
      return acc;
    },
    []
  );
  wordsCount.sort(
    (a, b) => (b.word.length - 1) * b.count - (a.word.length - 1) * a.count
  );
  const map: { [key: string]: string } = {};
  for (let i = 0; i < Math.min(replacement.length, wordsCount.length); i++) {
    map[replacement[i]] = wordsCount[i].word;
    for (let j = 0; j < words.length; j++)
      if (words[j] === wordsCount[i].word) words[j] = replacement[i];
  }
  return {
    map: JSON.stringify(map),
    compressed: words.join(" "),
  };
};

export const decompress = (text: string, mapString: string) => {
  const map = JSON.parse(mapString);
  let res = text;
  for(const prop in map) res = res.replaceAll(prop, map[prop]);
  return res;
};
