import { defaultTheme } from 'vuepress';
import { copyCodePlugin } from "vuepress-plugin-copy-code2";

export default  {
  title: 'Camp Rubrik - powered by Erik Sterck',
  description: 'testing',
  plugins: [
    copyCodePlugin({
      // your options
    }),
  ],
  theme: defaultTheme({
    // default theme config
    logo: '/logo.png',
    sidebarDepth: 0,
    sidebar: [
      {
        text: 'Rubrik Zero Trust Data Security',
        link: '/pages/getting_started/rubrik-0.md',
        },
        {
          text: 'Lab environment',
          link: '/pages/lab_environment/lab-0.md',
        },
        {
          text: 'Welcome to Zaffre',
          link:'/pages/welcome_to_zaffre/welcome-0.md',
          collapsible: true,
          children: [            
            '/pages/welcome_to_zaffre/welcome-1.md',
            '/pages/welcome_to_zaffre/welcome-2.md',
            '/pages/welcome_to_zaffre/welcome-3.md',
            '/pages/welcome_to_zaffre/welcome-4.md',
            '/pages/welcome_to_zaffre/welcome-5.md',
            ],
        },
        {
          text: 'The Attack',
          link: '/pages/the_attack/attack-0.md',
          collapsible: true,
          children: [
            '/pages/the_attack/attack-1.md',
            '/pages/the_attack/attack-2.md',
            ],
        },
        {
          text: 'Ransomware Monitoring & Investigation',
          link: '/pages/ransomware_monitoring_investigation/ransomware-0.md',
          collapsible: true,
          children: [            
            '/pages/ransomware_monitoring_investigation/ransomware-1.md',
            '/pages/ransomware_monitoring_investigation/ransomware-2.md',  
            '/pages/ransomware_monitoring_investigation/ransomware-3.md',
            '/pages/ransomware_monitoring_investigation/ransomware-4.md',
            '/pages/ransomware_monitoring_investigation/ransomware-5.md',
          ],
        },
        {
          text: 'Threat Monitoring & Hunting',
          collapsible: true,
          link: '/pages/threat_monitoring_hunting/threat-0.md',          
          children: [
            '/pages/threat_monitoring_hunting/threat-1.md',
            '/pages/threat_monitoring_hunting/threat-2.md',
            '/pages/threat_monitoring_hunting/threat-3.md',  
            '/pages/threat_monitoring_hunting/threat-4.md',
            '/pages/threat_monitoring_hunting/threat-5.md',
          ],
        },
        {
          text: 'Sensitive Data Discovery & Management',
          link: '/pages/sensitive_data_discovery/sensitive-0.md',
          collapsible: true,
          children: [            
            '/pages/sensitive_data_discovery/sensitive-1.md',
            '/pages/sensitive_data_discovery/sensitive-2.md',
            '/pages/sensitive_data_discovery/sensitive-3.md',
            '/pages/sensitive_data_discovery/sensitive-4.md',
            '/pages/sensitive_data_discovery/sensitive-5.md',
            '/pages/sensitive_data_discovery/sensitive-6.md',
            '/pages/sensitive_data_discovery/sensitive-7.md',
          ],
        },
        {
          text: 'All Clear to Recover',
          link: '/pages/all_clear_to_recover/clear-1.md',
        },
        {
          text: 'Orchestrated Application Recovery',
          link: '/pages/orchestrated_recovery/recovery-0.md',
          collapsible: true,
          children: [
            '/pages/orchestrated_recovery/recovery-1.md',
            '/pages/orchestrated_recovery/recovery-2.md',
            '/pages/orchestrated_recovery/recovery-3.md',
          ],
        },
        {
          text: 'Microsoft 365 Protection',
          link: '/pages/ms365_protection/ms365-0.md',
          collapsible: true,
          children: [
            '/pages/ms365_protection/ms365-1.md',
            '/pages/ms365_protection/ms365-2.md',
            '/pages/ms365_protection/ms365-3.md',
            '/pages/ms365_protection/ms365-4.md',
          ],
        },
        {
          text: 'Data Security Command Center',
          link: '/pages/data_security_command_center/dscc-0.md',
          collapsible: true,
          children: [
            '/pages/data_security_command_center/dscc-1.md',
            '/pages/data_security_command_center/dscc-2.md',
            '/pages/data_security_command_center/dscc-3.md',
            '/pages/data_security_command_center/dscc-4.md',
            '/pages/data_security_command_center/dscc-5.md',
            '/pages/data_security_command_center/dscc-6.md',
          ],
        },
        {
          text: 'Conclusion',
          link: '/pages/conclusion/conclusion.md',
        }
      ],
  }),
}