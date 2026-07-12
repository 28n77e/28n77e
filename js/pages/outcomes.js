function Page() {
  return (
    <div>
      <window.SiteNav active="outcomes" />
      <window.Outcomes />
      <window.Footer />
    </div>
  );
}

function mount() {
  if (!window.Outcomes || !window.SiteNav || !window.Footer) { setTimeout(mount, 50); return; }
  ReactDOM.createRoot(document.getElementById('root')).render(<Page />);
}
mount();
