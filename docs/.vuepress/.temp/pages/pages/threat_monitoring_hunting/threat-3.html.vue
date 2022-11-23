<template><div><h1 id="monitoring-a-threat-hunt-in-progress" tabindex="-1"><a class="header-anchor" href="#monitoring-a-threat-hunt-in-progress" aria-hidden="true">#</a> Monitoring a threat hunt in progress</h1>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>That this page is optional - if you are short on time, please feel free to move on to the next page, where we explore the results of a threat hunt that is already completed.</p>
</div>
<p>At this stage, the definitions of the Threat Hunt are pushed down from the Rubrik control plane, down to the CDM cluster. The Rubrik control plane has no access to the data in the backups, and so the scan is executed on the appliance on-premises (or in the cloud, if using Cloud Cluster).</p>
<p>You can monitor the progress of the threat hunt in the Events tab in Data Protection.</p>
<ul>
<li>From the app-tray in the top-right of the interface, launch <strong>Data Protection</strong></li>
<li>Click on the <strong>Events</strong> tab</li>
<li>In the filter field, Select <strong>&quot;Rubrik-Demo1&quot;</strong> from the Clusters section and select <strong>Threat Hunt</strong> from the <strong>Event Type</strong> section.</li>
<li>It may take a minute or two for the hunt details to appear, as they are first composed on Rubrik, then pushed down to the cluster for execution</li>
</ul>
<p><img src="@source/pages/threat_monitoring_hunting/images/TH7.png" alt="Monitor the progress of the Threat Hunt"></p>
<p>After a few minutes (dependent on the parameters that you specified for the hunt), you should see the hunt move to Completed status. You can then move back to the Threat Hunt interface to explore the findings of the hunt.</p>
</div></template>


