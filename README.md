# **vue.js (Model-View-ViewModel)**

VUE Object.defineProperty will watch the update of the data.  
When data change it will auto rerender the browsers.  
[**Vue Official tutorial**](https://www.vuemastery.com/courses/intro-to-vue-js/vue-instance)

**Watch Data(Tree) Implementation**  
**Angular:** 1 Pull  
**React:** Pull, onPush  
**vue:** Push-based (single node)

**Data Update Concept**
**j-query DOM:** elements trigger data.  
**vue, Angular, react:** data trigger events.  
Vue does not support IE8 and below, because it uses ECMAScript 5 features that are un-shimmable in IE8. However it supports all ECMAScript 5 compliant browsers.

- [vue3 document](https://vuejs.org/v2/guide/installation.html)
- [Vue documentation guide](https://scrimba.com/playlist/pXKqta)

## 01- Setup Vue.js

Import the Vue.js library by CDN or download it.  
`<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js"></script>`

## 02- Directives

**`v-if` `v-for`** one-way binding  
**`v-model`** two-way binding  
**`v-on`** methods  
**`v-bind`** bind for html tag or css style

- `v-bind` shorthand **`:`**
- `v-on:` shorthand `@`

## 03- What is `this`

The "**object**" that currently is the parent of the function.

## 04- VUE-Lifecycle

- **`beforeCreate`**
- **`created`**
- **`beforeMount`**
- **`mounted`**
- **`beforeUpdate`**
- **`update`**
- **`beforeUnmount`**
- **`unmount`**  
  ![](https://github.com/D50000/Vue.js-D5000/blob/main/asset/vue_lifecycle.png)
  ps: [lifecycle-hooks](https://github.com/kurotanshi/hexschool-vue/blob/master/06-lifecycle-hooks.html)

## 05- Computed & watch

**methods** => Run when has been call, whatever the data is different or not.  
**computed** => Auto run when the data update.( Detect `data`, `component`, `props` and cached it)  
**watch** => Usually use in RWD Ajax asynchronous call for the API data has changes. (Change `data` base on watching some `data`, and can get the previous/new data.)

## 06- Web Component

Local Component:

```javascript
new Vue({
  el: "#app",
  components: {
    // local scope component declaring.
    // register scoped component.
    "my-component": {
      template: '<div class="component">A custom component of Vue!</div>',
    },
  },
});
```

Global Component:

```javascript
// Register for global component.
Vue.component("my-component", {
  template: '<div class="component">A custom component of Vue!</div>',
});
// create a root instance
new Vue({
  el: "#app",
});
new Vue({
  el: "#app2",
});
```

## 07- data-function

Declare a component with it's data.

```javascript
// register
Vue.component("my-component", {
  template: '<div class="component">{{ msg }}</div>',
  data: function () {
    return {
      // Component data need to be a function return.
      // Need to return it in a minima function scope.
      msg: "A child component in root VUE instance!",
    };
  },
});
```

## 08- props

- transfer the data from parent to child component.
- props data support type validation check.

## 09- one-way data flow

- Avoid using the two-way data flow, it's possible to cause bugs.
- Use the `.$parent.$emit()` event to update parent node data in the one-way data flow condition.

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

- Sigle file for `App.vue` project.
- Need to compile the App.vue with `web-pack` and `vue-loader`.

## 14- VUE CLI

A bundle of tools that increase develop process for Vue project.
`gulp`(Task runner) vs `Webpack`(module bundler)

## 15- VUE CLI setup

1. Download node.js and check the version `npm -v`.
2. Import VUE CLI `npm install -g vue-cli`.

## 16- VUE CLI data structure and run command

- `npm run dev` will auto start up the localhost server.
- `npm run build` will compress all the code and element to `dist` folder for production.

## 17- VUE webpack project

### Reference

[Vue Doc](https://vuejs.org/guide/introduction.html)
