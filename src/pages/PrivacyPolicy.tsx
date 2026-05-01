import DocLayout from "@/components/DocLayout";

const PrivacyPolicy = () => (
  <DocLayout>
    <h1 className="text-[36px] font-extrabold tracking-[-0.03em] text-[#111827] mb-2">Privacy Policy</h1>
    <span className="block text-[13px] text-[#6b7280] mb-10">Last updated: 1 May 2026</span>

    <p><strong>Seamless Events</strong> ("we", "us", "our") operates the Seamless Events platform — a speaker management tool for event organisers. This Privacy Policy explains how we collect, use, and protect personal data when you use our platform, website, and related services (collectively, the "Service").</p>
    <p>We are committed to protecting your personal data in accordance with applicable data protection laws, including the EU General Data Protection Regulation ("EU GDPR"), the UK General Data Protection Regulation ("UK GDPR"), and where applicable, US state privacy laws (including the California Consumer Privacy Act, "CCPA") and Canada's Personal Information Protection and Electronic Documents Act ("PIPEDA").</p>

    <hr />

    <h2>What this policy covers</h2>
    <p>This policy covers personal data we process when:</p>
    <ul>
      <li>An event organiser creates an account and uses the platform</li>
      <li>A speaker submits an intake form or is added to an event by an organiser</li>
      <li>Anyone visits our website</li>
    </ul>
    <p>It does <strong>not</strong> cover personal data that event organisers collect from their speakers and submit to the platform — that processing is governed by a separate Data Processing Addendum (available on request to enterprise customers).</p>

    <hr />

    <h2>Data we collect</h2>

    <h3>Event organisers</h3>
    <table>
      <thead><tr><th>Category</th><th>Detail</th></tr></thead>
      <tbody>
        <tr><td>Account data</td><td>Name, email address</td></tr>
        <tr><td>Event data</td><td>Event name, dates, branding, configuration, and settings</td></tr>
        <tr><td>Usage data</td><td>Features used, pages visited, actions taken</td></tr>
        <tr><td>Technical data</td><td>IP address, browser type, device type, operating system</td></tr>
        <tr><td>Communications</td><td>Messages sent to us via email or contact forms</td></tr>
      </tbody>
    </table>

    <h3>Speakers</h3>
    <table>
      <thead><tr><th>Category</th><th>Detail</th></tr></thead>
      <tbody>
        <tr><td>Profile data</td><td>Name, email address, job title, company name, biography</td></tr>
        <tr><td>Media</td><td>Headshot / profile photograph</td></tr>
        <tr><td>Form responses</td><td>Answers to intake form fields configured by the event organiser</td></tr>
        <tr><td>Social links</td><td>Any social media profile URLs voluntarily provided</td></tr>
      </tbody>
    </table>
    <p>Speaker data is submitted either directly by the speaker (via a public intake form) or added by the event organiser. Where an organiser adds or imports speaker data, the organiser is the controller of that data and we act as their processor.</p>

    <h3>Technical and analytics data</h3>
    <p>Standard session and usage data collected automatically when you use the Service. See the Cookies section below for more detail.</p>

    <hr />

    <h2>How we use your data</h2>
    <table>
      <thead><tr><th>Purpose</th><th>Legal basis</th></tr></thead>
      <tbody>
        <tr><td>Providing and operating the Service</td><td>Contractual necessity</td></tr>
        <tr><td>Account creation and authentication</td><td>Contractual necessity</td></tr>
        <tr><td>Generating speaker cards and wall embeds</td><td>Contractual necessity</td></tr>
        <tr><td>Sending transactional emails (e.g. login links, notifications)</td><td>Contractual necessity</td></tr>
        <tr><td>Security, fraud prevention, and abuse detection</td><td>Legitimate interests</td></tr>
        <tr><td>Improving and developing the Service</td><td>Legitimate interests</td></tr>
        <tr><td>Responding to enquiries and support requests</td><td>Legitimate interests</td></tr>
        <tr><td>Complying with legal obligations</td><td>Legal obligation</td></tr>
        <tr><td>Marketing communications (opt-in only)</td><td>Consent</td></tr>
      </tbody>
    </table>
    <p>We do not use personal data for automated decision-making that produces legal or similarly significant effects on individuals.</p>

    <hr />

    <h2>How we share your data</h2>
    <p>We do not sell personal data.</p>
    <p><strong>Service providers.</strong> We share personal data with third-party processors who help us operate the Service (such as hosting providers, authentication services, and email delivery). These providers process data only on our instructions. See the Subprocessors section below.</p>
    <p><strong>Event organisers.</strong> Speaker data submitted through an intake form or added to the platform is accessible to the organiser running that event. Organisers are responsible for their own lawful basis for collecting and using that data.</p>
    <p><strong>Public embeds.</strong> Where an organiser enables a Speaker Wall embed on their website, speaker profile data (name, title, company, headshot, and generated card) becomes publicly accessible as part of that embed. Speakers are informed of this through the organiser's intake process.</p>
    <p><strong>Legal and regulatory.</strong> We may disclose personal data where required by law, court order, or to protect the rights, safety, or property of us, our users, or others.</p>
    <p><strong>Business transfers.</strong> In the event of a merger, acquisition, or transfer of all or part of our business, personal data may be transferred to the successor entity. We will notify you of any such change.</p>

    <h3>Subprocessors</h3>
    <table>
      <thead><tr><th>Provider</th><th>Purpose</th><th>Location</th></tr></thead>
      <tbody>
        <tr><td>Google (Firebase / Google Cloud)</td><td>Authentication, database, platform hosting</td><td>USA / EEA</td></tr>
        <tr><td>Brevo</td><td>Transactional emails (login links, notifications)</td><td>EU (France)</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>International transfers</h2>
    <p>Some of our subprocessors are based outside the UK and European Economic Area. Where we transfer personal data internationally we rely on one or more of the following:</p>
    <ul>
      <li>An adequacy decision by the UK Government or European Commission</li>
      <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
      <li>UK International Data Transfer Agreements (IDTAs) issued by the ICO</li>
    </ul>
    <p>You can request further information about the transfer mechanisms we use by contacting us at the address below.</p>

    <hr />

    <h2>Retention</h2>
    <p>We retain personal data for as long as necessary to provide the Service and meet our legal obligations.</p>
    <table>
      <thead><tr><th>Data type</th><th>Retention period</th></tr></thead>
      <tbody>
        <tr><td>Organiser account data</td><td>Duration of account, plus 90 days after deletion</td></tr>
        <tr><td>Speaker profile data</td><td>Duration of the organiser's account</td></tr>
        <tr><td>Technical / analytics data</td><td>Up to 26 months</td></tr>
        <tr><td>Communications and support records</td><td>Up to 3 years</td></tr>
      </tbody>
    </table>
    <p>You can request deletion of your data at any time — see Your Rights below.</p>

    <hr />

    <h2>Your rights</h2>
    <p>Under UK/EU GDPR you have the right to:</p>
    <ul>
      <li><strong>Access</strong> — request a copy of personal data we hold about you</li>
      <li><strong>Correct</strong> — ask us to correct inaccurate or incomplete data</li>
      <li><strong>Delete</strong> — request erasure where there is no lawful reason to retain it</li>
      <li><strong>Restrict</strong> — ask us to pause processing in certain circumstances</li>
      <li><strong>Object</strong> — object to processing carried out on the basis of legitimate interests</li>
      <li><strong>Portability</strong> — receive a copy of your data in a machine-readable format</li>
      <li><strong>Withdraw consent</strong> — where processing is based on your consent, withdraw it at any time without affecting prior processing</li>
    </ul>
    <p>To exercise any of these rights, contact us at <a href="mailto:contact@seamlessevents.io">contact@seamlessevents.io</a>. We will respond within one month. We may ask you to verify your identity before acting on a request.</p>

    <hr />

    <h2>Additional rights — US and Canada</h2>

    <h3>California (CCPA)</h3>
    <p>If you are a California resident, you have the right to:</p>
    <ul>
      <li><strong>Know</strong> — request disclosure of the personal data we collect, use, and share about you</li>
      <li><strong>Delete</strong> — request deletion of personal data we hold about you, subject to certain exceptions</li>
      <li><strong>Correct</strong> — request correction of inaccurate personal data</li>
      <li><strong>Opt out of sale</strong> — we do not sell personal data</li>
    </ul>
    <p>To make a request, contact us at <a href="mailto:contact@seamlessevents.io">contact@seamlessevents.io</a>.</p>

    <h3>Canada (PIPEDA)</h3>
    <p>If you are in Canada, you have the right to access personal data we hold about you and to request corrections where it is inaccurate. To make a request, contact us at <a href="mailto:contact@seamlessevents.io">contact@seamlessevents.io</a>.</p>

    <hr />

    <h2>Cookies</h2>
    <p>We use cookies and similar technologies on our website and platform:</p>
    <ul>
      <li><strong>Necessary cookies</strong> — required for the Service to function (e.g. keeping you logged in)</li>
      <li><strong>Analytics cookies</strong> — help us understand how the Service is used so we can improve it</li>
    </ul>
    <p>You can manage your cookie preferences via the cookie banner on our website, or read our full <a href="/cookie-policy">Cookie Policy</a>.</p>

    <hr />

    <h2>Children</h2>
    <p>The Service is not directed at anyone under the age of 16. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, please contact us and we will delete it promptly.</p>

    <hr />

    <h2>Complaints</h2>
    <p>If you are unhappy with how we handle your personal data, please contact us first — we would like the opportunity to resolve your concern.</p>
    <p>If you remain unsatisfied, you have the right to lodge a complaint with a supervisory authority:</p>
    <ul>
      <li><strong>UK users</strong> — <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noreferrer">Information Commissioner's Office (ICO)</a></li>
      <li><strong>EU users</strong> — <a href="https://edpb.europa.eu/about-edpb/board/members_en" target="_blank" rel="noreferrer">your local data protection authority</a></li>
    </ul>

    <hr />

    <h2>Contact</h2>
    <p><strong>Seamless Events</strong><br /><a href="mailto:contact@seamlessevents.io">contact@seamlessevents.io</a></p>

    <hr />

    <h2>Updates</h2>
    <p>We may update this policy from time to time. We will notify active users of material changes by email. The "Last updated" date at the top of this page reflects the most recent revision.</p>
  </DocLayout>
);

export default PrivacyPolicy;
