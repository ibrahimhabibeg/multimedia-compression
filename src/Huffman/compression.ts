type CharFrequency = { [char: string]: number };

interface TreeNode {
  char?: string;
  left?: TreeNode;
  right?: TreeNode;
  count: number;
}

export const compress = (text: string) => {
  const frequencies: CharFrequency = {};
  for (const char of text) {
    frequencies[char] = (frequencies[char] || 0) + 1;
  }

  const nodes: TreeNode[] = Object.entries(frequencies)
    .sort((a, b) => a[1] - b[1])
    .map((v) => ({ char: v[0], count: v[1] }));

  while (nodes.length > 1) {
    const left = nodes.shift() ?? { count: 0 };
    const right = nodes.shift() ?? { count: 0 };
    nodes.push({ left, right, count: left?.count + right?.count });
    nodes.sort((a, b) => a.count - b.count);
  }

  const tree = nodes[0];
  const charMap: { [key: string]: string } = {};

  const dfs = (tree: TreeNode, code = "") => {
    if (tree.char) charMap[tree.char] = code;
    if (tree.left) dfs(tree.left, code + "0");
    if (tree.right) dfs(tree.right, code + "1");
  };

  dfs(tree);

  let res = "";
  for (const c of text) res += charMap[c];
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
