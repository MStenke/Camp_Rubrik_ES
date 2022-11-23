# Forensic investigations

#### The Clean Room Recovery

If an IoC is detected, it may be desirable to mount a snapshot for further forensic investigations. These investigations are usually performed in a Clean Room environment, disconnected from the regular network to protect against the further spread of any potential malware. Rubrik's Live Mount capability is ideal for just such a scenario, allowing any snapshot (including those identified by Threat Monitoring & Hunting) to be instantiated live on the Rubrik cluster. Let's take a look at what this looks like.

Launch **Ransomware Investigation** from the Rubrik Security Cloud app tray to get started. Navigate to the **Investigations** page. Expand the **Haverford_site** blueprint. **Click** on **haverford-webapp-01 VM**.

![Access the Haverford-WebApp-01 VM](./images/access_haverford_vm.gif)

Click on **Recover Full Snapshot**.

![Recovery](./images/recover_full_snapshot.png)

Click **Change Selected Snapshot** to select the infected snapshot in a clean environment. 

![Change the selected snapshot](./images/change_selected_snapshot.png)

Scroll down to select the **snapshot with a yellow circle with an exclamation mark**. Click **Close**.

![Select Snapshot](./images/anomalous_behaviour_detected.png)

Click **Next**.

![Confirm Snapshot selection](./images/confirm_snapshot_selection.png)

Select **Live Mount** as the recovery option, and click **Next**. 

![Recovery Options](./images/live_mount.png)

Select **Cluster** as the destination and click **Next**.

![Select Destination Cluster](./images/vm_recovery.png)

Click **Mount**.

![Click Mount to being the Live Mount process](./images/mount.png)

Navigate to **Data Protection** from the app tray and click **Live Mounts** in the top right to verify the mount.

![Verify Live Mount](./images/verifyLM.gif)

Open a new tab in your browser, and click the shortcut to the **esxi-vcenter1.rubrik.lab**. Login with the credentials on **Lab_Credentials** page. 

After login, select Virtual Machines, and the Live Mount should be mounted as **haverford-webapp-01 %dateofthesnapshot%** such as **haverford-webapp-01 07-22**.

![ESXi Host ](./images/FI9.gif)

Launch the vSphere Client and log in using the credentials on **Lab_Credentials** page for **haverford-webapp-01**. 

![Verify Live Mount VM](./images/verifyLM-(1).gif)

Now you can log in to the Live Mounted VM, install your favorite forensic tool, neutralize the malware, and restore to the latest and clean copy.

::: tip Info
Rubrik Threat Monitoring & Hunting enables you to find the snapshot with malware and mount the infected snapshot in a clean room environment instantly without affecting your production environment and neutralize the malware! 
You can then restore to the latest and clean copy of data.
:::