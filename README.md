# shadow-dom-styling
This project is for [this article](https://blog.soshace.com/introduction-to-web-components-part-1-native-vs-virtual-dom/) which explains in detail how it's built. The main purpose of this project is to show some cool properties of the shadow DOM:

* __Isolated DOM__: We cannot access the shadow DOM from outside using JavaScript.
* __Scoped CSS__: Anything in the shadow DOM becomes local. This includes the __<style>__ component used to style the shadow DOM's children. This means the styling in the shadow DOM is different from the rest of the main DOM.
* __Simplified CSS__: We can use simple CSS selectors without worrying about name conflicts.
* __Better reasoning__: By dividing the main DOM tree into multiple shadow DOM trees.

# How to run
Just clone the repository and open the __index.html__ file in your browser!
