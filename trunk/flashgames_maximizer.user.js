// ==UserScript==
// @name           FlashGames Maximizer
// @namespace      http://userscripts.org/users/144415
// @description    Maximizes Zynga flashgames. Removes all anoying boxes and whitespaces around the flash. Works in facebook too.
// @Copyright      Sebastian Fischer
// @version        3.0.0
// @license        http://creativecommons.org/licenses/by-nc-nd/3.0/us/
// @include        *facebook.com/black_jack/*
// @include        *facebook.com/cafeworld/*
// @include        *cafe.zynga.com/*
// @include        *facebook.com/onthefarm/*
// @include        *farmville.com/*
// @include        *facebook.com/fishville/*
// @include        *fishville.zynga.com/*
// @include        *facebook.com/pathwords/*
// @include        *74.201.93.95/*
// @include        *facebook.com/petvillegame/*
// @include        *petville.zynga.com*
// @include        *facebook.com/coasterkingdom/*
// @include        *coaster.zynga.com*
// @include        *facebook.com/texas_holdem/*
// @include        *poker.zynga.com*
// @include        *facebook.com/treasureisle/*
// @include        *treasure.zynga.com/*
// @include        *facebook.com/wordtwist/*
// @include        *74.201.93.101*
// @include        *facebook.com/yoville/*
// @include        *yoville.com/*
// @exclude        *facebook.com/onthefarm/track.php*
// @require        http://fvmaximizer.googlecode.com/files/jquerygmfix.js
// @require        http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js
// @require        http://sizzlemctwizzle.com/updater.php?id=73361&days=1
// ==/UserScript==

