// for one by one

//  var elm1 = document.querySelector("#elm1")
//  var elm1Img = document.querySelector("#elm1 img")


//  elm1.addEventListener("mousemove", function(dets){
//     elm1Img.style.left = dets.x+"px"
//     elm1Img.style.top = dets.y+"px"
//  })

//  elm1.addEventListener("mouseenter", function(dets){
//     elm1Img.style.opacity = 1
//  })
//  elm1.addEventListener("mouseleave", function(dets){
//     elm1Img.style.opacity = 0
//  })



// for all , at same time:
var elm = document.querySelectorAll(".elm")

elm.forEach(function(val){
    val.addEventListener("mouseenter", function(){
        val.childNodes[3].style.opacity = 1   
    })
    val.addEventListener("mouseleave", function(){
        val.childNodes[3].style.opacity = 0
    })
    val.addEventListener("mousemove", function(dets){
        val.childNodes[3].style.left = dets.x+"px"
        val.childNodes[3].style.top = dets.y+"px"

    }) 

})
