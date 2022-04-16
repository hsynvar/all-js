// template literal 
// var ad= 'Rena'
// var adress='Narimanov'
// var nomre= '7323789'

// console.log(`adiniz ${ad}\nadressiniz ${adress}\nnomreniz ${nomre}`)
// console.log( 'adiniz: ' + ad + '\n' + 'adressiniz: ' + adress + '\n' + 'nomreniz:' + nomre)

// prototype async
// object {}
// array kvadrat moterize 
//  ´ template literal qisa yol

// let hospital={
//     name:'Compar',ƒ
//     etage: 5,
//     doctors:25,
//     workers: 2524,
//     address: {
//         korpus: ['Nizami', 'Narimanov', '28 May'],
//         street: [ 'Faiq Y', 'Narimanov'],
//         number: [ '627632786', '73632868']
//     }
// }
// console.log(hospital);


// // ------------- 
// let a=12
// let b=12
// == yalniz deyerini yoxluyur
// === deyerini ve tipini yoxluyur
// != yalniz deyerinin beraber olmadigini yoxluyur
// !== deyerinin ve tipinin beraber olmadigini yoxluyur
// if(a>=b){
//     console.log("duzdur")
// }
// else{
//     console.error("duzdeyil")
// }
// console.log(!(a==b))
// console.log((12===12)||  ("Emil" === "Emil"))

// if(number==2){
//     console.log("sizin reqem 2dir")
// }
// else if (number==3){
//     console.log("sizin reqem 3dur")
// }
// else if (number==1){
//     console.log("sizin reqem 1dir")
// }
// else{
//     console.log("sizin reqem yuxaridakilardan hecbiri deyil")
// }
// // ---------- 

// SWITCH CASE -----------------
// switch (number){
//     case 1:
//     console.log("reqeminiz 1 dir ");
//     break;
//     case 2:
//         console.log("reqeminiz 2 dir ");
//     break
//     case 3:
//         console.log("reqeminiz 3 dir ");
//      break;
//      default:
//          console.log("yixaridakilardan hecbiri doyul")

// }

// // ------------- 
// DO WHILE ------------
// let a=0
// do{
//     console.log(a);
// }
// while(a<10)


// FOR ---------

// let myArr=["C#", "Phyton", "JS", "React"]
// for(let i=0;i<myArr.length;i++){
//     console.log(myArr[i]);
// }

// var numbers= [1,2,3,4]

// numbers.forEach(function(num){
//     console.log(num)
// }
// )

// // -------- 
// declaration function - evvel cagirmaq olur
// function test(){
//     console.log("Salam");
// }


// expression function - ancaq sonra cagirmaq olur
// var test=function(){
//     console.log("Salaam")
// }
// test()
// function topla (a,b){
//     return a+b;
// }
// function vurma (c,d){
//     return c*d
// }
// console.log(topla(2,4));
// console.log(vurma(5,5))
// ----------------------------------------------- 





// accordion menu uzun yol start 
// var btn1 = document.querySelector('#accordion .btn1')
// var btn2 = document.querySelector('#accordion .btn2')
// var btn3 = document.querySelector('#accordion .btn3')

// var p1 = document.querySelector('#accordion .p1')
// var p2 = document.querySelector('#accordion .p2')
// var p3 = document.querySelector('#accordion .p3')

// btn1.addEventListener('click', function(){
//     p1.style='display:block'
//     p2.style='display:none'
//     p3.style='display:none'

// })
// btn2.addEventListener('click', function(){
//     p1.style='display:none'
//     p2.style='display:block'
//     p3.style='display:none'

// })
// btn3.addEventListener('click', function(){
//     p1.style='display:none'
//     p2.style='display:none'
//     p3.style='display:block'

// })

// uzun yol end 

// qisayol start 
// var btn=document.querySelectorAll('#accordion button')
// var p=document.querySelectorAll('#accordion p')
// console.log(btn);

