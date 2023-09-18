<?php

// documentation
// ---------------------------------
// list item <ul>                **
// numbered list item <ol>       ++
// list with margin bottom       **^
// numbered list margin bottom   ++^
// heading (h2)                  >>
// heading (h3) internal link    >>>B
// heading (h4) no margin top    >>>>^
// heading (h5)                  >>>>>
// insert <br>                   |||
// link URL                      ##   (link text on next line )
// external link                 ###  (link text on next line )
// internal link                 #### (link text on next line )					
// ---------------------------------
// inset image (if $postimages)  ==		


// varibles
// ---------------------------------
// $txt_file        = location of the .txt file ('text.txt';)
// $previus_h_level = level of previus heading ( h1 , h2 , etc).. in number
// $previus_h_text  = title of the page (shuld define before running main funtion)
// $postimages      = array of post images
// ---------------------------------



// heading function
function insertHeading($textt, $h_level)
{
    global $previus_h_level;
    global $previus_h_text;
    
    $tag_id = false;
    // check if the tag needs an ID or class
    if ($textt[$h_level] != ' ') {
        // the tag needs margin class
        if ($textt[$h_level] == '^') {
            $textt  = substr($textt, $h_level + 1);
            $tag_id = ' class="m-t-1" ';
            // the tag needs an ID 
        } else {
            $tag_id = ' id="inline-link-' . $textt[$h_level] . '" ';
            $textt  = substr($textt, ($h_level + 1));
        }
        // remove >>> from the text
    } else {
        $textt = substr($textt, $h_level);
    }
    // check heading level hierarchy
    if ($h_level - $previus_h_level > 1) {
        for ($hh = $previus_h_level + 1; $hh < $h_level; $hh++) {
            echo '<h' . $hh . ' class="hidden"> ' . htmlspecialchars($previus_h_text) . ' </h' . $hh . '>';
        }
    }
    // insert heading 
    $heading = '<h' . $h_level;
    if ($tag_id != false) {
        $heading .= $tag_id;
    }
    $textt = htmlspecialchars($textt);
    $textt = str_replace('|||', '<br>', $textt);
    $heading .= '> ' . $textt . ' </h' . $h_level . '>
        ';
    echo $heading;
    $previus_h_level = $h_level;
    $previus_h_text  = $textt;
}

//insert li 
function insert_li($text_input)
{
    // check if the tag needs class
    $li_class = ' ';
    if ($text_input[2] == '^') {
        $li_class = ' class="m-b-1"';
    }
    $text = substr($text_input, 3);
    $text = htmlspecialchars($text);
    $text = str_replace('|||', '<br>', $text);
    echo '<li' . $li_class . '>' . $text . '</li>
        ';
}

// add http to links 
function addHttp($url)
{
    if (!preg_match("~^(?:f|ht)tps?://~i", $url)) {
        $url = "http://" . $url;
    }
    return $url;
}

// ==================================================================


