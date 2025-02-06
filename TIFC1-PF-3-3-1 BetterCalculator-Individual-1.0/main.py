def addmultiplenumbers(nums):
  suma=0
  for num in nums:
    suma+=num
  return suma

def multiplymultiplenumbers(nums):
  multi = 1
  for num in nums:
    multi*=num
  return multi

def isiteven(num):
  if num%2==0:
    return True
  else:
    return False
  

def isitaninteger(num):
  if num%2==1:
    return True
  else:
    return False