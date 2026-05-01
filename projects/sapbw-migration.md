# SAP BW Cross-Account Migration

## Overview
Migration of a SAP BW application between AWS accounts for one of the largest retail telecommunications companies in Indonesia. The scope included SAP BW and its database across three environments: **Production**, **Development**, and **QAS**. In total, **7 servers** were migrated.

## Tech Stack
- Amazon EC2
- Amazon S3
- Amazon EFS
- Terraform

## Challenges & Solutions

**1. SAP BW dependencies and interconnections**
SAP BW had many dependencies and integrations with surrounding systems. The solution was to run joint discovery sessions with all stakeholders to map every connection and dependency before migration execution.

**2. Downtime minimization**
Downtime was the primary concern during the migration. The solution was to create a runbook split into two phases:
- **Pre-migration / Phase Testing** - components that could be prepared earlier without disrupting the running system.
- **Cutover Phase** - go-live configuration steps executed from a stakeholder-approved runbook.

## Architecture
Seven Amazon EC2 servers were distributed across three environments: Production, Development, and QAS. Storage used Amazon S3 and Amazon EFS, and the infrastructure was provisioned with Terraform.

## Results / Impact
- Completed a smooth migration with minimal issues by mapping dependencies thoroughly before execution.
- Reduced downtime risk through a structured runbook and a clear split between pre-migration preparation and cutover execution.
