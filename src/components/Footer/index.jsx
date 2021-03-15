import "../NavBar/styles.css";

const Footer = () => {
  return (
    <>
      <div>
        <footer
          className="bg-dark d-flex justify-content-around text-white pt-2"
          style={{ position: "fixed", bottom: "0" }}
        >
          <p className="text-right">Copyright © 2021 by Roger Meza</p>
        </footer>
      </div>
    </>
  );
};
export default Footer;
