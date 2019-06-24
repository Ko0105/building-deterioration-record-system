window.onhashchange=function(){
	//hash type:page-buildingID-floor
	let data=window.location.hash.substring(1).split('-');
	$.ajax({
		url:'index.php',
		type:'POST',
		data:{
			page:data[0],
			buildingID:(data.length>1)? data[1]:'',
			floorID:(data.length>2)? data[2]:''
		},
		success:function(responce){
			$('.content').remove();
			$('body').append(`<form class='content'></form>`);
			$('.content').html(responce);
		},
	});
}
