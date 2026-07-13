function Page() {
  return (
    <div>
      <window.SiteNav active="about" />
      <window.About />
      <window.Footer />
    </div>
  );
}

function mount() {
  if (!window.About || !window.SiteNav || !window.Footer) { setTimeout(mount, 50); return; }
  ReactDOM.createRoot(document.getElementById('root')).render(<Page />);
}
mount();
