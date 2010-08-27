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
			.none { display: none; }\n\
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
	 * Get general styles for menu
	 *
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
				z-index: 100001;\n\
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
	 * Get Styles for the messagebox
	 *
	 * @return	string
	 */
	this.getMessageboxStyles = function() {
		return this.trim('\n\
			#message_center_button {\n\
				display: block;\n\
				position: absolute;\n\
				top: 44px;\n\
				right: 13px;\n\
				z-index: 100002;\n\
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
				z-index: 100003;\n\
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
	this.getCartownStyles = function() {
		return this.trim('\n\
			#fvmm_menu {\n\
				left: 490px;\n\
				margin: 0;\n\
				top: 20px;\n\
				width: 120px;\n\
			}\n\
\n\
			#fvmm_menubutton {\n\
				background-color: #ccc;\n\
				border: 1px solid #000;\n\
				color: #000;\n\
				float: right;\n\
				height: 28px;\n\
			}\n\
\n\
			#fvmm_menubutton span {\n\
				padding: 3px 3px 6px 13px;\n\
			}\n\
\n\
			#fvmm_menu menu {\n\
				clear: both;\n\
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
	this.getFarmTownStyles = function() {
		return this.trim('\n\
			iframe {\n\
				border: 0;\n\
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
	 * Styles for FrontierVille
	 *
	 * @return	string
	 */
	this.getFrontierVilleStyles = function() {
		return this.trim('\n\
			#fvmm_menu {\n\
				margin: 0px;\n\
				right: 10px;\n\
				top: 83px;\n\
				width: 120px;\n\
			}\n\
\n\
			#fvmm_menubutton {\n\
				background-color: #8e2b0d;\n\
				border: 1px solid white;\n\
				height: 24px;\n\
				margin-left: 46px;\n\
			}\n\
\n\
			.clearfix {\n\
				display: none;\n\
			}\n\
\n\
			#flashDIV {\n\
				display: block;\n\
			}\n\
\n\
			#fvmm_notice {\n\
				right: 10px;\n\
				width: 480px;\n\
			}\n\
\n\
			#fvmm_noticebutton {\n\
				background-position: top right;\n\
				background-repeat: no-repeat;\n\
				background-image: url(data:image/gif;base64,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);\n\
				height: 37px;\n\
				width: 36px;\n\
			}\n\
\n\
			#fvmm_notice .messages {\n\
				clear: left;\n\
				width: 433px;\n\
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
				left: 130px;\n\
				top: 50px;\n\
			}\n\
\n\
			#fvmm_menubutton {\n\
				background-color: #b68f59;\n\
				border: 1px solid #775839;\n\
				color: #000;\n\
				height: 24px;\n\
			}\n\
\n\
			#fvmm_menu menu {\n\
				width: 130px;\n\
			}\n\
\n\
			#gTabs {\n\
				display: none;\n\
			}\n\
\n\
			#fvmm_notice {\n\
				left: 130px;\n\
				top: 80px;\n\
				width: 400px;\n\
			}\n\
\n\
			#fvmm_noticebutton {\n\
				background-color: #f1e49c;\n\
				border: 1px solid #582a09;\n\
				float: left;\n\
			}\n\
\n\
			#fvmm_notice .messages {\n\
				float: right;\n\
				width: 353px;\n\
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
\n\
			#tabs {\n\
				display: none;\n\
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
	 * Get styles for Zoo Paradise
	 *
	 * @return	string
	 */
	this.getZooParadiseStyles = function() {
		return this.trim('\n\
			#fvmm_menu {\n\
				left: 45px;\n\
				top: 5px;\n\
			}\n\
\n\
			#fvmm_menubutton {\n\
				background-color: #936d5a;\n\
				border: 1px solid #583e2d;\n\
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
				background: #ccc;\
				border: 1px solid #000;\
				color: #000;\
				display: none;\
				left: 200px;\
				position: absolute;\
				top: 100px;\
				width: 400px;\
				z-index: 1000;\
			}\
\
			#calculatorpanel.show { display: block; }\
\
			#calculatorpanel .header {\
				background: #bbb;\
				border-bottom: 1px solid #000;\
				font-size: 13px;\
				padding: 8px 3px 5px 29px;\
			}\
\
			#calculatorpanel .close {\
				background: #b8432c;\
				border: 1px solid #000;\
				color: #fff;\
				cursor: pointer;\
				font-weight: bolder;\
				height: 15px;\
				position: absolute;\
				right: 8px;\
				text-align: center;\
				top: 7px;\
				width: 29px;\
			}\
\
			#calculatorpanel .content {\
				margin: 10px;\
				overflow: hidden;\
			}\
\
			#calculatorpanel label {\
				clear: left;\
				color: #000;\
				display: block;\
				float: left;\
				font-weight: normal;\
				margin: 5px 10px 0px 0px;\
				padding-top: 2px;\
				text-align: right;\
				width: 80px;\
			}\
\
			#calculatorpanel select { margin: 3px 0 0 0; }\
\
			#calculatorpanel .left { clear: left; float: left; width: 145px; }\
\
			#calculatorpanel .right { clear: right; float: right; width: 225px; }\
\
			#calculatorpanel .value {\
				float: left;\
				margin: 5px 0 0 0;\
				padding-top: 2px;\
			}\
\
			#calculatorpanel .threecols td {\
				border-collapse: collapse;\
				padding: 0;\
				width: 55px;\
			}\
\
			#calculatorpanel #percentage { border: none; width: 20px; }\
\
			#calculatorpanel #lefttime { text-align: right; }\
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