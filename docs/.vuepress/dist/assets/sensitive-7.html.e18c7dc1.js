import{_ as e,o as t,c as o,e as a}from"./app.75e41463.js";const s="/assets/export_report.a3723b88.gif",i="/assets/export_legal_team_report.bfde2f4d.gif",n={},r=a('<h1 id="reporting" tabindex="-1"><a class="header-anchor" href="#reporting" aria-hidden="true">#</a> Reporting</h1><p>Having access to this kind of information is invaluable. Keeping track of where you have sensitive data in your environments means that you can take the actions required to secure it - maybe you need to move it to secure locations in your filesystems, or maybe you shouldn&#39;t be holding that data at all. Visibility into the what and where of sensitive data is a major challenge.</p><p>You can now create a report for the legal team, so they know what sensitive data is held, where it resides, and who has access to it. Navigate to <strong>Objects</strong>, then select <strong>zaffre-webapp-01</strong>. From this screen, click <strong>Download CSV For Files With Hits</strong>, and you&#39;ll notice that Rubrik creates the file in the background for you. When it&#39;s ready, you can click the Download button to download the file.</p><p><img src="'+s+'" alt="Download Hit Report"></p><p>You can also create a little more in-depth report, by using the Reports function. Browse there now.</p><p>Click Create Report.</p><p><img src="'+i+'" alt="Sensitive Data Discovery Reports view"></p><p>To the left of the screen, you can see the various different types of workloads that Sensitive Data Discovery can analyze: vSphere, AHV, and Hyper-V VMs and also NAS, Windows, and Linux filesets. You can also select across multiple Rubrik CDM clusters. Finally, at the bottom, you can select from the policies defined in this environment.</p><p>Create a report for vSphere VMs, on the Rubrik-Demo1 cluster, for US Financial, PCI-DSS, and GLBA. Once this report is saved, click on the ellipsis button. Generate and download the PDF, which you can ship to the legal team!</p><div class="custom-container tip"><p class="custom-container-title">Note</p><p>You can download sensitive data reports, which can be used by legal and compliance team!</p></div>',10),c=[r];function l(h,d){return t(),o("div",null,c)}const u=e(n,[["render",l],["__file","sensitive-7.html.vue"]]);export{u as default};