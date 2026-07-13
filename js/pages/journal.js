function Page() {
  return (
    <div>
      <window.SiteNav active="journal" />
      <window.Journal />
      <window.Footer />
    </div>
  );
}

function mount() {
  if (!window.Journal || !window.SiteNav || !window.Footer) { setTimeout(mount, 50); return; }
  ReactDOM.createRoot(document.getElementById('root')).render(<Page />);
}
mount();