// for(let i=0; i<btn.length; i++){
//     btn[i].addEventListener('click',function(){
//         // for(let j=0; j<p.length; j++){
//         //     p[j].classList.remove('active')
//         // }
//         this.nextElementSibling.classlist.toggle('active')
//     })
// }
// remove olanda add islenir. toggle-le remove biryerde olmur 
// --------------------------------


// GLOBAL , FUNCTION, BLOCK SCOPE

function test(){
    var a=40
    let b = 50
    const c = 60
    console.log(a,b,c)
}
test()

// ---- 
 var a=10
 let b=20
 const c= 30

if (true){
    var a=40
    let b=50
    const c=60
    console.log(a,b,c);
}
console.log(a,b,c);



// TABBUTTON start 

// var tabbtn=document.querySelectorAll('.tab button')
// var tabp=document.querySelectorAll('.tab p')

// for(let i=0; i<tabbtn.length;i++){
//     tabbtn[i].onclick=function(){
//         for(let j=0; j<tabp.length;j++){
//             tabp[j].classList.remove('active')
//         }
//         var btni= this.getAttribute('data-btn')
//         tabp[btni].classList.add('active')
//     }
// }
// ----------------------------- 
// var tabbtn=document.querySelectorAll('.tab button')
// var tabp=document.querySelectorAll('.tab p')
// for (let i = 0; i < tabbtn.length; i++) {
//     tabbtn[i].onclick=function(){
//         for (let j = 0; j < tabp.length; j++) {
//             tabp[j].classList.remove('active') 
//         }
//         var btni=this.getAttribute('data-btn')
//         tabp[btni].classList.add('active')
//     }  
// }


// ---------------------------------------------- 
// SLIDER START 

// var mySlider =[
//     "photo/logo.jpeg",
//     "photo/photo1.png",
//     "photo/qrafik.png",
// ]

// var img=document.querySelector("#slider img")
// img.src=mySlider[0]
// var next=document.querySelector("#slider .next")
// var prev=document.querySelector("#slider .prev")
// var currentSlide=0

// next.onclick=function(){
//     currentSlide++;
//     if(currentSlide>=mySlider.length){
//         currentSlide=0
//     }
//     img.src=mySlider[currentSlide]
// }

// prev.onclick=function(){
//     currentSlide--;
//     if(currentSlide==-1){
//         currentSlide=mySlider.length-1
//     }
//     img.src=mySlider[currentSlide]
// }

// SLIDER END
// --------------------- 


// DRAG START 

// let dragItem=document.querySelectorAll(".drag-item")
// let dropArea=document.querySelector("#dropArea")

// for (let i = 0; i < dragItem.length; i++) {
//     dragItem[i].addEventListener("dragstart", function(e){
//     this.style.background="red"
//     e.dataTransfer.setData("dragId", this.id)
//     })   
// }
// dropArea.addEventListener("dragover", function(e){
//     this.style="background:green"
//     e.preventDefault()
// })
// dropArea.addEventListener("dragleave", function(){
//     this.style="background:transparent"
// })
// dropArea.addEventListener("drop", function(j){
//     var myId=j.dataTransfer.getData("dragId")
//     dragItem=document.getElementById(myId)
//     dropArea.appendChild(dragItem)
// })
// drag end 
// HEADER LOADING START

let header=document.querySelector("#header");

window.onscroll=function(){
    if(window.scrollY >100){
        header.classList.add("header-active")
    }
    else{
        header.classList.remove("header-active")
    }
}

window.onload=function(){
    setTimeout(() => {
        document.querySelector(".loading").classList.add("d-none")
        document.body.style="overflow-y:scroll";

    } ,2000)
}
// responsive header menu 

let icon=document.querySelector(".nav-icon")
let menu=document.querySelector(".menu")
icon.addEventListener("click", function(){
    menu.classList.toggle("nav-active")
})

