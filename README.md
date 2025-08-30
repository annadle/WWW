# FontShift

Group name: WWW

Group members: Anna Le, Sarah Wan, Kylie Lam

FontShift is a Chrome extension intended to aid people with dyslexia and provide them with an option to switch a website's font to one that is more dyslexia-friendly.

## Features
* UI design passes web accessibility checks
* User is able to select their preferred dyslexia-friendly font
* Users can turn revert font changes back to website default
* UI has been implemented with larger font sizes to ensure accessibility for the user

## Build
In terminal, do ```npm install```, then ```npm run build```. This will give you a ```dist``` folder to load in Chrome.


## Usage

1. Go to Chrome. 
2. Go to "Extensions". 
3. Go to "Manage Extensions".
4. Press "Load Unpacked" in the top left. 
5. Select the dist folder you have just created.
6. If you have previously loaded a previous version of the project, press the ```reload``` button where the extension is listed.
7. Go to the Extensions button in your toolbar located in the top right.
8. Select "FontShift".
9. Choose your font.


## Technologies used
* CSS
* HTML
* JavaScript
* React with TypeScript
* Vite
* Chrome Extension API

## Acknowledgements
We acknowledge the WIT team for running the Hackathon, providing food, and providing help. We also acknowledge [CSS Scan](https://getcssscan.com/css-buttons-examples) for their button templates. Lastly, we acknowledge WebAIM for their [Contrast Checker Resource](https://webaim.org/resources/contrastchecker/).