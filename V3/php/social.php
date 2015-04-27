<?php

$json = array( 'result' => 1, 'data' => array());

$request = true;

//GET NUMBER OF ARTICLES
// http://blog.heddoko.com/json/?ajax=1&recent=1
// http://blog.heddoko.com/json/?ajax=1&number=1
$blog = @file_get_contents('http://blog.heddoko.com/json/?ajax=1&number=1');
//$blog;
if((gettype(json_decode($blog)) === "object")) {
	$json['data']['articles'] = intval(json_decode($blog)->data);
} else {
	$request = false;
}

//GET FACEBOOK
$facebook =  @file_get_contents('https://graph.facebook.com/heddoko/');
if($facebook !== FALSE) {
	$json['data']['likes'] = (json_decode($facebook)->likes);
} else {
	$request = false;
}

//TWITTER API
require_once('TwitterAPIExchange.php');

/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
    'oauth_access_token' => "28222392-mQfAqBdkzzf87FkhWmrWLZm0ul0dEN49k85vpxdnC",
    'oauth_access_token_secret' => "LoobFFvycOwBXpCj6zivTZKkiq7XbvnQlWmS2jm1PfM7r",
    'consumer_key' => "3BBMA9oHuhM0F8uxVV74VeZvh",
    'consumer_secret' => "y29S8QSyQZtcumq8dghSJgldx2xypjv0oAdq11aRNc6YUojUrX"
);

/** Perform a GET request and echo the response **/
/** Note: Set the GET field BEFORE calling buildOauth(); **/

//GET FOLLOWERS
$url = 'https://api.twitter.com/1.1/followers/ids.json';
$getfield = '?screen_name=heddoko';
$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);
$followers = $twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest();

$followers = json_decode($followers);

// if(count($followers->errors) > 0) {
if(array_key_exists('errors', $followers)) {
	$request = false;	
} else {
	$followers = count($followers->ids);
	$json['data']['followers'] = $followers;
}

//GET TWEETS
$url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
$getfield = '?screen_name=heddoko&count=1';
$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);
$tweets = $twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest();

$tweets = json_decode($tweets);

if(array_key_exists('errors', $tweets)) {
	$request = false;	
} else {
	$tweets = $tweets[0]->user->statuses_count;
	$json['data']['tweets'] = $tweets;
}

// ===============================

if($request) {
	//write cached results
	$jsonFile = fopen('socialjson.json', 'w');// or die('Unable to open file!');
	$txt = json_encode($json);
	fwrite($jsonFile, $txt);
	fclose($jsonFile);
	echo json_encode($json);

} else {
	//display cached file
	$jsonFile = fopen('socialjson.json', 'r') or die('Unable to open file!');
	echo fread($jsonFile,filesize('socialjson.json'));
}

