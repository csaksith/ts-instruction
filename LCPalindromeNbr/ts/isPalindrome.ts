function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }
  let org = x;
  let rev = 0;
  while (x > 0) {
   let lastDigit=x % 10;
    rev = rev * 10 + lastDigit;
    x = Math.floor(x / 10);
  }
    return org === rev;
}
