define([
  'views/base/view',
  'text!templates/idea.hbs'
], function(View, template) {
  'use strict';

  var IdeaView = View.extend({
    // Automatically render after initialize
    autoRender: true,

    className: 'idea',

    // Automatically append to the DOM on render
    region: 'main',

    // Save the template string in a prototype property.
    // This is overwritten with the compiled template function.
    // In the end you might want to used precompiled templates.
    template: template
  });

  return IdeaView;
});