var SCRIPT = {
	title: 'FlashGames Maximizer',
	presentationurl: 'http://userscripts.org/scripts/show/73361',
	games: {
		bj: {
			name: 'Blackjack',
			styles: 'Blackjack',
			selector: '#app_content_5803363687 .__fbswf embed',
			hostname: /apps\.facebook\.com/,
			pathname: /\/black_jack/,
			exclude: new Array(
				/helpframe\.php/,
				/invite_condensed\.php/,
				/leader_board\.php/,
				/new_invite_post\.php/,
				/playa\.php/
			),
			menuitems: new Array(
				{href: 'http://apps.facebook.com/black_jack/invite.php?type=7', label: 'Invite Friends'},
				{href: 'http://apps.facebook.com/black_jack/playa.php', label: 'My Profile'},
				{href: 'http://apps.facebook.com/black_jack/leader_board.php', label: 'Leaderboard'},
				{href: 'http://apps.facebook.com/black_jack/helpframe.php', label: 'How To Play'},
				{href: 'http://www.facebook.com/', label: 'Facebook'}
			)
		},
		bj_iframe: {},
		cw: {
			name: 'Cafe World',
			styles: 'CafeWorld',
			selector: '#app_content_101539264719 iframe[src*=/fb//iframe.php]',
			hostname: /apps\.facebook\.com/,
			pathname: /\/cafeworld/,
			exclude: new Array(
				/accept_chef_special\.php/,
				/accept_request\.php/,
				/gift_cards\.php/,
				/help\.php/,
				/invite\.php/,
				/money\//,
				/neighbors\.php/,
				/send_gift\.php/,
				/view_gift\.php/
			),
			menuitems: new Array(
				{href: 'http://apps.facebook.com/cafeworld/view_gift.php', label: 'Free Gifts'},
				{href: 'http://apps.facebook.com/cafeworld/neighbors.php', label: 'Neighbors'},
				{href: 'http://apps.facebook.com/cafeworld/invite.php', label: 'Invite Friends'},
				{href: 'http://apps.facebook.com/cafeworld/money/', label: 'Coins & Cash'},
				{href: 'http://apps.facebook.com/cafeworld/money/earn.php', label: 'Earn Café Cash'},
				{href: 'http://apps.facebook.com/cafeworld/money/?page=paypal_promo&paytype=pp&packageid=204', label: 'PayPal Discount'},
				{href: 'http://apps.facebook.com/cafeworld/help.php', label: 'Help'},
				{href: 'http://apps.facebook.com/cafeworld/gift_cards.php', label: 'Game Card'},
				{href: 'http://www.facebook.com/', label: 'Facebook'}
			)
		},
		cw_iframe: {
			selector: '#game_div',
			styles: 'CafeWorld',
			notice: '#game_shoutout',
			hostname: /cafe\.zynga\.com/,
			pathname: /\/iframe\.php/,
			exclude: new Array(
			)
		},
		favfb: {
			name: 'FarmVille in Facebook',
			styles: 'FarmVille',
			selector: '#app_content_102452128776 iframe[src*=/flash.php]',
			hostname: /apps\.facebook\.com/,
			pathname: /\/onthefarm/,
			exclude: new Array(
				/fans\.php/,
				/gifts\.php/,
				/gifts_send\.php/,
				/invite\.php/,
				/money\.php/,
				/neighbors\.php/,
				/reward\.php/,
				/sendmats\.php/
			),
			menuitems: new Array(
				{href: 'http://apps.facebook.com/onthefarm/gifts.php', label: 'Gifts'},
				{href: 'http://apps.facebook.com/onthefarm/neighbors.php', label: 'Neighbors'},
				{href: 'http://apps.facebook.com/onthefarm/invite.php', label: 'Invite Friends'},
				{href: 'http://apps.facebook.com/onthefarm/money.php', label: 'Coins & Cash'},
				{href: 'http://apps.facebook.com/onthefarm/fans.php', label: 'Love FarmVille?'},
				{href: 'http://www.facebook.com/', label: 'Facebook'}
			//	{click: function() {new FarmvilleTool();}, label: 'Seed Calc'},
			)
		},
		favfv: {
			name: 'FarmVille in farmville.com',
			styles: 'FarmVille',
			selector: '#flashIframeWrapper iframe',
			hostname: /farmville\.com/,
			pathname: /\/+/,
			exclude: new Array(
				/gifts\.php/,
				/gifts_send\.php/,
				/invite\.php/,
				/money\.php/,
				/neighbors\.php/
			),
			menuitems: new Array(
				{href: 'http://www.farmville.com/gifts.php', label: 'Gifts'},
				{href: 'http://www.farmville.com/neighbors.php', label: 'Neighbors'},
				{href: 'http://www.farmville.com/invite.php', label: 'Invite Friends'},
				{href: 'http://www.farmville.com/money.php', label: 'Coins & Cash'}
			)
		},
		fav_iframe: {
			selector: '#flashapp',
			notice: '.noticebox',
			hostname: /farmville\.com/,
			pathname: /\/flash.php/,
			exclude: new Array(
			)
		},
		fiv: {
			name: 'FishVille',
			styles: 'FishVille',
			selector: '#app151044809337_iframe_canvas',
			hostname: /apps\.facebook\.com/,
			pathname: /\/fishville/,
			exclude: new Array(
				/gifts\.php/,
				/gifts_send\.php/,
				/help\.php/,
				/invite\.php/,
				/money\.php/,
				/neighbors\.php/
			),
			menuitems: new Array(
				{href: 'http://facebook.fishville.zynga.com/public/gifts.php?appRef=tab&fb_sig_in_iframe=1&fb_sig_iframe_key=c16a5320fa475530d9583c34fd356ef5&fb_sig_base_domain=zynga.com&fb_sig_locale=de_DE&fb_sig_in_new_facebook=1&fb_sig_time=1275371913.8534&fb_sig_added=1&fb_sig_profile_update_time=1274007175&fb_sig_expires=1275375600&fb_sig_user=100001095836253&fb_sig_session_key=2.yLNAoNbvqhPDEeaZCZDSIw__.3600.1275375600-100001095836253&fb_sig_ss=KyGYbgcsnv00OUjPCLhALQ__&fb_sig_cookie_sig=035a56300f75f545d2e44582c92c7652&fb_sig_ext_perms=auto_publish_recent_activity&fb_sig_country=de&fb_sig_api_key=35ce387ed7e8e0aace333fbc5e76cf0f&fb_sig_app_id=151044809337&fb_sig=eeb9c5ea1afac36656c98ecb05511292', label: 'Free Gifts'},
				{href: 'http://facebook.fishville.zynga.com/public/neighbors.php?appRef=tab&fb_sig_in_iframe=1&fb_sig_iframe_key=c16a5320fa475530d9583c34fd356ef5&fb_sig_base_domain=zynga.com&fb_sig_locale=de_DE&fb_sig_in_new_facebook=1&fb_sig_time=1275371913.8534&fb_sig_added=1&fb_sig_profile_update_time=1274007175&fb_sig_expires=1275375600&fb_sig_user=100001095836253&fb_sig_session_key=2.yLNAoNbvqhPDEeaZCZDSIw__.3600.1275375600-100001095836253&fb_sig_ss=KyGYbgcsnv00OUjPCLhALQ__&fb_sig_cookie_sig=035a56300f75f545d2e44582c92c7652&fb_sig_ext_perms=auto_publish_recent_activity&fb_sig_country=de&fb_sig_api_key=35ce387ed7e8e0aace333fbc5e76cf0f&fb_sig_app_id=151044809337&fb_sig=eeb9c5ea1afac36656c98ecb05511292', label: 'Neighbors'},
				{href: 'http://facebook.fishville.zynga.com/public/invite.php?appRef=tab&fb_sig_in_iframe=1&fb_sig_iframe_key=c16a5320fa475530d9583c34fd356ef5&fb_sig_base_domain=zynga.com&fb_sig_locale=de_DE&fb_sig_in_new_facebook=1&fb_sig_time=1275371913.8534&fb_sig_added=1&fb_sig_profile_update_time=1274007175&fb_sig_expires=1275375600&fb_sig_user=100001095836253&fb_sig_session_key=2.yLNAoNbvqhPDEeaZCZDSIw__.3600.1275375600-100001095836253&fb_sig_ss=KyGYbgcsnv00OUjPCLhALQ__&fb_sig_cookie_sig=035a56300f75f545d2e44582c92c7652&fb_sig_ext_perms=auto_publish_recent_activity&fb_sig_country=de&fb_sig_api_key=35ce387ed7e8e0aace333fbc5e76cf0f&fb_sig_app_id=151044809337&fb_sig=eeb9c5ea1afac36656c98ecb05511292', label: 'Invite Friends'},
				{href: 'http://facebook.fishville.zynga.com/public/money.php?appRef=tab&fb_sig_in_iframe=1&fb_sig_iframe_key=c16a5320fa475530d9583c34fd356ef5&fb_sig_base_domain=zynga.com&fb_sig_locale=de_DE&fb_sig_in_new_facebook=1&fb_sig_time=1275371913.8534&fb_sig_added=1&fb_sig_profile_update_time=1274007175&fb_sig_expires=1275375600&fb_sig_user=100001095836253&fb_sig_session_key=2.yLNAoNbvqhPDEeaZCZDSIw__.3600.1275375600-100001095836253&fb_sig_ss=KyGYbgcsnv00OUjPCLhALQ__&fb_sig_cookie_sig=035a56300f75f545d2e44582c92c7652&fb_sig_ext_perms=auto_publish_recent_activity&fb_sig_country=de&fb_sig_api_key=35ce387ed7e8e0aace333fbc5e76cf0f&fb_sig_app_id=151044809337&fb_sig=eeb9c5ea1afac36656c98ecb05511292', label: 'Add Sand Dollars'},
				{href: 'http://facebook.fishville.zynga.com/public/help.php?appRef=tab&fb_sig_in_iframe=1&fb_sig_iframe_key=c16a5320fa475530d9583c34fd356ef5&fb_sig_base_domain=zynga.com&fb_sig_locale=de_DE&fb_sig_in_new_facebook=1&fb_sig_time=1275371913.8534&fb_sig_added=1&fb_sig_profile_update_time=1274007175&fb_sig_expires=1275375600&fb_sig_user=100001095836253&fb_sig_session_key=2.yLNAoNbvqhPDEeaZCZDSIw__.3600.1275375600-100001095836253&fb_sig_ss=KyGYbgcsnv00OUjPCLhALQ__&fb_sig_cookie_sig=035a56300f75f545d2e44582c92c7652&fb_sig_ext_perms=auto_publish_recent_activity&fb_sig_country=de&fb_sig_api_key=35ce387ed7e8e0aace333fbc5e76cf0f&fb_sig_app_id=151044809337&fb_sig=eeb9c5ea1afac36656c98ecb05511292', label: 'Help'},
				{href: 'http://www.facebook.com/', label: 'Facebook'}
			)
		},
		fiv_iframe: {
			styles: 'FishVille',
			selector: '#flashapp',
			hostname: /fishville\.zynga\.com/,
			pathname: /public\/index\.php/,
			exclude: new Array(
			)
		},
		pw: {
			name: 'Path Words',
			styles: 'PathWords',
			selector: '#app_content_12271981887 iframe[src*=/liveplayframe.php]',
			hostname: /apps\.facebook\.com/,
			pathname: /\/pathwords/,
			exclude: new Array(
				/mode\=invite/,
				/mode\=join/,
				/mode\=tb/
			),
			menuitems: new Array(
				{href: 'http://apps.facebook.com/pathwords/index.php?mode=tb', label: 'My Games'},
				{href: 'http://apps.facebook.com/pathwords/index.php?mode=join', label: 'Play Anyone'},
				{href: 'http://apps.facebook.com/pathwords/index.php?mode=invite', label: 'Invite Friends'},
				{href: 'http://www.facebook.com/', label: 'Facebook'}
			)
		},
		pw_iframe: {
			selector: '#TumbleWords',
			hostname: /74\.201\.93\.95/,
			pathname: /\/pathwords\/liveplayframe\.php/,
			exclude: new Array(
			)
		},
		pv: {
			name: 'PetVille',
			styles: 'PetVille',
			selector: '#app_content_163576248142 iframe[src*=/flash.php]',
			hostname: /apps\.facebook\.com/,
			pathname: /\/petvillegame/,
			exclude: new Array(
				/gifts\.php/,
				/help\.php/,
				/invite\.php/,
				/money\.php/,
				/neighbors\.php/
			),
			menuitems: new Array(
				{href: 'http://apps.facebook.com/petvillegame/gifts.php', label: 'Free Gifts'},
				{href: 'http://apps.facebook.com/petvillegame/neighbors.php', label: 'My Neighbors'},
				{href: 'http://apps.facebook.com/petvillegame/invite.php', label: 'Invite Friends'},
				{href: 'http://apps.facebook.com/petvillegame/becomeFan.php', label: 'Fan Page'},
				{href: 'http://apps.facebook.com/petvillegame/help.php', label: 'Help'},
				{href: 'http://apps.facebook.com/petvillegame/money.php', label: 'Get Pet Coins & Cash'},
				{href: 'http://www.facebook.com/', label: 'Facebook'}
			)
		},
		pv_iframe: {
			selector: '#flashapp',
			hostname: /petville\.zynga\.com/,
			pathname: /\/current\/flash\.php/,
			exclude: new Array(
			)
		},
		rck: {
			name: 'Roller Coaster Kingdom',
			styles: 'RCKingdom',
			selector: '#app_content_89771452035 iframe#app89771452035_eventtest',
			hostname: /apps\.facebook\.com/,
			pathname: /\/coasterkingdom/,
			exclude: new Array(
				/help\.php/,
				/invite\.php/,
				/money/,
				/neighbors/,
				/view_gifts\.php/
			),
			menuitems: new Array(
				{href: 'http://apps.facebook.com/coasterkingdom/view_gifts.php', label: 'Free Gifts'},
				{href: 'http://apps.facebook.com/coasterkingdom/neighbors', label: 'My Neighbors'},
				{href: 'http://apps.facebook.com/coasterkingdom/invite.php', label: 'Invite Friends'},
				{href: 'http://apps.facebook.com/coasterkingdom/money', label: 'Get More Coaster Cash'},
				{href: 'http://apps.facebook.com/coasterkingdom/help.php', label: 'Help'},
				{href: 'http://www.facebook.com/', label: 'Facebook'}
			)
		},
		rck_iframe: {
			selector: '#flash_game',
			hostname: /coaster\.zynga\.com/,
			pathname: /\/play\.php/,
			exclude: new Array(
			)
		},
		th: {
			name: 'Texas HoldEm Poker',
			styles: 'TexasHoldEm',
			selector: '#app2389801228_zyPokerSWF iframe',
			hostname: /apps\.facebook\.com/,
			pathname: /\/texas_holdem/,
			exclude: new Array(
				/guidelines\.php/,
				/helpframe\.php/,
				/settings\.php/
			),
			menuitems: new Array(
				{href: 'http://apps.facebook.com/texas_holdem/dmz_link_landing.php?src_track_str=Poker+FB+Invite_Page+Other+%25ACTION%25+o%3AHelp%3A2009-02-11&url=http%3A%2F%2Fapps.facebook.com%2Ftexas_holdem%2Fhelpframe.php', label: 'Help'},
				{href: 'http://apps.facebook.com/texas_holdem/dmz_link_landing.php?src_track_str=Poker+FB+Invite_Page+Other+%25ACTION%25+o%3ASettings%3A2009-02-11&url=http%3A%2F%2Fapps.facebook.com%2Ftexas_holdem%2Fsettings.php', label: 'Settings'},
				{href: 'http://apps.facebook.com/texas_holdem/dmz_link_landing.php?src_track_str=Poker+FB+Invite_Page+Other+%25ACTION%25+o%3ATOS%3A2009-02-11&url=http%3A%2F%2Fwww.zynga.com%2Flegal%2Fterms_of_service.php', label: 'Terms of Service'},
				{href: 'http://zynga.custhelp.com/app/home/gameid/1/sn/1', label: 'Support'},
				{href: 'http://apps.facebook.com/texas_holdem/dmz_link_landing.php?src_track_str=Poker+FB+Invite_Page+Other+%25ACTION%25+o%3AGuidelines%3A2009-02-11&url=http%3A%2F%2Fapps.facebook.com%2Ftexas_holdem%2Fguidelines.php', label: 'Guidelines'},
				{href: 'http://apps.facebook.com/texas_holdem/dmz_link_landing.php?src_track_str=Poker+FB+Invite_Page+Other+%25ACTION%25+o%3APrivacy%3A2009-02-11&url=http%3A%2F%2Fwww.zynga.com%2FprivacyPolicy%2F', label: 'Privacy Info'},
				{href: 'http://forums.zynga.com/forumdisplay.php?f=60', label: 'Forum'},
				{href: 'http://www.facebook.com/', label: 'Facebook'}
			)
		},
		th_iframe: {
			selector: '#pokerSwfId',
			hostname: /poker\.zynga\.com/,
			pathname: /poker\/launch\.php/,
			exclude: new Array(
			)
		},
		ti: {
			name: 'Treasure Isle',
			styles: 'TreasureIsle',
			selector: '#app_content_234860566661 iframe[src*=/flash.php]',
			hostname: /apps\.facebook\.com/,
			pathname: /\/treasureisle/,
			exclude: new Array(
			),
			menuitems: new Array(
				{href: 'http://www.facebook.com/', label: 'Facebook'}
			)
		},
		ti_iframe: {
			selector: '#flashapp',
			styles: 'TreasureIsle',
			hostname: /treasure\.zynga\.com/,
			pathname: /\/flash.php/,
			exclude: new Array(
				/populateFbCache\.php/,
				/xd_receiver\.htm/
			)
		},
		wt: {
			name: 'Word Twist',
			styles: 'WordTwist',
			selector: '#app_content_8567719845 iframe[src*=liveplayframe.php]',
			hostname: /apps\.facebook\.com/,
			pathname: /\/wordtwist/,
			exclude: new Array(
				/mode\=create/,
				/mode\=invite/,
				/mode\=tb/
			),
			menuitems: new Array(
				{href: 'http://apps.facebook.com/wordtwist/index.php?mode=create', label: 'Start a Game'},
				{href: 'http://apps.facebook.com/wordtwist/index.php?mode=tb', label: 'My Games'},
				{href: 'http://apps.facebook.com/wordtwist/index.php?mode=invite', label: 'Invite Friends'},
				{href: 'http://apps.facebook.com/wordtwist/index.php?mode=live', label: 'Ladder Mode'},
				{href: 'http://www.facebook.com/', label: 'Facebook'}
			)
		},
		wt_iframe: {
			selector: '#WordTwist',
			hostname: /74\.201\.93\.101/,
			pathname: /wordtwist\/liveplayframe\.php/,
			exclude: new Array(
			)
		},
		yvfb: {
			name: 'YoVille in Facebook',
			styles: 'Yoville',
			selector: '#app_content_21526880407 iframe[src*=/indexnew.php]',
			hostname: /apps\.facebook\.com/,
			pathname: /\/yoville/,
			exclude: new Array(
				/game_cards\.php/,
				/invites\.php/,
				/my_crew\.php/,
				/send_gifts\.php/,
				/view_gifts\.php/
			),
			menuitems: new Array(
				{href: 'http://apps.facebook.com/yoville/view_gifts.php?bypass_reminder=1&', label: 'Free Gifts'},
				{href: 'http://apps.facebook.com/yoville/my_crew.php?', label: 'Neighbors'},
				{href: 'http://apps.facebook.com/yoville/invites.php?ref=topnav&', label: 'Invite Friends'},
				{href: 'http://apps.facebook.com/yoville/game_cards.php?', label: 'Game Cards'},
				{href: 'http://www.facebook.com/', label: 'Facebook'}
			)
		},
		yvyv: {
			name: 'YoVille in yoville.com',
			styles: 'Yoville',
			selector: '#maincontent iframe[src*=play.php]',
			hostname: /yoville\.com/,
			pathname: /\/app\.php/,
			exclude: new Array(
			),
			menuitems: new Array(
				{href: 'http://www.yoville.com/profile/', label: 'Profile'},
				{href: 'http://www.yoville.com/items/', label: 'Items'},
				{href: 'http://www.yoville.com/contests/', label: 'Contests'},
				{href: 'http://www.yoville.com/clubs/', label: 'Clubs'},
				{href: 'http://www.yoville.com/forum/', label: 'Forum'},
				{href: 'http://www.yoville.com/blog/', label: 'Blog'},
				{href: 'http://www.yoville.com/home/', label: 'Home'}
			)
		},
		yv_frame: {
			selector: '#mylife',
			hostname: /yoville.com/,
			pathname: /indexnew\.php|play\.php/,
			exclude: new Array(
			)
		}
	}
};



