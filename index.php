<?php
/*
Plugin Name: WP React Plugin Starter
Description: Enhance your WordPress site with the power of React!
Version: 1.0
Author: Prolific Digital
Author URI: https://www.prolificdigital.com/
Text Domain: wp-react-plugin-starter
*/

// If this file is accessed directly, abort.
if (!defined('WPINC')) {
  die;
}

// Include Composer's autoloader
require 'vendor/autoload.php';

use ReactPluginStarter\InitPlugin;

$InitPlugin = new InitPlugin();
