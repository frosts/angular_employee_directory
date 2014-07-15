module.exports = function(grunt){
    
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
      
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            livereload  : {
                options   : {
                  base    : '.',
                },
                files     : ['*']
              }
        },
        connect: {
            server: {
              options: {
                port: 9002,
                base: '.',
                keepalive: true
              }
            }
          }
    });
    
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('default', []);
    grunt.registerTask('serve', [
    'connect:server',
    'watch'
    ]);

};