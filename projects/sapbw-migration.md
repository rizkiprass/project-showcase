# SAP BW Cross-Account Migration

## Overview
This project migrated an SAP BW application between AWS accounts for one of the largest retail telecommunications companies in Indonesia. The scope included SAP BW and its database across three environments: **Production**, **Development**, and **QAS**. In total, **7 servers** were migrated.

## Tech Stack
- Amazon EC2
- Amazon S3
- Amazon EFS
- Terraform

## Challenges & Solutions

**1. SAP BW dependencies and interconnections**
SAP BW had multiple dependencies and integrations with surrounding systems. Joint discovery sessions were held with stakeholders to map each connection and dependency before migration execution.

**2. Downtime minimization**
Downtime was the primary concern during the migration. The migration runbook was split into two phases:
- **Pre-migration / Phase Testing** - prepared components that could be completed before cutover without disrupting the running system.
- **Cutover Phase** - executed go-live configuration steps from a stakeholder-approved runbook.

## Architecture
The SAP BW landscape ran on seven Amazon EC2 servers distributed across Production, Development, and QAS environments. Amazon S3 and Amazon EFS were used for storage, and the infrastructure was provisioned with Terraform.

## Results / Impact
- Completed the migration with minimal issues by mapping dependencies thoroughly before execution.
- Reduced downtime risk through a structured runbook and a clear split between pre-migration preparation and cutover execution.

## Links
