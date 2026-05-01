# Disaster Recovery for University Web Repository

## Overview
A major university in Indonesia needed a disaster recovery environment for its web-based repository application. The application was hosted on an on-premises VMware-based environment, creating a need for a reliable recovery target outside the primary data center.

The project implemented disaster recovery replication using OnePro HyperBDR. Agents were installed on the source VMware virtual machines, while the recovery environment was prepared on Huawei Cloud. The recovery design was aligned with the user's target recovery objectives: a maximum RTO of 15 minutes and an RPO of 10 minutes.

## Tech Stack
- OnePro HyperBDR
- VMware
- Huawei Cloud

## Challenges & Solutions

**1. Tight recovery time objective**
The university required the repository application to be recoverable within a maximum RTO of 15 minutes. The solution used OnePro HyperBDR to prepare replicated workloads in Huawei Cloud so the recovery environment could be activated quickly during a disaster scenario.

**2. Low data loss tolerance**
The recovery design needed to support an RPO of 10 minutes for the repository application. Replication was configured from the on-premises VMware environment to Huawei Cloud to reduce potential data loss and keep the recovery target closely synchronized with the production environment.

## Architecture
The production repository application ran on VMware virtual machines in the university's on-premises environment. OnePro HyperBDR agents were installed on the source virtual machines to replicate workload data to Huawei Cloud, which served as the disaster recovery target.

During normal operations, replication kept the cloud recovery environment synchronized with the on-premises source. During a disaster recovery event, the replicated workloads could be recovered in Huawei Cloud to restore access to the repository application.

TODO: Add a DR architecture diagram showing the VMware source environment, OnePro HyperBDR replication flow, Huawei Cloud recovery target, and user access path during failover.

## Results / Impact
- Built a disaster recovery path for the university's web-based repository application outside the primary on-premises environment.
- Aligned the DR design with a maximum RTO of 15 minutes and an RPO of 10 minutes.
- Reduced dependency on the primary data center by preparing Huawei Cloud as the recovery target.
- Improved recovery readiness through workload replication from VMware to Huawei Cloud using OnePro HyperBDR.

## Links
