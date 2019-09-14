<?php 
ob_start();
?>
<div id="Lightbox">
	<a class="lightbox" href="dog.jpg">
		<img src="dog.jpg" alt="Your alt attribute">
	</a>
</div>
<?php
$print = ob_get_clean();
echo htmlentities($print);
?>