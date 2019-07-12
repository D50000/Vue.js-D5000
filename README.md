

# **vue.js (Model-View-ViewModel)**

VUE Object.defineProperty will watch the update of the data.  
When data change it will auto rerender the browsers.

watch data(tree) implementation  
**Angular:** 1 Pull  
**React:** Pull, onPush  
**vue:** Push-based (single node)

**j-query DOM:** elemets trigger data.  
**vue, Angular, react:** data tigger events.  
Vue does not support IE8 and below, because it uses ECMAScript 5 features that are un-shimmable in IE8. However it supports all ECMAScript 5 compliant browsers.[https://vuejs.org/v2/guide/installation.html](https://vuejs.org/v2/guide/installation.html)  [https://scrimba.com/playlist/pXKqta](https://scrimba.com/playlist/pXKqta)

## 01- Setup Vue.js
Import the Vue.js libaray by CDN or download it.
``<script src="https://unpkg.com/vue"></script>``

## 02- Directives
**"v-if" "v-for"** one-way binding  
**"v-model"** two-way binding  
**"v-on"** methods  
**"v-bind"** bind for html tag or css style ("v-bind" shorthand **":"**)

## 03- What is "this"
The "**object**" that currently is the parent of the function.

## 04- VUE-Lifecycle
**beforeCreate  
created  
beforeMount  
mounted**  
ps:  [https://github.com/kurotanshi/hexschool-vue/blob/master/06-lifecycle-hooks.html](https://github.com/kurotanshi/hexschool-vue/blob/master/06-lifecycle-hooks.html)

## 05- Computed & watch
**computed** => Auto run when the data update.( data, component, props)  
**methods** => Run when has been call, whatever the data is different or not.  
**watch** => Usually use in RWD Ajax asynchronous call for the API data has changes.

## 06- Web Component
Local Component:
```
	new  Vue({
		el: '#app',
		components: {
			// local scope component declaring.
			// register scoped component.
			'my-component': {
				template: '<div class="component">A custom component of Vue!</div>'
			}
		}
	});
```
Global Component:
```
	// Register for global component.
	Vue.component('my-component', {
		template: '<div class="component">A custom component of Vue!</div>'
	});
	// create a root instance
	new  Vue({
		el: '#app'
	});
	new  Vue({
		el: '#app2'
	});
```

## 07- data-function
daclare a Component with it's data.
```
// register
Vue.component('my-component', {
	template: '<div class="component">{{ msg }}</div>',
	data: function() {
		return {
			// Component data need to be a function return.
			// Need to return it in a minima function scope.
			msg: 'A custom component of Vue!'
		}
	}
});
```

## 08- props
 - transfer the data from parent to child component.
 - props data type validation check.

## 09- one-way data flow
 - To avoid the two-way data flow that update the parent's data.
 - Use the `.$parent.$emit()` event to update parent's data in the one-way data flow condition.

## 10- event bus
 - To organize the events into the single object.
 - It can improve the process of the data updating in the complex node tree.

## 11- Dynamic components
 - It will remove the DOM and create new one.
 - Use `keep alive` tag to cache the element data props.

## 12- Compilation Scope
 - `slot` tag can compile the input data from parent.
 - `Slot` with name, if multiple slots.

## 13- What is VUE file
 - Sigle file for "App.vue" project.
 - Need to compile the App.vue with web-pack and vue-loader.
