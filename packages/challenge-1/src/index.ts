const input = [
  "rope",
  "pore",
  "repo",
  "red rum",
  "murder",
  "listen",
  "silent",
  "endeavour",
];

// const output = [
//   ["rope", "pore", "repo"],
//   ["red rum", "murder"],
//   ["listen", "silent"],
//   ["endeavour"],
// ];

const checkAnagramWord = (textSorted: string) => (anagramItems: string[]) => {
  const firstItem = anagramItems[0];
  const firstItemWithoutSpaces = firstItem.replace(/ /g, "");
  const firstItemSorted = firstItemWithoutSpaces.split("").sort().join("");
  return firstItemSorted === textSorted;
};

const output = input.reduce((anagrams: string[][], text: string) => {
  const textWithoutSpaces = text.replace(/ /g, "");
  const textSorted = textWithoutSpaces.split("").sort().join("");
  const anagramForText = anagrams.find(checkAnagramWord(textSorted));
  if (!anagramForText) anagrams.push([text]);
  else anagramForText.push(text);
  return anagrams;
}, []);

console.log("OUTPUT: ", output);
