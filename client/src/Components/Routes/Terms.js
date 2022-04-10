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
          <p>Terms</p>
        </main>
        <h1 className="important__title">Terms of Service</h1>
      </header>
      <div className="information__data">
        <h2>Agreement</h2>
        <p>
          By accessing this Website, accessible from Copykat.gg, you are
          agreeing to be bound by these Website Terms of Service and agree that
          you are responsible for the agreement in accordance with any
          applicable local laws.{" "}
          <span>
            IF YOU DO NOT AGREE TO ALL THE TERMS AND CONDITIONS OF THIS
            AGREEMENT, YOU ARE NOT PERMITTED TO ACCESS OR USE OUR SERVICES.
          </span>
        </p>
      </div>

      <div className="information__data">
        <h2>Limitations</h2>
        <p>
          You are responsible for your security and all activities. In the use
          of this site, you must NOT violate any applicable laws, including,
          without limitation, copyright laws, or any other laws regarding the
          security of your personal data, or otherwise misuse this site.
        </p>
        <p style={{ marginTop: "1rem" }}>
          While using Copykats service(s), you agree that you shall and will
          not:
        </p>
        <ol>
          <li>
            Harass, abuse, threaten, or incite violence towards any individual
            or group.
          </li>
          <li>
            Access our/the services in ways that exceed your authorization.
          </li>
          <li>
            Facilitate or encourage any violations of this Agreement or
            interfere with the operation, appearance, security, or functionality
            of the Services or use the Services in any manner that is harmful to
            minors.
          </li>
          <li>
            Use our servers for any form of excessive automated bulk activity
            (such as/example being: spamming), or rely on any other form of
            unsolicited advertising or solicitation through our servers or
            Services. Attempt to disrupt or tamper with our servers in ways that
            could harm our website/service OR place burden upon our servers.
          </li>
        </ol>
        <p style={{ marginTop: "1rem" }}>
          Without limiting the foregoing, you will not transmit or post any
          content anywhere on the Services that violates any laws. Copykat
          absolutely does not tolerate engaging in activity that significantly
          harms our Users/Serivce(s). We will resolve disputes in favor of
          protecting our Users/Service(s) as a whole.
        </p>
      </div>

      <div className="information__data">
        <h2>Privacy Policy</h2>
        <p>
          If you use our Services, you must abide by our{" "}
          <Link className="link" to="/privacy-policy">
            Privacy Policy
          </Link>
          {". "}
          You acknowledge that you have read our Privacy Policy and understand
          that it sets forth how we collect, use, and store your information.{" "}
          Any person, entity, or service collecting data from the Services must
          comply with our Privacy Statement. Misuse of any User's Personal
          Information is prohibited. If you collect any Personal Information
          from a User, you agree that you will only use the Personal Information
          you gather for the purpose for which the User has authorized it. You
          agree that you will reasonably secure any Personal Information you
          have gathered from the Services, and you will respond promptly to
          complaints, removal requests, and 'do not contact' requests from us or
          Users.
        </p>
      </div>

      <div className="information__data">
        <h2>Links</h2>
        <p>
          Copykat.gg has not reviewed all of the sites linked to its website and
          is not responsible for the contents of any such linked site. The
          inclusion of any link does not imply endorsement by Copykat.gg of the
          site.{" "}
          <span>Use of any such linked website is at the user's own risk.</span>
        </p>
      </div>

      <div className="information__data">
        <h2>Changes</h2>
        <p>
          We may revise these Terms of Service for this Website at any time
          without prior notice. By using this Website, you are agreeing to be
          bound by the current version of these Terms of Service.
        </p>
      </div>

      <div className="information__data">
        <h2>Disclaimer</h2>
        <p>
          The materials on Copykat.gg website are provided on an "as is" basis.
          Copykat.gg makes no warranties, expressed or implied, and hereby
          disclaims and negates all other warranties including, without
          limitation, implied warranties or conditions of merchantability,
          fitness for a particular purpose, or non-infringement of intellectual
          property or other violation of rights. Further, Copykat.gg does not
          warrant or make any representations concerning the accuracy, likely
          results, or reliability of the use of the materials on its website or
          otherwise relating to such materials or on any sites linked to this
          site.
        </p>
      </div>
    </div>
  );
};
