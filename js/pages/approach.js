function Page() {
  return (
    <div>
      <window.SiteNav active="approach" dark />
      <window.Approach />
      <window.Footer />
    </div>
  );
}

function mount() {
  if (!window.Approach || !window.SiteNav || !window.Footer) { setTimeout(mount, 50); return; }
  ReactDOM.createRoot(document.getElementById('root')).render(<Page />);
}
mount();
