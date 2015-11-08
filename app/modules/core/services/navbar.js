/*global angular*/
'use strict';

/**
 * @ngdoc service
 * @name core.Services.Navbar
 * @description Navbar Factory
 */

var defaultTitle = 'Kitchenflow',
    defaultLeft  = 'modules/core/views/header.template.html',
    defaultRight = 'app/modules/core/views/right-corner.html';
angular
    .module('core')
    .factory('Navbar',
        function () {
    this.steps = ["Auflauf", "Zutaten", "Rezept"];
            var title = defaultTitle,
                leftCorner = defaultLeft,
                rightCorner = defaultRight,
                show = true,

                currentStep = null,
                scope = null,

                glob = {
                    title: function () {
                        return title;
                    },
                    setTitle: function (newTitle) {
                        title = newTitle;
                    },
                    leftCorner: function () {
                        return leftCorner;
                    },
                    setLeftCorner: function (url, newScope) {
                        scope = newScope;
                        leftCorner = url;
                    },
                    rightCorner: function () {
                        return rightCorner;
                    },
                    setRightCorner: function (url, newScope) {
                        scope = newScope;
                        rightCorner = url;
                    },
                    scope: function () {
                        return scope;
                    },
                    setCurrentStep: function (step) {
                        currentStep = step;
                    },
                    getSteps: function () {
                        if (!currentStep) {return []};
                        console.log()
                        return this.steps.slice(0, this.steps.indexOf(currentStep)+1);
                    },
                    getCurrentStep: function () {
                        return currentStep;
                    },
                    setSteps: function(steps) {
                        this.steps = steps;
                    },
                    hide: function() {
                        show = false;
                    },
                    show: function() {
                        show = true;
                    },
                    getShow: function() {
                        return show;
                    }
                };
            return glob;
        });