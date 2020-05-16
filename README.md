**Fibonaccier** React Hooks sample project.

This is example to demonstrate fibonacci numbers.

**Libraries use**:<br />
**react-router-dom** - is a predictable state container for JavaScript apps.<br />
**classnames** - A simple JavaScript utility for conditionally joining classNames together.<br />
<br />

![alt text](https://github.com/igal-sources/fibonaccier-react/blob/master/public/images/DesktopView.png)

![alt text](https://github.com/igal-sources/fibonaccier-react/blob/master/public/images/mobileView.png)

**Features**:<br />
Main Screen:<br />

- A box that shows the current fibonacci number<br />
- Next/Previous links - Changes the current fibonacci to the previous/next.<br />
  the "<< Previous" link will be disabled if we're showing the first number in the sequence.<br />
- Jump to link - Prompt the user to enter the page number to jump to.<br />
  for example: page 6 will show the 6th number in the fibonacci sequence (8).<br />
  The last number the user visits is saved.<br />
  Once the user re-enters the site, his/her last visited number should be displayed.<br />

AppRoutes - contains routes to main screen.<br />
The application is responsive.

All component written as functional components.<br />
React Hooks to manage the component lifecycle.<br />

**Installation**:<br />
Github link - https://github.com/igal-sources/fibonaccier-react<br />

git clone https://github.com/igal-sources/fibonaccier-react.git<br />
run npm install - to create all node_modules.<br />
run npm start (make sure that the app is running under http://localhost:3000).
