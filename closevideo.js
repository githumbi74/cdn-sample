$("#show-popup-button").on("click", function () {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
});

// this stops youtube playing when closing modal

$("body").on("hide.bs.modal", ".modal", function () {
  const $modal = $(this);
  // return early if there were no embedded YouTube videos
  if ($modal.find("iframe").length === 0) return;
  const html = $modal.html();
  $modal.html(html);
});
