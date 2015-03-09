describe('Helm.View', function() {
  var View, view;
  describe('event overrides', function() {
    beforeEach(function() {
      spyOn(Helm.Overrides.ClickEvent, 'shouldOverride').and.returnValue(true);

      View = Helm.View.extend({
        addListeners: {
          'click .thing': 'myMethod'
        }
      });

      view = new View();
    });

    it("events should override the 'click' with 'touchstart' using the ClickEvent overrides object", function() {
      expect(view.events()).toEqual({'touchstart .thing': 'myMethod'});
    });
  });
});
