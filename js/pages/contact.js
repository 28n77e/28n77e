function Page() {
  return (
    <div>
      <window.SiteNav active="contact" dark />
      <window.Begin />
      <window.Footer />
    </div>
  );
}

function mount() {
  if (!window.Begin || !window.SiteNav || !window.Footer) { setTimeout(mount, 50); return; }
  ReactDOM.createRoot(document.getElementById('root')).render(<Page />);
}
mount();
