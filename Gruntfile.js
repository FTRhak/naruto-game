module.exports = function(grunt) {

    require('time-grunt')(grunt);

    require('load-grunt-config')(grunt, {
        jitGrunt: true
    });
    
    grunt.initConfig({

    //Настройки различных модулей GruntJS, их нужно предварительно установить через менеджер пакетов npm, или добавить в файл package.json перед запуском npm install

    //Например проверка кода javascript с помощью утилиты jshint
    jshint: {},

    //Склеивание файлов
    concat: {}

    //И так далее
  });
    
};