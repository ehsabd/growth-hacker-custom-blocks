<?php

/*
Plugin Name:  Growth Hacker Custom Blocks
Description:  A Plugin that adds custom blocks to your gutenberg
Version:      0.1.7
Author:       ehsabd
Text Domain:  growth-hacker-custom-blocks
Domain Path:  /languages
*/

function growth_hacker_register_block() {
 
    // automatically load dependencies and version
    $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');
 
    wp_register_script(
        'growth-hacker-custom-blocks-xfeature-block',
        plugins_url( 'build/index.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version']
    );

    wp_register_style(
        'growth-hacker-custom-blocks-xfeature-block-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
    );
 
    wp_register_style(
        'growth-hacker-custom-blocks-xfeature-block',
        plugins_url( 'style.css', __FILE__ ),
        array( ),
        filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
    );

 
    register_block_type( 'growth-hacker-custom-blocks/xfeature-block', array(
        'apiVersion' => 2,
        'style' => 'growth-hacker-custom-blocks-xfeature-block',
        'editor_style' => 'growth-hacker-custom-blocks-xfeature-block-editor',
        'editor_script' => 'growth-hacker-custom-blocks-xfeature-block',
    ) );
 
}
add_action( 'init', 'growth_hacker_register_block' );

?>