# Banking Customer Support Infrastructure Deployment

## Overview
This project delivered AWS infrastructure for a customer support application used by one of the largest banks in Indonesia. The application was previously hosted on an on-premises Proxmox-based environment and was migrated to AWS to meet compliance requirements and align with AWS infrastructure best practices.

The delivery focused on building a secure, scalable, and auditable environment with managed security controls, centralized monitoring, and operational processes that support banking compliance needs.

## Tech Stack
- AWS Network Firewall
- Amazon GuardDuty
- AWS Security Hub
- AWS Config
- AWS WAF
- Amazon EC2
- Elastic Load Balancing
- Amazon CloudWatch
- Terraform

## Challenges & Solutions

**1. IPS/IDS compliance requirements**
The bank required IPS/IDS controls that could support compliance expectations, including centralized log integration, controlled rule changes, and recurring reporting. The solution combined managed AWS security services, SIEM integration, and a change management flow for firewall and security rule updates.

**2. Enterprise security capability**
The infrastructure needed enterprise-grade threat prevention capabilities, including inline protection, deep packet inspection, encrypted traffic inspection, threat intelligence integration, and centralized monitoring. AWS Network Firewall, AWS WAF, GuardDuty, Security Hub, and AWS Config were used together to provide layered protection and operational visibility.

**3. Tight delivery timeline**
The project had a strict delivery schedule. Daily sync-up sessions helped unblock issues quickly, align stakeholders, and keep implementation, validation, and security review activities moving in parallel.

## Architecture
The application was deployed on Amazon EC2 behind Elastic Load Balancing. AWS WAF and AWS Network Firewall provided layered traffic protection, while GuardDuty, Security Hub, AWS Config, and CloudWatch supported threat detection, compliance visibility, monitoring, and audit reporting.

Security telemetry from AWS Network Firewall, GuardDuty, Security Hub, AWS Config, and CloudWatch was integrated into a centralized SIEM for monitoring, audit, and reporting.

## Results / Impact
- Delivered AWS infrastructure that supported the bank's security and compliance requirements.
- Improved operational visibility through centralized security monitoring and SIEM integration.
- Established a controlled process for IPS/IDS and firewall rule changes.
- Completed the project on schedule despite a tight delivery timeline.

## Links
