var Helm = {
  Mixins: {},
  Overrides: {},
  RequestMiddleware: {},
  Subscribers: {}
};

Helm.BaseClass = function() {
  this.initialize.apply(this, arguments);
  this.init.apply(this, arguments);
}
Helm.BaseClass.prototype.initialize = Helm.BaseClass.prototype.init = function() {/*override me*/};
Helm.BaseClass.extend = Backbone.Model.extend;



