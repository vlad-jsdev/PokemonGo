**Warning: This is a Alpha React Native version of app. This app is tested only for iOS platform.**

# PokemonGO

Application that displays a list of Pokemons along with their statistics. The application allows users to search for specific Pokemons by name or by typing in the beginning of their name.

When a user visits the app, they are presented with a page containing a list of Pokemons. Each Pokemon is displayed with its name and image, and clicking on a Pokemon reveals more detailed statistics about that Pokemon.

The application also includes a search feature that allows users to filter the list of Pokemons based on a search query. When a user types in a search query, the application filters the list of Pokemons to only show the Pokemons that match the search query. The search feature is designed to be fast and responsive, allowing users to quickly find the Pokemon they are looking for.

In summary, your app provides users with an intuitive interface for browsing and searching a large list of Pokemons, with detailed information about each Pokemon's statistics readily available.

## Requirements

1. OS X - This repo only contains the iOS implementation right now, and Xcode only runs on Mac.
2. New to Xcode?  [Download it](https://developer.apple.com/xcode/downloads/) from the Mac App Store.
3. [Homebrew](http://brew.sh/) is the recommended way to install node, watchman, and flow.
4. New to node or npm? `brew install node`
5. We recommend installing [watchman](https://facebook.github.io/watchman/docs/install.html), otherwise you might hit a node file watching bug.  `brew install watchman`
6. If you want to use [flow](http://www.flowtype.org), `brew install flow`

## Quick start

Get up and running with our Pokemon app:

1. Once you have the repo cloned and run these command to install all packages:
```
yarn install
```
2. This command run your simulator and app for iOS platform

```
npx react-native run-ios
```