var active = true,
	isGM = (typeof(GM_getValue) != 'undefined' &&
		typeof(GM_getValue('a', 'b')) != 'undefined');

if (isGM) {
	active = GM_getValue('active', true);

	function activate() {
		storeState(true);
	}

	function deactivate() {
		storeState(false);
	}

	function storeState(state) {
		GM_setValue('active', state);
		window.location.reload();
	}

	if (active) {
		GM_registerMenuCommand('Deactivate ' + SCRIPT.title, deactivate);
	} else {
		GM_registerMenuCommand('Activate ' + SCRIPT.title, activate);
	}
}

if (active) {
	(function($) {
		var mmObj = new Maximizer();
		mmObj.injectDefaultStyles();

		jQuery(document).ready(function() {
			mmObj.maximizeWindow();
		});
	})(jQuery);
}



var $stylesChanged = jQuery.event.special.stylesChanged = {
	active: true,

	setup: function(data, namespaces) {
		jQuery(this).bind('DOMAttrModified', $stylesChanged.handler);
	},

	teardown: function(namespaces) {
		jQuery(this).unbind('DOMAttrModified');
	},

	handler: function(event) {
		if (event.attrName === 'style' && $stylesChanged.active) {
			$stylesChanged.active = false;

			jQuery(this).triggerHandler('stylesChanged');

			$stylesChanged.active = true;
		}
	}
};

