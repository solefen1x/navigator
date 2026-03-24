const articles = [
  {
    id: 1,
    cat: "access",
    catLabel: "Access & Training",
    catColor: "#00d4aa",
    catBg: "rgba(0,212,170,0.1)",
    icon: "🎓",
    title: "Navigator Access & Training",
    summary: "How agents get access to Navigator and where to find training. Use Zendesk macro 'Navigator training'.",
    tags: ["access", "training", "LMS", "onboarding"],
    escalation: "L1",
    body: `
      <div class="detail-section">
        <div class="detail-section-title">Quick Answer</div>
        <div class="copy-box highlight"><div class="copy-box-toolbar"><button class="copy-btn" onclick="copyText(this)">Copy</button></div><div class="copy-box-content">The Navigator Training course is located in the LMS (formerly Quility U). Find the LMS icon in the grid menu (top left of HQ), or go to Sales Tools → Sales Training in the HQ sidebar. Once training is complete, Navigator access will appear in the HQ menu.</div></div>
        <div class="info-box">ℹ️ <span><strong>Zendesk Macro:</strong> "Navigator training"</span></div>
      </div>
      <div class="detail-section">
        <div class="detail-section-title">Step-by-Step</div>
        <ol class="step-list">
          <li><span class="step-num">1</span><span>Log into HQ and look for the <strong>grid menu icon</strong> in the top-left corner.</span></li>
          <li><span class="step-num">2</span><span>Click the <strong>LMS icon</strong> (formally known as Quility U) from the grid menu.</span></li>
          <li><span class="step-num">3</span><span>Alternatively: navigate via <strong>Sales Tools → Sales Training</strong> in the HQ sidebar.</span></li>
          <li><span class="step-num">4</span><span>Complete the <strong>Navigator Training</strong> course.</span></li>
          <li><span class="step-num">5</span><span>After completion, <strong>Navigator will appear</strong> in the HQ menu automatically.</span></li>
        </ol>
      </div>
      <div class="detail-section">
        <div class="detail-section-title">Escalation</div>
        <div class="escalation-box">
          <div class="esc-row"><span class="esc-label">Level 1</span><span class="esc-value">Quility Support — send Zendesk macro "Navigator training"</span></div>
          <div class="esc-row"><span class="esc-label">Level 2+</span><span class="esc-value">TechFicient: <a href="mailto:support@techf.com">support@techf.com</a></span></div>
        </div>
      </div>
    `
  },
  {
    id: 2,
    cat: "carriers",
    catLabel: "Carriers & Products",
    catColor: "#ffd166",
    catBg: "rgba(255,209,102,0.1)",
    icon: "🏢",
    title: "4 Carriers You Can Apply With in Navigator",
    summary: "Navigator quotes many carriers, but only 4 allow direct in-app applications: AmAm, LGA, SBLI, and UHL.",
    tags: ["carriers", "AmAm", "LGA", "SBLI", "UHL", "apply"],
    escalation: "L1",
    body: `
      <div class="detail-section">
        <div class="detail-section-title">Quick Answer</div>
        <div class="copy-box highlight"><div class="copy-box-toolbar"><button class="copy-btn" onclick="copyText(this)">Copy</button></div><div class="copy-box-content">Navigator quotes with many carriers, but you can apply directly in the app with 4: American Amicable (AmAm), Legal & General (LGA), SBLI, and United Home Life (UHL). For all other carriers, applications are completed on the carrier's website.</div></div>
        <div class="info-box">ℹ️ <span><strong>Zendesk Macro:</strong> "4 carriers you can apply with directly in Navigator"</span></div>
      </div>
      <div class="detail-section">
        <div class="detail-section-title">Products Available Per Carrier</div>
        <div class="contact-grid">
          <div class="contact-card">
            <div class="contact-carrier">AmAm — American Amicable</div>
            <div class="contact-info">Quility Secure Future Preferred (QSFP)</div>
          </div>
          <div class="contact-card">
            <div class="contact-carrier">UHL — United Home/United Life</div>
            <div class="contact-info">Quility Secure Future Complete (QSFC)</div>
          </div>
          <div class="contact-card">
            <div class="contact-carrier">SBLI</div>
            <div class="contact-info">Quility Level Term (QLT)</div>
          </div>
          <div class="contact-card">
            <div class="contact-carrier">LGA — Legal & General</div>
            <div class="contact-info">Quility Term Plus (QTP)</div>
          </div>
        </div>
      </div>
      <div class="detail-section">
        <div class="detail-section-title">More Carrier Info</div>
        <p>For detailed product info on each carrier, visit the Carrier Resource pages in HQ: <strong>https://hq.quility.com/page/available-carriers</strong></p>
      </div>
    `
  },
  {
    id: 3,
    cat: "licensing",
    catLabel: "Licensing",
    catColor: "#4f7cff",
    catBg: "rgba(79,124,255,0.1)",
    icon: "📋",
    title: "Licensing Error When Trying to Apply",
    summary: "Agent gets an error when starting an application. Check agent status, carrier writing number, and state license in HQ.",
    tags: ["licensing", "error", "writing number", "state license", "HQ"],
    escalation: "L1/L2",
    body: `
      <div class="detail-section">
        <div class="detail-section-title">Clarifying Questions First</div>
        <ol class="step-list">
          <li><span class="step-num">1</span><span>Ask for the <strong>client's full name</strong> to verify the account.</span></li>
          <li><span class="step-num">2</span><span>Confirm which <strong>carrier</strong> the application is for.</span></li>
          <li><span class="step-num">3</span><span>Request a <strong>screenshot</strong> of the error message they're seeing.</span></li>
        </ol>
      </div>
      <div class="detail-section">
        <div class="detail-section-title">L1 Checks in HQ (in order)</div>
        <ol class="step-list">
          <li><span class="step-num">1</span><span>Check that the <strong>agent's status is Active</strong> in HQ.</span></li>
          <li><span class="step-num">2</span><span>Under the <strong>License tab</strong>, verify the carrier's writing number is listed and shows as "Active".</span></li>
          <li><span class="step-num">3</span><span>Confirm the <strong>state license</strong> is showing for the state the client is in.</span></li>
        </ol>
        <div class="warn-box">⚠️ <span>If all three are correct in HQ, escalate to <strong>Navigator Level 2</strong> — there may be a deeper sync or platform issue.</span></div>
      </div>
      <div class="detail-section">
        <div class="detail-section-title">Agent Status Issues</div>
        <div class="escalation-box">
          <div class="esc-row"><span class="esc-label">Lapsed/Stalled</span><span class="esc-value">Create support ticket → Contracting (Agent Onboarding)</span></div>
          <div class="esc-row"><span class="esc-label">Available</span><span class="esc-value">Follow HQ instructions to reactivate: set status to Active, scroll down, click Save</span></div>
        </div>
      </div>
      <div class="detail-section">
        <div class="detail-section-title">Writing Number Not Listed</div>
        <ul style="padding-left:0;list-style:none;">
          <li style="margin-bottom:8px">• Ask if agent has received an email with their writing number → send macro <strong>"Adding writing number in HQ"</strong>.</li>
          <li style="margin-bottom:8px">• If agent needs help entering it: <strong>request a screenshot of the email</strong>. Must verify it's correct before adding (legal requirement — it links carrier to their HQ profile).</li>
          <li style="margin-bottom:8px">• If number shows under <strong>"Inactive"</strong>: copy/paste into a new entry (it becomes active), then delete the inactive one. If truly inactive, agent must contact the carrier to reinstate.</li>
        </ul>
        <div class="warn-box">⚠️ <span><strong>LGA / Banner Life confusion:</strong> Banner Life and Legal & General are the same company. If the writing number is under "Banner Life" in HQ, Navigator won't read it. Copy the number to a new entry under "Legal and General" and delete the Banner Life entry.</span></div>
      </div>
      <div class="detail-section">
        <div class="detail-section-title">State License Not Showing</div>
        <ul style="padding-left:0;list-style:none;">
          <li style="margin-bottom:8px">• Ask if agent has already reached out to <strong>NIPR</strong> to get licensed in that state.</li>
          <li style="margin-bottom:8px">• If yes: try <strong>"Import state license"</strong> on the licensing page in HQ, then refresh. NIPR syncs overnight so this can expedite it — but doesn't always work.</li>
          <li style="margin-bottom:8px">• If not yet licensed in that state: let them know <strong>Contracting can help</strong>, create a ticket (send to Nav Level 2, we'll forward to Contracting).</li>
        </ul>
      </div>
    `
  },
  {
    id: 4,
    cat: "licensing",
    catLabel: "Licensing",
    catColor: "#4f7cff",
    catBg: "rgba(79,124,255,0.1)",
    icon: "⏱️",
    title: "JIT (Just-In-Time) Contracting",
    summary: "AmAm, LGA, and UHL use JIT contracting. SBLI uses JIT except in PA, OR, UT, IN. Agents get appointed when they submit their first application.",
    tags: ["JIT", "contracting", "SBLI", "LGA", "AmAm", "UHL", "licensing"],
    escalation: "L1",
    body: `
      <div class="detail-section">
        <div class="detail-section-title">What is JIT Contracting?</div>
        <div class="copy-box highlight"><div class="copy-box-toolbar"><button class="copy-btn" onclick="copyText(this)">Copy</button></div><div class="copy-box-content">Just-In-Time (JIT) Contracting allows agents to get contracted with a carrier upon submission of their first application, rather than being pre-appointed. This streamlines the contracting experience, enabling agents to start working with carriers more quickly.</div></div>
      </div>
      <div class="detail-section">
        <div class="detail-section-title">JIT by Carrier</div>
        <div class="contact-grid">
          <div class="contact-card">
            <div class="contact-carrier">AmAm</div>
            <div class="contact-info">✅ JIT contracting for all states</div>
          </div>
          <div class="contact-card">
            <div class="contact-carrier">LGA (Legal & General / Banner Life)</div>
            <div class="contact-info">✅ JIT contracting for all states</div>
          </div>
          <div class="contact-card">
            <div class="contact-carrier">UHL</div>
            <div class="contact-info">✅ JIT contracting for all states</div>
          </div>
          <div class="contact-card" style="border-color:rgba(255,209,102,0.3)">
            <div class="contact-carrier" style="color:var(--accent4)">SBLI — Exception States</div>
            <div class="contact-info">❌ PA, OR, UT, IN — NOT JIT<br>✅ All other states — JIT</div>
          </div>
        </div>
      </div>
      <div class="detail-section">
        <div class="detail-section-title">SBLI Non-Resident License Exception States</div>
        <p>For PA, OR, UT, IN — send the macro: <strong>"Non-resident state licenses SBLI"</strong></p>
        <p>To request additional state appointments for SBLI, agent emails:</p>
        <div class="copy-box"><div class="copy-box-toolbar"><button class="copy-btn" onclick="copyText(this)">Copy</button></div><div class="copy-box-content">To: quilityagentservices@sbli.com<br>
          Subject: Quility -- [Agent Contract Code] -- [Agent Name] -- [Request Type]<br>
          Example: Quility -- 12345 -- Michael Smith -- New Appointment<br>
          Body: Details of the request + attach any documents if applicable.</div></div>
      </div>
      <div class="detail-section">
        <div class="detail-section-title">LGA JIT Email Response</div>
        <div class="copy-box highlight"><div class="copy-box-toolbar"><button class="copy-btn" onclick="copyText(this)">Copy</button></div><div class="copy-box-content">LGA uses a Just-in-time contracting process, meaning that when you submit an application they appoint you with that state. The message you received notifies you that LGA is in the process of appointing you for that specific state. It usually does not take more than a couple of days. Once that goes through, you and your client will receive the offer to review and accept!</div></div>
        <div class="info-box">ℹ️ <span><strong>Zendesk Macro:</strong> LGA JIT</span></div>
      </div>
    `
  },
  {
    id: 5,
    cat: "declined",
    catLabel: "Declined Applications",
    catColor: "#ff6b6b",
    catBg: "rgba(255,107,107,0.1)",
    icon: "❌",
    title: "Declined Application — AmAm",
    summary: "For AmAm declines, the agent needs to obtain a Milliman report. We cannot see the decline reason on our side.",
    tags: ["declined", "AmAm", "Milliman", "underwriting"],
    escalation: "L1",
    body: `
      <div class="detail-section">
        <div class="detail-section-title">Quick Answer</div>
        <div class="copy-box highlight"><div class="copy-box-toolbar"><button class="copy-btn" onclick="copyText(this)">Copy</button></div><div class="copy-box-content">For underwriting support on Quility Secure Future Preferred (AmAm), we recommend obtaining a Milliman report. A comprehensive report of the applicant's information is available at no cost if requested within 60 days of the decision. Applicants also have the right to dispute any information in the report directly with Milliman.</div></div>
        <div class="info-box">ℹ️ <span><strong>Zendesk Macro:</strong> AmAm Decline-Milliman</span></div>
      </div>
      <div class="detail-section">
        <div class="detail-section-title">How to Get the Milliman Report</div>
        <div class="contact-grid">
          <div class="contact-card">
            <div class="contact-carrier">Online</div>
            <div class="contact-info">Visit <strong>RxHistories for Consumers</strong> → click "Request a Report"<br>Avg turnaround: 24 hours</div>
          </div>
          <div class="contact-card">
            <div class="contact-carrier">Email</div>
            <div class="contact-info"><a href="mailto:FCRAreport@milliman.com">FCRAreport@milliman.com</a></div>
          </div>
          <div class="contact-card">
            <div class="contact-carrier">Phone</div>
            <div class="contact-info">(877) 211-4816</div>
          </div>
        </div>
      </div>
      <div class="detail-section">
        <div class="detail-section-title">Additional Resources</div>
        <p>For more underwriting info on QSFP, visit the AmAm Carrier page in HQ: <strong>https://hq.quility.com/page/available-carriers</strong></p>
      </div>
    `
  },
  {
    id: 6,
    cat: "declined",
    catLabel: "Declined Applications",
    catColor: "#ff6b6b",
    catBg: "rgba(255,107,107,0.1)",
    icon: "❌",
    title: "Declined Application — LGA",
    summary: "For LGA declines, direct agent to contact LGA's underwriting team at onlineapp@lgamerica.com.",
    tags: ["declined", "LGA", "underwriting"],
    escalation: "L1",
    body: `
      <div class="detail-section">
        <div class="detail-section-title">Quick Answer</div>
        <div class="copy-box highlight"><div class="copy-box-toolbar"><button class="copy-btn" onclick="copyText(this)">Copy</button></div><div class="copy-box-content">Please reach out to onlineapp@lgamerica.com for questions on decision rationale. They will be able to provide information on the declined application.</div></div>
        <div class="info-box">ℹ️ <span><strong>Zendesk Macro:</strong> LGA-Decline</span></div>
      </div>
      <div class="detail-section">
        <div class="detail-section-title">Contact</div>
        <div class="contact-card">
          <div class="contact-carrier">LGA Underwriting</div>
          <div class="contact-info"><a href="mailto:onlineapp@lgamerica.com">onlineapp@lgamerica.com</a></div>
        </div>
      </div>
    `
  },
  {
    id: 7,
    cat: "declined",
    catLabel: "Declined Applications",
    catColor: "#ff6b6b",
    catBg: "rgba(255,107,107,0.1)",
    icon: "❌",
    title: "Declined Application — SBLI",
    summary: "SBLI decline reasons are visible directly in Navigator on the Cases page. Walk agent through the steps.",
    tags: ["declined", "SBLI", "cases", "Navigator"],
    escalation: "L1",
    body: `
      <div class="detail-section">
        <div class="detail-section-title">Quick Answer</div>
        <div class="copy-box highlight"><div class="copy-box-toolbar"><button class="copy-btn" onclick="copyText(this)">Copy</button></div><div class="copy-box-content">You can view the decline reason in Navigator on the Cases page. Here's how to find it:</div></div>
        <div class="info-box">ℹ️ <span><strong>Zendesk Macro:</strong> SBLI-Decline</span></div>
      </div>
      <div class="detail-section">
        <div class="detail-section-title">Steps to Find Decline Reason</div>
        <ol class="step-list">
          <li><span class="step-num">1</span><span>Go to <strong>"Cases"</strong> in Navigator.</span></li>
          <li><span class="step-num">2</span><span>Click on the <strong>client's name</strong>.</span></li>
          <li><span class="step-num">3</span><span>Click the <strong>"Open eApp"</strong> button in the upper right corner. This opens Screen 2.</span></li>
          <li><span class="step-num">4</span><span>On Screen 2, look for <strong>"Case Details"</strong> — the decline reason is listed below it.</span></li>
        </ol>
        <p style="margin-top:10px">Additionally, the agent/client should receive an email with AUD details containing contact information for the vendor(s) that declined.</p>
      </div>
    `
  },
  {
    id: 8,
    cat: "declined",
    catLabel: "Declined Applications",
    catColor: "#ff6b6b",
    catBg: "rgba(255,107,107,0.1)",
    icon: "❌",
    title: "Declined Application — UHL",
    summary: "For UHL declines, direct agent to the UHL Life Contact Center. We cannot see the decline reason on our side.",
    tags: ["declined", "UHL", "underwriting"],
    escalation: "L1",
    body: `
      <div class="detail-section">
        <div class="detail-section-title">Quick Answer</div>
        <div class="copy-box highlight"><div class="copy-box-toolbar"><button class="copy-btn" onclick="copyText(this)">Copy</button></div><div class="copy-box-content">Please reach out to UHL's Life Contact Center for questions on decision rationale. They will be able to provide information on the declined application.</div></div>
        <div class="info-box">ℹ️ <span><strong>Zendesk Macro:</strong> UHL-Decline</span></div>
      </div>
      <div class="detail-section">
        <div class="detail-section-title">UHL Life Contact Center</div>
        <div class="contact-card">
          <div class="contact-carrier">UHL — Life Contact Center</div>
          <div class="contact-info">
            Hours: Monday–Friday, 8am–6:30pm EST<br>
            Phone: 1-800-428-3001<br>
            Email: <a href="mailto:Life.Contactcenter@unitedhomelife.com">Life.Contactcenter@unitedhomelife.com</a>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 9,
    cat: "escalation",
    catLabel: "Escalation Matrix",
    catColor: "#a29bfe",
    catBg: "rgba(162,155,254,0.1)",
    icon: "📊",
    title: "Escalation Matrix — Full Reference",
    summary: "Complete carrier-by-carrier escalation guide covering Navigator access, application issues, underwriting, post-issue questions, commissions, and more.",
    tags: ["escalation", "matrix", "all carriers", "contacts", "reference"],
    escalation: "L1/L2/L3",
    body: `
      <div class="detail-section">
        <div class="detail-section-title">Navigator Access Issues</div>
        <div class="contact-grid">
          <div class="contact-card"><div class="contact-carrier">AmAm / SBLI / UHL / LGA / F&G</div><div class="contact-info">Start with Quility Support → escalate to TechFicient: <a href="mailto:support@techf.com">support@techf.com</a></div></div>
        </div>
      </div>
      <div class="detail-section">
        <div class="detail-section-title">Application Issues (During Application)</div>
        <div class="contact-grid">
          <div class="contact-card"><div class="contact-carrier">AmAm</div><div class="contact-info">Start with Quility (Nav Level 2)</div></div>
          <div class="contact-card"><div class="contact-carrier">LGA / Banner Life</div><div class="contact-info"><a href="mailto:BannerBeyond@bannerlife.com">BannerBeyond@bannerlife.com</a><br>Self-Service: Partner Dashboard (basic) or Application Manager (full details)</div></div>
          <div class="contact-card"><div class="contact-carrier">SBLI / UHL</div><div class="contact-info">Navigator Level 2 / TechFicient</div></div>
          <div class="contact-card"><div class="contact-carrier">F&G</div><div class="contact-info">Navigator Level 2</div></div>
        </div>
      </div>
      <div class="detail-section">
        <div class="detail-section-title">Underwriting / App Resets (Post-Submission)</div>
        <div class="contact-grid">
          <div class="contact-card"><div class="contact-carrier">AmAm</div><div class="contact-info"><a href="mailto:underwriting@aatx.com">underwriting@aatx.com</a></div></div>
          <div class="contact-card"><div class="contact-carrier">LGA / Banner Life</div><div class="contact-info"><a href="mailto:Bannerbeyond@bannerlife.com">Bannerbeyond@bannerlife.com</a><br>833-706-2317</div></div>
          <div class="contact-card"><div class="contact-carrier">SBLI</div><div class="contact-info">Escalate to Nav Level 2 → Nav Support checks guide → notifies TechF + SBLI for reset (Level 3)</div></div>
          <div class="contact-card"><div class="contact-carrier">UHL</div><div class="contact-info"><a href="mailto:Life.ContactCenter@unitedhomelife.com">Life.ContactCenter@unitedhomelife.com</a></div></div>
          <div class="contact-card"><div class="contact-carrier">F&G</div><div class="contact-info"><a href="mailto:riskassessment@fglife.com">riskassessment@fglife.com</a></div></div>
        </div>
      </div>
      <div class="detail-section">
        <div class="detail-section-title">Post-Issue / Policy Questions (Purchase Complete)</div>
        <p style="margin-bottom:10px;font-size:12px">e.g. "Can I change payment method?" or "Can I change my beneficiary?"</p>
        <div class="contact-grid">
          <div class="contact-card"><div class="contact-carrier">AmAm</div><div class="contact-info"><a href="mailto:CX@aatx.com">CX@aatx.com</a></div></div>
          <div class="contact-card"><div class="contact-carrier">LGA / Banner Life</div><div class="contact-info"><a href="mailto:customerservice@bannerlife.com">customerservice@bannerlife.com</a><br>800-638-8428</div></div>
          <div class="contact-card"><div class="contact-carrier">SBLI</div><div class="contact-info"><a href="mailto:quility@sbli.com">quility@sbli.com</a></div></div>
          <div class="contact-card"><div class="contact-carrier">UHL</div><div class="contact-info"><a href="mailto:Life.ContactCenter@unitedhomelife.com">Life.ContactCenter@unitedhomelife.com</a></div></div>
          <div class="contact-card"><div class="contact-carrier">F&G</div><div class="contact-info">1-888-513-8797 Option 2</div></div>
        </div>
      </div>
      <div class="detail-section">
        <div class="detail-section-title">New Business Case Management (Received → Offer/Pay/Issue)</div>
        <div class="contact-grid">
          <div class="contact-card"><div class="contact-carrier">AmAm</div><div class="contact-info"><a href="mailto:underwriting@aatx.com">underwriting@aatx.com</a></div></div>
          <div class="contact-card"><div class="contact-carrier">LGA / Banner Life</div><div class="contact-info"><a href="mailto:Bannerbeyond@bannerlife.com">Bannerbeyond@bannerlife.com</a><br>833-706-2317</div></div>
          <div class="contact-card"><div class="contact-carrier">SBLI</div><div class="contact-info">Agent Access Line: 888-224-7254 Option #3<br><a href="mailto:EasyTrak@sbli.com">EasyTrak@sbli.com</a></div></div>
          <div class="contact-card"><div class="contact-carrier">UHL</div><div class="contact-info"><a href="mailto:Life.ContactCenter@unitedhomelife.com">Life.ContactCenter@unitedhomelife.com</a></div></div>
          <div class="contact-card"><div class="contact-carrier">F&G</div><div class="contact-info"><a href="mailto:LifeCaseMgmt@fglife.com">LifeCaseMgmt@fglife.com</a></div></div>
        </div>
      </div>
      <div class="detail-section">
        <div class="detail-section-title">Carrier Agent Portal Access</div>
        <div class="contact-grid">
          <div class="contact-card"><div class="contact-carrier">AmAm</div><div class="contact-info"><a href="mailto:helpdesk@aatx.com">helpdesk@aatx.com</a></div></div>
          <div class="contact-card"><div class="contact-carrier">LGA / Banner Life</div><div class="contact-info"><a href="mailto:Bannerbeyond@bannerlife.com">Bannerbeyond@bannerlife.com</a><br>877-454-2287</div></div>
          <div class="contact-card"><div class="contact-carrier">SBLI — Customer Platform (mysbli.com)</div><div class="contact-info">Call SBLI Customer Service: 800-694-7254</div></div>
          <div class="contact-card"><div class="contact-carrier">SBLI — Agent Platform (SBLIagent.com)</div><div class="contact-info">Brokerage Team: 888-224-7254 Option #1<br><a href="mailto:quility@sbli.com">quility@sbli.com</a></div></div>
          <div class="contact-card"><div class="contact-carrier">UHL</div><div class="contact-info"><a href="mailto:lifevendors@infarmbureau.com">lifevendors@infarmbureau.com</a></div></div>
        </div>
      </div>
      <div class="detail-section">
        <div class="detail-section-title">Policy Commission Questions</div>
        <div class="contact-grid">
          <div class="contact-card"><div class="contact-carrier">AmAm</div><div class="contact-info"><a href="mailto:commissions@aatx.com">commissions@aatx.com</a></div></div>
          <div class="contact-card"><div class="contact-carrier">LGA / Banner Life</div><div class="contact-info"><a href="mailto:commission@bannerlife.com">commission@bannerlife.com</a></div></div>
          <div class="contact-card"><div class="contact-carrier">SBLI</div><div class="contact-info"><a href="mailto:sblicommissions@sbli.com">sblicommissions@sbli.com</a></div></div>
          <div class="contact-card"><div class="contact-carrier">UHL</div><div class="contact-info"><a href="mailto:Life.ContactCenter@unitedhomelife.com">Life.ContactCenter@unitedhomelife.com</a></div></div>
          <div class="contact-card"><div class="contact-carrier">F&G</div><div class="contact-info"><a href="mailto:commission.support@fglife.com">commission.support@fglife.com</a></div></div>
        </div>
      </div>
      <div class="detail-section">
        <div class="detail-section-title">Quility Commission Structures (Hierarchy, Contracting)</div>
        <div class="info-box">ℹ️ <span>For all carriers: Escalate to a ticket so Quility can send to the correct team (hierarchy or contracting).</span></div>
        <p>Includes: how commissions relate to other products, hierarchy / upline / downline questions, training/expectations, promotions & incentives.</p>
      </div>
      <div class="detail-section">
        <div class="detail-section-title">F&G Illustrations (Quantum)</div>
        <div class="contact-grid">
          <div class="contact-card"><div class="contact-carrier">F&G</div><div class="contact-info">Start with LMS → escalate to F&G Sales Desk: <a href="mailto:Life.Sales@fglife.com">Life.Sales@fglife.com</a></div></div>
        </div>
      </div>
    `
  },
  {
    id: 10,
    cat: "applications",
    catLabel: "Applications",
    catColor: "#ff9f43",
    catBg: "rgba(255,159,67,0.1)",
    icon: "📝",
    title: "Clarifying Questions Before Creating a Ticket",
    summary: "Always gather these 3 pieces of info before escalating any Navigator application issue to a ticket.",
    tags: ["process", "ticket", "clarifying", "best practice"],
    escalation: "L1",
    body: `
      <div class="detail-section">
        <div class="detail-section-title">Required Before Escalating</div>
        <ol class="step-list">
          <li><span class="step-num">1</span><span><strong>Client's Full Name</strong> — to verify and look up the account.</span></li>
          <li><span class="step-num">2</span><span><strong>Carrier</strong> — which carrier is the application associated with?</span></li>
          <li><span class="step-num">3</span><span><strong>Screenshot</strong> — of the page/error they are experiencing. If there's an error message, make sure it's visible in the screenshot.</span></li>
        </ol>
      </div>
      <div class="detail-section">
        <div class="detail-section-title">Why This Matters</div>
        <p>Having all three pieces upfront prevents unnecessary back-and-forth and helps Level 2 teams resolve issues faster. Never skip the screenshot — it's often the fastest way to identify the root cause.</p>
      </div>
    `
  }
];

// =====================
// STATE
// =====================
let currentCat = 'all';
let activeTags = [];
let searchQuery = '';

// =====================
// HOME / ARTICLES NAV
// =====================
function showHome() {
  document.getElementById('home-wrapper').classList.add('active');
  document.getElementById('articles-page').classList.remove('active');
  document.getElementById('home-nav-btn').classList.remove('visible');
  document.getElementById('search').value = '';
  searchQuery = '';
  renderCards();
}

function showArticles() {
  document.getElementById('home-wrapper').classList.remove('active');
  document.getElementById('articles-page').classList.add('active');
  document.getElementById('home-nav-btn').classList.add('visible');
}

function goToCat(cat) {
  showArticles();
  currentCat = cat;
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  const btn = document.querySelector(`.cat-btn[data-cat="${cat}"]`);
  if (btn) btn.classList.add('active');
  const titles = {all: 'All Articles', access: 'Access & Training', licensing: 'Licensing', carriers: 'Carriers & Products', applications: 'Applications', declined: 'Declined Applications', escalation: 'Escalation Matrix'};
  document.getElementById('results-title').textContent = titles[cat] || cat;
  renderCards();
}

// =====================
// RENDER HELPERS
// =====================
function renderAllTags() {
  const allTags = [...new Set(articles.flatMap(a => a.tags))].sort();
  const container = document.getElementById('tags-list');
  container.innerHTML = allTags.map(t =>
    `<button class="tag-filter" onclick="toggleTag('${t}', this)">${t}</button>`
  ).join('');
}

function updateCounts() {
  const cats = ['all','access','licensing','carriers','applications','declined','escalation'];
  cats.forEach(cat => {
    const count = cat === 'all' ? articles.length : articles.filter(a => a.cat === cat).length;
    const el = document.getElementById('count-' + cat);
    if (el) el.textContent = count;
  });
}

function filteredArticles() {
  return articles.filter(a => {
    const matchCat = currentCat === 'all' || a.cat === currentCat;
    const matchTags = activeTags.length === 0 || activeTags.every(t => a.tags.includes(t));
    const matchSearch = !searchQuery ||
      a.title.toLowerCase().includes(searchQuery) ||
      a.summary.toLowerCase().includes(searchQuery) ||
      a.tags.some(t => t.toLowerCase().includes(searchQuery)) ||
      a.catLabel.toLowerCase().includes(searchQuery);
    return matchCat && matchTags && matchSearch;
  });
}

function highlight(text) {
  if (!searchQuery) return text;
  const re = new RegExp(`(${searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(re, '<mark>$1</mark>');
}

function renderCards() {
  const items = filteredArticles();
  const grid = document.getElementById('cards-grid');
  const empty = document.getElementById('empty-state');
  const countEl = document.getElementById('results-count');

  countEl.textContent = `${items.length} article${items.length !== 1 ? 's' : ''}`;

  if (items.length === 0) {
    grid.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  grid.innerHTML = items.map(a => {
    const escClass = a.escalation === 'L1' ? 'esc-l1' : 'esc-l2';
    const tags = a.tags.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('');
    return `
      <div class="card" style="--card-color:${a.catColor};--card-color-bg:${a.catBg}" onclick="openDetail(${a.id})">
        <div class="card-top">
          <div class="card-icon">${a.icon}</div>
          <div class="card-title">${highlight(a.title)}</div>
        </div>
        <div class="card-summary">${highlight(a.summary)}</div>
        <div class="card-footer">
          ${tags}
          <span class="escalation-badge ${escClass}" style="margin-left:auto">${a.escalation}</span>
        </div>
      </div>
    `;
  }).join('');
}

function filterCat(cat, btn) {
  currentCat = cat;
  showArticles();
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const titles = {all: 'All Articles', access: 'Access & Training', licensing: 'Licensing', carriers: 'Carriers & Products', applications: 'Applications', declined: 'Declined Applications', escalation: 'Escalation Matrix'};
  document.getElementById('results-title').textContent = titles[cat] || cat;
  renderCards();
}

function toggleTag(tag, btn) {
  if (activeTags.includes(tag)) {
    activeTags = activeTags.filter(t => t !== tag);
    btn.classList.remove('active');
  } else {
    activeTags.push(tag);
    btn.classList.add('active');
  }
  renderCards();
}

// =====================
// DETAIL PANEL
// =====================
function openDetail(id) {
  const a = articles.find(x => x.id === id);
  if (!a) return;
  document.getElementById('d-cat').textContent = a.catLabel;
  document.getElementById('d-title').textContent = a.title;
  document.getElementById('d-tags').innerHTML = a.tags.map(t => `<span class="tag">${t}</span>`).join('');
  document.getElementById('d-body').innerHTML = a.body;
  document.getElementById('detail-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDetailBtn() {
  document.getElementById('detail-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeDetail(e) {
  if (e.target === document.getElementById('detail-overlay')) {
    closeDetailBtn();
  }
}

// =====================
// COPY
// =====================
function copyText(btn) {
  const box = btn.closest('.copy-box');
  const contentEl = box.querySelector('.copy-box-content');
  const text = contentEl ? contentEl.innerText.trim() : '';
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = 'Copied!';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2000);
  });
}

// =====================
// INIT
// =====================
function init() {
  renderAllTags();
  renderCards();
  updateCounts();

  // Populate home page category counts
  ['access','licensing','carriers','applications','declined','escalation'].forEach(cat => {
    const count = articles.filter(a => a.cat === cat).length;
    const el = document.getElementById('hc-count-' + cat);
    if (el) el.textContent = `${count} article${count !== 1 ? 's' : ''}`;
  });

  // Search input
  document.getElementById('search').addEventListener('input', e => {
    searchQuery = e.target.value.toLowerCase();
    if (searchQuery && !document.getElementById('articles-page').classList.contains('active')) {
      currentCat = 'all';
      showArticles();
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      document.querySelector('.cat-btn[data-cat="all"]').classList.add('active');
      document.getElementById('results-title').textContent = 'All Articles';
    }
    renderCards();
  });
}

// =====================
// KEY EVENTS
// =====================
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeDetailBtn();
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    document.getElementById('search').focus();
  }
});

// =====================
// BOOT
// =====================
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
