<template><div><h1 id="role-based-access-control-rbac" tabindex="-1"><a class="header-anchor" href="#role-based-access-control-rbac" aria-hidden="true">#</a> Role Based Access Control (RBAC)</h1>
<p>It is important that you do not give admin privileges to all of the members of the team. Since a new junior administrator is joining your team, you can have a customized role for the new user and add privileges as you see fit.</p>
<h2 id="create-roles-and-users" tabindex="-1"><a class="header-anchor" href="#create-roles-and-users" aria-hidden="true">#</a> Create Roles and Users</h2>
<p>To get started:</p>
<ol>
<li>From the top right, click on the <strong>gear icon</strong> and navigate to <strong>Users and Roles</strong>.</li>
</ol>
<p><img src="@source/pages/welcome_to_zaffre/images/1.png" alt="Access Users and Roles"></p>
<ol start="2">
<li>Navigate to <strong>ROLES</strong> and click <strong>CREATE ROLE</strong>.</li>
</ol>
<p><img src="@source/pages/welcome_to_zaffre/images/1-(1).png" alt="Create role"></p>
<ol start="3">
<li>From the templates, select <strong>Custom role</strong>.</li>
</ol>
<p><img src="@source/pages/welcome_to_zaffre/images/2.png" alt="Custom role"></p>
<ol start="4">
<li>Add a Role name, e.g. Demo. For the <strong>Data Management</strong> role card, select <strong>CONFIGURE</strong>.</li>
</ol>
<p><img src="@source/pages/welcome_to_zaffre/images/3.png" alt="Configure Data Management role"></p>
<p>5.Select <strong>vSphere</strong> as the <strong>Object type</strong>. Click edit icon for All protectable objects.</p>
<p><img src="@source/pages/welcome_to_zaffre/images/5.png" alt="Object type vShere"></p>
<ol start="6">
<li>Select <strong>haverford-dev, zaffre-dev and zaffre-test</strong> and click <strong>Done</strong>.</li>
</ol>
<p><img src="@source/pages/welcome_to_zaffre/images/6.png" alt="Select VMs"></p>
<ol start="7">
<li>Click <strong>Select all existing and future SLA Domains</strong> and click <strong>Done</strong>.</li>
</ol>
<p><img src="@source/pages/welcome_to_zaffre/images/7.png" alt="Select SLA Domains"></p>
<ol start="8">
<li>Click <strong>Create</strong>.</li>
</ol>
<p><img src="@source/pages/welcome_to_zaffre/images/8.png" alt="Create role finish"></p>
<ol start="9">
<li>Ensure that the new role is added under Roles.</li>
</ol>
<p><img src="@source/pages/welcome_to_zaffre/images/9.png" alt="Check role is added"></p>
<h2 id="assign-custom-role-to-new-user" tabindex="-1"><a class="header-anchor" href="#assign-custom-role-to-new-user" aria-hidden="true">#</a> Assign custom role to new user</h2>
<p>Now you can add a new local user and assign the new role.</p>
<ol>
<li>Click <strong>USERS</strong> and then click <strong>ADD LOCAL USER</strong>.</li>
</ol>
<p><img src="@source/pages/welcome_to_zaffre/images/2-(1).png" alt="Add local User"></p>
<ol start="2">
<li>Enter <strong>your email</strong> for adding the user so that you can access the email and continue with the new account login. Click <strong>NEXT</strong>.</li>
</ol>
<p><img src="@source/pages/welcome_to_zaffre/images/1-(2).png" alt="Enter Email"></p>
<ol start="3">
<li>Select <strong>Demo</strong> as the Role and click <strong>ADD</strong>.</li>
</ol>
<p><img src="@source/pages/welcome_to_zaffre/images/2-(2).png" alt="Select role"></p>
<ol start="4">
<li>Confirm that the new user is listed with the right role assignment under users.</li>
</ol>
<p><img src="@source/pages/welcome_to_zaffre/images/3-(1).png" alt="Confirm role"></p>
<ol start="5">
<li>Logout from RSC.</li>
</ol>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<ol>
<li>In a few minutes, you will receive an email from Rubrik Polaris. Please check your SPAM mailbox in case you do not receive it.  If you do not receive the email for an extended period, you can go back to the RSC console and enter your email ID and click on Forgot Password. This will generate an email to your inbox as well.</li>
<li>After you log in to RSC with your new role, you will not be able to access all apps, VMs, snapshots, etc., that are part of RSC.</li>
<li>Your inventory access will be limited to three VMs. This can be used to limit access to your environment.</li>
</ol>
</div>
<h2 id="verify-new-role-assignment" tabindex="-1"><a class="header-anchor" href="#verify-new-role-assignment" aria-hidden="true">#</a> Verify new role assignment</h2>
<ol>
<li>From your email, click <strong>Continue</strong>.</li>
</ol>
<p><img src="@source/pages/welcome_to_zaffre/images/6-(1).png" alt="Verif role assignment"></p>
<ol start="2">
<li>On the webpage, add a new password for the account.</li>
</ol>
<p><img src="@source/pages/welcome_to_zaffre/images/7-(1).png" alt="New passwort"></p>
<ol start="3">
<li>
<p>Login with the new account and accept the terms and conditions as before.</p>
</li>
<li>
<p>Navigate to <strong>Inventory</strong>.</p>
</li>
</ol>
<p><img src="@source/pages/welcome_to_zaffre/images/10.png" alt="Inventory"></p>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>You can only see 3 VMs for the new user with the demo role. This can be used to limit access to your environment.</p>
</div>
<ol start="5">
<li>Now, log out of the demo account.</li>
</ol>
<p><img src="@source/pages/welcome_to_zaffre/images/11.png" alt="Log off"></p>
<p>Login to RSC using the regular account credentials mentioned in the <RouterLink to="/pages/lab_environment/lab-0.html">lab environment</RouterLink> section.</p>
</div></template>


