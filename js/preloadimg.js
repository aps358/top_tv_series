function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img>')[0].src = this;
    });
}

preload([
    'img/LOGO.png',
    'carousel_images/96377.jpg',
	'carousel_images/518307.jpg',
	'carousel_images/639485.jpg',
	'carousel_images/big-bang-theory-wallpapers-0.jpg',
	'carousel_images/cropped-1920-1080-485322.jpg',
	'carousel_images/game_of_thrones_kit_harington_sophie_turner_maisie_williams_rory_mccann_rose_leslie_john_bradley_kristian_nairn_aidan_gillen_conleth_hill_isaac_hempstead_wright_100670_1920x1080.jpg',
	'thumbs/5703469429_fff423257f_z.jpg',
	'thumbs/breaking-bad40.jpeg',
	'thumbs/GOT.jpg',
	'thumbs/sherlock-holmes-tv.jpg',
	'thumbs/the_big_bang_theory_season_8_hd_wallpaper-800x800.jpg',
	'thumbs/tumblr_lszupuqb8S1qfrr7i.jpg',
	'posters/036fadb440e7ebb4eaa8f13ab4be636a.jpg',
	'posters/Breaking-Bad-Background-for-Iphone-Download-Free.jpg',
	'posters/hDd5Zd9VMOqBeHa2agbnHZ98WWr.jpg',
	'posters/tvposter-how-i-met-your-mother-5679b7e9116aa.jpg',
	'posters/tvposter-sherlock-54dfad097c9b8.jpg',
	'posters/wQoosZYg9FqPrmI4zeCLRdEbqAB.jpg'
]);