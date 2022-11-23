import{_ as e,o as t,c as r,e as o}from"./app.75e41463.js";const s="/assets/access-OAR.a9d0c171.gif",a="/assets/CreateBP1.e2782467.png",n="/assets/CreateBP2.3560b966.png",i="/assets/CreateBP3.fdb1fe36.png",c="/assets/CreateBP4.7373c885.png",p="/assets/CreateBlueprint5.9a8795bd.png",l="/assets/CreateBP6.dfada751.png",d="/assets/CreateBP7.9efac020.png",u="/assets/demoBP.bdab7388.gif",h={},g=o('<h1 id="in-place-recovery-blueprint" tabindex="-1"><a class="header-anchor" href="#in-place-recovery-blueprint" aria-hidden="true">#</a> In-place recovery blueprint</h1><p>The next task for you is to create a new blueprint through the Rubrik Security Cloud in a few steps to ensure automated recovery of the ZFG applications in case of disaster or ransomware.</p><p>Once you&#39;re logged into RSC, click the app-tray icon in the top right of the user interface, then select Application Recovery.</p><p><img src="'+s+'" alt="Access Orchestrated Application Recovery"></p><p>Click the <strong>Create Blueprint</strong> button.</p><p><img src="'+a+'" alt="Create Blueprint"></p><p>You will be taken into the wizard as shown below. Specify the Name as <strong>Demo</strong> and select the <strong>Rubrik-Demo1</strong> as Source Cluster. It is optional to enable failover. If you have a remote site for disaster recovery, you can enable failover. For now, keep it disables and click <strong>Next</strong>.</p><p><img src="'+n+'" alt="Define Blueprint details"></p><p>Select <strong>zaffre-webapp-01</strong> and <strong>zaffre-db-01</strong>, then click <strong>Next</strong>.</p><p><img src="'+i+'" alt="Select VMs for the blueprint"></p><p>Select the <strong>priority group</strong> for the boot order of the virtual machine and click <strong>Next</strong>.</p><p><img src="'+c+'" alt="Select boot order"></p><p>You can add the path to scripts to run on the virtual machine after failover. This is optional. For now, click <strong>Next</strong>.</p><p><img src="'+p+'" alt="Add Postscripts"></p><p>Review the details and click <strong>Create</strong>.</p><p><img src="'+l+'" alt="Review Blueprint details"></p><p>Click CLOSE after the blueprint is created.</p><p><img src="'+d+'" alt="Blueprint Created"></p><p>Explore the different tabs for the blueprint. After reviewing the details, click on Blueprint on the top left to see the list of all the blueprints</p><p><img src="'+u+'" alt="Explore Blueprint"></p><div class="custom-container warning"><p class="custom-container-title">CAUTION</p><p>A VM may only be a member of one Blueprint at any given time. This is by design as failover or in-place recovery actions may be executed against more than one Blueprint at a time. In later releases of Orchestrated Application Recovery, it is planned to allow more coordinated orchestration across multiple Blueprints at once to ensure applications may be failed over or locally recovered in a specific order to better accommodate any interdependencies they may have with one another. Once a VM is added to a Blueprint, it will no longer show up as an available selection during subsequent Blueprint creation actions.</p></div><div class="custom-container tip"><p class="custom-container-title">Note</p><p>Blueprints can be scaled to 100s of VMs to enable fast VM recovery across sites or in place. Post recovery scripts can be added to automate the VM and application changes.</p></div>',22),m=[g];function f(b,_){return t(),r("div",null,m)}const y=e(h,[["render",f],["__file","welcome-5.html.vue"]]);export{y as default};
