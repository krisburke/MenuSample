
This repo contains a small sample project with code samples to solve the following issue: I am 
using React Router to navigate between items in a sidebar menu and tracking the currently active
menu item in component state. I want the active item to also be selected when I navigate to the 
page without clicking the menu, such as when I enter the Url into my address bar.

I have included two solutions to the issue. Since this was just a quick experiment, I added both 
solutions to the same project and they share one view. The end user interface contains some 
obvious quirks for this reason, but this interface should not be considered 
in any way complete - I am only demonstrating how to solve the problem stated above.

The first implementation can be found mostly in [src/SimpleApp.js](src/SimpleApp.js). This uses 
the built in feature of React Router called <NavLink>, which automatically detects when the pathname
in the address bar matches the Link and provides functionality to add an active class.

A second implementation can be found in [src/StatefulAppContainer.js](src/StatefulAppContainer.js). In this
version, I track the active view in component state. I pass functions down to child components to set the active 
view when a menu item is clicked. In order to update the active view when a user navigates to a url in the toolbar
rather than clicking the menu, I take advantage of the React Router feature called WithRouter. WithRouter allows you
to access the pathname of the current window location. Using React lifecycle methods, I watch for an update to the 
current pathname, and then use that pathname to set the newly active route & view. The benefit of using this solution
over the more simple solution of NavLink is primarily the flexibility it offers. You can potentially respond to user 
navigation interactions in more custom and interesting ways.

To view the app in the browser, in the project directory run:

#### `npm start`

and navigate to [http://localhost:3000](http://localhost:3000).

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project uses [Semantic UI React Components](https://react.semantic-ui.com/).

### NOTE:

Again, I wanted to note that in an actual project I would not add multiple routers and multiple views sharing similar 
routes on one page, with one using component state and the other using stateless functions and built in features.
The routes are not complete, as the functionality isn't correct if you navigate to "/" or anything besides ViewA-F.
Also, because they're separate sharing a single view, using the second app doesn't reset the state of the first, 
so if you click viewB then navigate to viewF, viewB will remain active. I just wanted to write up some code quickly 
to solve a specific problem in a couple ways, rather than creating one perfectly functioning menu. Looking back, I 
probably should have created a route for each "app" and sub-routes for menu items, but this is just a quick POC.
