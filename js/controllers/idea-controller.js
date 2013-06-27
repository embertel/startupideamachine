define([
  'controllers/base/controller',
  'models/idea',
  'views/idea-view'
], function(Controller, Idea, IdeaView) {
  'use strict';

  var IdeaController = Controller.extend({
    show: function(params) {
      this.model = new Idea();
      this.view = new IdeaView({model: this.model});
    }


  });

  return IdeaController;
});
