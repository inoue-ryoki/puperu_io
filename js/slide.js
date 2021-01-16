

// puperu();

// function puperu() {
//     $("#torokko").animate({
//         top: "300px",
//         left: "1500px" //要素を動かす位置
//     }, 18000).animate({
//         top: "500px",
//         left: "-600px"　//要素を戻す位置
//     }, 0)
//     setTimeout("puperu()");
// }

// puperu();

// function puperu() {
//     $("#torokko").animate({
//         top: "500px",
//         left: "-600px"　//始点
//     }, 0).animate({
//         top: "300px",
//         left: "1500px" //終点
//     }, 18000)
//     setTimeout(puperu());
// }

puperu();

function puperu() {
    $("#torokko").animate({
        top: "500px",
        left: "-600px"　//始点
    }, 0).animate({
        top: "300px",
        left: "1500px" //終点
    }, 18000);

    puperu();
}
