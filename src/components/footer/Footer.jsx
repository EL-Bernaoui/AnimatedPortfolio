import "./footer.scss";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="box">
          <p className="inspired">
            Inspired By{" "}
            <a
              href="https://www.youtube.com/watch?v=CHGHuF24Cjw"
              target="blank"
            >
              Lema Dev
            </a>
          </p>
          <p>
            Made with <span>&hearts;</span> By{" "}
            <a href="https://elbernaoui.is-a.dev/" target="blank">
              EL BERANAOUI
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
