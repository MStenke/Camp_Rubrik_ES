# Reporting

Having access to this kind of information is invaluable. Keeping track of where you have sensitive data in your environments means that you can take the actions required to secure it - maybe you need to move it to secure locations in your filesystems, or maybe you shouldn't be holding that data at all. Visibility into the what and where of sensitive data is a major challenge.

You can now create a report for the legal team, so they know what sensitive data is held, where it resides, and who has access to it. Navigate to **Objects**, then select **zaffre-webapp-01**. From this screen, click **Download CSV For Files With Hits**, and you'll notice that Rubrik creates the file in the background for you. When it's ready, you can click the Download button to download the file.

![Download Hit Report](./images/export_report.gif)

You can also create a little more in-depth report, by using the Reports function. Browse there now.

Click Create Report.

![Sensitive Data Discovery Reports view](./images/export_legal_team_report.gif)

To the left of the screen, you can see the various different types of workloads that Sensitive Data Discovery can analyze: vSphere, AHV, and Hyper-V VMs and also NAS, Windows, and Linux filesets. You can also select across multiple Rubrik CDM clusters. Finally, at the bottom, you can select from the policies defined in this environment.

Create a report for vSphere VMs, on the Rubrik-Demo1 cluster, for US Financial, PCI-DSS, and GLBA. Once this report is saved, click on the ellipsis button. Generate and download the PDF, which you can ship to the legal team!

::: tip Note
You can download sensitive data reports, which can be used by legal and compliance team!
:::