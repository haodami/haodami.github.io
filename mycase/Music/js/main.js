var musics = [
    {
        musicName: "Dawn",
        artist: "Skylike - Dawn",
        album: "1.jpg",
        url: "1.mp3",
    },
    {
        musicName: "Me & You",
        artist: "Alex Skrindo",
        album: "2.jpg",
        url: "2.mp3",
    },
];

var record = document.querySelector(".record");
var audio = document.querySelector("audio");
var paly = document.querySelector(".fa-play");
var track = document.querySelector(".track");

// 点击切换暂停播放
paly.onclick = function () {
    if (this.className == "fa fa-play") {
        audio.play();
        this.className = "fa fa-pause";
    }
    else {
        audio.pause();
        this.className = "fa fa-play";
    }
}

// 播放时的效果
audio.onplay = function () {
    record.classList.add("active");
    track.classList.add("active");
    paly.className = "fa fa-pause";
};

// 暂停时的效果
audio.onpause = function () {
    record.classList.remove("active");
    track.classList.remove("active");
    paly.className = "fa fa-play";
};

// 播放条
var input = document.querySelector("input");
var tiao = document.querySelector(".tiao");
var dot = document.querySelector(".dot");

var sTime = document.querySelector(".start-time");
var eTime = document.querySelector(".end-time");

function playArticle() {
    // 拖动时播放条动，音乐不停止
    var con = false;
    input.oninput = function (event) {
        var v = event.target.value;
        // console.log(v);
        tiao.style.width = `${v}%`;
        dot.style.left = `${v}%`;
        con = true;
    };
    // 拖到对应位置播放音乐
    input.onchange = function (event) {
        var v = event.target.value;
        audio.currentTime = (v / 100) * audio.duration;
        con = false;
    };
    // 播放条滚动
    audio.ontimeupdate = function () {
        if (!con) {
            // console.log(audio.currentTime, audio.duration);
            // console.log((audio.currentTime / audio.duration) * 100);
            var v = (audio.currentTime / audio.duration) * 100;

            input.value = v;
            tiao.style.width = `${v}%`;
            dot.style.left = `${v}%`;
        }

        // 音乐播放修改对应时间
        if (audio.currentTime < 10) {
            sTime.innerHTML = `00:0${Math.floor(audio.currentTime)}`;
        }
        else {
            if (audio.currentTime < 60) {
                sTime.innerHTML = `00:${Math.floor(audio.currentTime)}`;
            }
            else {
                var minet = parseInt(audio.currentTime / 60);
                var sec = audio.currentTime - minet * 60;
                // console.log(minet, sec);
                if (sec < 10) {
                    sTime.innerHTML = `0${minet}:0${parseInt(sec)}`;
                }
                else {
                    sTime.innerHTML = `0${minet}:${parseInt(sec)}`;
                }
            }
        }

        // 歌曲总时长,一秒后读取
        setTimeout(function () {
            eTime.innerHTML = `0${parseInt(audio.duration / 60)}:${parseInt(audio.duration % 60)}`;
        }, 1000);
    }
}
playArticle();

var musicName = document.querySelector(".musicName");
var artist = document.querySelector(".artist");
var imgs = document.querySelector(".record img");
var ons = document.querySelector(".fa-backward");
var nexts = document.querySelector(".fa-forward");
var musicIndex = 0;

// 上一首
ons.onclick = function () {
    musicIndex--;
    if (musicIndex < 0)//如果音乐索引超过长度，将音乐索引清零
    {
        musicIndex = 0;
    }
    getMusic();
    playArticle();
    audio.play();
}

// 下一首
nexts.onclick = function () {
    musicIndex++;
    // console.log(musics[musicIndex].url);
    if (musicIndex >= musics.length)//如果音乐索引超过长度，将音乐索引清零
    {
        musicIndex = 0;
    }
    getMusic();
    playArticle();
    audio.play();
}

// 获取歌曲信息
function getMusic() {
    audio.src = `./music/${musics[musicIndex].url}`;
    musicName.innerHTML = `${musics[musicIndex].musicName}`;
    artist.innerHTML = `${musics[musicIndex].artist}`;
    imgs.src = `./img/${musics[musicIndex].album}`;
}

