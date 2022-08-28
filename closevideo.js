$("body").on("hide.bs.modal", ".modal", function () {
  const $modal = $(this);
  // return early if there were no embedded YouTube videos
  if ($modal.find("iframe").length === 0) return;
  const html = $modal.html();
  $modal.html(html);
});
