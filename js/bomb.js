


// 変数にボタンのidを代入する
let button = document.getElementById("fire");
// 変数に燃える場所のidを取得したものを代入
let field = document.getElementById("field");











/* 爆発エフェクト */
let imgExplosion = document.createElement("img");
imgExplosion.setAttribute("class", "explosion");
imgExplosion.src = "img/explosion.gif";
imgExplosion.id = "explosion"
imgExplosion.alt = "爆発";
imgExplosion.setLoopCount = 1;
imgExplosion.width = 1200;
imgExplosion.height = 1000;






//ここから
button.addEventListener("click", function () {
    // 　　　0.5秒後に爆発させる
    setTimeout(function () {
        field.appendChild(imgExplosion) //爆発エフェクトを追加
    }, 500);

    // 5秒後に爆弾を消す
    setTimeout(function () {
        imgExplosion.remove();

    }, 5000);




    // 一回のみ
}, { once: true })
