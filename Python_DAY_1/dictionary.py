d1={'up':'lucknow','mp':'bhopal','T1':'1'}
print(d1)
d2={'gla':'mathura','nit':'kanpur'}
print(d2)
d1.update(d2)
print(d1)

str1=eval(input('enter the string'))
print(str1)
print(type(str1))

# 
import time
number=eval(input('enter number'))
if(number%2==0) :
    print(number,"-->> even number")
else:
    print(number,"-->>odd number")

str2=input('enter string')
str3=input('enter string')
if(str2==str3[::-1]):
    print(str2,str3)
