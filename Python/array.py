arr = [1,2,3,4,5]

for i in arr : # for-each loop !
    print(i)
print(type(arr))
print(arr[-2])
# array with mixed data type !
arr2 = [1,10.9,"Hello",True]
print(arr2)
arr2.append(arr)
print(arr2)
arr.pop();
print(arr2)