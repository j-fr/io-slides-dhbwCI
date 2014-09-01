var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: 'Lean Software Engineering',
    subtitle: 'Präsentation im Rahmen der 2. PA im Studiengang WWI',
    eventInfo: {
      title: 'Präsentation PAII',
      date: '29.08.2014'
    },
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: true, // Default: true
    enableSlideAreas: true, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: true, // Default: true. If touch support should enabled. Note: the device must support touch.
    //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
    favIcon: 'images/DHBW-logo.svg',
    fonts: [
      'Droid Sans:regular,semibold,italic,italicsemibold',
      'Source Code Pro'
    ],
    //theme: ['mytheme'], // Add your own custom themes or styles in /theme/css. Leave off the .css extension.
  },

  // Author information
  presenters: [{
    name: 'Jonas Fritsche',
    company: 'Softwareentwickler, FreiNet GmbH',
    gplus: 'http://plus.google.com/1234567890',
    twitter: '@yourhandle',
    www: 'http://www.freinet.de',
    github: 'http://github.com/j-fr'
  }/*, {
    name: 'Second Name',
    company: 'Job Title, Google',
    gplus: 'http://plus.google.com/1234567890',
    twitter: '@yourhandle',
    www: 'http://www.you.com',
    github: 'http://github.com/you'
  }*/]
};

