<template><div><h1 id="forensic-investigations" tabindex="-1"><a class="header-anchor" href="#forensic-investigations" aria-hidden="true">#</a> Forensic investigations</h1>
<h4 id="the-clean-room-recovery" tabindex="-1"><a class="header-anchor" href="#the-clean-room-recovery" aria-hidden="true">#</a> The Clean Room Recovery</h4>
<p>If an IoC is detected, it may be desirable to mount a snapshot for further forensic investigations. These investigations are usually performed in a Clean Room environment, disconnected from the regular network to protect against the further spread of any potential malware. Rubrik's Live Mount capability is ideal for just such a scenario, allowing any snapshot (including those identified by Threat Monitoring &amp; Hunting) to be instantiated live on the Rubrik cluster. Let's take a look at what this looks like.</p>
<p>Launch <strong>Ransomware Investigation</strong> from the Rubrik Security Cloud app tray to get started. Navigate to the <strong>Investigations</strong> page. Expand the <strong>Haverford_site</strong> blueprint. <strong>Click</strong> on <strong>haverford-webapp-01 VM</strong>.</p>
<p><img src="@source/pages/threat_monitoring_hunting/images/access_haverford_vm.gif" alt="Access the Haverford-WebApp-01 VM"></p>
<p>Click on <strong>Recover Full Snapshot</strong>.</p>
<p><img src="@source/pages/threat_monitoring_hunting/images/recover_full_snapshot.png" alt="Recovery"></p>
<p>Click <strong>Change Selected Snapshot</strong> to select the infected snapshot in a clean environment.</p>
<p><img src="@source/pages/threat_monitoring_hunting/images/change_selected_snapshot.png" alt="Change the selected snapshot"></p>
<p>Scroll down to select the <strong>snapshot with a yellow circle with an exclamation mark</strong>. Click <strong>Close</strong>.</p>
<p><img src="@source/pages/threat_monitoring_hunting/images/anomalous_behaviour_detected.png" alt="Select Snapshot"></p>
<p>Click <strong>Next</strong>.</p>
<p><img src="@source/pages/threat_monitoring_hunting/images/confirm_snapshot_selection.png" alt="Confirm Snapshot selection"></p>
<p>Select <strong>Live Mount</strong> as the recovery option, and click <strong>Next</strong>.</p>
<p><img src="@source/pages/threat_monitoring_hunting/images/live_mount.png" alt="Recovery Options"></p>
<p>Select <strong>Cluster</strong> as the destination and click <strong>Next</strong>.</p>
<p><img src="@source/pages/threat_monitoring_hunting/images/vm_recovery.png" alt="Select Destination Cluster"></p>
<p>Click <strong>Mount</strong>.</p>
<p><img src="@source/pages/threat_monitoring_hunting/images/mount.png" alt="Click Mount to being the Live Mount process"></p>
<p>Navigate to <strong>Data Protection</strong> from the app tray and click <strong>Live Mounts</strong> in the top right to verify the mount.</p>
<p><img src="@source/pages/threat_monitoring_hunting/images/verifyLM.gif" alt="Verify Live Mount"></p>
<p>Open a new tab in your browser, and click the shortcut to the <strong>esxi-vcenter1.rubrik.lab</strong>. Login with the credentials on <strong>Lab_Credentials</strong> page.</p>
<p>After login, select Virtual Machines, and the Live Mount should be mounted as <strong>haverford-webapp-01 %dateofthesnapshot%</strong> such as <strong>haverford-webapp-01 07-22</strong>.</p>
<p><img src="@source/pages/threat_monitoring_hunting/images/FI9.gif" alt="ESXi Host "></p>
<p>Launch the vSphere Client and log in using the credentials on <strong>Lab_Credentials</strong> page for <strong>haverford-webapp-01</strong>.</p>
<p><img src="@source/pages/threat_monitoring_hunting/images/verifyLM (1).gif" alt="Verify Live Mount VM"></p>
<p>Now you can log in to the Live Mounted VM, install your favorite forensic tool, neutralize the malware, and restore to the latest and clean copy.</p>
<div class="custom-container tip"><p class="custom-container-title">Info</p>
<p>Rubrik Threat Monitoring &amp; Hunting enables you to find the snapshot with malware and mount the infected snapshot in a clean room environment instantly without affecting your production environment and neutralize the malware!
You can then restore to the latest and clean copy of data.</p>
</div>
</div></template>


