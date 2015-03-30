How to install the Recipe Manager

# Introduction #
The Recipe Manager is written in PHP using the CakePHP framework. Storage is MongoDB. UI uses jQuery.

# Requirements #

  * PHP 5.*** Mongo
  * Apache 2.2
    * Rewrite
    * Vhosts
  * MongoDB**

# Details #

## Application Structure ##
<pre>
<vhosts-dir><br>
<br>
_libraries/<br>
cake.1.3.7/<br>
recipe-manager/<br>
app/<br>
.htaccess<br>
bugs.txt<br>
todo.txt<br>
</pre>

  * Where app/ contains the CakePHP application structure.
  * Where cake.1.3.7 contains the CakePHP core structure.
  * Use the CakePHP core that I provided because it includes the MongoDB datasource.


To create a user for the application you must know what the secret ingredient is. The string for the secret ingredient is in /config/app\_config.php.


Make sure to get the latest copy of the DB from the repository and install it to a MongoDB called recipe\_manager.