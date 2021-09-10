const Footer = () => {
  return (
    <>
      <footer className="footer">
        <p>
          Built with ❤️ by
          <a href="https://github.com/Shahbaazkyz" target="_blank" rel="noreferrer">
            <i className="fa fa-github"></i>
            Shahbaazkyz
          </a>
        </p>
        <a
          className="github-button"
          href="https://github.com/shahbaazkyz/Contact-Manager-with-react"
          target="_blank"
          rel="noreferrer"
          data-icon="octicon-repo-forked"
          data-show-count="true"
          aria-label="Fork shahbaazkyz/Contact-Manager-with-react on GitHub"
        >
          Fork
        </a>
        <a
          className="github-button"
          rel="noreferrer"
          href="https://github.com/shahbaazkyz/Contact-Manager-with-react"
          target="_blank"
          data-icon="octicon-star"
          data-show-count="true"
          aria-label="Star shahbaazkyz/Contact-Manager-with-react on GitHub"
        >
          Star
        </a>
      </footer>
    </>
  );
};

export default Footer;