var $elementCreated = jQuery.event.special.elementCreated = {
	setup: function(data, namespaces) {
		jQuery(this).data('elementCreated', data);
		jQuery(this).bind('DOMNodeInserted', $elementCreated.handler);
	},

	teardown: function(namespaces) {
		jQuery(this).unbind('DOMNodeInserted');
	},

	handler: function(event) {
		var data = jQuery(this).data('elementCreated'),
			$compareWith = jQuery(data.selector);
		if ($compareWith[0] == event.target) {
			jQuery(this).triggerHandler('elementCreated');
		}
	}
};



/**
 * Maximizer object
 *
 * @return	void
 */
function Maximizer() {
	this.styles = null;

	this.windowType = null;

	this.timeout_close = null;

	/**
	 * Initialization of the object
	 *
	 * @return	boolean
	 */
	this.init = function() {
		this.windowType = this.getWindowType();
		this.styles = new Styles();
		this.settings = SCRIPT.games[this.windowType];
	};

	/**
	 * Inject the common styles into the head node
	 *
	 * @return	void
	 */
	this.injectDefaultStyles = function() {
		if (this.windowType != null) {
			this.styles.injectStyles(this.styles.getDefaultStyles());
		}
	};

	/**
	 * Maximize the content element in the window with current windows settings
	 *
	 * @return	object
	 */
	this.maximizeWindow = function() {
		var self = this,
			settings = self.settings;

		switch(this.windowType) {
			case 'fiv':
			case 'ti':
				var $iframe = this.initMainwindow(settings);
				$iframe.bind(
					'stylesChanged',
					{height: '100%', width: '100%'},
					function(event, property) {
						for (var key in event.data) {
							if ($(this).css(key) != event.data[key]) {
								$(this).css(key, event.data[key]);
							}
						}
					}
				);
				break;

			case 'bj':
			case 'cw':
			case 'favfb':
			case 'favfv':
			case 'pw':
			case 'pv':
			case 'rck':
			case 'th':
			case 'wt':
			case 'yvfb':
			case 'yvyv':
				if (jQuery(settings.selector).length > 0) {
					this.initMainwindow(settings);
				} else {
					jQuery(document.body).bind('elementCreated', {
						selector: settings.selector
					}, function(event){
						self.initMainwindow(settings);
					});
				}
				break;

			case 'cw_iframe':
			case 'fav_iframe':
			case 'fiv_iframe':
			case 'pw_iframe':
			case 'pv_iframe':
			case 'rck_iframe':
			case 'th_iframe':
			case 'ti_iframe':
			case 'wt_iframe':
			case 'yv_frame':
				this.styles.injectStyles(this.styles.getFlashframeStyles());

				if (jQuery(settings.selector).length > 0) {
					this.initMainwindow(settings);
				} else {
					jQuery(document.body).bind('elementCreated', {
						selector: settings.selector
					}, function(event){
						self.initMainwindow(settings);
					});
				}
				break;
		}

			// use this only if a valid type was found
		if (this.windowType != null) {
				// create menu if menuitems are available
			if (typeof(settings.menuitems) != 'undefined') {
				this.createMenu(settings);
			}

				// if notice selector is set
			if (typeof(settings.notice) != 'undefined') {
				this.createNoticebox(settings);
			}

				// inject specific styles
			if (typeof(settings.styles) != 'undefined') {
				this.styles.appendStyles(this.styles['get' + settings.styles + 'Styles']());
			}

			// trash to clean up
			jQuery('#message_center_button')
				.css('display', 'block');
				//.detach()
				//.appendTo(document.body);
		}

		return this;
	};

	/**
	 * @param	array
	 * @return	void
	 */
	this.initMainwindow = function(settings) {
		var $element = jQuery(settings.selector)
			.removeAttr('height')
			.removeAttr('width')
			.removeAttr('style')
			.removeAttr('class')
			.css({
				display: 'block',
				visibility: 'visible',
				height: '100%',
				width: '100%',
				position: 'absolute'
			})
			.parents()
				.removeAttr('style')
				.removeAttr('class')
				.addClass('block')
				.end();

		return $element;
	};


	/**
	 * Get the window type depending on the location of the current window
	 *
	 * @return	string
	 */
	this.getWindowType = function() {
		if (this.windowType == null) {
			var hostname = window.location.hostname,
				pathname = window.location.pathname,
				href = window.location.href;

				// get every game settings and set them as current
			for (var key in SCRIPT.games) {
				var current = SCRIPT.games[key];

					/**
					 * If hostname and pathname is set compare them with current
					 * game settings. If they match use the key as windowType
					 */
				if (hostname != undefined &&
						pathname != undefined &&
						hostname.match(current.hostname) &&
						pathname.match(current.pathname)) {
					this.windowType = key;

						/**
						 * If some exclude path are defined look if they match.
						 * Remove the path and end the check
						 */
					if (typeof(current.exclude) == 'object' &&
							current.exclude.length > 0) {
						var excludeLength = current.exclude.length;

						for (var i = 0; i < excludeLength; i++) {
							if (href.match(current.exclude[i])) {
								this.windowType = null;
								break;
							}
						}
					}
				}
			}
		}

		return this.windowType;
	};

	/**
	 * Creates a menu of links with a button which clicked opens the menu
	 *
	 * @param	menuItems	array with objects containing the url and lable for the menuitems
	 * @return	void
	 */
	this.createMenu = function(settings) {
		var menuItems = settings.menuitems,
			self = this;

		this.styles.injectStyles(this.styles.getMenuStyles());

		var $fvmmMenu = jQuery('<div id="fvmm_menu" />')
				.append(
					jQuery('<div id="fvmm_menubutton"><span>Menu</span></div>')
						.bind('click', function() {
							jQuery(this).next().addClass('show');
						})
						.bind('mouseenter', function() {
							self.timeout_close = clearTimeout(self.timeout_close);
						})
						.bind('mouseleave', function() {
							var $button = jQuery(this);
							self.timeout_close = setTimeout(function() {
								$button.next().removeClass('show');
							}, 500);
						})
				),
				$fvmmList = jQuery('<menu/>')
					.bind('mouseenter', function() {
						self.timeout_close = clearTimeout(self.timeout_close);
					})
					.bind('mouseleave', function() {
						var $menu = jQuery(this);
						self.timeout_close = setTimeout(function() {
							$menu.removeClass('show');
						}, 500);
					})
					.appendTo($fvmmMenu);

		menuItems.push({href: 'http://userscripts.org/scripts/show/73361', label: 'FG-Max for Firefox'});
		menuItems.push({href: 'https://chrome.google.com/extensions/detail/iobhmpojlnigpglpmfahkfembdjelmbf/', label: 'FG-Max for Chrome'});

		for (var index in menuItems) {
			var attributes = menuItems[index];

			if (typeof(attributes.label) == 'string') {
				var label = attributes.label;
				delete(attributes['label']);
			}

			jQuery('<li/>')
				.append(
					jQuery('<a/>', attributes)
						.text(label)
				)
				.appendTo($fvmmList);
		}

		$fvmmMenu.appendTo('body');
	};

	/**
	 * Creates a noticebox if notices are available and appends a button if clicked
	 * will show the message
	 *
	 * @return	void
	 */
	this.createNoticebox = function(settings) {
		var $notices = jQuery(settings.notice);

		if ($notices.length > 0) {
			var $fvmmNotice = jQuery('<div id="fvmm_notice" />')
					.append(
						jQuery('<div id="fvmm_noticebutton" />')
							.bind('click', function() {
								jQuery(this).next().addClass('show');
							})
							.bind('mouseleave', function() {
								jQuery(this).next().removeClass('show');
							})
					),
				$fvmmNoticeMessages = jQuery('<div class="messages" />')
					.appendTo($fvmmNotice);

			$notices.each(function() {
				$(this)
					.removeAttr('id')
					.removeAttr('class')
					.removeAttr('style')
					.detach()
					.appendTo($fvmmNoticeMessages);
			});

			$fvmmNotice.appendTo('body');
		}
	};


	this.init();
}



