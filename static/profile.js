
function savesettings(){
      $.ajax({
        type: "POST",
        url: "/save-profile/",
        data: {
            csrfmiddlewaretoken: document.getElementsByName('csrfmiddlewaretoken')[0].value,
            'description': $("#profilebox").val(),
            username: $("#usernameinput").val(),
            timezone: $("#timezone").val()
        },
        success: function(data) {
          if (data["ok"]) {
            $("#doneModal").modal();
          } else {
            notify(data['error'], "info")
          }
        },
    });
}