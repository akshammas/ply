This project currently pulls its images directly from external URLs
(Unsplash + Wikimedia Commons) inside index.html, e.g.:

  - Hero background: images.unsplash.com (plywood stack photo)
  - Product photos: commons.wikimedia.org (Spruce/Birch/Plywood photos)

Due to sandbox network restrictions, these binary files could not be
downloaded automatically into this /images folder.

To make the site fully self-contained:
1. Open index.html and find each image URL (search for "unsplash.com"
   and "wikimedia.org").
2. Download each image and save it into this /images folder
   (e.g. images/hero.jpg, images/spruce-plywood.jpg, etc).
3. Update the corresponding src="..." / url('...') in index.html
   and css/style.css to point to the local file, e.g. "images/hero.jpg".
