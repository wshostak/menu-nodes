Polymer({
  is: 'menu-nodes',

  behaviors: [
//    wscn.SetTextWidth
  ],

  properties: {
    glyph: {
      type: Boolean,
      value: false
    },
    url: {
      type: String,
      value: ''
    }
  },

  ready: function() {

    var icon = this.textContent.replace(/[^a-z0-9]/gi, '').toLowerCase().trim();

    if (icon) {

      this.$.glyph.classList.add('glyph-' + icon);

      Polymer.dom.flush()

      this.async(function () {

        if (!window.getComputedStyle(this.$.glyph, '::before').getPropertyValue('content').length) {

          this.$.glyph.setAttribute('hidden', true);
        }
      });
    }
  }

});
