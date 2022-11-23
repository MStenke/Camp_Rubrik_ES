<template><div><h1 id="cyber-incident-response" tabindex="-1"><a class="header-anchor" href="#cyber-incident-response" aria-hidden="true">#</a> Cyber incident response</h1>
<p>By accessing Ransomware Investigation &amp; Monitoring app, you have already established the timeline for the cyber attack. You are already aware that the attackers have encrypted files for Haverford. The legal team would like to know what kind of sensitive information the attackers have access to and encrypted.</p>
<p>To get started, navigate to <strong>Objects</strong> from the top ribbon. Click <strong>haverford-webapp-01</strong>. Click Sensitive hits to change the order from ascending to descending. You will observe that there are 0 sensitive files at this moment.</p>
<p><img src="@source/pages/sensitive_data_discovery/images/SDD_dril_in.gif" alt="Check the VM for sensitive data"></p>
<p>Now let's change the snapshot to before the attack. From the dropdown menu for time, select the 1st snapshot.</p>
<p>You can see that there were sensitive files present in the var folder, which the attackers now encrypted!</p>
<p><img src="@source/pages/sensitive_data_discovery/images/SDD_found.gif" alt="SSD Found"></p>
<p>You can download the list of files with hits by using the <strong>Download CSV For Files With Hits</strong> button on the top right.</p>
<p><img src="@source/pages/sensitive_data_discovery/images/download_csv.png" alt="Download CSV"></p>
<p>Now you have provided the legal and compliance team with the ammunition to get to the bottom of the data access issues.</p>
<div class="custom-container tip"><p class="custom-container-title">Notes</p>
<ul>
<li>With Sensitive Data Monitoring, there is no additional lift to get access information.</li>
<li>There is no impact on production data or the performance of the system.</li>
<li>The same app can scan 10-100's objects that are protected by Rubrik.</li>
</ul>
</div>
</div></template>


