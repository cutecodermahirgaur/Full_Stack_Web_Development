# list
# method to add elements in list
li=[1,2,3,4,5]
print("current list : ",li)
li.append(26)
li.extend([45,98,90])
li.insert(2,-1)
print("updated list : ",li)
# methods to delete elements in list 
li.remove(4)
print("list after remove single element : ",li)
# li.clear()
print("empty list using clear : ",li)
# sort list
li.sort()
print("list after sort : ",li)
li.sort(reverse=True)
print("list after using sort : ",li)
# reverse
li.reverse()
print("list after using reverse : ",li)

l2=[[1,2,3],[4,5,6],[7,8,9]]
print("list after slicing on l2[1][2] : ",(l2[1][2]))
# 
t1=(1,2,3,4,5)

print(t1.count(4))
print(t1.index(5))
# 
d1={'up':'lucknow','mp':'bhopal'}
print(d1.keys())
for i in d1.keys():
    print(i,end='')

print()
print(type(d1))
print(d1['up'])