/**
 * Styles related object
 *
 * @return	void
 */
function Styles() {
	/**
	 * General styles for both farmville and facebook
	 *
	 * @return	string
	 */
	this.getDefaultStyles = function() {
		return this.trim('\n\
			html,\n\
			body {\n\
				background: none;\n\
				height: 100%;\n\
				margin: 0;\n\
				padding: 0;\n\
				width: 100%;\n\
			}\n\
\n\
			body * { display: none; }\n\
			.block { display: block; }\n\
\n\
			iframe,\n\
			embed {\n\
				margin: 0;\n\
				padding: 0;\n\
				top: 0;\n\
				left: 0;\n\
			}\n\
\n\
		');
	};

	/**
	 * @return	string
	 */
	this.getMenuStyles = function() {
		return this.trim('\n\
			#fvmm_menu {\n\
				display: block;\n\
				margin-right: 70px;\n\
				position: absolute;\n\
				right: 0;\n\
				top: 41px;\n\
				width: 165px;\n\
				z-index: 1000001;\n\
			}\n\
			#fvmm_menu * {\n\
				display: block;\n\
			}\n\
			#fvmm_menu menu {\n\
				background-color: #ffffff;\n\
				border-bottom: 1px solid #333333;\n\
				display: none;\n\
				font-size: 12px;\n\
				list-style: none;\n\
				margin: 0;\n\
				padding: 0;\n\
				width: 120px;\n\
			}\n\
			#fvmm_menu menu.show {\n\
				display: block;\n\
			}\n\
			#fvmm_menu li {\n\
				text-align: left;\n\
			}\n\
			#fvmm_menu a {\n\
				border: 1px solid #333333;\n\
				border-bottom: none;\n\
				color: #0f0f0f;\n\
				display: block;\n\
				padding: 2px 5px 4px 4px;\n\
			}\n\
			#fvmm_menu a[href*=userscripts] {\n\
				border-top: 2px solid #333333;\n\
			}\n\
			#fvmm_menu a:hover {\n\
				background-color: #b2e1ff;\n\
				text-decoration: none;\n\
			}\n\
\n\
			#fvmm_menubutton {\n\
				color: white;\n\
				font-size: 16px;\n\
				font-weight: bolder;\n\
				height: 31px;\n\
				width: 72px;\n\
			}\n\
			#fvmm_menubutton span {\n\
				display: block;\n\
				line-height: 19px;\n\
				margin-right: 12px;\n\
				padding: 3px 3px 9px 13px;\n\
			}\n\
		');
	};

	/**
	 * General styles for farmville
	 *
	 * @return	string
	 */
	this.getFlashframeStyles = function() {
		return this.trim('\n\
			object,\n\
			embed {\n\
				border: none;\n\
				height: 100%;\n\
				padding-bottom: -2px;\n\
				margin: 0;\n\
				width: 100%;\n\
				position: absolute;\n\
				top: 0;\n\
				left: 0;\n\
			}\n\
\n\
			#message_center_button {\n\
				display: block;\n\
				position: absolute;\n\
				top: 44px;\n\
				right: 13px;\n\
				z-index: 1000002;\n\
			}\n\
\n\
			#social_exchange {\n\
				margin-top: 100px;\n\
			}\n\
\n\
			#message_center_div {\n\
				margin-top: 30px;\n\
			}\n\
\n\
			#fvmm_notice {\n\
				display: block;\n\
				position: absolute;\n\
				right: 236px;\n\
				top: 41px;\n\
				width: 300px;\n\
				z-index: 1000000;\n\
			}\n\
			#fvmm_notice * {\n\
				display: block;\n\
			}\n\
			#fvmm_notice .messages {\n\
				background-color: #FFF4BF;\n\
				border: 1px solid #FFD100;\n\
				clear: right;\n\
				display: none;\n\
				padding: 2px 5px 4px 4px;\n\
				text-align: left;\n\
				width: 289px;\n\
			}\n\
			#fvmm_notice .messages.show {\n\
				display: block;\n\
			}\n\
\n\
			#fvmm_notice .messages center {\n\
				text-align: left;\n\
			}\n\
			#fvmm_notice .messages b {\n\
				font-weight: normal;\n\
			}\n\
\n\
			#fvmm_noticebutton {\n\
				float: right;\n\
				height: 29px;\n\
				width: 34px;\n\
			}\n\
		');
	};


	/**
	 * @return	string
	 */
	this.getBlackjackStyles = function() {
		return this.trim('\n\
			#fvmm_menu {\n\
				left: 4px;\n\
				top: 4px;\n\
			}\n\
\n\
			#fvmm_menubutton {\n\
				background-color: #34689a;\n\
				border: 1px solid white;\n\
				height: 24px;\n\
				padding: ;\n\
			}\n\
			#fvmm_menubutton span {\n\
				padding: 2px 3px 8px 13px;\n\
			}\n\
		');
	};

	/**
	 * @return	string
	 */
	this.getCafeWorldStyles = function() {
		return this.trim('\n\
			#fvmm_menu {\n\
				left: 590px;\n\
				top: 14px;\n\
			}\n\
\n\
			#fvmm_menubutton {\n\
				background-color: #878c92;\n\
				border: 1px solid white;\n\
				height: 24px;\n\
			}\n\
			#fvmm_menubutton span {\n\
				padding: 2px 3px 8px 13px;\n\
			}\n\
\n\
			#fvmm_notice {\n\
				color: #000;\n\
				left: 285px;\n\
				top: 14px;\n\
			}\n\
\n\
			#fvmm_noticebutton {\n\
				background-color: #fff;\n\
				height: 26px;\n\
				width: 26px;\n\
			}\n\
		');
	};

	/**
	 * @return	string
	 */
	this.getFarmVilleStyles = function() {
		return this.trim('\n\
			#fvmm_menubutton {\n\
				background-position: top right;\n\
				background-repeat: no-repeat;\n\
				background-image: url(data:image/gif;base64,R0lGODlhDAAfAOZtAHJKLr2gg7SfgLihgsmvi8KqiM+0j6+bfcalfndSL8KlhqWAX8iricCph7yjg7+mhbGdftC1j8esirGQccWtibKdf8GlhcCkhb6ihMisisWpiNa6ksasiqiFYtC0j8arib2jhMWsiaSAX7GQcNi7k8asiXRRLsaqiHdTL7Odf66MbcClhaqKaX5aN0EjFLGdf8WqiMCjhC8RBsKgeaR8V3hUMKuHY8iriqaCYcelfqWDYb6hgNa6k72ggqJ/Xsatip9+Xde7k5hvTaB/Xi4UCryig8Glhp53VrGPcL+lhcGkhWY/GrORbnVSLpV0UKqNanVRLqmFYsKlhb+jhJ19XJ59XYVZOLuYcti8kycXCDwaC8qvjFMyHpx0UKaCYKCAYLaZdXZSL7CbfcCoh6aEYde6k8emfqWCYKaIZb6hg4teOygPB2A4E////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAG0ALAAAAAAMAB8AAAf5gGqCg4NthgiICDlmMzSChhsbPGVBJCRYV49SMT0BAWmgaUJqbSw7GqgwJydbNqRsbE4lHBwStlFqWrBsX1MXvys4amu7NWMNyA06w7soICAY0SLMsAmfoQvUbFAV3SkpQNomB+QHYlTiEOoQL1Xa1qFp2cSwTQL390PaYQP9/T7vroGa16yIg4MOptFjAw+bthZJHkh8cEbbkwIYMZJhtgTNDwogQ4ToMAwMgZMnS3z4QHKNEgswjSiYqcDLMA8eIug0wNNAl2EMgjK4kaEoE0FrkIwYMaGpiiNI1xAaZMXFmqsAsmrlQuTqmjZew3rNAlbsVRmG2gQCADs%3D);\n\
			}\n\
			#fvmm_menubutton span {\n\
				background-image: url(data:image/gif;base64,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);\n\
			}\n\
\n\
			#fvmm_noticebutton {\n\
				background-position: top right;\n\
				background-repeat: no-repeat;\n\
				background-image: url(data:image/gif;base64,R0lGODlhIgAdAOZ/AJduTMSoh/F6v+Vpq7udgO10uLEmW5h5X+lusdhYln9XNs6rgtRTkL6hg9u9lJlxTphvTboxaM2xjYpjQZBuUc+sgohhQMKoh5FpRZlwTsWpiLYrYdCsgsatir43b89NiuBjpKmPebGQcYVfOMywjK+bfbWdf9K0j8qui9xenctHg6+Nb8yxjIhiQIZhP7CPcMiqiYpkQdy/lrifga+OcLuegc6vjMdCfODBl8epiJ51UZVuTLeVcJ92UbqggceqiIdhP49oRIdgP5pyT8yxjc2wjOHCmL2ig6aDYsaqiYZgP7COcKB2UodiRJRtTL6lhbihgp53Vq2FX9/Al7yfgY5nQ9W5kpJnROTFmtG2kKF4U7yggrWegJZrR6GEbLGPcIRgPtm8lIJbN7Oef7qkhMmlfMOqiMCmhsKmhq2MaLeggePEmdi6k8I8dolhP6mIaIJkOc2wjcCddZ10ULOPbH9fNr2bdHxTL5dwTcGjhMSlhr6jhIteO3ZMKfV/xf///yH5BAEAAH8ALAAAAAAiAB0AAAf/gH+CfISFhoeIiYKDfFcZQxkQkgAQAE47EBkZDw9DPUxaDxAPWnM9XYR/I3w8SRcdF0dHDVA+MyVcDU9nGkkoDjhrMA0wWCcODnR8cHxRRK6we7NQare5u70BwEbDxWzIJ1KEIkQdSDETLRYWLu1gShYtLRPoQRgYExYTGEF2DidlxhFB0qegwYMHEiakcLBhHx42OIxjccchhQQF/GjcqHHAhyYOFfyQyEcEi4YHBnBcuTIFyIMjJx5MwLImRwEhYJL8QsJgCptAN+YsGJMPz4IMWCLIuFEAUIZ9clQg9KKnAqcIPAxIEcHAhgECEnT1IKBAgjYMEHQsKJXqyRAb/1UYuKEShIG5KuUaUMFgA4iNCqJO5fNCQp+kNgU43ai25oE+GgYXPqyxwAc/A+RGUDvghoHLfkAwAMHUz+PIhJYY9qJRgAcDETAm2BAh9gAPHmh/2EDTj4CCqPmoLli6tB8EKlsPaNzYTwrgC1Ib7sM6aFABgfvoic6HxvQ+cK3XFAC1Tw3u3hEaFz/gZcHzhGjEaaigeVAEQw/C57OiCMrKCYDFUQEDMFBeQwRwt4INYhhEgWIMZOfQhAa5kSAh/aVRkAIgfCAhhSDKcSF/RaDwRgwxWCAEEEC4oMQ7QrQARD4TVFFFEC0IcQ8GPBhBQEDNkIACGh2YsQUBtoxhQloJJhBABhUXNBBAFlaEkQcBMsgwhQ0+iiMGK0MWeWSSSzb5ZJRTVkkAllqegAMSfNTxByGODPEAAHgCsIMle+IBgCgPzKGDDnh+woQOqIywiCqJNOooIYoKEggAOw%3D%3D);\n\
			}\n\
		');
	};

	/**
	 * Styles for FishVille
	 *
	 * @return	string
	 */
	this.getFishVilleStyles = function() {
		return this.trim('\n\
			#fvmm_menu {\n\
				left: 5px;\n\
				top: 5px;\n\
			}\n\
\n\
			#fvmm_menubutton {\n\
				background-color: #208386;\n\
				border: 1px solid white;\n\
				height: 24px;\n\
			}\n\
\n\
			.clearfix {\n\
				display: none;\n\
			}\n\
		');
	};

	/**
	 * Styles for Path Words
	 *
	 * @return	string
	 */
	this.getPathWordsStyles = function() {
		return this.trim('\n\
			#fvmm_menu {\n\
				left: 5px;\n\
				top: 5px;\n\
			}\n\
\n\
			#fvmm_menubutton {\n\
				background-color: #fff;\n\
				border: 1px solid #ccc;\n\
				color: #000;\n\
				height: 24px;\n\
			}\n\
\n\
			.clearfix {\n\
				display: none;\n\
			}\n\
		');
	};

	/**
	 * Styles for PetVille
	 *
	 * @return	string
	 */
	this.getPetVilleStyles = function() {
		return this.trim('\n\
			#fvmm_menu {\n\
				left: 5px;\n\
				top: 50px;\n\
			}\n\
\n\
			#fvmm_menubutton {\n\
				background-color: #b68f59;\n\
				border: 1px solid #775839;\n\
				color: #000;\n\
				height: 24px;\n\
			}\n\
		');
	};

	/**
	 * Styles for Roller Coaster Kingdom
	 *
	 * @return	string
	 */
	this.getRCKingdomStyles = function() {
		return this.trim('\n\
			#fvmm_menu {\n\
				left: 50%;\n\
				margin-left: -370px;\n\
				top: 55px;\n\
			}\n\
\n\
			#fvmm_menubutton {\n\
				background-color: #5b5b5b;\n\
				border: 1px solid #77933f;\n\
				color: #fff;\n\
				height: 24px;\n\
			}\n\
		');
	};

	/**
	 * Styles for Texas HoldEm
	 *
	 * @return	string
	 */
	this.getTexasHoldEmStyles = function() {
		return this.trim('\n\
			#fvmm_menu {\n\
				left: 5px;\n\
				top: 5px;\n\
			}\n\
\n\
			#fvmm_menubutton {\n\
				background-color: #c5981b;\n\
				border: 1px solid #232526;\n\
				color: #000;\n\
				height: 24px;\n\
			}\n\
		');
	};

	/**
	 * Styles for Treasure Isle
	 *
	 * @return	string
	 */
	this.getTreasureIsleStyles = function() {
		return this.trim('\n\
			#fvmm_menu {\n\
				left: 50%;\n\
				margin-left: 250px;\n\
				top: 7px;\n\
			}\n\
\n\
			#fvmm_menubutton {\n\
				background-color: #f5e69d;\n\
				border: 1px solid #efb64e;\n\
				color: #000;\n\
				height: 24px;\n\
			}\n\
\n\
			#socialBarCallout {\n\
				margin-top: -30000px;\n\
			}\n\
			#socialBar {\n\
				margin-top: -30000px;\n\
			}\n\
			#appFrame,\n\
			#flashFrame {\n\
				position: static;\n\
			}\n\
		');
	};

	/**
	 * Styles for Word Twist
	 *
	 * @return	string
	 */
	this.getWordTwistStyles = function() {
		return this.trim('\n\
			#fvmm_menu {\n\
				left: 5px;\n\
				top: 5px;\n\
			}\n\
\n\
			#fvmm_menubutton {\n\
				background-color: #c6ccf9;\n\
				border: 1px solid #c5c5c5;\n\
				color: #000;\n\
				height: 24px;\n\
			}\n\
		');
	};

	/**
	 * Styles for Yoville
	 *
	 * @return	string
	 */
	this.getYovilleStyles = function() {
		return this.trim('\n\
			#mainbox,\n\
			#maincontent {\n\
				height: 100%;\n\
				width: 100%;\n\
			}\n\
\n\
			#fvmm_menu {\n\
				left: 635px;\n\
				top: 4px;\n\
			}\n\
\n\
			#fvmm_menubutton {\n\
				background-color: #c6ccf9;\n\
				border: 1px solid #c5c5c5;\n\
				color: #000;\n\
				height: 24px;\n\
			}\n\
		');
	};


	/**
	 * Styles for calculator
	 *
	 * @return	string
	 */
	this.getCalculatorStyles = function() {
		return this.trim('\
			#calculatorpanel {\
				background-position: top left;\
				background-repeat: no-repeat;\
				background-image: url(data:image/png;base64,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%3D%3D);\
				display: none;\
				height: 545px;\
				left: 200px;\
				position: absolute;\
				top: 100px;\
				width: 731px;\
				z-index: 1000;\
			}\
			#calculatorpanel.show {\
				display: block;\
			}\
			#calculatorpanel .header {\
				color: #59432c;\
				font-size: 40px;\
				line-height: 29px;\
				font-weight: bolder;\
				height: 28px;\
				padding: 8px 11px 13px 11px;\
				text-align: center;\
			}\
			#calculatorpanel .close {\
				cursor: pointer;\
				height: 33px;\
				position: absolute;\
				right: 26px;\
				text-indent: -30000px;\
				top: 9px;\
				width: 34px;\
			}\
		');
	};


	/**
	 * Removes linebreaks and whitespaces before and after
	 *
	 * @param	string	string
	 * @return	string
	 */
	this.trim = function(string) {
		return string.toString().replace (/^\s+/, '').replace (/\s+$/, '');
	};

	/**
	 * add styles to head
	 *
	 * @param	css		string
	 * @return	object
	 */
	this.injectStyles = function(css) {
		var heads = document.getElementsByTagName('head');
		if (heads.length > 0) {
			var node = document.createElement('style');
			node['type'] = 'text/css';
			node.appendChild(document.createTextNode(css));
			heads[0].appendChild(node);
		}
	};

	/**
	 * add styles to head
	 *
	 * @param	css		string
	 * @return	object
	 */
	this.appendStyles = function(css) {
		var bodys = document.getElementsByTagName('body');
		if (bodys.length > 0) {
			var node = document.createElement('style');
			node['type'] = 'text/css';
			node.appendChild(document.createTextNode(css));
			bodys[0].appendChild(node);
		}
	};
}



