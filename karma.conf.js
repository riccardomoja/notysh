module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine','karma-typescript'],
        files: [
            'src/**/*.ts',
            'src/**/*.spec.ts'
        ],
        preprocessors: {
            'src/**/*.ts': ['karma-typescript']
        },
        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-typescript',
            'karma-coverage',
            'karma-spec-reporter'
        ],
        karmaTypescriptConfig: {
            tsconfig: "./tsconfig.json",
        },
        reporters: ['progress', 'coverage','karma-typescript'],
        port: 9878,
        colors: true,
        logLevel: config.LOG_DEBUG,
        autowatch: true,
        browsers: [],
        singleRun: false,
        concurrency: Infinity,
        coverageReporter: {
            includeAllSources: true,
            dir: 'coverage/',
            reporters: [
                { type: "html", subdir: "html" },
                { type: 'json' , subdir:"json"}
            ]
        }
    });
};