function theTextReader($txt_file, $postimages = false, $txtLines_limit = false )
{
	
	// check if $txt_file is a file or array 
	if ( gettype ($txt_file) != 'array' ) {
		// load the txt from the file
		$array_of_txt     = file($txt_file, FILE_IGNORE_NEW_LINES);
	} else 
		$array_of_txt = $txt_file;

	// count number of text lines 
    $array_of_txt_len = sizeof($array_of_txt);
    if ( $txtLines_limit != false ) $array_of_txt_len = $txtLines_limit;
	
    // set some parameters    
    $close_link_tag    = false;
    $close_p_tag       = false;
    $bold_text         = false;
    $link_started      = false;
    $paragraph_started = false;
    $previus_was_li    = false;
    $previus_was_ol_li = false;
    $previus_h_level   = 1;
    $header_count      = 0;
    
    
    //proccess the array of text
    for ($t = 0; $t < $array_of_txt_len; $t++) {
        $i = $array_of_txt[$t];
        // close <a> if it's started
        if ($close_link_tag) {
            echo '</a>
                        ';
            $close_link_tag = false;
        }
        // close <p> if it's started
        if ($close_p_tag) {
            echo '</p>
                        ';
            $close_p_tag       = false;
            $paragraph_started = false;
        }
		
		// corect txt file encoding
		if ($t == 0 ) {
			$bom = pack("CCC", 0xef, 0xbb, 0xbf);
			if (0 === strncmp($i, $bom, 3)) {
				// BOM detected - file is UTF-8\n 
				$i = substr($i, 3);
			}
		}
		
        // check if the line has some character ( not empty )
        if (strlen($i) > 2) {
            
            // check next line is not empty
            $not_next_line = false;
            if ($t + 1 < $array_of_txt_len) {
                $j = $array_of_txt[$t + 1];
                if (strlen($j) < 2) {
                    $not_next_line = true;
                }
            } else {
                $not_next_line = true;
            }
            
            // check if there is UL list 
            if ($i[0] . $i[1] == '**') {
                // insert ul tag
                if (!$previus_was_li) {
                    echo '<ul>';
                }
                // insert li 
                insert_li($i);
                $previus_was_li = true;
                continue;
            } else {
                // close <ul> tag if it's started
                if ($previus_was_li) {
                    echo '</ul>
					';
                    $previus_was_li = false;
                }
            }
            
            // check if there is OL list 
            if ($i[0] . $i[1] == '++') {
                // insert ol tag
                if (!$previus_was_ol_li) {
                    echo '<ol>';
                }
                // insert li 
                insert_li($i);
                $previus_was_ol_li = true;
                continue;
            } else {
                // close <ol> tag if it's started
                if ($previus_was_ol_li) {
                    echo '</ol>
					';
                    $previus_was_ol_li = false;
                }
            }
            
            // check for heading
            if ($i[0] . $i[1] == '>>' || $i[1] == '>') {
                $header_count++;
                // insert heading tag
                if ($i[0] . $i[1] . $i[2] . $i[3] . $i[4] == '>>>>>') {
                    insertHeading($i, 5);
                } else if ($i[0] . $i[1] . $i[2] . $i[3] == '>>>>') {
                    insertHeading($i, 4);
                } else if ($i[0] . $i[1] . $i[2] == '>>>') {
                    insertHeading($i, 3);
                } else {
                    insertHeading($i, 2);
                }
            }
            // check for image
            else if ($i[0] . $i[1] == '==') {
                if ($postimages) {
                    // insert image
                    $img_path_num = $i[3] - 1;
                    $img_path     = $postimages[$img_path_num];
                    $img_alt      = substr($i, 8);
                    blog_img($img_path, $img_alt);
                }
            } else {
                // insert p tag
                if (!$paragraph_started) {
                    echo '<p>';
                    $paragraph_started = true;
                }
                // check if there is a link
                if ($i[0] . $i[1] == '##') {
                    // internal link 
                    if ($i[0] . $i[1] . $i[2] . $i[3] == '####') {
                        $text = substr($i, 5);
                        $text = str_replace(' ', '', $text);
                        echo '<a href="#inline-link-' . $text . '" class="internal-link">';
                        $link_started = true;
                        $close_p_tag  = false;
                        continue;
                    }
                    // external link 
                    else if ($i[0] . $i[1] . $i[2] == '###') {
                        $text = substr($i, 4);
                        $text = str_replace(' ', '', $text);
                        $text = addHttp($text);
                        echo '<a href="' . $text . '" target="_blank">';
                        $link_started = true;
                        $close_p_tag  = false;
                        continue;
                    }
                    // normal link 
                    else {
                        $text = substr($i, 3);
                        $text = str_replace(' ', '', $text);
                        if ($text[0] . $text[1] . $text[2] != '../') {
                            $text = addHttp($text);
                        }
                        echo '<a href="' . $text . '">';
                        $link_started = true;
                        $close_p_tag  = false;
                        continue;
                    }
                }
                // check for bold text
                else if ($i[0] . $i[1] == '^^') {
                    $text = substr($i, 3);
                    $text = htmlspecialchars($text);
                    // line break
                    $text = str_replace('|||', '<br>', $text);
                    echo '<b>' . trim($text) . '</b>
                                        ';
                    $bold_text   = true;
                    $close_p_tag = false;
                    continue;
                }
                // normal text 
                else {
                    $text = htmlspecialchars($i);
                    $text = str_replace('|||', '<br>', $text);
                    echo ' ' . trim($text) . ' ';
                }
                if (!$not_next_line) {
                    if ($paragraph_started && !$link_started && !$bold_text) {
                        if ($j[0] . $j[1] == '##' || $j[0] . $j[1] == '^^') {
                            $close_p_tag = false;
                        } else {
                            $close_p_tag = true;
                        }
                    }
                }
                if ($link_started) {
                    echo '</a>';
                    $link_started = false;
                }
            }
        } else {
            // if text line is empty, close <p> and <a> tags
            if ($link_started) {
                $close_link_tag = true;
                $link_started   = false;
            }
            if ($paragraph_started) {
                $paragraph_started = false;
                $close_p_tag       = true;
                // insert charecter if there is something like . or :
                if (strlen($i) >= 1)
                    echo trim($i);
            }
            $not_next_line = true;
        }
		
    } // end main loop

	if ($previus_was_li)
		echo '</ul>';
	if ($previus_was_ol_li)
		echo '</ol>';
    if ($close_p_tag)
        echo '</p>';
	if ( $paragraph_started )
		echo '</p>';
	
    return $header_count;
}


