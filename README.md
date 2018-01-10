# Zenkins

Theme based on [Jenkins Material Theme][jenkins-material-theme], implementing Zendesk Garden colors to spruce up Jenkins a bit. 

## Getting Started

Before you begin you need to ensure you have the following installed:
- npm `brew install npm`
- grunt `npm install -g grunt`

To build the Jenkins plugin you'll also need:
- jdk 1.8 or above `brew cask install java`
- maven `brew install maven`

Then install the dependencies with npm:
```bash
npm install
```
And you should be good to go.

## Development

### Building

TLDR: Build steps are captured in `build.sh` which performs the following tasks:
- Compiles stylesheet using `grunt`
- Executes `mvn clean package` to build the hudson plugin

Ths can be executed by running:
```bash
sh build.sh
```
#### Build the CSS

CSS file are minified and compressed with Grunt. To prepare the environment:

```bash
grunt
```
This will generate the following file:
- dist/zenkins.css

#### Build the Hudson Plugin

To build the jenkins plugin:

```bash
cd plugin
mvn clean package
```

### Testing before deployment

1. Install the [Stylish Chrome extension][stylish]

2. Go to Stylish options and click in `Write new style`

3. Paste the theme (zenkins.css) in the code box

4. Click in `Specify` and set your jenkins domain

5. Click in `Save`

6. Go to your Jenkins website and enable the theme in the Stylish Chrome toolbar icon

## Compatibility
- Simple Theme plugin 0.3
- Jenkins 1.636
- Firefox 3.5+
- Chrome 4+
- Safari 4+
- Opera 15+
- Microsoft IE11 and Edge

## License
- MIT

## Credits
- [Jenkins Material Theme][jenkins-material-theme] for assembling the package (pretty much everything)
- [Simple Theme Plugin][simple] for the Simple Theme plugin
- [Google][google] for the the material design inspiration and the icons
- [Material Design Icons][material-design-icons] for some extra icons
- [Stylish][stylish] for making the test of new versions easy
- [canon-jenkins][canon-jenkins] for the base theme
- [@Heldroe][heldroe] for Firefox and Microsoft support
- [@bootstraponline][bootstraponline] for Jenkins native plugin

[jenkins-material-theme]:https://github.com/afonsof/jenkins-material-theme

[simple]: https://wiki.jenkins-ci.org/display/JENKINS/Simple+Theme+Plugin
[google]: https://www.google.com/design/spec/material-design/introduction.html
[material-design-icons]: https://materialdesignicons.com/
[stylish]: https://chrome.google.com/webstore/detail/stylish/fjnbnpbmkenffdnngjfgmeleoegfcffe
[canon-jenkins]: https://github.com/rackerlabs/canon-jenkins
[heldroe]: https://github.com/Heldroe
[generator]: http://afonsof.com/jenkins-material-theme
[bootstraponline]: https://github.com/bootstraponline
