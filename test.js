// // Create one test item for each context type.
// var contexts = ["link"];
// for (var i = 0; i < contexts.length; i++) {
//   var context = contexts[i];
//   var title = "Update Splitwise";
//   var id = chrome.contextMenus.create({"title": title, "contexts":[context],
//                                        "onclick": updateSplitwiseData});
//
//
//
// }
//
//
// function updateSplitwiseData(){
//
// }
//
//
// // create callback.
// console.log("About to try creating an invalid item - an error about " +
//             "item 999 should show up");
// chrome.contextMenus.create({"title": "Oops", "parentId":999}, function() {
//   if (chrome.extension.lastError) {
//     console.log("Got expected error: " + chrome.extension.lastError.message);
//   }
// });

// chrome.pageAction.show(38);
