<?php 

// force login
require_once('authenticate.php');

// ---------------------------------------------------
// -------------- file and folder paths -------------- 
// ---------------------------------------------------

$projects_dir = '../DATA/team/';
$sort_File    = '../DATA/team-sort.txt';



// ---------------------------------------------------
// --------------------- reciver --------------------- 
// ---------------------------------------------------
$displayStatus = false;

if ( isset($_POST['sortString']) ) {
	if ( strlen( $_POST['sortString']) > 2 ) {
		// there is something arraved 
		
		$newSortArray = $_POST['sortString'];
		$newSortArray = str_replace( ' ', PHP_EOL ,  $newSortArray);
		
		$myfile = fopen( $sort_File , "w");
		if ( $myfile) {
			fwrite($myfile, $newSortArray);
			$displayStatus = 'ok';
			fclose($myfile);
		} else {
			$displayStatus = 'error';
		}

	}
}


// ---------------------------------------------------
// ------------------ generate html ------------------ 
// ---------------------------------------------------

// load admin head
$page_title = 'ترتیب چیدمان اعضا تیم';
require('functions/head.php');

?>
<!-- ===== title ===== -->
<a href="index.php">
	<h2>مدیریت اعضا تیم صفحه درباره ما</h2>
</a>


<!-- ===== delete form ===== -->
<div class="form-con">
	<h3>ترتیب چیدمان اعضا تیم</h3>

	<form
		enctype="multipart/form-data"
		action="<?php echo $_SERVER['PHP_SELF']; ?>"
		method="post"
		name="sort_form"
		id="sort_form"
	>

		<div class="label">آیتم مورد نظر را انتخاب و جا به جا کنید :</div><br>

		<div class="radio-list-con" id="sort">
		
			<?php

			// get name of the folder (remove everything before last '/' character)
			function folderNameFromPath($pathh) {
				$pathhIndex = strripos($pathh,'/');
				$name =  substr($pathh, $pathhIndex + 1 );
				return str_replace( '-', ' ' , $name );
			}
			
			// search for project folders 
			$projectFolders =
				glob( $projects_dir.'*', GLOB_ONLYDIR );
			// make sure the original order of array is based on folder name 
			$projectsFolderArray1 = array();
			foreach ( $projectFolders as $projectsFolderArrayItem )
				array_push($projectsFolderArray1,$projectsFolderArrayItem);
			$projectFolders = $projectsFolderArray1;

			
			// function for generating new sortArray 
			function generateSortArray() {
				$sortArray = array();
				global $projectFolders; 
				for ( $indx = 0 ; $indx < sizeof($projectFolders) ; $indx++ ) {
					array_push($sortArray, $indx);
				}
				return $sortArray;
			}
			
			// search for sort txt file and build the array 
			if ( file_exists($sort_File)) {
				$sortArrayFileArray =  file($sort_File, FILE_IGNORE_NEW_LINES);
				if ( sizeof($sortArrayFileArray) != sizeof($projectFolders) ) {
					if ( sizeof($sortArrayFileArray) < sizeof($projectFolders) ) {
						$sortArray = $sortArrayFileArray;
						for ( $i = sizeof($sortArrayFileArray) - 1 ; $i < sizeof($projectFolders) ; $i++ ) {
							array_push( $sortArray , $i ) ;
						}
					} else {
						$sortArray = generateSortArray();
					}
				} else {
					$sortArray = $sortArrayFileArray;
				}
			} else {
				$sortArray = generateSortArray();
			}
			
			// search for project folders 
			foreach ( $sortArray as $sortIndex ) {
				$projectName = $projectFolders[$sortIndex]; ?> 
				<div data-index="<?php echo $sortIndex ?>" 
				 	 class="radio-container radio-container-list ltr sortabe">
					 <?php echo folderNameFromPath($projectName) ?> 
				</div>
				<?php } ?> 
			
			
		</div>
		
		
		<input type="hidden" name="sortString" value="<?php
			echo implode(' ', $sortArray);			  
		?>" id="sortString">
		
		<br>
		<!-- submit-->
		<input type="submit" value="اعمال ترتیب انتخاب شده" class="submit" />

		
	</form>
	

</div>

<!-- ===== footer ===== -->
<footer>
	<p>طراحی و توسعه وبسیات :<a href="http://pejmantayebi.com">پژمان طیبی</a></p>
</footer>

<!-- ===== script ===== -->
<script src="js/sortable.js"></script>
<script>

	var sortItems = document.getElementById('sort');
	new Sortable(sortItems, {
		animation: 150,
		ghostClass: 'sorting-class',
		chosenClass: 'sorting-class',
		onEnd: function (evt) {
			var newList = evt.to;   
			var items = newList.querySelectorAll('.sortabe');
			var elm ,indx , sortArray = '' ;
			for ( i = 0 ; i < items.length ; i++ ) {
				elm = items[i];
				indx = elm.getAttribute('data-index');
				sortArray += indx ;
				if ( i  < items.length - 1 ) sortArray += ' ';
			}
			var sortString = document.getElementById('sortString');
			sortString.value = sortArray;
		},
	});

</script>

</body>

</html>