/**
 * @return void
 */
function FarmvilleTool() {
	this.$panel = null;
	this.mouseDelta = null;
	this.screenSize = null;
	this.panelSize = null;

	/**
	 * @return void
	 */
	this.init = function() {
		if (this.$panel == null) {
			var self = this,
				styles = new Styles();
			styles.injectStyles(styles.getCalculatorStyles());

			this.$panel = jQuery('<div id="calculatorpanel" class="show"/>')
				.css(this.getPanelStartPosition())
				.draggable({
					handle: 'div.header',
					start: this.panelDragStart,
					drag: this.panelDrag,
					stop: this.panelDragStop
				})
				.append(
					jQuery('<div class="header"/>')
						.text('Tools')
				)
				.append(
					jQuery('<div class="close"/>')
						.bind('click', function() {
							self.$panel.removeClass('show');
						})
						.text('[x]')
				);

			this.$panel.appendTo('body');
		} else {
			this.$panel.addClass('show');
		}
	};

	/**
	 * Fetches the size of the panel and the screen and stores it
	 *
	 * @param	{Object}	event
	 * @param	{Object}	ui
	 * @return	void
	 */
	this.panelDragStart = function(event, ui) {
		this.screenSize = {
			width: jQuery(window).width(),
			height: jQuery(window).height()
		};
		this.panelSize = {
			width: jQuery(ui.helper).width(),
			height: jQuery(ui.helper).height()
		};
	};

	this.panelDrag = function(event, ui) {
		var panelHeight = jQuery(this).height(),
			panelWidth = jQuery(this).width(),
			screenHeight = jQuery(window).height(),
			screenWidth = jQuery(window).width(),
			result = true;

		if (ui.offset.left < 0) {
			result = false;
		}
		if (ui.offset.top < 0) {
			result = false;
		}

		if ((ui.offset.left + panelWidth) > screenWidth) {
			result = false;
		}
		if ((ui.offset.top + panelHeight) > screenHeight) {
			result = false;
		}

		return result;
	};

	/**
	 * Compares the current position of the panel and stores the normalized onscreen position
	 *
	 * @param	{Object}	event
	 * @param	{Object}	ui
	 * @return	void
	 */
	this.panelDragStop = function(event, ui) {
		var posX = ui.offset.left,
			posY = ui.offset.top;

		if (posX < 0) {
			posX = 0;
		}
		if (posY < 0) {
			posY = 0;
		}

		if ((posX + this.panelSize.width) > this.screenSize.width) {
			posY = this.panelSize.width - this.screenSize.width;
		}
		if ((posY + this.panelSize.height) > this.screenSize.height) {
			posY = this.panelSize.height - this.screenSize.height;
		}

		if (isGM) {
			GM_setValue('panelLeft', posX);
			GM_setValue('panelTop', posY);
		}
	};

	/**
	 * @return	{object}	position
	 */
	this.getPanelStartPosition = function() {
		var position = {
			left: 200,
			top: 100
		};

		if (isGM) {
			position = {
				left: GM_getValue('panelLeft', 200),
				top: GM_getValue('panelTop', 100)
			};
		} else {
		}

		return position;
	};

	this.init();
}
