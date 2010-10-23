var isGM = (
	typeof(GM_getValue) != 'undefined' &&
	typeof(GM_getValue('a', 'b')) != 'undefined'
);

/**
 * Farmville Tools
 *
 * @return	void
 */
function FarmvilleTool() {
	this.$panel = null;

	this.$gain = $('<div id="gain" class="value"/>');
	this.$hours = $('<div id="hours" class="value"/>');
	this.$experience = $('<div id="experience" class="value"/>');
	this.$expperday = $('<div id="expperday" class="value"/>');
	this.$price = $('<div id="price" class="value"/>');
	this.$coinsperday = $('<div id="expperday" class="value"/>');
	this.$mastery1 = $('<div id="mastery1"/>');
	this.$mastery2 = $('<div id="mastery2"/>');
	this.$mastery3 = $('<div id="mastery3"/>');
	this.$masterysum = $('<div id="sum"/>');

	this.$percentage = $('<input id="percentage" maxlength="2"/>');
	this.$lefttime = $('<div id="lefttime" class="value"/>');
	this.$readytime = $('<div id="readytime" class="value"/>');

	this.selectedSeed = '';

	/**
	 * Initialize the panel with all contents
	 *
	 * @return void
	 */
	this.init = function() {
		this.$panel = $('#calculatorpanel');

		if (this.$panel.length == 0) {
			var self = this,
				styles = new Styles();
			styles.injectStyles(styles.getCalculatorStyles());

			self.$panel = $('<div id="calculatorpanel" class="show"/>')
				.draggable({
					handle: 'div.header',
					containment: 'window',
					stop: self.panelDragStop
				})
				.append(
					$('<div class="header"/>')
						.text('Seed Calculator')
				)
				.append(
					$('<div class="close"/>')
						.bind('click', function() {
							self.$panel.removeClass('show');
						})
						.text('X')
				)
				.append(self.getContent())
				.appendTo('body');
			self.$panel.css(self.getPanelStartPosition());
		} else {
			this.$panel.css(this.getPanelStartPosition())
				.addClass('show');
		}
	};

	/**
	 * Get Content DIV and Elements
	 *
	 * @return	DOMNodes
	 */
	this.getContent = function() {
		var self = this,
			$form = $('<form/>'),
			$selectbox = this.getSeedSelect();

		$form.append($('<div/>')
			.append($('<label>Seed</label>'))
			.append($selectbox)
		).append($('<div class="left"/>')
			.append($('<h2>Infos</h2>'))
			.append($('<div/>')
				.append($('<label>Hours</label>'))
				.append(this.$hours)
			)
			.append($('<div/>')
				.append($('<label>Experience</label>'))
				.append(this.$experience)
			)
			.append($('<div/>')
				.append($('<label>Exp per Day</label>'))
				.append(this.$expperday)
			)
			.append($('<div/>')
				.append($('<label>Purchasing Price</label>'))
				.append(this.$price)
			)
			.append($('<div/>')
				.append($('<label>Sales Price</label>'))
				.append(this.$gain)
			)
			.append($('<div/>')
				.append($('<label>Gain per Day</label>'))
				.append(this.$coinsperday)
			)
		).append($('<div class="right"/>')
			.append($('<h2>Harvest</h2>'))
			.append($('<table class="threecols"/>')
				.append($('<tr/>')
					.append($('<td>Percentage</td>'))
					.append($('<td>left Time</td>'))
					.append($('<td>ready at</td>'))
					.append($('<td>&nbsp;</td>'))
				)
				.append($('<tr/>')
					.append($('<td/>').append(
						this.$percentage.keyup(function() {
							self.calculateHarvestTime();
						})
					))
					.append($('<td/>').append(this.$lefttime))
					.append($('<td colspan="2"/>').append(this.$readytime))
				)
			)
			.append($('<h2>Mastery</h2>'))
			.append($('<table class="threecols"/>')
				.append($('<tr/>')
					.append($('<td>I</td>'))
					.append($('<td>II</td>'))
					.append($('<td>III</td>'))
					.append($('<td>Sum</td>'))
				)
				.append($('<tr/>')
					.append($('<td/>').append(this.$mastery1))
					.append($('<td/>').append(this.$mastery2))
					.append($('<td/>').append(this.$mastery3))
					.append($('<td/>').append(this.$masterysum))
				)
			)
		);

		this.changeSeed($selectbox.find('option:first').attr('value'));

		return $('<div class="content"/>').append($form);
	};

	/**
	 * Get Selectbox with seeds
	 *
	 * @return	DOMNode
	 */
	this.getSeedSelect = function() {
		var self = this,
			$select = $('<select/>');

		var keys = this.getSortedKeys(seedData);
		for (var index in keys) {
			$select.append(this.getSelectOption(keys[index], seedData[keys[index]]));
		}

		return $select.bind('change keyup', function() {
			self.changeSeed($(this).attr('value'));
		});
	};

	/**
	 * Get option for selectbox
	 *
	 * @return DOMNode
	 */
	this.getSelectOption = function(key, values) {
		return $('<option value="' + key + '">' + values.title + '</option>');
	};


	/**
	 * Change the displayed data to the seed given by key
	 *
	 * @return	void
	 */
	this.changeSeed = function(key) {
		var seed = seedData[key];
		this.selectedSeed = seed;

		this.$gain.text(seed.gain + ' coins');
		this.$hours.text(seed.hours);
		this.$experience.text(seed.experience);
		this.$expperday.text(Math.round(seed.experience / seed.hours * 24 * 10) / 10);
		this.$price.text(seed.price + ' coins');
		this.$coinsperday.text(Math.round((seed.gain - seed.price - 15) / seed.hours * 24) + ' coins');
		this.$mastery1.text(seed.mastery[0]);
		this.$mastery2.text(seed.mastery[1]);
		this.$mastery3.text(seed.mastery[2]);
		this.$masterysum.text(seed.mastery[0] + seed.mastery[1] + seed.mastery[2]);

		this.calculateHarvestTime();
	};

	/**
	 * Calculate the harvest time based on percentage, duration and current time
	 *
	 * @return	void
	 */
	this.calculateHarvestTime = function() {
		var duration = this.selectedSeed.hours * 60 * 60,
			leftDuration = duration - Math.floor(duration / 100 * this.$percentage.val()),
			leftHours = Math.floor(leftDuration / (60 * 60)),
			leftMinutes = Math.floor((leftDuration - (leftHours * 60 * 60)) / 60),
			readyTime = new Date(),
			readyString = '';

		if (leftMinutes < 10) {
			leftMinutes = '0' + leftMinutes;
		}
		this.$lefttime.text(leftHours + ':' + leftMinutes);

		readyTime.setTime(readyTime.getTime() + (leftDuration * 1000));
		this.$readytime.text(this.getFormatedDate(readyTime));
	};

	/**
	 * Format date and return the string
	 *
	 * @return	string
	 */
	this.getFormatedDate = function(date) {
		var $result = '';

		$result = (date.getMonth() + 1) + '.';
		$result += date.getDate() + '.';
		if (date.getYear() < 999) {
			$result += (date.getYear() + 1900) + ' - ';
		} else {
			$result += date.getYear() + ' - ';
		}

		$result += date.getHours() + ':';
		if (date.getMinutes() < 10) {
			$result += '0' + date.getMinutes();
		}else {
			$result += date.getMinutes();
		}

		return $result;
	};

	/**
	 * Get sorted array keys
	 *
	 * @param	array
	 * @return	array
	 */
	this.getSortedKeys = function(data) {
		var keys = new Array();

		for (var key in data) {
			keys.push(key);
		}

		keys.sort();

		return keys;
	};

	/**
	 * Compares the current position of the panel and stores the normalized onscreen position
	 *
	 * @param	{Object}	event
	 * @param	{Object}	ui
	 * @return	void
	 */
	this.panelDragStop = function(event, ui) {
		if (isGM) {
			GM_setValue('panelLeft', ui.offset.left);
			GM_setValue('panelTop', ui.offset.top);
		}
	};

	/**
	 * Get panel position on first show
	 *
	 * @return	{object}	position
	 */
	this.getPanelStartPosition = function() {
		var position = { left: 200, top: 100 };

		if (isGM) {
			var left = GM_getValue('panelLeft', 200),
				top = GM_getValue('panelTop', 100);

			if (left + this.$panel.width() > $(window).width()) {
				left = $(window).width() - this.$panel.outerWidth();
			}

			if (top + this.$panel.height() > $(window).height()) {
				top = $(window).height() - this.$panel.outerHeight();
			}

			position.left = left;
			position.top = top;
		}

		return position;
	};

	this.init();
}

