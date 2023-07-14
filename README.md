# Namaste React 🚀

# Parcel
 -Dev Build
 -Local Server
 -HMR = Hot Module Replacement
 -File Watcher Algorithm  - written in C++
 -Caching - Faster Builds
 -Image Optimization
 -Minification
 -Bundling
 -Compress
 -Consisting Hashing
 -Code Splitting
 -Differential Bundling - support older browsers
 -Error Handling
 -HTTPs

# converting to JS in React.creatElement

   React.createElement => (object) => HTML(DOM)

# converting to JS in JSX
  
  JSX => (Babel convert to) => React.createElement => (object) => HTML(DOM)

# There are 2 way when a component re-render
  
  1. State Changes
  2. Props Changes

# When-ever state varible update react triggers a reconcilation cycle (re-render the components)

# Why react in faster ?

  "React fiber : Is a new reconcilation process to effecinetly manupilate the DOM .

  The React fiber , new reconcilation algorithm which finds the difference between 2 virtual DOM
  (older and latest) and update the DOM only when required where the changes occers
   