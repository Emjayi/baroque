<?php

// remove duplicated items from type and status of projects
$arch_type_array = array_unique($arch_type_array);
$arch_status_array = array_unique($arch_status_array);

?> 
<!-- options -->
<section
	class="hide-until-load grid-options grid-options-hide"
	id="options">
	<div class="scrolbar grid-options-container">
		<div class="grid-options-container-internal">
		
			<h2>type</h2>
			<ul class="grid-options-list" id="type">
				<li data-filter="*" class="active" >
					view all
				</li>
			<?php
				foreach ( $arch_type_array as $ProjectType) { ?> 
				<li data-filter=".<?php e($ProjectType) ?>">
				<?php 
					$ProjectType =
						str_replace( '-' , ' ' , $ProjectType);
					e($ProjectType);
				?> 
				</li>
			<?php } ?> 
			</ul>

			<!-- ========== -->
			<h2>status</h2>
			<ul class="grid-options-list"  id="status">
				<li data-filter="*" class="active" >
					view all
				</li>
			<?php
				foreach( $arch_status_array as $projectStatus ) { ?> 
				<li data-filter=".<?php e($projectStatus ) ?>">
				<?php
					$projectStatus = 
						str_replace( '-' , ' ' , $projectStatus);
					e($projectStatus);
				?> 
				</li>
			<?php } ?> 
			</ul>

			<!-- ========== -->
			<h2>sort by</h2>
			<ul class="grid-options-list"  id="sort">
				<li data-sort="default" class="active" >
					default
				</li>
				<li data-sort="year">
					chronological
				</li>
				<li data-sort="abc">
					alphabetical
				</li>
				<li data-sort="area">
					scale &amp; area
				</li>
			</ul>

		</div>
	</div>
</section>