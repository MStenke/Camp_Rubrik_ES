<template><div><h1 id="data-protection-dashboard" tabindex="-1"><a class="header-anchor" href="#data-protection-dashboard" aria-hidden="true">#</a> Data Protection Dashboard</h1>
<p>Rubrik Data Protection is the core Rubrik application to protect your enterprise data with air-gapped, immutable, access-controlled backups. As we dive into the dashboard, you will notice that each tile surfaces key information to the administrator with metrics that are collected across enterprise, cloud, and SaaS workloads.</p>
<p>Once you are logged into RSC, you will be presented with the Data Protection dashboard:</p>
<p><img src="@source/pages/welcome_to_zaffre/images/image.png" alt="Rubrik Data Protection Dashboard"></p>
<p>Let's take a closer look at the key information presented in the Data Protection UI. From the dashboard:</p>
<ol>
<li>In the upper-right, notice that you can monitor cluster health, capacities, and archival statistics at a glance:</li>
</ol>
<p><img src="@source/pages/welcome_to_zaffre/images/image-(1).png" alt="What is the health of my clusters and archives?"></p>
<ol start="2">
<li>In the lower-right, you'll notice you can view all in-progress, failed, completed, and canceled tasks across your Rubrik deployment:</li>
</ol>
<p><img src="@source/pages/welcome_to_zaffre/images/image-(2).png" alt="What is the status of my job tasks?"></p>
<ol start="3">
<li>In the lower left, you can quickly identify your compliance status over the last 24 hours, or in intervals reaching back to the start date of the protection, for any type of workload (Data Center, SaaS, or Cloud) - saving you the troubles of jumping through multiple interfaces to gauge your compliance status over time:</li>
</ol>
<p><img src="@source/pages/welcome_to_zaffre/images/image-(3).png" alt="Is my protection in compliance?"></p>
<ol start="4">
<li>The <strong>Protected Objects</strong> tile in the upper right gives you more granular protection statistics for each category of protected data.</li>
</ol>
<p><img src="@source/pages/welcome_to_zaffre/images/image-(4).png" alt="What is the overall status of my Rubrik deployment?"></p>
<ol start="5">
<li>If you hover over the <strong>Data Center</strong> category, you can quickly identify objects and data that are currently <strong>protected</strong>, set to <strong>do not protect</strong>, and <strong>No SLA</strong>. Instead of running multiple reports across different applications to answer basic questions, you can often find the answer using the Data Protection Dashboard:</li>
</ol>
<p><img src="@source/pages/welcome_to_zaffre/images/image-(5).png" alt="What workloads have I not yet addressed?"></p>
<p>As you'll notice, there are some <strong>vSphere VMs</strong> that are in the <strong>No SLA</strong> category. These are the systems that we need to protect, so let's dive into getting those workloads protected by an SLA policy!</p>
</div></template>


