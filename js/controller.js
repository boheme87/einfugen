var app = angular.module('einfugen', []);
app.controller('EinfugenController', function($scope) {
  var pastes = this;
  pastes.pasteArray = [];

  pastes.pasteField = "";
  pastes.addPaste = function() {

  pastes.pasteArray.unshift({
      text: pastes.pasteField,
      done: false
    });
    pastes.pasteField = "";
  };


});

  hljs.initHighlightingOnLoad();
