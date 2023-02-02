//检查字符串中是不是数字:Number => 是不是数字？数字：NAN
(function () {
    let str = "asad123";
    console.log(isNaN(Number(str[5])));
})(),


    //对数组对象中的某个/多属性进行排序 排序和-1和1有关
    (function () {
        var items = [
            { name: "Edward", value: -12, id: 0 },
            { name: "Sharpe", value: 37, id: 1 },
            { name: "And", value: 45, id: 2 },
            { name: "The", value: -12, id: 3 },
            { name: "Zeros", value: -12, id: 4 },
        ];
        //方法一：直接用因为a，b都是代表item
        // console.log(items.sort((a, b) => Number(a.value) - Number(b.value)));
        //方法二：用函数然后return rev=>是排序的顺序 默认是false升序 如果value一样则看id
        function compare(attr, rev) {
            if (rev) {
                rev = rev ? 1 : -1
            } else {
                rev = 1
            }
            return function (a, b) {
                if (a[attr] < b[attr]) {
                    return rev * -1
                } else if (a[attr] > b[attr]) {
                    return rev * 1
                } else {
                    if (a['id'] < b['id']) {
                        return 1
                    } else if (a['id'] > b['id']) {
                        return -1
                    }
                    return 0
                }
            }
        }
        console.log(items.sort(compare('value')))
    })();


