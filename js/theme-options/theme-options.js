// THEME OPTIONS.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is JS file that contains skin and layout Style used in this template*/
// -------------------------------------------------------------------------------------------------------------------------------
// Template Name: Roken.
// Author: Iwthemes.
// Name File: theme-options.js
// Version 1.0 - Updated on 27 Nov 2013
// Website: http://www.iwthemes.com 
// Email: jdrendon@imaginacionweb.net
// Copyright: (C) 2013 
// -------------------------------------------------------------------------------------------------------------------------------

  var $;
  $(document).ready(function($) {

	/* Selec your skin and layout Style */

	function interface(){

    // Skin value
    var skin = "blue";          // blue, red,green, orange,cyan,beige

    // Boxed value
    var layout = "layout-wide"; // layout-wide (default), layout-boxed, layout-boxed-margin 

    //Only in boxes version 
    var bg = "bg4";            //  bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10


    $(".skin").attr("href", "css/skins/"+ skin + "/" + skin + ".css");
    $("#layout").addClass(layout);	
    $("body").addClass(bg);   
    return false;
  }

   interface();

});