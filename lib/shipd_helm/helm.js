var Helm = {
  Mixins: {},
  RequestMiddleware: {}
};

Helm.BaseClass = function() {
  this.initialize.apply(this, arguments);
}
Helm.BaseClass.prototype.initialize = function() {/*override me*/};
Helm.BaseClass.extend = Backbone.Model.extend;



