const generatePassword = (
  length: number,
  includeUppercase: boolean,
  includeNumbers: boolean
): string => {
  let charset = "abcdefghijklmnopqrstuvwxyz";
  if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeNumbers) charset += "0123456789";
