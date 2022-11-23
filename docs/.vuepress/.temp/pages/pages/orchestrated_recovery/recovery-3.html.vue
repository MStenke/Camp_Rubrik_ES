<template><div><h1 id="in-place-recovery" tabindex="-1"><a class="header-anchor" href="#in-place-recovery" aria-hidden="true">#</a> In-Place recovery</h1>
<p>Zaffre has the Rubrik Enterprise Edition suite, and now you will leverage the deep integrations to kick off an in-place recovery.</p>
<p>To do this, first switch to the <strong>Ransomware Investigation</strong> app in the app-tray in the top right of your screen.</p>
<p>Click the <strong>Investigations</strong> tab in the top center of the screen. You can see the Haverford_Site blueprint from Orchestrated Application Recovery.</p>
<p><img src="@source/pages/orchestrated_recovery/images/IPR1.png" alt="Ransomware Investigation Blueprint View"></p>
<p>From here, you can see clearly that there is suspicious activity, particularly on the <strong>haverford-webapp-01</strong> virtual machine. Check the box to select the <strong>Haverford_Site</strong> blueprint, then click Recover.</p>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>Notice that when you select the app, you are also able to download a CSV detailing all suspicious activity detected in the component virtual machines.</p>
</div>
<p>You can notice that this defaults to recovering the VM to the closest snapshot to the point in time that you've selected. As Zaffre is recovering from a ransomware attack, it's important that a clean recovery point is selected.</p>
<p>Click the Edit button for the blueprint.</p>
<p><img src="@source/pages/orchestrated_recovery/images/IPR2.png" alt="In-place recovery wizard"></p>
<p>You need to find a clean snapshot.</p>
<p>Click &quot;Select a snapshot&quot; for the first VM.</p>
<p><img src="@source/pages/orchestrated_recovery/images/IPR3.png" alt="In-place recovery wizard-Snapshot selection"></p>
<p>You should notice the details when the first anomaly was detected, along with suspicious/added/modified/deleted activities. You will also see one (or potentially multiple) snapshots have a yellow circle with an exclamation mark - these snapshots are considered to be unsafe recovery points, so select the snapshot immediately prior to this. Click Save, then do the same thing for the second VM.</p>
<div class="custom-container warning"><p class="custom-container-title">Note</p>
<p>Depending on how long ago the labs were pre-provisioned, the snapshot with anomaly and the good snapshot may be on the second page.</p>
</div>
<p><img src="@source/pages/orchestrated_recovery/images/IPR4.png" alt="Select the clean recovery point"></p>
<p><img src="@source/pages/orchestrated_recovery/images/IPR5.png" alt="Select the clean recovery point 2"></p>
<p>Click Update. You may notice options to enable agent-based reconfiguration and ignore network reconfiguration errors and continue. Click Update to proceed.</p>
<p>Click Next. You'll now see a warning. As in-place recovery overwrites the existing virtual machines, you have a final check to prevent accidental clicking: click into the free text field and type BLUEPRINT. Once this is done, the Recover button is clickable.</p>
<p><img src="@source/pages/orchestrated_recovery/images/IPR6.png" alt="his is the last point at which you can turn back!"></p>
<p>You can now see that the recovery has begun and can track the progress on the Recoveries dashboard. Click the button to Go To Recoveries.</p>
<p><img src="@source/pages/orchestrated_recovery/images/IPR7.png" alt="Recovery In Progress"></p>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>The recovery activity may take a moment to be shown under Recoveries.</p>
</div>
<p>Monitor the failover through to completion. This may take a few minutes. Once the recovery is successfully completed, you need to validate that the Haverford website is back up and running.</p>
<p>Open a new tab in your browser, and click the shortcut to the Haverford site.  You should see it is back up and running.</p>
<p><img src="@source/pages/orchestrated_recovery/images/Haverfordup.png" alt="take one of those P62 Anywhere Shirts: what a discount!"></p>
<iframe title="vimeo-player" src="https://player.vimeo.com/video/716514475?h=eaf817797f&title=0" width="640" height="360" frameborder="0" allowfullscreen></iframe>
Congratulations!
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>Using Orchestrated Application Recovery and few clicks you got Haverford up and running within the hour vs. days or weeks!</p>
</div>
</div></template>


