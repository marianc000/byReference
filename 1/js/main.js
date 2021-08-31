var int = 1, str = 'one', bool = true, obj = { id: 'original' };

function demo(int, str, bool, obj) {
    int = 0;
    str = 'changed';
    bool = false;
    obj = {};
}

demo(int, str, bool, obj);
console.log(int, str, bool, obj) // 1 "one" true {id: "original"}