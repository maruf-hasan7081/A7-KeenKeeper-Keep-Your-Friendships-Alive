const Footer = () => {
  return (
    <footer className="bg-green-900 text-white text-center py-10 mt-10">
      <h2 className="text-2xl font-bold">KeenKeeper</h2>
      <p className="text-sm mt-2">
        Your personal shelf of meaningful connections.
      </p>

      <div className="mt-4 flex justify-center gap-4">
        <span>🌐</span>
        <span>📘</span>
        <span>❌</span>
      </div>

      <p className="text-xs mt-4">
        © 2026 KeenKeeper. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;