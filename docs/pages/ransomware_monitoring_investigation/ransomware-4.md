# Determining blast radius

Having access to this kind of information is invaluable. Keeping track of all the anomalies in your environments means that you can take the actions required to find the location of the anomalies and use clean snapshots to recover from the anomalies. There are multiple options for recovery, which we will discuss in the next section.

Expand the **Haverford_site** blueprint and **click** on **haverford-webapp-01** VM.  Click the **Suspicious**, **Modified**, and **Deleted** filters. Browse and see exactly which files and folders have been affected. In this case, drilling down to **var > www > html > wp-content > plugins**. You can now see that there are several files that have been encrypted.

![Blast Radius](./images/blastradius.gif)

Now that you have determined the blast radius, we can proceed to recovery.

::: warning Note
Without the Ransomware Monitoring & Investigation, it would be a "needle in a haystack" exercise to figure out what systems, files, and folders were impacted and where the clean recovery point will be. 
:::