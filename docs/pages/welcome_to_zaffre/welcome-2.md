# Data Protection Dashboard

Rubrik Data Protection is the core Rubrik application to protect your enterprise data with air-gapped, immutable, access-controlled backups. As we dive into the dashboard, you will notice that each tile surfaces key information to the administrator with metrics that are collected across enterprise, cloud, and SaaS workloads.

Once you are logged into RSC, you will be presented with the Data Protection dashboard:

![Rubrik Data Protection Dashboard](./images/image.png)

Let's take a closer look at the key information presented in the Data Protection UI. From the dashboard:

1. In the upper-right, notice that you can monitor cluster health, capacities, and archival statistics at a glance:

![What is the health of my clusters and archives?](./images/image-(1).png)

2. In the lower-right, you'll notice you can view all in-progress, failed, completed, and canceled tasks across your Rubrik deployment:

![What is the status of my job tasks?](./images/image-(2).png)

3. In the lower left, you can quickly identify your compliance status over the last 24 hours, or in intervals reaching back to the start date of the protection, for any type of workload (Data Center, SaaS, or Cloud) - saving you the troubles of jumping through multiple interfaces to gauge your compliance status over time:

![Is my protection in compliance?](./images/image-(3).png)

4. The **Protected Objects** tile in the upper right gives you more granular protection statistics for each category of protected data. 

![What is the overall status of my Rubrik deployment?](./images/image-(4).png)

5. If you hover over the **Data Center** category, you can quickly identify objects and data that are currently **protected**, set to **do not protect**, and **No SLA**. Instead of running multiple reports across different applications to answer basic questions, you can often find the answer using the Data Protection Dashboard: 

![What workloads have I not yet addressed?](./images/image-(5).png)

As you'll notice, there are some **vSphere VMs** that are in the **No SLA** category. These are the systems that we need to protect, so let's dive into getting those workloads protected by an SLA policy!
