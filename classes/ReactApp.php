<?php

namespace ReactPluginStarter;

/**
 * Class InitPluginStarter
 */
class ReactApp {

  public function __construct() {
    add_action('admin_enqueue_scripts', array($this, 'scripts'));
    add_action('in_admin_header', array($this, 'container'));
  }

  public function scripts() {
    // Check if the webpack dev server is running
    $response = wp_remote_get('http://localhost:8080');

    if (!is_wp_error($response)) {
      // If webpack dev server is running, load local HMR version
      wp_enqueue_script('wp-react-plugin-starter', 'http://localhost:8080/main.js', array(), '1.0.0', true);
    } else {
      // Fallback to the dist version
      wp_enqueue_script('wp-react-plugin-starter', plugin_dir_url(dirname(__FILE__)) . 'dist/main.js', array(), '1.0.0', true);
      // Enqueue your admin CSS
      wp_enqueue_style('wp-react-plugin-starter', plugin_dir_url(dirname(__FILE__)) . 'dist/main.css', array(), '1.0.0', 'all');
    }
  }

  public function container() {
    echo '<div id="wp-react-plugin-starter-container"></div>';
  }
}
