//input: two numbers representing versions
//output: -1, 0, 1 or null for invalid inputs
//
// - if any inputs contain invalid characters, return null
// - any characters other than digits and . are considered invalid
// - a version number that begins or ends with a period or has more than one period in a row, is invalid.
// - Compare the two input versions
// - if version1 > version2, return 1
// - if version1 < version2, return -1
// - if version1 === version2, return 0
function compareVersions(versionA, versionB) {
  let validChars = /^[0-9]+(\.[0-9]+)*$/;

  if (!validChars.test(versionA) || !validChars.test(versionB)) {
    return null;
  }

  let aParts = versionA.split('.').map(Number);
  let bParts = versionB.split('.').map(Number);
  let maxLength = Math.max(aParts.length, bParts.length);

  for (let i = 0; i < maxLength; i += 1) {
    let aValue = aParts[i] || 0;
    let bValue = bParts[i] || 0;

    if (aValue > bValue) {
      return 1;
    } else if (aValue < bValue) {
      return -1;
    }
  }

  return 0;
}