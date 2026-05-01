# Banking Customer Support Infrastructure Deployment

## Overview
Deployment of AWS infrastructure for a customer support application used by one of the largest banks in Indonesia. The application was previously hosted on an on-premise Proxmox-based and was migrated to AWS to meet compliance requirements and align with AWS infrastructure best practices.

The delivery focused on building a secure, scalable, and auditable environment with managed security controls, centralized monitoring, and operational processes that support banking compliance requirements.

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
The bank required IPS/IDS controls that could satisfy compliance expectations, including centralized log integration, controlled rule changes, and recurring reporting. The solution was designed with managed AWS security services, SIEM integration, and a change management flow for firewall and security rule updates.

**2. Enterprise security capability**
The infrastructure needed enterprise-grade threat prevention capabilities such as inline protection, deep packet inspection, encrypted traffic inspection, threat intelligence integration, and centralized monitoring. AWS Network Firewall, AWS WAF, GuardDuty, Security Hub, and AWS Config were combined to provide layered protection and operational visibility.

**3. Tight delivery timeline**
The project had a strict delivery schedule. Daily sync-up sessions were used to unblock issues quickly, align stakeholders, and keep implementation, validation, and security review activities moving in parallel.

## Architecture
The application was deployed on Amazon EC2 behind Elastic Load Balancing, with AWS WAF and AWS Network Firewall providing layered traffic protection. Security telemetry from AWS Network Firewall, GuardDuty, Security Hub, AWS Config, and CloudWatch was integrated into a centralized SIEM for monitoring, audit, and reporting.

## Results / Impact
- Delivered an AWS-based infrastructure that met the bank's security and compliance requirements.
- Improved operational visibility through centralized security monitoring and SIEM integration.
- Established a controlled process for IPS/IDS and firewall rule changes.
- Completed the project on schedule despite a tight delivery timeline.

## Links
