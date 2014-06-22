// Watch files for changes
module.exports = {
    // Libraries (jQuery, Zepto, etc.)
    jsComponents: {
        files: [
            'components/*.js',
            'components/**/*.js'
        ],
        tasks: [
            'js:lib',
            'js:ext',
            'js:polyfills'
        ]
    },


    jsPlanck: {
        files: [
            'dev/*.js',
            'dev/**/*.js'
        ],
        tasks: [
            'js:planck'
        ]
    },

    // Application (Views, Models, Routers, etc.)
    jsApp: {
        files: [
            'js/app/*.js',
            'js/app/**/*.js'
        ],
        tasks: [
            'js:app',
        ]
    },


    // CSS Files
    cssComponents: {
        files: [
            'components/*.{css,scss,sass,less}',
            'components/**/*.{css,scss,sass,less}',
        ],
        tasks: [
            'css:lib'
        ],
        options: {
            livereload: false
        }
    },


    // Compass files
    cssApp: {
        files: [
            'css/scss/*.{scss,sass}',
            'css/scss/**/*.{scss,sass}'
        ],
        tasks: ['css:app'],
        options: {
            nospawn: true,
            livereload: true
        }
    },


    // Images (jpeg, png, etc.)
    imageApp: {
        files: [
            'img/*.png',
            'img/**/*.png',

            'img/*.{jpg,jpeg}',
            'img/**/*.{jpg,jpeg}',
        ],
        tasks: [
            'imagemin:all'
        ]
    }
};
