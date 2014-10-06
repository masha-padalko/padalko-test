Add data-attribute "data-hint" to element, which needs hint.

Example:

<button type="submit" class="btn btn-default" data-hint="search">Search</button>


Past for LESS in <head>

	    <link rel="stylesheet" type="text/less" href="/less/hint.less"/>

	    <script src="/js/lib/less-1.7.3.min.js"></script>  
	    <script src="/js/lib/jquery-1.11.1.min.js"></script>
	    <script src="/js/jquery.hint.js"></script>
	    <script>
	        $(document).ready(function(){
	            $(".selector").hint({
	                'delay': '1000' 
	            });
	        });
	    </script>

    </head>

Past for CSS in <head>

		<link rel="stylesheet" type="text/css" href="/css/style-hint.css"/>

		<script src="/js/lib/jquery-1.11.1.min.js"></script>
		<script src="/js/jquery.hint.js"></script>
		<script>
		    $(document).ready(function(){
		        $(".selector").hint({
		            'delay': '1000' 
		        });
		    });
		</script>

	</head>