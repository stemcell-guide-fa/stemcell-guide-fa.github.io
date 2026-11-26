const frame = document.querySelector('#pdf-frame');
const directLink = document.querySelector('#open-pdf');
const syncPage = () => {
  const match = window.location.hash.match(/^#page=(\d{1,2})$/);
  const page = match ? Math.min(28, Math.max(1, Number(match[1]))) : 1;
  const source = `downloads/book.pdf#page=${page}&view=FitH`;
  if (frame) frame.src = source;
  if (directLink) directLink.href = source;
};
syncPage();
window.addEventListener('hashchange', syncPage);
