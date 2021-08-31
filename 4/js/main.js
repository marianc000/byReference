var int = 1, str = 'original', bool = true, obj = {};
int.test = 'test';
str.test = 'test';
bool.test = 'test';
obj.test = 'test';
console.log(int.test, str.test, bool.test, obj.test)
//output:
//undefined undefined undefined "test"