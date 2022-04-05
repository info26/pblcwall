
function notify(text, type){
  new Noty({
    text: text,
    timeout: 5000,
    type: type,
    progressBar: true,
    animation: {
        open: function (promise) {
            promise(function(resolve) {resolve();})
        },
        close: function (promise) {
            promise(function(resolve) {resolve();})
        }
    }
}).show();
}