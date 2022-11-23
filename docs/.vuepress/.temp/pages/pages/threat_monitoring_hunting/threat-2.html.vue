<template><div><h1 id="building-a-threat-hunt" tabindex="-1"><a class="header-anchor" href="#building-a-threat-hunt" aria-hidden="true">#</a> Building a threat hunt</h1>
<h4 id="time-to-build-a-threat-hunt-so-you-can-find-the-entry-point-of-the-adversary" tabindex="-1"><a class="header-anchor" href="#time-to-build-a-threat-hunt-so-you-can-find-the-entry-point-of-the-adversary" aria-hidden="true">#</a> Time to build a threat hunt, so you can find the entry point of the adversary!</h4>
<h2 id="accessing-threat-monitoring-and-hunting" tabindex="-1"><a class="header-anchor" href="#accessing-threat-monitoring-and-hunting" aria-hidden="true">#</a> Accessing Threat Monitoring and Hunting</h2>
<p>If you haven't already connected to the Rubrik Security Cloud, head back to the <RouterLink to="/pages/lab_environment/lab-0.html">lab environment</RouterLink>.</p>
<p>Once logged in</p>
<ul>
<li>Click the app tray in the top right</li>
<li>Launch <strong>Ransomware Investigation</strong></li>
<li>Click the <strong>Investigations</strong> tab</li>
<li>Browse to the <strong>Threat Hunts</strong> tab</li>
</ul>
<p><img src="@source/pages/threat_monitoring_hunting/images/AccessTH.gif" alt="Browse to Threat Hunts"></p>
<p>From this window, we can start to build out our threat hunt.</p>
<ul>
<li>Click <strong>Start Threat</strong> Hunt to launch the wizard. From here, you define the criteria for your hunt. You can specify a fully-fledged YARA rule, or you can specify a file hash (such as md5, sha256) or file pattern (such as a path or paths or a specific file extension).</li>
</ul>
<p><img src="@source/pages/threat_monitoring_hunting/images/TH1.png" alt="Start Threat Hunt Wizard"></p>
<ul>
<li>Select <strong>YARA Rule</strong></li>
<li>Click <strong>Next</strong>.</li>
</ul>
<p><img src="@source/pages/threat_monitoring_hunting/images/TH2.png" alt="Step 1"></p>
<ul>
<li>You now specify a YARA rule. The rule provided by the Zaffre team is sourced from the open-source infosec community and can be seen below.</li>
</ul>
<div class="language-YARA" data-ext="YARA"><pre v-pre class="language-YARA"><code>rule eicar_av_test {
    /*
       Per standard, match only if entire file is EICAR string plus optional trailing whitespace.
       The raw EICAR string to be matched is:
       X5O!P%@AP[4\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*
    */
​
    meta:
        description = &quot;This is a standard AV test, intended to verify that BinaryAlert is working correctly.&quot;
        author = &quot;Austin Byers | Airbnb CSIRT&quot;
        reference = &quot;http://www.eicar.org/86-0-Intended-use.html&quot;
​
    strings:
        $eicar_regex = /^X5O!P%@AP\[4\\PZX54\(P\^\)7CC\)7\}\$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!\$H\+H\*\s*$/
​
    condition:
        all of them
}
​
rule eicar_substring_test {
    /*
       More generic - match just the embedded EICAR string (e.g. in packed executables, PDFs, etc)
    */
​
    meta:
        description = &quot;Standard AV test, checking for an EICAR substring&quot;
        author = &quot;Austin Byers | Airbnb CSIRT&quot;
​
    strings:
        $eicar_substring = &quot;$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!&quot;
​
    condition:
        all of them
}
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>Use the copy button to copy the entire YARA rule and the paste it in RSC.</p>
</div>
<p>This YARA rule searches for a string based on a regular expression (which Rubrik stores as $eicar_regex), identifying the commonly used EICAR virus test file.</p>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>That for the purposes of this lab, the hunt is for a benign target and demonstrates the capabilities of this feature <strong>without</strong> unleashing malware into the lab. In the real world, you're probably searching for something malicious!</p>
</div>
<ul>
<li>Once pasted the above rule into the field, click <strong>Next</strong></li>
<li>Select the <strong>Rubrik-Demo1</strong> cluster by checking the radio button</li>
<li>Click <strong>Next</strong> to continue</li>
</ul>
<p><img src="@source/pages/threat_monitoring_hunting/images/TH3.png" alt="Select the Rubrik-Demo1 cluster"></p>
<ul>
<li>Check the box to select all objects protected by the cluster, then click <strong>Next</strong>.</li>
<li>Give your search a name, then select a timeframe for the search - either the most recent snapshot, or specify start and end dates to scan a time range. If you opt for the latter, you can also limit the number of snapshots scanned per object to complete the hunt in a shorter timeframe. For this lab, you may opt for either option on this screen. Click <strong>Next</strong>.</li>
<li>On the next screen, you can apply filters to be more specific with your hunt. The more specific you can be, the quicker the hunt will complete. You can leave these as defaults in this lab.</li>
</ul>
<p><img src="@source/pages/threat_monitoring_hunting/images/TH4.png" alt="Name the hunt, and select your timeframe"></p>
<ul>
<li>Click <strong>Next</strong>.</li>
<li>You can add file exclusions, file size, etc., on this page. For now, leave them as default. Click <strong>Next</strong>.</li>
</ul>
<p><img src="@source/pages/threat_monitoring_hunting/images/TH5.png" alt="Filter Files"></p>
<ul>
<li>Review your Threat Hunt parameters, then click <strong>Start</strong> to begin the hunt.</li>
</ul>
<p><img src="@source/pages/threat_monitoring_hunting/images/TH6.png" alt="Start Threat hunt"></p>
</div></template>


