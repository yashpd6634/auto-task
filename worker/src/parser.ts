export function parse(
  text: string,
  values: any,
  startDelimiter = "{",
  endDelimiter = "}"
) {
  let index = 0;
  let finalString = "";

  while (index < text.length) {
    if (text[index] === startDelimiter) {
      let endPoint = index + 1;
      let invalidTemplate = false;

      while (endPoint < text.length && text[endPoint] !== endDelimiter) {
        if (text[endPoint] === startDelimiter) {
          invalidTemplate = true;
          break;
        }
        endPoint++;
      }

      if (invalidTemplate) {
        finalString += text[index];
        index++;
        continue;
      }

      if (endPoint < text.length) {
        let stringHoldingValue = text.slice(index + 1, endPoint);
        const keys = stringHoldingValue.split(".");
        let localValues = { ...values };

        for (let i = 0; i < keys.length; i++) {
          if (typeof localValues === "string") {
            localValues = JSON.parse(localValues);
          }
          localValues = localValues[keys[i]];
        }

        finalString += localValues;
        index = endPoint + 1;
      } else {
        finalString += text[index];
        index++;
      }
    } else {
      finalString += text[index];
      index++;
    }
  }

  if (text[index]) {
    finalString += text[index];
  }

  return finalString;
}
