jQuery.fn.extend({
	             getSelector: function( selector ) {
                         // Initially selector is undefined.
		         if ( typeof selector === 'undefined' ) {
                             selector = '';
                         }

                         // Stop recursing if this is the top element.
		         if ( this.is('html') ) {
			     return 'html' + selector;
                         }

		         // Add the element name.
		         var cur = this.get(0).nodeName.toLowerCase();
                         
		         // Determine the IDs and selector.
		         var id    = this.attr('id');

		         // Add the #id if there is one.
		         if (id) {
			     cur += '#' + id;
                             return cur + selector;
                         }

	                 var className = this.attr('class');
		         // Add any classes.
		         if (className) {
			     cur += '.' + className.split(/[\s\n]+/).join('.');
                         } else {
                             var index = this.prevAll().length;
                             cur += ":eq(" + index + ")";
                         }
                         
		         // Recurse up the DOM.
		         return this.parent().getSelector( ' > ' + cur + selector );
	             }
                 });
