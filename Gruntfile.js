module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    var pkg = grunt.file.readJSON('package.json');
    var fileCreatorTask = {};
    var lessFiles = {
        "dist/zenkins.css": "less/static.less"
    };

    var replaceFiles = [
        {src: ['dist/zenkins.css'], dest: 'dist/zenkins.css'},
        {src:['dist/zenkins.css'], dest: 'plugin/src/main/webapp/zenkins.css'},
        {src: ['plugin/pom.xml'], dest: 'plugin/pom.xml'}
    ];

    var cssMinFiles = {
        'dist/zenkins.css': ['dist/zenkins.css']
    };

    grunt.initConfig({
        "file-creator": {
            dist: fileCreatorTask
        },

        clean: {
            dist: {
                src: ["dist/*"]
            }
        },

        imagemin: {
            dynamic: {
                options: {
                    svgoPlugins: [{
                        removeDoctype: true,
                        removeXMLProcInst: true,
                        removeComments: true,
                        removeMetadata: true,
                        removeTitle: true,
                        removeDesc: true,
                        removeUselessDefs: true,
                        removeEditorsNSData: true,
                        removeEmptyAttrs: true,
                        removeHiddenElems: true,
                        removeEmptyText: true,
                        removeEmptyContainers: true,
                        removeViewBox: true,
                        cleanUpEnableBackground: true,
                        minifyStyles: true,
                        convertStyleToAttrs: true,
                        convertColors: true,
                        convertPathData: true,
                        convertTransform: true,
                        removeUnknownsAndDefaults: true,
                        removeNonInheritableGroupAttrs: true,
                        removeUselessStrokeAndFill: true,
                        removeUnusedNS: true,
                        cleanupIDs: true,
                        cleanupNumericValues: true,
                        moveElemsAttrsToGroup: true,
                        moveGroupAttrsToElems: true,
                        collapseGroups: true,
                        removeRasterImages: true,
                        mergePaths: true,
                        convertShapeToPath: true,
                        sortAttrs: true,
                        transformsWithOnePath: true,
                        removeDimensions: true,
                        removeAttrs: true,
                        addClassesToSVGElement: true,
                        removeStyleElement: true
                    }]
                },
                files: [{
                    expand: true,
                    cwd: 'node_modules/jenkins-core-theme/images/',
                    src: ['**/*.svg'],
                    dest: 'node_modules/jenkins-core-theme/images/'
                }]
            }

        },

        less: {
            dist: {
                files: lessFiles
            }
        },

        replace: {
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'version',
                            replacement: pkg.version
                        },
                        {
                            match: /zenkins<\/artifactId>\s+<version>[^>]*<\/version>/g,
                            replacement: 'zenkins</artifactId>\n    <version>' + pkg.version + '</version>'
                        }
                    ]
                },
                files: replaceFiles
            }
        },

        cssmin: {
            minify: {
                files: cssMinFiles
            }
        },

        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
                    require('postcss-encode-base64-inlined-images'),
                    require('cssnano')() // minify the result
                ]
            },
            dist: {
                src: 'dist/zenkins*.css'
            }
        },

        imageEmbed: {
            static: {
                src: ["dist/zenkins.css"],
                dest: "dist/zenkins.css",
                options: {
                    deleteAfterEncoding: false
                }
            }
        },

        fileExists: {
            scripts: Object.keys(lessFiles)
        }

    });

    // Default task(s).
    grunt.registerTask('default', ['clean', 'file-creator', 'imagemin', 'less', 'replace', 'cssmin', 'postcss']);
    grunt.registerTask('test', ['default', 'fileExists']);

};
