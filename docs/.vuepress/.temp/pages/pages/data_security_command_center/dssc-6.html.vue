<template><div><h1 id="multi-factor-authentication-mfa-with-time-based-one-time-passwords-totp" tabindex="-1"><a class="header-anchor" href="#multi-factor-authentication-mfa-with-time-based-one-time-passwords-totp" aria-hidden="true">#</a> Multi-factor Authentication (MFA) with Time-based One-Time Passwords (TOTP)</h1>
<p>Now that your environment is up and running and you have some insight into the security score let's set up MFA with TOTP for the user to add an additional layer of security to avoid any unauthorized access to the environment.</p>
<div class="custom-container warning"><p class="custom-container-title">Note</p>
<p>Please <strong>download</strong> and configure one of the following <strong>third-party authenticator</strong> applications <strong>on your phone</strong> to enable a Multi-factor Authentication or two-step verification configuration.</p>
<ul>
<li>Google Authenticator</li>
<li>Microsoft Authenticator</li>
<li>Okta Authenticator
If you already have one on your phone, feel free to use it by adding a new Organization.</li>
</ul>
</div>
<ol>
<li>Under the user icon, click <strong>User Preferences</strong> and navigate to Multi-factor authentication.</li>
</ol>
<p><img src="@source/pages/data_security_command_center/images/1.png" alt="Set up MFA"></p>
<ol start="2">
<li>Toggle the button to turn on Multi-factor authentication, as it is currently disabled for this user</li>
</ol>
<p><img src="@source/pages/data_security_command_center/images/2.png" alt="Set up MFA"></p>
<ol start="3">
<li>
<p>Open the Authenticator on your phone and add an Organization or scan a QR code.</p>
</li>
<li>
<p>Enter the code from your Authenticator app into the <strong>Verification Code</strong>. Click <strong>Continue</strong>.</p>
</li>
</ol>
<p><img src="@source/pages/data_security_command_center/images/mfa setup.gif" alt="Set up MFA"></p>
<ol start="5">
<li>Under the user icon, click Logout. Re-login to RSC, and now you can enter the TOTP as the verification code from your authenticator application.</li>
</ol>
<p><img src="@source/pages/data_security_command_center/images/relogin.gif" alt="Re-login"></p>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>Rubrik MFA provides an additional authentication security layer. In addition to the username and password, TOTP uses an app to deliver a single-use numeric code as the second authentication factor.</p>
</div>
</div></template>


