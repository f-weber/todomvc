/** Usage:
  <input next-focus tabindex="index">
  Upon pressing tab key the directive will switch focus to
  the next tabindex.
  The last field should not have next-focus directive to avoid
  focusing on non-existing element.
	currently pseudo code as not working correctly
**/
//angular.module('todomvc')
app.directive('nextFocus', [function() {
  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      elem.bind('keydown', function(e) {
        var code = e.keyCode || e.which;
        if (code === 9) {
          e.preventDefault();
          try {
            if (attrs.tabindex !== undefined) {
              var currentTabIndex = attrs.tabindex;
              var nextTabIndex = parseInt(currentTabIndex) + 1;
              var elems = document.querySelectorAll("[tabindex]");
              for (var i = 0, len = elems.length; i < len; i++) {
                var el = angular.element(elems[i]);
                var idx = parseInt(el.attr('tabindex'));
                if (idx === nextTabIndex) {
									elems[i].focus();
                  break;
                }
              }
            }
          } catch (e) {
            console.log('Focus error: ' + e);
          }
        }
      });
    }
  };
}]);
