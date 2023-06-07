const generatePassword = (
  length: number,
  includeUppercase: boolean,
  includeNumbers: boolean
): string => {
  let charset = "abcdefghijklmnopqrstuvwxyz";
  if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
