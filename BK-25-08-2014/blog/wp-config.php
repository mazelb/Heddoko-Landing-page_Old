<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'hoopslou_bza21');

/** MySQL database username */
define('DB_USER', 'hoopslou_bza21');

/** MySQL database password */
define('DB_PASSWORD', 'A]IN0Ie#CL43[^6');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'W3OtT49lJBXVOB74kk4xc6krBAgmabVSbuYpFHTN5YlWmqAdSEB2GUTSCEB4xTlu');
define('SECURE_AUTH_KEY',  'DYdd7r61h1P7vQb1TTZ6RbFbA079hJkOEPVavPkJFBMhuThpVKQ4H4w2ATbwBhsm');
define('LOGGED_IN_KEY',    'Vjy3v70uD4SJNBRb2UxEBYg8SKt2F4Su7xt7OHoFJFLtG75OJiacT2sMVfgO8lgd');
define('NONCE_KEY',        '7lIT9czFCkm139GotJHieQGC6sXro249lCDBEACinR3zwQCC1Q5CfsoZQrJPnPm9');
define('AUTH_SALT',        'RU126Pl36VMnuMzyQII9z6NHRMK08SxHRKlbFc4sXuePboRod617zSc85yImbBuW');
define('SECURE_AUTH_SALT', 'AdVgHKcqkwG3RgzNf0GrpM7624eVE7j4Af8jXvRFKgwtj1F2WtYVtD5apxyYjjhR');
define('LOGGED_IN_SALT',   'uzMK4Y4J0cHZBRv8E80E03DgF9epKeavr8TDH5xpCx7AOtePC6tqoCktCitfOXVe');
define('NONCE_SALT',       '9aMGy1karXwh4ylizGOL5IocrJc8OjtpLMJgSzFZhmGIlocd9rFyNjFU00Gjc86X');

/**
 * Other customizations.
 */
define('FS_METHOD','direct');define('FS_CHMOD_DIR',0755);define('FS_CHMOD_FILE',0644);
define('WP_TEMP_DIR',dirname(__FILE__).'/wp-content/uploads');

/**
 * Turn off automatic updates since these are managed upstream.
 */
define('AUTOMATIC_UPDATER_DISABLED', true);


/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'bza2_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
