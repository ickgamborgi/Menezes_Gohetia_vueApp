# Marvel Movie Index: Lumen, Vue and Ajax Build

Henrique Gamborgi Menezes & Sheldon Gohetia

This project is an assignment for the Multimedia Authoring 4 (MMED-5006) and Multimedia & The Internet (MMED-3014) courses, during the Interactive Media Design (IDP3) program, in Fanshawe College, Winter 2025.

Our goal here is to develop a small application to display Marvel trajectory on cinema. For that, we used vue, AJAX and javascript in our front-end and lumen for our back-end.

[GitHub Main Repository] (https://github.com/ickgamborgi/Menezes_Gohetia_vueApp)

[GitHub Back-end Repository] (https://github.com/sgohetia/Gohetia_Menezes_lumenVueApp)

## Table of Contents

[Installation](#installation)<br/>
[Lumen](#lumen)<br/>
[Usage](#usage)<br/>
[Project](#project)<br/>
[Tools](#tools)<br/>
[Credits](#credits)<br/>
[License](#license)<br/>

## Installation <a id="installation"></a>

1. Click on the link to the sample repository provided;
2. On the repo, click on the green button "< > Code";
3. On the last option, click on "Download zip";
4. Unzip the folder.

### Lumen <a id="lumen"></a>

1. Download the project marvel-lumen folder in your computer;
2. Put the lumen and front-end folders inside your MAMP or WAMP folder;
3. Check if the .env file corresponds to your MAMP or WAMP ports, database and other credentials;
4. Check if the fetch URL inside main.js file, in your front-end folder, matches your MAMP or WAMP credentials;
5. Create a database in your phpmyadmin and import the mysql file;
6. Run MAMP or WAMP and open the project in your browser using localhost connect.

### Usage <a id="usage"></a>

1. Download the folders on your device;
2. Move the folders to your MAMP/WAMP htdocs folder;
3. Check the .env and fetch URLs for database connection;
4. Check if the database credentials match with your phpadmin;
5. Fire MAMP/WAMP and run the project in your browser using localhost connect.

## Project <a id="project"></a>

### Assignment

The objective of this assignment is to introduce students to the basic concepts of connecting a Vue.js frontend to a Lumen API they will create in their web development class. The API will contain a sorted listing of entries and a single entry endpoint. Working in pairs students will gain hands-on experience in creating a simple web application that fetches and displays data from their own API.

### Requirements

- Create a basic Vue.js application with a single HTML file and a Vue instance. (Submissions with vue single file components will not be accepted, e.g. files that end with .vue)
- Use the Vue instance to fetch data from the Lumen API (You must create and populate your own API).
- Display the sorted listing of entries on the webpage.
- Implement a feature that allows users to click on an entry to view the details of that specific entry (Connect to a separate route in your API)
- Display the details on the webpage without navigating to a different page.
- Ensure proper error handling for failed API requests as well as display loading indicators as required.
- The page must be responsive from mobile to desktop.
- Additional GreenSock enhancements and features are strongly encouraged.

## Tools <a id="tools"></a>

- GitHub for workflow and version control
- HTML5 for content structure
- CSS3 and SASS for styling and compiling
- javascript for interactions
- AJAX for calls
- vue as framework
- lumen for back-end

## Credits <a id="credits"></a>

The credits are due to Henrique Gamborgi Menezes & Sheldon Gohetia.

## License <a id="license"></a>

Copyright (c) 2025 Henrique Gamborgi & Sheldon Gohetia

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
