console.log(this);
//自身接受，不需要使用任何对象绑定事件
onmessage = function (mes) {
    //参数就是MessageEvent 保存的是postMessage发送的内容对象
    //参数对象的data属性就是发生的内容
    console.log(mes);
    console.log(mes.data);

    //开启分线程计算
    var num = 0;
    for (var i = 0; i < mes.data; i++) {
        num += Math.sqrt(i);
    }

    //计算完成num之后 要发送给主线程
    postMessage(num)


    // 在分线程上关闭线程：
    close()
}