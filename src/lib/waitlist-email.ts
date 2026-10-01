const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://clonao.com";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function confirmationEmail() {
  const logoUrl = `${siteUrl.replace(/\/$/, "")}/clonao-logo.png`;

  return {
    subject: "You’re in — welcome to Clonao",
    text: "You’re officially on the Clonao early access list.\n\nWe’re building Clonao to help you know exactly what to do next with your personal brand — what to focus on, what to create, and what will actually move you forward.\n\nWe’ll let you know as soon as early access opens.\n\nSee you inside,\nTeam Clonao",
    html: `<!doctype html>
<html lang="en">
  <body style="margin:0;background:#eef6fc;color:#132238;font-family:Arial,Helvetica,sans-serif;">
    <div style="padding:40px 16px;">
      <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #dce9f5;border-radius:24px;overflow:hidden;box-shadow:0 18px 50px rgba(20,65,103,.12);">
        <div style="height:6px;background:linear-gradient(90deg,#0b4dff,#8ccbff,#dceeff);"></div>
        <div style="padding:40px 40px 44px;">
          <img src="${escapeHtml(logoUrl)}" alt="Clonao" width="42" height="42" style="display:block;width:42px;height:42px;object-fit:contain;margin-bottom:30px;" />
          <p style="margin:0 0 18px;font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:#3977a9;font-weight:700;">Clonao early access</p>
          <h1 style="margin:0 0 20px;font-size:34px;line-height:1.08;letter-spacing:-.05em;color:#132238;">You’re officially on the list.</h1>
          <p style="margin:0 0 16px;font-size:17px;line-height:1.65;color:#53677c;">We’re building Clonao to help you know exactly what to do next with your personal brand — what to focus on, what to create, and what will actually move you forward.</p>
          <p style="margin:0 0 30px;font-size:17px;line-height:1.65;color:#53677c;">We’ll let you know as soon as early access opens.</p>
          <p style="margin:0;font-size:16px;line-height:1.6;color:#132238;">See you inside,<br /><strong>Team Clonao</strong></p>
        </div>
      </div>
      <p style="margin:22px auto 0;max-width:560px;text-align:center;font-size:12px;line-height:1.5;color:#8294a7;">You received this because you joined the Clonao waitlist.</p>
    </div>
  </body>
</html>`,
  };
}
