# Tech Events Berlin

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c464f9d3c06f4a7aad1d367163a73821)](https://www.codacy.com/app/nickpettican/tech-events-berlin?utm_source=github.com&utm_medium=referral&utm_content=nickpettican/tech-events-berlin&utm_campaign=Badge_Grade)

### [Live](https://tech-events-berlin.herokuapp.com/)

A bootstrapped web app to see the latest tech-related events in Berlin.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->

<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

-   [Installation](#installation)
-   [Main features](#main-features)
-   [Built with](#built-with)
-   [Prerequisites](#prerequisites)
-   [Contributing](#contributing)
-   [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This app was built with **`Node 9.10.0`**. 

It is recommended to use this version for an optimal build. To manage your Node versions it is recommended to use [NVM](https://github.com/creationix/nvm).

**Step 1** - clone the repo

    $ git clone https://github.com/nickpettican/tech-events-berlin.git

**Step 2** - cd in the repo

    $ cd tech-events-berlin

**Step 3** - install dependencies

    $ npm install

**Step 4** - run application in development mode

    $ npm run dev

**Step 5** - run application in production mode

    $ npm run build
    $ npm start

## Main features

-   [ ] List of Berlin tech events
-   [ ] Up to date data
-   [ ] Sleek UI
-   [x] Service Worker
-   [x] Offline access

## Built with

-   [Create React App](https://github.com/facebook/create-react-app) - to set up the React environment
-   [Material-UI](https://material-ui.com) - for the beautiful UI components
-   [Express](https://expressjs.com/) - for the server and REST API
-   [Meetup API Library](https://github.com/jkutianski/meetup-api) - to get the Meetup events

## Prerequisites

Before you get going it's important to get the necessary API tokens for:

-   [Eventbrite](https://www.eventbrite.com/developer/v3/api_overview/authentication/#ebapi-getting-a-token)
-   [Meetup](https://secure.meetup.com/meetup_api/key/)

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/nickpettican/tech-events-berlin/blob/master/LICENSE) file for details.

MIT © [nickpettican](https://github.com/nickpettican)
