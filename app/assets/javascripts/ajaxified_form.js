$(function(){

  $("#new_task_form").submit(function(){
    var title = $("#task_title").val();
    var body = $("#task_body").val();
    console.log(title);

    $.post(
      "/tasks", 
      $("#new_task_form").serialize()
      ).done(function(data){
        $("#tasks").prepend(data);
      });

    return false;
  });
});
