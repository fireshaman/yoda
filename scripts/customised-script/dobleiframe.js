<script type="text/javascript">
	var all_iframes = parent.window.parent.window.document.getElementsByTagName("iframe");
	for (iframe of all_iframes){
		var iframe_id = iframe.id;
		console.log("iframe_id :" + iframe_id);
		if(iframe_id.match(/^.*elespanol_.*_3$/)){
			console.log("ancienne_taille :" + iframe.width + "x" + iframe.height);
			iframe.setAttribute("height", [sas_creativeHeight]);
			iframe.setAttribute("width", [sas_creativeWidth]);
			console.log("nouvelle_taille :" + iframe.width + "x" + iframe.height);
		}
	}
</script>