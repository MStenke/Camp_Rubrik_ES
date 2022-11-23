<template><div><h1 id="lab-environment" tabindex="-1"><a class="header-anchor" href="#lab-environment" aria-hidden="true">#</a> Lab environment</h1>
<div class="custom-container danger"><p class="custom-container-title">WARNING</p>
<p>This is a virtualized lab environment. All systems are running with nested virtualization. This being the case, no expectation for performance should be assumed while using this lab, nor should you consider this lab reflective of the performance expected in a production deployment. <strong>This lab is for demo and educational purposes only.</strong></p>
</div>
<p>The Rubrik lab environment consists of multiple cloud-hosted virtual machines used to emulate the web application and protection of the Zaffre fashion group.</p>
<ul>
<li><strong>AD1</strong> = Windows VM for Active Directory, DHCP, and DNS services covering both virtual sites in the rubrik.lab domain.</li>
<li><strong>ESX1</strong> = This is an unmanaged (no vCenter) virtual ESXi Host used to host the Rubrik Edge CDM instances supporting this lab. You should not need to interact with this host through the consoles.</li>
<li><strong>VC1</strong> = These are the ESXi Hosts that contain the test Linux VMs and the vCenter instances supporting each virtual data center.</li>
<li><strong>Jump</strong> = This is the VM where you will interact via browser with the lab's various components.</li>
<li><strong>Startup</strong> = This VM hosts all of the automation used to provision this lab. You may ignore this VM and should not need to interact with it at all. <strong>It should remain powered off.</strong></li>
</ul>
<p>These serve as the infrastructure for the Zaffre Fashion Group and Haverford websites.</p>
<h2 id="accessing-rubrik-security-cloud" tabindex="-1"><a class="header-anchor" href="#accessing-rubrik-security-cloud" aria-hidden="true">#</a> Accessing Rubrik Security Cloud</h2>
<p>To connect to the Rubrik Security Cloud, start the Google Chrome browser from the jump host. Click on the <strong>Lab Credentials</strong> bookmark. This bookmark contains the Rubrik Security Cloud URL, username &amp; password for all required hosts.</p>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>Rubrik Security Cloud is referred to as Rubrik in the credentials bookmark. Please use the copy button for username and password.
Note that the lab guide name will reflect this lab, not necessarily the name in the image below.</p>
</div>
<p>From here, right-click and open the Rubrik hyperlink. Enter the specified username and password by copying both from the Lab Credentials page. Click on <strong>I AGREE</strong>. On the next screen for Enable Multi-Factor Authentication, click on <strong>SKIP FOR NOW</strong>.</p>
<p><img src="@source/pages/lab_environment/images/intial_rsc_access.gif" alt="Initial RSC Access"></p>
<p>Enter <strong>Demo</strong> as the username, first name, last name, title, and company. For email, enter <strong>demo@xyz.com</strong>.</p>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>Reduce the zoom to 75% in your Chrome environment for the lab to be most easily accessible.</p>
</div>
</div></template>


