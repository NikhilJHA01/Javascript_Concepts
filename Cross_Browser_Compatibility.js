/* Cross Browser Compatibility

1) What is CBC - :
 - Different browsers other than the one or two that you use regularly on your devices, 
 including slightly older browsers that some people might still be using, 
 which don't support all the latest, shiniest CSS and JavaScript features.
 - Different devices with different capabilities, from the latest greatest tablets and smartphones, through smart TVs, right down to cheap tablets and even older feature phones that may run browsers with limited capabilities.
 - People with disabilities, who use the Web with the aid of assistive technologies like screenreaders, or don't use a mouse (some people use only the keyboard).

2) Why CB Issues Occur :
 - sometimes browsers have bugs, or implement features differently. 
 - some browsers may have different levels of support for technology features than others.
 - some devices may have constraints that cause a web site to run slowly, or display badly.

3) Workflow for CB Testing : Initial planning > Development > Testing/discovery > Fixes/iteration

4) Strategies for carrying out testing : We can implement Google Analytics to get the  Browser usage of a particalr site.

5) Handling HTML Issues: 
 -  Install Linter to check of there if html is fully correct or not while developing.
 -  HTML natural fallback behaviour
 - Unrecognised HTML elements are treated by the browser as anonymous inline elements
  (effectively inline elements with no semantic value, similar to <span> elements). 
  You can still refer to them by their names, and style them with CSS, for example — 
  you just need to make sure they are behaving as you want them to, for example setting display: block; 
  on all of the new semantic elements (such as <article>, <aside>, etc.)
 - More complex elements like HTML <video>, <audio>, and <canvas> (and other features besides) have natural mechanisms
  for fallbacks to be added
   
  <video id="video" controls preload="metadata" poster="img/poster.jpg">
  <source src="video/tears-of-steel-battle-clip-medium.mp4" type="video/mp4">
  <source src="video/tears-of-steel-battle-clip-medium.webm" type="video/webm">
  <!-- Offer download -->
  <p>Your browser does not support HTML5 video; here is a link to
  <a href="video/tears-of-steel-battle-clip-medium.mp4">view the video</a> directly.</p>
</video>

 - HTML form input types like date , time are not supported in old browsers so they fallback naturally to textb type.

6) CSS Fallback behaviour -
 - If a browser encounters a declaration or rule it doesn't understand, it just skips it completely without applying it or throwing an error.

We can add IE comments to load specific designs nd js for old browsers -
IE conditional comments
<!--[if lte IE 8]>
  <script src="ie-fix.js"></script>
  <link href="ie-fix.css" rel="stylesheet" type="text/css">
<![endif]-->


- Handling CSS prefixes 
Mozilla uses -moz-
Chrome/Opera/Safari use -webkit-
Microsoft uses -ms-

Use autoprefixer and postcss to automaticaaly add prefixes  : also you can add browser list versions in package.json like "last 2 versions, ie > 9"

Use @support to check new layout techniques are supported or not .
And also include fallback using float techniques if not present.

Fot Images Use :
Art Direction(same image but crop it to show main content) , resolution switching(diff images for diff screens)

7) Use caniuse site to check for the compatibility


 */
