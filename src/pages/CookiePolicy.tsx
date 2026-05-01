import DocLayout from "@/components/DocLayout";

const CookiePolicy = () => (
  <DocLayout>
    <h1 className="text-[36px] font-extrabold tracking-[-0.03em] text-[#111827] mb-2">Cookie Policy</h1>
    <span className="block text-[13px] text-[#6b7280] mb-10">Last updated: 30 April 2025</span>

    <p>This Cookie Policy explains how <strong>Seamless Events</strong> ("we", "us", "our") uses cookies and similar technologies on our website and platform at seamlessevents.io (the "Site").</p>

    <hr />

    <h2>What are cookies?</h2>
    <p>Cookies are small text files placed on your device when you visit a website. They help the site remember your preferences and understand how you use it.</p>

    <hr />

    <h2>What cookies we use</h2>

    <h3>Necessary cookies</h3>
    <p>These cookies are required for the Site and platform to function. They cannot be disabled.</p>
    <table>
      <thead><tr><th>Cookie</th><th>Purpose</th></tr></thead>
      <tbody>
        <tr><td>Firebase authentication</td><td>Keeps you logged in to your account</td></tr>
        <tr><td>Session cookies</td><td>Maintains your session as you navigate the platform</td></tr>
      </tbody>
    </table>

    <h3>Analytics cookies</h3>
    <p>These cookies help us understand how visitors use the Site so we can improve it. They are only set with your consent.</p>
    <table>
      <thead><tr><th>Provider</th><th>Purpose</th><th>More information</th></tr></thead>
      <tbody>
        <tr>
          <td>Google Analytics</td>
          <td>Tracks page visits, session duration, and feature usage</td>
          <td><a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google's privacy policy</a></td>
        </tr>
      </tbody>
    </table>
    <p>Google Analytics may transfer data to the US. Google participates in the EU-US Data Privacy Framework and provides appropriate safeguards for such transfers.</p>

    <hr />

    <h2>Managing your preferences</h2>
    <p>When you first visit our Site, you will be asked to consent to analytics cookies. You can decline and only necessary cookies will be set.</p>
    <p>You can also manage or delete cookies directly through your browser settings. Note that disabling necessary cookies may affect your ability to use the platform. For more information on managing cookies visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noreferrer">www.allaboutcookies.org</a>.</p>

    <hr />

    <h2>Updates</h2>
    <p>We may update this policy from time to time. The "Last updated" date at the top of this page reflects the most recent revision.</p>

    <hr />

    <h2>Contact</h2>
    <p><strong>Seamless Events</strong><br /><a href="mailto:contact@seamlessevents.io">contact@seamlessevents.io</a></p>
  </DocLayout>
);

export default CookiePolicy;
