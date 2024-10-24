# Web Schedule Display

A fun project designed to dynamically display a daily schedule on a monitor or TV. The schedule changes themes according to the season, providing a year-round display that is visually appealing and informative.  Can use this for events, at home for you and your family, or whever really.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [File Structure](#file-structure)
- [Tools and Resources](#tools-and-resources)
- [Demo](#demo)
- [Usage](#usage)
- [License](#license)

## Features

- **Seasonal Themes**: Automatically changes the background and styling based on the current season (Spring, Summer, Fall, Winter).  You can also set this statically or make your own theme.
- **Dynamic Content**: Updates the schedule and time in real-time using JavaScript and Vue.js.
- **Auto Reload**: The page automatically reloads every four hours.  You can adjust this as needed.

## Getting Started

If you wanted to deploy to Netlify, this button below will clone this repo exactly as you see it, and deploy the app in your Netlify environment.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/travisnwade/web-schedule-display)


### Prerequisites

- A web server to host the HTML, CSS, and JavaScript files.
- Modern web browser (Chrome, Firefox, Safari).

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/travisnwade/web-schedule-display.git
    ```
2. Upload the files to your web server.
3. Open `index.html` in your browser.

### File Structure

- `index.html`: The main HTML file.
- `css/`: Contains seasonal CSS files for Spring, Summer, Fall, and Winter.
- `js/`: JavaScript files to handle dynamic content and seasonal changes.
- `videos/`: Seasonal background videos.

## Tools and Resources

- **Favicon Generator**: [Real Favicon Generator](https://realfavicongenerator.net/), I use this to generate the favicons and app files.  It's just easy and simple.  You can make your own as well and unzip those contents into the `images/icons` folder.
- **Images and Video Content**: [Pixabay](https://pixabay.com/), those credits go directly to their orignal author.
- **Web Hosting**: [Netlify](https://www.netlify.com/), it's just badass ok? 

## Demo

You can see a live demo of the project at [https://web-schedule-demo.netlify.app/](https://web-schedule-demo.netlify.app/).

## Usage

Simply load the site in a web browser. The schedule and theme will update automatically based on the season.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
