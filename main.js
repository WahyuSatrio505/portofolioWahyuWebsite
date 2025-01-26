window.onebeforeunload = function () {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
