(function () {
  document.querySelectorAll('.bibtex-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var id = btn.getAttribute('data-bibtex');
      var block = document.getElementById('bibtex-' + id);
      if (!block) return;
      var open = block.hidden;
      block.hidden = !open;
      btn.setAttribute('aria-expanded', open);
    });
  });

  document.querySelectorAll('.bibtex-copy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var pre = btn.closest('.bibtex-block').querySelector('.bibtex-code');
      if (!pre) return;
      navigator.clipboard.writeText(pre.textContent).then(function () {
        var t = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(function () { btn.textContent = t; }, 1500);
      });
    });
  });
})();
