var app = angular.module('einfugen', []);
app.controller('EinfugenController', function($scope) {
      var pastes = this;

      pastes.pasteArray = [];
      pastes.pasteField = "";

      //
      // // From here on, it's like using IndexedDB from content
      // pastes.req = indexedDB.open("my-database");
      // pastes.req.onerror = function(event) {
      //   alert("Warum haben Sie meiner Webapp nicht erlaubt IndexedDB zu verwenden?!");
      // };
      //
      // request.onsuccess = function(event) {
      //   var db = request.result;
      // };

      pastes.addPaste = function() {
        // Get a value saved in a form.
        var pasteValue = pastes.pasteField;


        pastes.pasteArray.unshift({
          text: pasteValue,
          done: false
        });


        // Check that there's some code there.
      //  if (!pasteValue) {
          //message('Error: No value specified');
        //  return;
        //}
        // Save it using the Chrome extension storage API.
        chrome.storage.sync.set({
          'pasteValue': pasteValue,
          active: true,
          createdAt: Date.now()
        }, function() {
          // Notify that we saved.
          //message('Settings saved');
        });

        pastes.pasteField = "";



        };

        pastes.fillFromSync = function() {
               chrome.storage.sync.get(null,function(item) {
                 pastes.pasteArray = item;
                 console.log(item);
               });
        };

      });

    hljs.initHighlightingOnLoad();
