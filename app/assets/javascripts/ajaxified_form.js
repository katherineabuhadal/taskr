$(function(){

  $("#new_task_form").submit(function(){

    $.post(
      "/tasks", 
      $("#new_task_form").serialize()
      ).done(function(data){
        $("#tasks").prepend(data);
        $("#error_messages").html("");
        $("#task_title", "#task_body").val("");
      }).fail(function(xhr){
        var data = xhr.responseText;
        $("#error_messages").html(data)
      });
      return false;
  });

  $("#tasks").on("click", ".completed_checkbox", function(event) {
    var formEl = $(event.target).parents("form");
    var action = formEl.prop("action")

    $.ajax({
      type: "PATCH",
      url: action,
      data: formEl.serialize()
    }).done(function() {
      formEl.parents("li").fadeOut();
    });

  });

// $("#delete").click(function() {
//   console.log("you clicked delete");
//   });







});
