# ActionNetworkJS

ActionNetworkJS is a JavaScript library that provides a convenient interface for interacting with the ActionNetwork API. It simplifies the process of managing various resources such as fundraising pages, donations, events, campaigns, and more. The library is designed to be flexible, allowing users to integrate ActionNetwork's functionalities into their JavaScript applications seamlessly. It supports both CommonJS and ES Module import styles to cater to a wide range of project configurations.

## Setup

`js-actionnetwork` is designed to work with both CommonJS and ES Modules, making it suitable for a wide range of JavaScript environments.

## Installation

To install ActionNetworkJS, run the following command in your project directory:
```sh
npm install js-actionnetwork
```

This will add ActionNetworkJS to your project's dependencies and allow you to start using the library right away.

## Usage

### CommonJS

To use ActionNetworkJS in a CommonJS environment (like Node.js with `require`), you can require `js-actionnetwork` as follows:
```sh
const ActionNetwork = require('js-actionnetwork').init('YOUR_API_KEY');
```

### ES Modules

To use ActionNetworkJS in a ES Modules environment (using `import` syntax), you can you can import `js-actionnetwork` as follows:
To use ES Modules (using `import` syntax), you can import `js-actionnetwork` like this:

Replace `'YOUR_API_KEY'` with your actual ActionNetwork API key. The above example demonstrates how to initialize the library, access individual modules, and perform actions such as retrieving and creating resources.

## Support for CommonJS and ES Modules

`js-actionnetwork` is compatible with both CommonJS and ES Modules.

### CommonJS Usage

If you are using a CommonJS environment (like Node.js with `require`), you can include `js-actionnetwork` in your project as follows:

```sh
const ActionNetwork = require('js-actionnetwork');
const an = ActionNetwork.init('YOUR_API_KEY');
```

### ES Modules Usage

For ES Modules (using `import` syntax), you can import `js-actionnetwork` like this:

```sh
import {init as ActionNetworkInit}  from 'js-actionnetwork';
const an = ActionNetworkInit('YOUR_API_KEY');
```

Once you have initialized `js-actionnetwork` with your API key, you can start using the various modules provided by the library. Here are some examples:

```sh
// Accessing individual modules
const { People, Events, Campaigns } = an;


// List all people
People.people.get().then(allPeople => {
console.log(allPeople);
});

// Create a new event
Events.event.post({ / event data / }).then(newEvent => {
console.log(newEvent);
});

// ... and so on for other modules
```

Refer to the [ActionNetwork API documentation](https://actionnetwork.org/docs) for detailed information on the available endpoints and data formats.

### Support

If you encounter any issues or have questions regarding `js-actionnetwork`, please file an issue on the GitHub repository or contact the maintainers.