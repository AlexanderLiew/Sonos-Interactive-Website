/*
DM5212 Scripting 1 Assignment 1
Name: Alexander Liew          Admin No:  191755G         Date: 6/11/2020
*/
var bannerH, bannerW
function init() {
	bannerH = $('.banner').height();
	bannerW = $('.banner').width();
}
var headprop ={
	top: 35,
	repeat: -1,
	yoyo: true,
}
var headprop1 ={
	duration: .2,
	top: 0,
	repeat: -1,
	yoyo: true,
}
var prop ={
	duration:2,
	top:300,
}
var wordprop ={
	opacity: 0,
}
var treeprop ={
	duration: .6,
	x: -150,
}
var tableprop ={
	duration: .6,
	left: 300,
}
var lightprop ={
	duration: .7,
	scale: .6,
	stagger: .2,
	repeat: -1,
	yoyo: true,
}
var wordprop1 ={
	left: 90,
}

function dosceondscene (){
	gsap.to('.table', {x:200,})
	gsap.to('.tree', {y:-250,})
	gsap.to('.presents', {y:-250,})
	gsap.to('.first h2', { opacity: 0, onComplete: gosecondscene });
}
function gosecondscene (){
	$("#first-scene").hide();
	$("#second-scene").show();
	var tl3 = gsap.timeline();
	tl3.from(".present1", {y:-250,})
	tl3.from(".present2", {y:-250,})
	tl3.from(".present3", {y:-250,})
	tl3.from(".treeunder", {y:-250,})
	tl3.from(".second h2", wordprop)
	tl3.from('.second h2', headprop1);
}

function doScene1() {
	gsap.to('.present2', { y:-250,} );
	gsap.to('.present3', { y:-250,} );
	gsap.to('.treeunder', { y:-250,} );
	gsap.to('.second h2', {opacity:0,});
	gsap.to('.present1', { y:200,
				onComplete: gotoScene1 } );
}
function doScene2() {
	gsap.to('.present1', { y:-250,} );
	gsap.to('.present3', { y:-250,} );
	gsap.to('.treeunder', { y:-250,} );
	gsap.to('.second h2', {opacity:0,});
	gsap.to('.present2', { y:200,
				onComplete: gotoScene2  } );
}
function doScene3() {
	gsap.to('.present1', { y:-250,} );
	gsap.to('.present2', { y:-250,} );
	gsap.to('.treeunder', { y:-250,} );
	gsap.to('.second h2', {opacity:0,});
	gsap.to('.present3', { y:200,
				onComplete: gotoScene3  } );			
}
function gotoScene1 () {
	$("#second-scene").hide();
	$("#third-scene1").show();
	var tl = gsap.timeline();
	tl.from('.sonos1', prop)
	tl.from('.third h2', wordprop)
	tl.to('.BG', {delay: 1,})
	tl.to('.sonos1',{y:200, duration: 2})
	tl.to('.third h2', {opacity: 0, onComplete: gotoLast});
}
function gotoScene2 () {
	$("#second-scene").hide();
	$("#third-scene2").show();
	var tl = gsap.timeline();
	tl.from('.sonos2', prop)
	tl.from('.third h2', wordprop)
	tl.to('.BG', {delay: 1,})
	tl.to('.sonos2',{y:200, duration: 2})
	tl.to('.third h2', {opacity: 0, onComplete: gotoLast});
}

function gotoScene3 () {
	$("#second-scene").hide();
	$("#third-scene3").show();
	var tl = gsap.timeline();
	tl.from('.sonos3', prop)
	tl.from('.third h2', wordprop)
	tl.to('.BG', {delay: 2,})
	tl.to('.sonos3',{y:200, duration: 2})
	tl.to('.third h2', {opacity: 0, onComplete: gotoLast});
}

function gotoLast() {
	$("#third-scene1").hide();
	$("#third-scene2").hide();
	$("#third-scene3").hide();
	$("#last-scene").show();
	var tl1 = gsap.timeline();
	tl1.from(".last h2", wordprop)
	tl1.from(".logo", wordprop)
	tl1.from(".refresh", wordprop)
	tl1.from(".shop", wordprop)
	tl1.from(".refresh", {rotation: 360});
}

$( ()=> {
	gsap.to(".ball", lightprop);
	var tl2 = gsap.timeline();
	tl2.from(".tree", treeprop)
	tl2.from(".table", tableprop)
	tl2.from(".first h2", wordprop)
	tl2.from('.first h2', headprop)
	tl2.from('.presents', wordprop);
	$("#second-scene").hide();
	$("#third-scene1").hide();
	$("#third-scene2").hide();
	$("#third-scene3").hide();
	$("#last-scene").hide();
	
	$(".presents").on('click', dosceondscene);
	$('.present1').on('click', doScene1);
	$('.present2').on('click', doScene2);
	$('.present3').on('click', doScene3);
});
