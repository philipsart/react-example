export function replaceCurlyBraces(str, values) {
  if (!str) {
    return str;
  }

  let result = str;
  const allKeys = Object.keys(values);
  const stringsToReplace = allKeys.map(v => `{${v}}`);
  stringsToReplace.forEach((r, i) => {
    result = result.replace(r, values[allKeys[i]]);
  });

  return result;
}
