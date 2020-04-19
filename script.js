///////////////////////////////////////
///////////////////////////////////////
const pr=document.querySelector(".para");

var tab=["JavaScript  est un langage de script léger, orienté objet, principalement connu comme le langage de script des pages web. Mais il est aussi utilisé dans de nombreux environnements extérieurs aux navigateurs web tels que Node.js, Apache CouchDB voire Adobe Acrobat. ",
" Le code JavaScript est interprété ou compilé à la volée (JIT). C'est un langage à objets utilisant le concept de prototype, disposant d'un typage faible et dynamique qui permet de programmer suivant plusieurs paradigmes de programmation : fonctionnelle, impérative et orientée objet. Apprenez-en plus sur JavaScript.",
" Le standard pour JavaScript est ECMAScript. En 2012, tous les navigateurs modernes supportent complètement ECMAScript 5.1.",
"Les anciens navigateurs supportent au minimum ECMAScript 3. Une sixième version majeure du standard a été finalisée et publiée le 17 juin 2015.",
"Cette version s'intitule officiellement ECMAScript 2015 mais est encore fréquemment appelée ECMAScript 6 ou ES6. Étant donné que les standards ECMAScript sont édités sur un rythme annuel, cette documentation fait référence à la dernière version en cours de rédaction, actuellement c'est ECMAScript 2020.",
"Cette section est dédiée au langage JavaScript. Pour des informations sur l'utilisation de JavaScript avec les API spécifiques des navigateurs web pour les pages web, veuillez consulter les sections sur les API Web (Web API en anglais) et le DOM.",
"JavaScript ne doit pas être confondu avec le langage de programmation Java. Java est une marque déposée par Oracle dans de nombreux pays.",
"En JavaScript, les nombres sont représentés comme des nombres flottants selon la norme IEEE 754 et les arrondis sont pris aux plus près.",
"JavaScript a été créé en 1995 par Brendan Eich. Il a été standardisé sous le nom d'ECMAScript en juin 1997 par Ecma International dans le standard ECMA-262. Le standard ECMA-262 en est actuellement à sa 8e édition.",
"Avec les technologies HTML et CSS, JavaScript est parfois considéré comme l'une des technologies cœur du World Wide Web5. Le langage JavaScript permet des pages web interactives, et à ce titre est une partie essentielle des applications web."]

var t=Math.floor(Math.random()*10);
var paragraph=tab[t];

//let d=document.createElement("p");
//let mytext=document.createTextNode(paragraph);
//d.appendChild(mytext);
//pr.appendChild(d);
pr.innerHTML=paragraph;
///////////////////////////////////////
///////////////////////////////////////

let f=document.getElementsByClassName("form");

///////////////////////////////////////
///////////////////////////////////////

let c=document.querySelector("#cmp");

var Cmin = 0; 
var Csec= 0; 
var Cmsec= 0;
var Count = 0; var S=0; var Ms=0;var min=0;
function upDateChrono(){
            Count++;
            Cmsec = Count;
            if ( Cmsec>59 ) {
                Csec=Csec+1 ;   Cmsec=0 ; Count=0;}
            else if (  Cmsec<10 ) { Ms= "0" +Cmsec;} 
            else {Ms=Cmsec;}
            if ( Csec>59 ) { Cmin= Cmin+1 ; Csec=0;}
            else if (  Csec<10 ) {  S= "0" +Csec;} 
            else {S=Csec;}
            if (Cmin<10){
                min="0"+Cmin;
            }
            else{min=Cmin}
var chrono= min+ ":" +S+ ":" +Ms;
c.innerHTML=chrono; 
 tt=setTimeout('upDateChrono()',10);
}

///////////////////////////////////////
///////////////////////////////////////
var tp=document.querySelector(".tap");
tpp=tp.textContent;
/////////////////////////////

var ta=document.getElementById("tapp");

//////////////////////////
let txt=document.querySelector(".para");


let texte=txt.textContent

//////////////////////////

let ar=document.getElementById("textarea").value


//////////////////////
function stop(){
    clearTimeout(tt);
}
//////////////////////

/////////////////////
function taper(){
    if(ar!=paragraph){
       upDateChrono();
    }
    if(ar==paragraph){
        stop(); 
    }
}











