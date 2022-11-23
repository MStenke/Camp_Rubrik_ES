<template><div><h1 id="sla-driven-policy-engine" tabindex="-1"><a class="header-anchor" href="#sla-driven-policy-engine" aria-hidden="true">#</a> SLA driven policy engine</h1>
<p>To finish the migration process, let's look at the inventory to ensure you know all the VMs that need to be backed up. Let's start with the inventory.</p>
<h2 id="accessing-rubrik-security-cloud" tabindex="-1"><a class="header-anchor" href="#accessing-rubrik-security-cloud" aria-hidden="true">#</a> Accessing Rubrik Security Cloud</h2>
<p>First, connect to the Rubrik Security Cloud. Start the Google Chrome browser from the jump host. Click on the <strong>Lab_Credentials</strong> bookmark. From here, click the Rubrik hyperlink and open that in a new tab. You'll need the Rubrik Username and Rubrik Password to login. Use these credentials on the new tab that you opened.</p>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>Note that the lab guide name will reflect this lab, not necessarily the name in the image below. Please use the copy button for username and password.</p>
</div>
<p><img src="@source/pages/welcome_to_zaffre/images/1st login.gif" alt="Access Rubrik Security Cloud"></p>
<p>Click <strong>Inventory</strong> from the top ribbon and then <strong>vSphere Virtual Machines</strong>. You can see all the VMs that are protected and unprotected VMs. For now, you can focus on the unprotected VMs: haverford-dev, zaffre-dev, and zaffre-test.</p>
<p><img src="@source/pages/welcome_to_zaffre/images/inventory.gif" alt="RSC Inventory"></p>
<h2 id="sla-domains" tabindex="-1"><a class="header-anchor" href="#sla-domains" aria-hidden="true">#</a> SLA Domains</h2>
<p>By default, there are three SLA domains with RSC: Bronze, silver, and Gold. To protect the VMs, create an SLA domain.
Click <strong>SLA Domains</strong> from the top ribbon and then <strong>CREATE SLA DOMAIN</strong>. Click <strong>CREATE</strong>, select <strong>vSphere VM</strong>, and click <strong>NEXT</strong>. Specify <strong>Every 6 hours</strong> as the frequency, and retain snapshots for 7 day. Keep everything else as default, specify Demo as the SLA Domain name, and click <strong>CREATE</strong>.</p>
<p><img src="@source/pages/welcome_to_zaffre/images/CreateSLA.gif" alt="Create SLA Domain"></p>
<h2 id="sla-domain-assignment" tabindex="-1"><a class="header-anchor" href="#sla-domain-assignment" aria-hidden="true">#</a> SLA Domain Assignment</h2>
<p>Now that you have created the SLA Domain, it's time to assign for you to assign it to the unprotected VMs and ensure it's protected.
To get started, head back to <strong>Inventory</strong> and <strong>vSphere Virtual Machines</strong>. Select haverford-dev, zaffre-dev, zaffre-test and click <strong>MANAGE PROTECTION</strong>. Select <strong>Demo</strong> SLA domain from the list, click <strong>NEXT</strong>, and lastly, click <strong>ASSIGN</strong>.</p>
<p><img src="@source/pages/welcome_to_zaffre/images/SLA Domain Assignment.gif" alt="SLA Domain Assignment"></p>
<p>Now you have completed the SLA Domain assignment.</p>
<h2 id="on-demand-backup" tabindex="-1"><a class="header-anchor" href="#on-demand-backup" aria-hidden="true">#</a> On-demand backup</h2>
<p>As an administrator, you need to ensure that you schedule an on-demand backup.
Select haverford-dev VM from the inventory list. From the top right, click TAKE ON DEMAND SNAPSHOT and leave the rest of the details as defaults.</p>
<p><img src="@source/pages/welcome_to_zaffre/images/ondemandsnapshot.gif" alt="On-demand backup"></p>
<p>Repeat the steps for zaffre-dev and zaffre-test.</p>
<div class="custom-container tip"><p class="custom-container-title">Info</p>
<p>Rubrik’s robust SLA policy engine ensures that data is where it needs to be when it needs to be there, enabling Rubrik to deliver rapid recovery combined with the security provided by encryption and an immutable filesystem.</p>
</div>
<p>Excellent job for completing the migration and protection of workloads! Let's make sure you can recover the applications quickly when needed.</p>
</div></template>


