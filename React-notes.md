# 🤠 React Notes 🤠

## Difference between tilde ( ~ ) and caret ( ^ ) in package.json

[👆 website: geeksforgeeks](https://www.geeksforgeeks.org/difference-between-tilde-and-caret-in-package-json/)

### 🤓 Tilde (~) notation: It is used to match the most recent patch version. Tilde ~ notation freezes the major version and minor version. As we know patch updates are bug fixes that’s why we can say ~ notation allows us to automatically accept bug fixes.

### Caret (^) notation: It is used for automatically updating the minor updates along with patch updates.

### Syntax: The syntax of the npm version looks like the following.

### Major.Minor.Patch

#

## 🤓 Package.json vs Package-lock.json

[👆 website: atatus](https://www.atatus.com/blog/package-json-vs-package-lock-json/#:~:text=your%20entire%20problem.-,package%2Dlock.,sub%2Ddependencies%20and%20their%20versions.)

### Package.json is a file that contains all the relevant information about your project, the dependencies it has installed, and so on.

### When someone clones your repo and runs npm install the presence of ^ will cause them to get the latest patched version (whether that be a major or minor patch). Codes which are not in consonance with the latest version will break down.

### This is when they released package-lock.json. Now, this file will lock npm dependencies the way they were at the time of making the program. So, even if someone clones your repo and installs this package later, he will get hands on the version that the program was scripted in. Basically, it just ignores tilde and carat functions.

#

### 👨‍🚀 Transitive Dependency - Package installed has other package dependency, same way dependent package has other package dependency and its continue .....

### 👨‍🚀 To ingnite app using parcel package use below cmd

```sh
    npx parcel index.html - for dev build
    npx parcel build index.html - for prod build
```

### 👨‍🚀 NPX is a package executer, and it is used to execute javascript packages directly, without installing them

### browserslist package - The browsers to which you want your web to support

[👆 website: browserslist](https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z)

#

### Update "scripts" in package.json for making command short to start application

### So next time instead of running full cmd, just use "npm run start / npm start" (only for dev) but for prod full cmd is required "npm run build"

```json
"scripts": {
    "test": "jest",
    "start": "parcel index.html",
    "build": "parcel build index.html"
  },
```

#

### 👨‍🚀 JSX is not HTML is JS, it is HTML/XML like syntax

### 👨‍🚀 Babel converts (transcompile) the JSX code to JS code which browser understands

### 👨‍🚀 JSX => React.createElement => ReactElement - JS object => HTMLElement (render) [This all things are done by Babel]

### 👨‍🚀 Babel is Javascript compiler

### 👨‍🚀 Always start React Component name with capital letter

### 👨‍🚀 React Functional component is normal JS function which return some JSX (React element)
