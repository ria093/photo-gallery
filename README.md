# Marie’s Photo Gallery

### Task
* Create a project using React’s “Create React App”.
* Create a PhotoGallery component that takes in an array of images.
* Each image will have a url and a caption.
* The captions should be displayed over the image.
* The PhotoGallery should allow users to either click or swipe through the images back and forth.
* Bonus credit for smoothly animating the swipe and transition between images.
* Handle any edge cases you can think of.

### Implementation
* The app displays a set of fullscreen images and provides arrows to navigate back and forth between them.
* On touch devices, the user can also swipe left and right to cycle through the photos.
* If a caption is available, it will be displayed at the bottom of the photo.
* If an image cannot be found, a placeholder will be displayed instead.
* If the gallery does not contain any photos, a message will be displayed.

### Pre-requisites
* node > v8.10.0
* npm 

### How to run the app
* Clone the repository.
* Run `$ npm install` to install packages.
* Run `$ npm start` to start the app.

### How to run the tests
* Run `$ npm test`.

### Improvements
* Add additional unit & visual tests.
* Handle the transition from last-to-first and first-to-last differently.
* Fetch a set of images from a CDN or use Unsplash’s public API instead of hardcoding the data.
* Incrementally load slides as the user cycles through the photo gallery to accommodate for large number of images.
* Use progressive loading for images (see Medium.com for a nice example).


### Additional Notes
* If I were to do this for a project, I would opt for a third-party library that is widely-used and tested to handle the image swiping. The transitions would be more polished, additional options would be available out-of-the-box, and development would be faster.
* In order to stay close to the time limit, I only added a few unit tests. I would normally have more for better coverage, especially once addressing some of the possible improvements.