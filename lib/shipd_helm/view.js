Helm.View = Backbone.View.extend({
  events: function() {
    if (this._events) { return this._events; }
    this._events = Helm.Overrides.ClickEvent.normalizeListeners(_.result(this, 'addListeners') || {});
    return this._events;
  }
});
