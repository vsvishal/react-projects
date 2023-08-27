# React Notes

## Difference between tilde ( ~ ) and caret ( ^ ) in package.json

[website: geeksforgeeks](https://www.geeksforgeeks.org/difference-between-tilde-and-caret-in-package-json/)

### Tilde (~) notation: It is used to match the most recent patch version. Tilde ~ notation freezes the major version and minor version. As we know patch updates are bug fixes that’s why we can say ~ notation allows us to automatically accept bug fixes.

### Caret (^) notation: It is used for automatically updating the minor updates along with patch updates.

#

## Package.json vs Package-lock.json

[website: atatus](https://www.atatus.com/blog/package-json-vs-package-lock-json/#:~:text=your%20entire%20problem.-,package%2Dlock.,sub%2Ddependencies%20and%20their%20versions.)

### Package.json is a file that contains all the relevant information about your project, the dependencies it has installed, and so on. Two properties ~ and ^, have startling consequences in this regard (about which you will learn later in this text).

### When someone clones your repo and runs npm install the presence of ^ will cause them to get the latest patched version (whether that be a major or minor patch). Codes which are not in consonance with the latest version will break down.

### This is when they released package-lock.json. Now, this file will lock npm dependencies the way they were at the time of making the program. So, even if someone clones your repo and installs this package later, he will get hands on the version that the program was scripted in. Basically, it just ignores tilde and carat functions.

#
