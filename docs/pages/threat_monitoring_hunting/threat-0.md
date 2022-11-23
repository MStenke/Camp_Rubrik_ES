# Threat Monitoring & Hunting

<iframe title="vimeo-player" src="https://player.vimeo.com/video/716514233?h=73cac1c382&title=0" width="640" height="360" frameborder="0" allowfullscreen></iframe>
I need a clean room!

When an organization is hunting for a threat, the approach involves multiple threads, starting from:
- A Security Information & Event Management (SIEM) platform to analyze the log data.
- A Security Orchestration, Automation & Response (SOAR) platform to pull together the threat data. 
- Endpoint Detection & Response (EDR) agents to pull information across the business
- File Integrity Monitoring (FIM) to monitor for file tampering.
Intrusion Detection Systems (IDS/IPS) scan for malicious activity.

....There's a lot going on. 

What if you could mine the backups of your environment, hunting for the indicators of compromise (IoC) that your adversary has left, like a breadcrumb trail? You could identify the **where**, **when**, and **what** easily. Even better, because you're hunting with the data held in Rubrik, your adversary has no idea that they are being hunted! This is exactly what Rubrik Threat Hunting enables.

You have become aware of a potential breach. The leadership team needs to know **where** and **when** the attacker might have gained a foothold. Once this is known, you Rubrik to roll back to a clean point in time.