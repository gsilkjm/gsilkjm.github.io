$(document).ready(function(e) {
		$(".thumbnail").click(function(e){

	var address= $(this).attr("src");
	$("#popup").fadeIn("slow");
	$("#lightbox").attr("src",address);
});
$("#close").click(function(){
	$("#popup").fadeOut("fast");
});

});


	countdown();


function countdown ()
{
var BigDay = new Date("07 August 2015, 11:59 GMT-0402");
	var msPerDay = 24 * 60 * 60 * 1000 ;
	window.setInterval(function(){
		var today = new Date();
		var timeLeft = (BigDay.getTime() - today.getTime());
		
		var e_daysLeft = timeLeft / msPerDay;
		var daysLeft = Math.floor(e_daysLeft);
		
		var e_hrsLeft = (e_daysLeft - daysLeft)*24;
		var hrsLeft = Math.floor(e_hrsLeft);
		
		var e_minsLeft = (e_hrsLeft - hrsLeft)*60;
		var minsLeft = Math.floor(e_minsLeft);
		
		var e_secsLeft = (e_minsLeft - minsLeft)*60;
		var secsLeft = Math.floor(e_secsLeft);
		
		
		//var timeString = daysLeft + " : " + hrsLeft + " : " + minsLeft + " : " + secsLeft;
		
		
		 if (daysLeft < 10 && daysLeft >=0) daysLeft = "0" + daysLeft;
               if (hrsLeft < 10) hrsLeft = "0" + hrsLeft;
      if (minsLeft < 10) minsLeft = "0" + minsLeft;
          if (secsLeft < 10) secsLeft = "0" + secsLeft;
	   
		var timeString = daysLeft + "&nbsp;&nbsp;:&nbsp;&nbsp;" + hrsLeft + "&nbsp;&nbsp;:&nbsp;&nbsp;" + minsLeft + "&nbsp;&nbsp;:&nbsp;&nbsp;" + secsLeft;

		$('.hs_hours').html(timeString);
		
	}, 1000);


}


//$("header").stop().animate({left:-80},2e3,"swing")

