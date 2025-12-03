const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container-fluid bg-dark">
        <div className="row">
          <div className="col-12 py-4">
            <p className="text-center text-white mb-0 fs-5">Copyright &copy; {year} Remli Abdelhakim </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


