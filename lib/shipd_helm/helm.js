var Helm = {
  Mixins: {},
  Overrides: {}
};

Helm.BaseClass = function() {
  this.initialize.apply(this, arguments);
}
Helm.BaseClass.prototype.initialize = function() {/*override me*/};
Helm.BaseClass.extend = Backbone.Model.extend;



