# Zenkins

Theme based on [Jenkins Material Theme][Jenkins Material Theme][jenkins-material-theme], implementing Zendesk Garden colors to spruce up Jenkins a bit. 

## Development
### Building

CSS file are minified and compressed with Grunt. To prepare the environment:

```
npm install
grunt
```
This will generate the following file:
- dist/zenkins.css

### Testing before deployment

1. Install the [Stylish Chrome extension][stylish]

1. Go to Stylish options and click in `Write new style`

1. Paste the theme (zenkins.css) in the code box

1. Click in `Specify` and set your jenkins domain

1. Click in `Save`

1. Go to your Jenkins website and enable the theme in the Stylish Chrome toolbar icon

## Compatibility
- Simple Theme plugin 0.3
- Jenkins 1.636
- Firefox 3.5+
- Chrome 4+
- Safari 4+
- Opera 15+
- Microsoft IE11 and Edge

If you are experiencing issues please let me know! Also, feel free to contribute!

## License
http://afonsof.mit-license.org/

## Credits
- [Jenkins Material Theme][jenkins-material-theme]
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
