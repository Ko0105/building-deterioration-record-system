<?php session_start(); ?>
<div id='upperBar' style='position:fixed;'>
	<h1 id='userName'>
		<?php echo $_SESSION['userId'];?>
	</h1>
	<img id='hamburger' src='../image/buttons/hamburger.png'></img>
</div>
