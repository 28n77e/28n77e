function Page() {
  return (
    <div>
      <window.SiteNav active="home" />
      <window.Hero />
      <window.WhoWeServe />
      <window.PullQuote />
      <window.HomeCTA />
      <window.Footer />
    </div>
  );
}

function mount() {
  if (!window.Hero || !window.WhoWeServe || !window.PullQuote || !window.HomeCTA || !window.Footer) {
    setTimeout(mount, 50);
    return;
  }
  ReactDOM.createRoot(document.getElementById('root')).render(<Page />);
}
mount();