var seedData = {
	strawberries:	{ title: 'Strawberries',	gain: 35,	price: 10,	experience: 1, hours: 4,	event: false,	mastery: {0: 500, 1: 1000, 2: 3750} },
	eggplant:		{ title: 'Eggplant',		gain: 88,	price: 25,	experience: 2, hours: 48,	event: false,	mastery: {0: 200, 1: 400, 2: 600} },
	wheat:			{ title: 'Wheat',			gain: 115,	price: 35,	experience: 2, hours: 72,	event: false,	mastery: {0: 500, 1: 1000, 2: 1500} },
	soybeans:		{ title: 'Soybeans',		gain: 63,	price: 15,	experience: 2, hours: 24,	event: false,	mastery: {0: 300, 1: 600, 2: 900} },
	peanuts:		{ title: 'Peanuts',			gain: 78,	price: 20,	experience: 1, hours: 16,	event: false,	mastery: {0: 275, 1: 550, 2: 825} },
	squash:			{ title: 'Squash',			gain: 121,	price: 40,	experience: 2, hours: 48,	event: false,	mastery: {0: 200, 1: 400, 2: 600} },
	lilac:			{ title: 'Lilac',			gain: 75,	price: 35,	experience: 1, hours: 10,	event: false,	mastery: {0: 450, 1: 900, 2: 1350} },
	pumpkin:		{ title: 'Pumpkins',		gain: 68,	price: 30,	experience: 1, hours: 8,	event: false,	mastery: {0: 500, 1: 1000, 2: 1500} },

	spinach:		{ title: 'Spinach',			gain: 95,	price: 35,	experience: 2, hours: 14,	event: false,	mastery: {0: 300, 1: 600, 2: 900} },
	artichokes:		{ title: 'Artichokes',		gain: 204,	price: 70,	experience: 2, hours: 96,	event: false,	mastery: {0: 125, 1: 250, 2: 375} },
	rice:			{ title: 'Rice',			gain: 96,	price: 45,	experience: 1, hours: 12,	event: false,	mastery: {0: 400, 1: 400, 2: 2000} },
	raspberries:	{ title: 'Raspberries',		gain: 46,	price: 20,	experience: 0, hours: 2,	event: false,	mastery: {0: 1500, 1: 3000, 2: 4500} },
	daffodils:		{ title: 'Daffodils',		gain: 135,	price: 60,	experience: 2, hours: 48,	event: false,	mastery: {0: 200, 1: 400, 2: 600} },
	cotton:			{ title: 'Cotton',			gain: 207,	price: 75,	experience: 2, hours: 72,	event: false,	mastery: {0: 150, 1: 300, 2: 450} },
	cranberries:	{ title: 'Cranberries',		gain: 98,	price: 55,	experience: 1, hours: 10,	event: false,	mastery: {0: 450, 1: 650, 2: 2900} },
	chickpea:		{ title: 'Chickpea',		gain: 210,	price: 80,	experience: 2, hours: 20,	event: false,	mastery: {0: 400, 1: 800, 2: 1200} },

	bellpeppers:	{ title: 'Bell Peppers',	gain: 198,	price: 75,	experience: 2, hours: 48,	event: false,	mastery: {0: 350, 1: 270, 2: 455} },
	rhubarb:		{ title: 'Rhubarb',			gain: 150,	price: 65,	experience: 1, hours: 16,	event: false,	mastery: {0: 480, 1: 960, 2: 1440} },
	peppers:		{ title: 'Peppers',			gain: 162,	price: 70,	experience: 2, hours: 24,	event: false,	mastery: {0: 425, 1: 850, 2: 1275} },
	morningglory:	{ title: 'Morning Glory',	gain: 123,	price: 60,	experience: 1, hours: 12,	event: false,	mastery: {0: 500, 1: 1000, 2: 1500} },
	aloevera:		{ title: 'Aloe Vera',		gain: 85,	price: 50,	experience: 1, hours: 6,	event: false,	mastery: {0: 800, 1: 1600, 2: 2400} },
	pineapples:		{ title: 'Pineapples',		gain: 242,	price: 95,	experience: 2, hours: 48,	event: false,	mastery: {0: 425, 1: 325, 2: 550} },
	redtulips:		{ title: 'Red Tulips',		gain: 159,	price: 75,	experience: 2, hours: 24,	event: false,	mastery: {0: 500, 1: 1000, 2: 1500} },
	pattypansquash:	{ title: 'Pattypan Squash',	gain: 160,	price: 65,	experience: 1, hours: 16,	event: false,	mastery: {0: 350, 1: 700, 2: 1050} },

	blueberries:	{ title: 'Blueberries',		gain: 91,	price: 50,	experience: 1, hours: 4,	event: false,	mastery: {0: 1000, 1: 2000, 2: 3000} },
	watermelon:		{ title: 'Watermelon',		gain: 348,	price: 130,	experience: 2, hours: 96,	event: false,	mastery: {0: 150, 1: 300, 2: 450} },
	grapes:			{ title: 'Grapes',			gain: 270,	price: 85,	experience: 2, hours: 24,	event: false,	mastery: {0: 425, 1: 850, 2: 1275} },
	tomatoes:		{ title: 'Tomatoes',		gain: 173,	price: 100,	experience: 1, hours: 8,	event: false,	mastery: {0: 750, 1: 1500, 2: 2250} },
	pinkroses:		{ title: 'Pink Roses',		gain: 254,	price: 120,	experience: 2, hours: 48,	event: false,	mastery: {0: 450, 1: 338, 2: 590} },
	potatoes:		{ title: 'Potatoes',		gain: 345,	price: 135,	experience: 2, hours: 72,	event: false,	mastery: {0: 150, 1: 300, 2: 450} },
	rye:			{ title: 'Rye',				gain: 290,	price: 140,	experience: 2, hours: 20,	event: false,	mastery: {0: 900, 1: 1800, 2: 2700} },
	carrots:		{ title: 'Carrots',			gain: 200,	price: 110,	experience: 1, hours: 12,	event: false,	mastery: {0: 500, 1: 1000, 2: 1500} },

	coffee:			{ title: 'Coffee',			gain: 243,	price: 120,	experience: 1, hours: 16,	event: false,	mastery: {0: 350, 1: 700, 2: 1050} },
	corn:			{ title: 'Corn',			gain: 380,	price: 150,	experience: 2, hours: 72,	event: false,	mastery: {0: 200, 1: 400, 2: 600} },
	sunflowers:		{ title: 'Sunflowers',		gain: 315,	price: 135,	experience: 2, hours: 24,	event: false,	mastery: {0: 575, 1: 1150, 2: 1725} },
	ghostchili:		{ title: 'Ghost Chili',		gain: 136,	price: 80,	experience: 1, hours: 6,	event: false,	mastery: {0: 1200, 1: 2400, 2: 9000} },
	cabbage:		{ title: 'Cabbage',			gain: 388,	price: 140,	experience: 2, hours: 48,	event: false,	mastery: {0: 500, 1: 375, 2: 665} },
	zucchini:		{ title: 'Zucchini',		gain: 220,	price: 120,	experience: 2, hours: 16,	event: false,	mastery: {0: 550, 1: 1100, 2: 1650} },
	gladiolus:		{ title: 'Gladiolus',		gain: 260,	price: 200,	experience: 1, hours: 6,	event: false,	mastery: {0: 1600, 1: 3200, 2: 4800} },
	greentea:		{ title: 'Green Tea',		gain: 191,	price: 105,	experience: 1, hours: 10,	event: false,	mastery: {0: 750, 1: 1500, 2: 2250} },

	whitegrapes:	{ title: 'White Grapes',	gain: 360,	price: 245,	experience: 2, hours: 12,	event: false,	mastery: {0: 1200, 1: 2400, 2: 3600} },
	blackberries:	{ title: 'Black Berries',	gain: 117,	price: 75,	experience: 1, hours: 4,	event: false,	mastery: {0: 1200, 1: 2400, 2: 3600} },
	redwheat:		{ title: 'Red Wheat',		gain: 449,	price: 180,	experience: 2, hours: 72,	event: false,	mastery: {0: 250, 1: 500, 2: 750} },
	lavender:		{ title: 'Lavender',		gain: 384,	price: 160,	experience: 2, hours: 48,	event: false,	mastery: {0: 450, 1: 338, 2: 590} },
	sugarcane:		{ title: 'Sugar Cane',		gain: 239,	price: 165,	experience: 1, hours: 8,	event: false,	mastery: {0: 1300, 1: 1300, 2: 8400} },
	peas:			{ title: 'Peas',			gain: 381,	price: 190,	experience: 3, hours: 24,	event: false,	mastery: {0: 600, 1: 1200, 2: 1800} },
	yellowmelon:	{ title: 'Yellow Melon',	gain: 528,	price: 205,	experience: 2, hours: 96,	event: false,	mastery: {0: 150, 1: 300, 2: 450} },
	onion:			{ title: 'Onion',			gain: 275,	price: 170,	experience: 1, hours: 12,	event: false,	mastery: {0: 825, 1: 825, 2: 4125} },

	broccoli:		{ title: 'Broccoli',		gain: 473,	price: 200,	experience: 2, hours: 48,	event: false,	mastery: {0: 550, 1: 1100, 2: 1650} },
	lilies:			{ title: 'Lilies',			gain: 369,	price: 195,	experience: 2, hours: 24,	event: false,	mastery: {0: 500, 1: 1000, 2: 1500} },
	acornsquash:	{ title: 'Acorn Squash',	gain: 258,	price: 175,	experience: 1, hours: 10,	event: false,	mastery: {0: 1000, 1: 2000, 2: 3000} },
	asparagus:		{ title: 'Asparagus',		gain: 357,	price: 220,	experience: 2, hours: 16,	event: false,	mastery: {0: 825, 1: 825, 2: 4125} },
	purplepoppies:	{ title: 'Purple Poppies',	gain: 238,	price: 200,	experience: 1, hours: 8,	event: false,	mastery: {0: 750, 1: 1500, 2: 2250} },
	elderberries:	{ title: 'Elderberries',	gain: 270,	price: 195,	experience: 2, hours: 12,	event: false,	mastery: {0: 825, 1: 1650, 2: 5775} },
	purplepodpeas:	{ title: 'Purple Pod Peas',	gain: 300,	price: 210,	experience: 3, hours: 24,	event: false,	mastery: {0: 525, 1: 1050, 2: 1575} },
	ginger:			{ title: 'Ginger',			gain: 320,	price: 170,	experience: 2, hours: 18,	event: false,	mastery: {0: 650, 1: 1300, 2: 1950} },

	cucumber:		{ title: 'Cucumber',		gain: 450,	price: 290,	experience: 2, hours: 24,	event: false,	mastery: {0: 820, 1: 1640, 2: 2460} },
	columbine:		{ title: 'Columbine',		gain: 380,	price: 340,	experience: 1, hours: 4,	event: false,	mastery: {0: 2200, 1: 4400, 2: 6600} },
	iris:			{ title: 'Iris',			gain: 520,	price: 400,	experience: 2, hours: 24,	event: false,	mastery: {0: 600, 1: 1200, 2: 1800} },
	basil:			{ title: 'Basil',			gain: 400,	price: 300,	experience: 1, hours: 10,	event: false,	mastery: {0: 12000, 1: 2400, 2: 3600} },
	lemonbalm:		{ title: 'Lemon Balm',		gain: 290,	price: 230,	experience: 1, hours: 6,	event: false,	mastery: {0: 2200, 1: 4400, 2: 6600} },
	squaremelon:	{ title: 'Square Melon',	gain: 590,	price: 410,	experience: 2, hours: 24,	event: false,	mastery: {0: 700, 1: 1400, 2: 2100} },
	oats:			{ title: 'Oats',			gain: 310,	price: 225,	experience: 1, hours: 8,	event: false,	mastery: {0: 1850, 1: 3700, 2: 5550} },
	posolecorn:		{ title: 'Posole Corn',		gain: 370,	price: 280,	experience: 1, hours: 12,	event: false,	mastery: {0: 1500, 1: 3000, 2: 4500} },

	heirloomcarrot:	{ title: 'Heirloom Carrot',	gain: 210,	price: 110,	experience: 1, hours: 12,	event: false,	mastery: {0: 1400, 1: 2800, 2: 4200} },
	orangedaisies:	{ title: 'Orange Daisies',	gain: 590,	price: 410,	experience: 2, hours: 24,	event: false,	mastery: {0: 720, 1: 1440, 2: 2160} },
	bamboo:			{ title: 'Bamboo',			gain: 550,	price: 420,	experience: 2, hours: 16,	event: false,	mastery: {0: 1200, 1: 2400, 2: 3600} },
	carnivalsquash:	{ title: 'Carnival Squash',	gain: 435,	price: 355,	experience: 1, hours: 8,	event: false,	mastery: {0: 2000, 1: 4000, 2: 6000} },
	saffron:		{ title: 'Saffron',			gain: 450,	price: 365,	experience: 1, hours: 10,	event: false,	mastery: {0: 1500, 1: 3000, 2: 4500} },
	clover:			{ title: 'Clover',			gain: 368,	price: 325,	experience: 1, hours: 4,	event: false,	mastery: {0: 2500, 1: 5000, 2: 7500} },
	amaranth:		{ title: 'Amaranth',		gain: 350,	price: 220,	experience: 2, hours: 16,	event: false,	mastery: {0: 1200, 1: 2400, 2: 3600} },
	whiteroses:		{ title: 'White Roses',		gain: 777,	price: 620,	experience: 3, hours: 24,	event: false,	mastery: {0: 900, 1: 1800, 2: 2700} },

	forgetmenot:	{ title: 'Forget me not',	gain: 900,	price: 725,	experience: 2, hours: 18,	event: false,	mastery: {0: 1100, 1: 2200, 2: 3300} },

	pintobeans:		{ title: 'Pinto Beans',		gain: 110,	price: 65,	experience: 1, hours: 6,	event: true,	mastery: {0: 750, 1: 1500, 2: 2250} },
	lupine:			{ title: 'Lupine',			gain: 155,	price: 75,	experience: 1, hours: 12,	event: true,	mastery: {0: 610, 1: 1220, 2: 1830} },
	dogrose:		{ title: 'Dog Rose',		gain: 190,	price: 105,	experience: 1, hours: 10,	event: true,	mastery: {0: 550, 1: 1100, 2: 1700} },
	candycorn:		{ title: 'Candy Corn',		gain: 60,	price: 20,	experience: 1, hours: 4,	event: true,	mastery: {0: 525, 1: 1050, 2: 1575} }
};