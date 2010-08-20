/**
 * Farmville Tools
 *
 * @return	void
 */
alert('test');
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