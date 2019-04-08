$('.ladiv >div').click(function(){
	window.window.selecnum = $(this).index();
	$('#smA >div').eq($(this).index()).attr('id','selectDiv').siblings().removeAttr('id');
	$('#smA >div').eq($(this).index()).addClass('selectDiv').siblings().removeClass('selectDiv');
	$('#midivC').html($(this).html());
	var res = $('.ladiv >div');
	for( i in res){$('#smA >div')[i].innerText=res[i].innerText;};
	$('.ladiv').hide();
	$('.ladivC').show();
});


$('#midivC').click(function(){
	$('.ladivC').hide();
	$('.ladiv').show();
});
$('#smA >div').click(function(){
	window.window.selecnum = $(this).index();
	$(this).attr('id','selectDiv').siblings().removeAttr('id');
	$(this).addClass('selectDiv').siblings().removeClass('selectDiv');
	$('#midivC').html($(this).html());
});

$('#prev').click(function(){
	if(window.selecnum>0){
		window.selecnum = window.selecnum - 1;
		$('#midivC').html($('#smA >div').eq(window.selecnum).html())
		$('#smA >div').eq(window.selecnum).addClass('selectDiv').siblings().removeClass('selectDiv');

	}else{
		window.selecnum = 0;
	}

});
$('#next').click(function(){
	if(window.selecnum<9){
		window.selecnum = window.selecnum + 1;
		$('#midivC').html($('#smA >div').eq(window.selecnum).html())
		$('#smA >div').eq(window.selecnum).addClass('selectDiv').siblings().removeClass('selectDiv');

	}else{
		window.selecnum = 8;
	}
});