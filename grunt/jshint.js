// JSHint JS files
module.exports = {
    app: {
        options: {
            jshintrc: '.jshintrc'
        },
        src: 'js/app/*.js'
    },

    grunt: {
        src: [
            'grunt/*.js',
            'Gruntfile.js'
        ]
    }
};
