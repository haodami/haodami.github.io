var tu = document.querySelectorAll(".tu");
var wu = document.querySelectorAll(".wu");

tu.forEach(function (item) {
    // 阻止默认样式
    item.ondragover = (event) => event.preventDefault();
});

wu.forEach(function (item) {
    // 拖动过程
    item.ondrop = function (event) {
        // 获取拖动元素的Id
        var zhuaId = event.dataTransfer.getData("id");
        // 获取放置元素的Id
        var fangId = event.target.id;
        // console.log(zhuaId，fangId);

        // 获取元素
        var zhua = document.getElementById(zhuaId);
        var fang = document.getElementById(fangId);
        // console.log(zhua, fang);

        // 获取元素父节点
        var f_zhua = zhua.parentNode;
        var f_fang = fang.parentNode;

        // 交换父节点
        f_zhua.appendChild(fang);
        f_fang.appendChild(zhua);
    }

    // 抓取
    item.ondragstart = function (event) {
        var id = event.target.id;
        event.dataTransfer.setData("id", id);
    }
});

// 打乱拼图
var btn = document.querySelectorAll("button");
btn[0].onclick = function () {
    for (var i = 0; i < 100; i++) {
        var r1 = Math.floor(Math.random() * 9);
        var r2 = Math.floor(Math.random() * 9);
        // console.log(r1, r2);
        var tur1 = tu[r1].parentNode;
        var tur2 = tu[r2].parentNode;
        // console.log(tur1, tur2);
        tur1.appendChild(tu[r2]);
        tur2.appendChild(tu[r1]);
    }
}

var arr = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg"];
var imgs = document.querySelector(".right img");
// 切换图片
var num = 0;
btn[1].onclick = function () {
    num++;
    wu.forEach(function (item) {
        if (num >= arr.length) {
            num = 0;
        }
        item.style.backgroundImage = `url("./img/${arr[num]}")`;
        imgs.src = `./img/${arr[num]}`;
    });
}