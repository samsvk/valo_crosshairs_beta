import { Link } from "react-router-dom";
export default () => {
  return (
    <div className="information">
      <Link to="/" className="information__nav">
        {"<"} Return Home
      </Link>
      <header className="information__header">
        <main>
          <h1>copykat</h1>
          <p>Privacy</p>
        </main>
        <h1 className="important__title">PRIVACY POLICY</h1>
      </header>
      <div className="information__data">
        <h2>Disclaimer / Changes to our policies.</h2>
        <p>
          <span>
            if you do not agree to the terms of this agreement, you are not
            permitted to access or use this service.
          </span>{" "}
          It's important to note, our service may change over time and you
          should regularly educate yourself on our given policies. We keep our
          privacy policy updated and under regular review. Our policy MAY be
          subject to change at any given time witout notice.{" "}
        </p>
      </div>
      <div className="information__data">
        <h2>What data do we collect?</h2>
        <p>
          For a better experience while using our Service, we may require you to
          provide us with certain personally identifiable information.
        </p>
      </div>
      <div className="information__data">
        <h2>Cookies</h2>
        <p>
          There are a number of different types of cookies; however, our website
          uses no cookies during this current iteration of development.
        </p>
        <p style={{ marginTop: "1rem" }}>
          You can set your browser to decline cookies, and below website tells
          you how to remove cookies from your browser.
          {/* However, it is likely our
          features will fail/behave unexpectedly as a result of cookies being
          disabled. */}
        </p>
        <p style={{ marginTop: "1rem" }}>
          Further information regarding cookies:{" "}
          <a className="link" href="https://www.wikipedia.org/wiki/HTTP_cookie">
            www.wikipedia.org/wiki/HTTP_cookie
          </a>
        </p>
      </div>
      <div className="information__data">
        <h2>Privacy policies for external websites</h2>
        <p>
          Copykat.gg has not reviewed all of the sites linked to its website and
          is not responsible for the contents of any such linked site. The
          inclusion of any link does not imply endorsement by Copykat.gg of the
          site.{" "}
          <span>
            Use of any such linked website is at the user's own risk. Our
            privacy policy only applies to our website, so if you click on a
            link to another website, you should read their privacy policy.
          </span>
        </p>
      </div>

      <div className="information__data">
        <h2>Security</h2>
        <p>
          We value your trust in using our website/service(s), thus we are
          striving to use industry standard means of protecting you. But
          remember that no method of transmission over the internet, or method
          of electronic storage is 100% secure and reliable, and we cannot
          guarantee absolute security.
        </p>
      </div>

      <div className="information__data">
        <h2>Contact us?</h2>
        <p>
          If you have any information, questions or are concerned about our
          website. Please contact us using our Discord channel.
        </p>
      </div>
    </div>
  );
};
