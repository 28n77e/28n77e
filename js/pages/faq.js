function Page() {
  return (
    <div>
      <window.SiteNav active="faq" />
      <window.FAQ />
      <window.Footer />
    </div>
  );
}

function mount() {
  if (!window.FAQ || !window.SiteNav || !window.Footer) { setTimeout(mount, 50); return; }
  ReactDOM.createRoot(document.getElementById('root')).render(<Page />);
}
mount();
