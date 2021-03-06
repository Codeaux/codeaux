/*
 * Setting up issues route.
 */
'use strict';

angular.module('issues').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.

    state('issues', {
      abstract: true,
      url: '/issues',
      template: '<ui-view/>'
    }).
    state('issues.list', {
      url: '',
      templateUrl: '/modules/issues/views/list-issues.client.view.html'
    }).
    state('issues.create', {
      url: '/create',
      templateUrl: '/modules/issues/views/create-issue.client.view.html'
    }).
    state('issues.view', {
      url: '/:issueId',
      templateUrl: '/modules/issues/views/view-issue.client.view.html'
    }).
    state('issues.edit', {
      url: '/:issueId/edit',
      templateUrl: '/modules/issues/views/edit-issue.client.view.html'
    }).
    state('my-issues', {
      url: '/myissues',
      templateUrl: '/modules/issues/views/my-issues.client.view.html'
    }).
    state('my-friends-issues', {
      url: '/friendsissues',
      templateUrl: '/modules/issues/views/friends-issues.client.view.html'
    });
  }
]);
