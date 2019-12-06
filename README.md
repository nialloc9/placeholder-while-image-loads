An example of rendering an image with a placeholder background color and icon while waiting for the image to load.

While image is loading a placeholder icon and background color are rendered on initial paint:

<p align="center">
  <img src="/screenshots/image-loading.png" width="700" title="Image loading shows placeholder">
</p>

When image is loaded it renders over the placeholder:

<p align="center">
  <img src="/screenshots/image-loaded.png" width="700" title="Image loaded">
</p>