type CharFrequency = { [char: string]: number };

interface TreeNode {
  char?: string;
  left?: TreeNode;
  right?: TreeNode;
}

export const compress = (text: string) => {
  const frequencies: CharFrequency = {};
  for (const char of text) {
    frequencies[char] = (frequencies[char] || 0) + 1;
  }

  const sortedFrequencies = Object.entries(frequencies)
    .sort((a, b) => b[1] - a[1])
    .map((v) => ({ char: v[0], count: v[1] }));

  const charMap: { [key: string]: string } = {};

  const buildTree = (
    data: {
      char: string;
      count: number;
    }[],
    code = ""
  ): TreeNode => {
    if (data.length === 1) {
      charMap[data[0].char] = code;
      return { char: data[0].char };
    }
    let leftSum = 0;
    let rightSum = data.reduce((acc, v) => acc + v.count, 0);
    let midPoint = 0;
    while (leftSum < rightSum) {
      leftSum += data[midPoint].count;
      rightSum -= data[midPoint].count;
      midPoint++;
    }
    const leftTree = buildTree(data.slice(0, midPoint), code + "0");
    const rightTree = buildTree(data.slice(midPoint), code + "1");
    return { left: leftTree, right: rightTree };
  };

  const tree = buildTree(sortedFrequencies);

  let res = "";
  for (const c of text) {
    res += charMap[c];
  }

  return { map: JSON.stringify(tree), compressed: res };
};

export const decompress = (text: string, mapString: string) => {
  const tree: TreeNode = JSON.parse(mapString);
  return decompressSubstring(text, tree, tree);
};

const decompressSubstring = (
  text: string,
  subtree: TreeNode,
  tree: TreeNode
): string => {
  if (text[0] == "0" && subtree.left) {
    if (subtree.left.char)
      return (
        subtree.left.char + decompressSubstring(text.substring(1), tree, tree)
      );
    else return decompressSubstring(text.substring(1), subtree.left, tree);
  }
  if (text[0] == "1" && subtree.right) {
    if (subtree.right.char)
      return (
        subtree.right.char + decompressSubstring(text.substring(1), tree, tree)
      );
    else return decompressSubstring(text.substring(1), subtree.right, tree);
  }
  return "";
};