// ==================================================================


// insert <br>             |||
// link URL                ##   (link text on next line )
// external link           ###  (link text on next line )
// internal link           #### (link text on next line )		


function listReader(
	$txt_file,
	$startFromLine = 0 ,
	$seperateItems = true,
	$wrapElementsIntoDL = true
){
		
	// characters used for identifying heading:
    // ---------------------------------    
	$headingSymbol  = '--';
    // ---------------------------------    

	// check if $txt_file is a file or array 
	if ( gettype ($txt_file) != 'array' ) {
		// load the txt from the file
		$array_of_txt     = file($txt_file, FILE_IGNORE_NEW_LINES);
	} else 
		$array_of_txt = $txt_file;
	
	
	$array_of_txt_len = sizeof($array_of_txt);

	// inset starting list tag 
	if ( $wrapElementsIntoDL ) {
		echo '	<dl>
						';
	}
	
    // set some parameters    
    $close_link_tag    = false;
    $close_dd_tag      = false;
    $bold_text         = false;
    $link_started      = false;
    $paragraph_started = false;
	$headerIsStarted   = false;
	
    //proccess the array of text
    for ($t = $startFromLine; $t < $array_of_txt_len; $t++) {

        $i = $array_of_txt[$t];
        // close <a> if it's started
        if ($close_link_tag) {
            echo '</a>
                        ';
            $close_link_tag = false;
        }
        // close <dd> if it's started
        if ($close_dd_tag) {
            echo '</dd>
                        ';
            $close_dd_tag       = false;
            $paragraph_started = false;
        }
        
		// corect txt file encoding
		if ($t == 0 ) {
			$bom = pack("CCC", 0xef, 0xbb, 0xbf);
			if (0 === strncmp($i, $bom, 3)) {
				// BOM detected - file is UTF-8\n 
				$i = substr($i, 3);
			}
		}
		
        // check if the line has some character ( not empty )
        if (strlen($i) > 2) {
			

            // check next line is not empty
            $not_next_line = false;
            if ($t + 1 < $array_of_txt_len) {
                $j = $array_of_txt[$t + 1];
                if (strlen($j) < 2) {
                    $not_next_line = true;
                }
            } else {
                $not_next_line = true;
            }
			
            // check for title 
            if ($i[0] . $i[1] == $headingSymbol ) {
				if ( $i[2] == ' ') $text = substr($i, 3);
				else  $text = substr($i, 2);
				$text = htmlspecialchars($text);
				$text = str_replace('|||', '<br>', $text);
				echo '<dt> ' . $text . '</dt>
						';
				$headerIsStarted = true;
            }
			else if ($headerIsStarted) {
                // insert dd tag
                if (!$paragraph_started) {
                    echo '<dd>';
                    $paragraph_started = true;
                }
                // check if there is a link
                if ($i[0] . $i[1] == '##') {
                    // internal link 
                    if ($i[0] . $i[1] . $i[2] . $i[3] == '####') {
                        $text = substr($i, 5);
                        $text = str_replace(' ', '', $text);
                        echo '<a href="#inline-link-' . $text . '" class="internal-link">';
                        $link_started = true;
                        $close_dd_tag  = false;
                        continue;
                    }
                    // external link 
                    else if ($i[0] . $i[1] . $i[2] == '###') {
                        $text = substr($i, 4);
                        $text = str_replace(' ', '', $text);
                        $text = addHttp($text);
                        echo '<a href="' . $text . '" target="_blank">';
                        $link_started = true;
                        $close_dd_tag  = false;
                        continue;
                    }
                    // normal link 
                    else {
                        $text = substr($i, 3);
                        $text = str_replace(' ', '', $text);
                        if ($text[0] . $text[1] . $text[2] != '../') {
                            $text = addHttp($text);
                        }
                        echo '<a href="' . $text . '">';
                        $link_started = true;
                        $close_dd_tag  = false;
                        continue;
                    }
                }
                // check for bold text
                else if ($i[0] . $i[1] == '^^') {
                    $text = substr($i, 3);
                    $text = htmlspecialchars($text);
                    // line break
                    $text = str_replace('|||', '<br>', $text);
                    echo '<b>' . trim($text) . '</b>
                                        ';
                    $bold_text   = true;
                    $close_dd_tag = false;
                    continue;
                }
                // normal text 
                else {
                    $text = htmlspecialchars($i);
                    $text = str_replace('|||', '<br>', $text);
					
					// reformat "," to prevent bad line breaking 
					$text = str_replace(' ,', ',', $text); 
					
					// check text has ',' character 
					if ( $seperateItems &&  strpos($text, ',') !== false ) {
						// put each item into a <span>
						echo ' ';
						$text = trim($text);
						$textWordsArray = explode(', ' , $text);
						$textWordsArraySize = sizeof($textWordsArray);
						$textWordsCount = 0;
						foreach ( $textWordsArray as $textWordsItem) {
							$textWordsCount++;
							echo '<span>';
							echo $textWordsItem;
							if ( $textWordsCount < $textWordsArraySize )echo ', ';
							echo '</span>';
						}
						echo ' ';
					
					} else { // text do not have any ',' character (normal mod)
						echo '<span> ' . trim($text) . ' </span>';
					}
                }
                if (!$not_next_line) {
                    if ($paragraph_started && !$link_started && !$bold_text) {
                        if ($j[0] . $j[1] == '##' || $j[0] . $j[1] == '^^') {
                            $close_dd_tag = false;
                        } else {
                            $close_dd_tag = true;
                        }
                    }
                }
                if ($link_started) {
                    echo '</a>';
                    $link_started = false;
                }
            }
			
		} else {
            // if text line is empty, close <dd> and <a> tags
            if ($link_started) {
                $close_link_tag = true;
                $link_started   = false;
            }
            if ($paragraph_started) {
                $paragraph_started = false;
                $close_dd_tag      = true;
                // insert charecter if there is something like . or :
                if (strlen($i) >= 1)
                    echo trim($i);
            }
            $not_next_line = true;
		}
		
	} // end main loop
		
    if ($close_dd_tag || $paragraph_started )
		echo '</dd>';
	
	
	// close list tag 
	if ( $wrapElementsIntoDL ) {
	echo '
					</dl>';
	}
	
}