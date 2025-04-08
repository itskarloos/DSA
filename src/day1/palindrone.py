
class Solution:
    def isPalindrome(self, x: int) -> bool:
        x_str = str(x)
        if len(x_str) == 1:
            return True
        elif x_str[0] == x_str[-1]:
            return self.isPalindrome(x_str[1, -1])
        else:
            return False
