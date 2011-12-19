<?php
Configure::write('FEATURE.SHOPPING_LIST.COLS', 3);
/*
 * Based on 11" x 72px which is 792px but you have to subtract the header and menus
 */
Configure::write('FEATURE.SHOPPING_LIST.HEIGHT_PX', 500);
/*
 * Based on 8.5" x 72px = 612
 */
Configure::write('FEATURE.SHOPPING_LIST.WIDTH_PX', 980); // changed for readability
/*
 * Based on what Chrome calculates a TR to be. This will break on different line heights
 */
Configure::write('FEATURE.SHOPPING_LIST.CAT_HEIGHT_PX', 40);
/*
 * Based on what Chrome calculates a TR to be. This will break on different line heights
 */
Configure::write('FEATURE.SHOPPING_LIST.TR_HEIGHT_PX', 26);
/*
 * This key is used to prevent people signing up for an account unless they 
 * know this key.
 */
Configure::write('SECRET_INGREDIENT', 's0m35tr1ng');

?>
