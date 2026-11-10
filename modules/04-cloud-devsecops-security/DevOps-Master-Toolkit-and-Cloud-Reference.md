# DevOps, Cloud & SRE Engineering Master Reference & Antigravity Skills Pack
**Synthesized from 8 Comprehensive Enterprise Engineering References (812 Total Pages)**

---

## Executive Overview & Source Documentation Mapping

This master engineering document consolidates, modernizes, and operationalizes the knowledge across eight core industry references spanning Linux systems administration, enterprise Bash scripting, Docker and container runtime mechanics, modern AWS Solutions Architecture, Microsoft Azure Enterprise Cloud, and operational SRE incident triage.

### Source Corpus
1. **Shell Scripting for DevOps** (193 pages): Over 200 automation recipes covering system administration, database maintenance, networking, Docker, and Kubernetes automation.
2. **Azure Reference & Study Guide** (104 pages): Complete architectural blueprint for Microsoft Azure enterprise infrastructure (AZ-104, AZ-305, AZ-500).
3. **Linux Command-Line & Administration Cheatsheet** (12 pages): Essential command-line utilities, text manipulation pipelines, and core system administration operations.
4. **AWS Solutions Architect Associate Guide** (119 pages): SAA-C03 architecture, resilient multi-tier design, VPC topology, database engines, and storage patterns.
5. **Docker Complete Reference Guide** (58 pages): Container engine mechanics, namespaces, cgroups, multi-stage builds, security hardening, and exit-code diagnostics.
6. **DevOps Scenario-Based Interview & Runbook Guide** (12 pages): 48 scenario-based operational incident triage scenarios and failure domain responses.
7. **AWS Official Whitepaper: Overview of Amazon Web Services** (162 pages, 2024/2025 Edition): Complete contemporary AWS service portfolio including Amazon Bedrock, VPC Lattice, S3 Express One Zone, EFS Archive, and modern security primitives.
8. **Linux Troubleshooting & Interview Engineering Reference** (20 pages): 683 technical diagnostic questions across 40 operational domains including kernel scheduling, inode mechanics, and IPC.

---

# PART 1: Antigravity Customization Framework & Plugin Specification

The entire corpus is packaged as an Antigravity Plugin named `devops-toolkit`. By leveraging the Antigravity Plugin and Skill architecture, the agent automatically exposes domain-specific operational runbooks, architectural decision trees, and validated code generators.

## 1. Directory Topology

```
~/.gemini/config/plugins/devops-toolkit/   (or project root: .gemini/plugins/devops-toolkit/)
├── plugin.json                           ← Manifest defining plugin identity, version, and skill registry
└── skills/
    ├── linux-sysadmin/                   ← Skill 1: Linux Kernel, OS internals, systemd, filesystems
    │   ├── SKILL.md
    │   └── references/
    │       ├── kernel-proc.md
    │       ├── systemd-units.md
    │       └── storage-lvm.md
    ├── bash-devops-automation/           ← Skill 2: Enterprise Bash engineering, safe recipes, traps
    │   ├── SKILL.md
    │   ├── scripts/
    │   │   ├── backup-engine.sh
    │   │   └── health-monitor.sh
    │   └── references/
    │       └── recipe-catalog.md
    ├── docker-operations/                ← Skill 3: Containerization, BuildKit, hardening, exit codes
    │   ├── SKILL.md
    │   ├── examples/
    │   │   ├── Dockerfile.multi-stage
    │   │   └── compose-production.yml
    │   └── references/
    │       ├── exit-codes.md
    │       └── hardening-checklist.md
    ├── devops-troubleshooting-and-runbooks/ ← Skill 4: High-stakes production SRE incident triage
    │   ├── SKILL.md
    │   └── runbooks/
    │       ├── k8s-crashloop.md
    │       ├── high-load-low-cpu.md
    │       └── inode-exhaustion.md
    ├── aws-solutions-architect/          ← Skill 5: AWS 2024/2025 enterprise cloud architecture
    │   ├── SKILL.md
    │   └── references/
    │       ├── compute-storage-matrix.md
    │       ├── vpc-lattice-networking.md
    │       └── bedrock-genai.md
    └── azure-cloud-architect/            ← Skill 6: Microsoft Azure cloud architecture & governance
        ├── SKILL.md
        └── references/
            ├── entra-id-governance.md
            ├── storage-redundancy.md
            └── networking-hybrid.md
```

## 2. Plugin Manifest (`plugin.json`)

```json
{
  "$schema": "https://json.schemastore.org/antigravity-plugin.json",
  "name": "devops-toolkit",
  "version": "1.0.0",
  "displayName": "DevOps & Cloud Engineering Toolkit",
  "description": "Comprehensive production engineering plugin providing skills for Linux administration, hardened Bash automation, Docker operations, AWS 2024/2025 architecture, Microsoft Azure governance, and SRE incident troubleshooting.",
  "author": "Antigravity Engineering",
  "keywords": ["devops", "linux", "bash", "docker", "aws", "azure", "kubernetes", "sre", "troubleshooting"],
  "skills": [
    "skills/linux-sysadmin",
    "skills/bash-devops-automation",
    "skills/docker-operations",
    "skills/devops-troubleshooting-and-runbooks",
    "skills/aws-solutions-architect",
    "skills/azure-cloud-architect"
  ]
}
```

## 3. Progressive Disclosure Design Rule
To prevent token waste and preserve context limits:
- Each `SKILL.md` is strictly an index and decision router under ~150 lines.
- Heavy reference catalogs, diagnostic matrices, and execution scripts reside in `references/`, `scripts/`, or `runbooks/`.
- The agent activates `SKILL.md` immediately upon trigger match, then dynamically loads targeted reference files only when specific scenarios require deep technical data.

---

# PART 2: Complete `SKILL.md` Specifications (6 Complete Production Skills)

### Skill 1: `linux-sysadmin`

**Path:** `skills/linux-sysadmin/SKILL.md`

```yaml
---
name: linux-sysadmin
description: Deep Linux system administration, kernel diagnostics, process states, systemd services, filesystem repair, LVM management, and network socket inspection. Activate when troubleshooting Linux servers, debugging performance bottlenecks, analyzing /proc, or writing systemd units.
---

# Linux Systems Administration & Kernel Engineering

## Activation Triggers
Trigger this skill whenever the user asks about:
- Linux CLI commands (`awk`, `sed`, `grep`, `xargs`, `find`, `lsof`, `strace`, `ss`, `ip`).
- High CPU load, D-state processes, memory exhaustion, swap tuning, or OOM-killer activity.
- Disk partition layout, LVM resizing, ext4/XFS filesystem corruption, or inode depletion.
- Systemd service configuration, unit dependencies, timer units, or `journalctl` debugging.
- Network interface configuration, DNS resolution (`/etc/resolv.conf`, `systemd-resolved`), routing tables, or firewall rules (`iptables`, `nftables`, `ufw`).

## Core Execution Guidelines
1. **Diagnostic Non-Destructive First Step**: Always inspect before altering state. Run read-only diagnostics (`vmstat 1 5`, `mpstat -P ALL 1`, `free -h`, `df -hT`, `df -i`, `ss -tulpn`) before recommending configuration edits.
2. **Filesystem Modifications**: Always verify partition tables (`lsblk -f`, `pvs`, `vgs`, `lvs`) before issuing `resize2fs` or `xfs_growfs`. Remind the user that XFS can grow but cannot be shrunk.
3. **Process Troubleshooting**:
   - Check load average: `cat /proc/loadavg`.
   - If load is high but CPU utilization is low, check uninterruptible disk wait state (`D` state processes): `ps -eo state,pid,cmd | grep "^D"`.
   - Inspect active syscall blocks with `strace -p <PID> -f -T -tt`.
4. **Systemd Services**: Enforce explicit dependencies (`After=network-online.target`, `Wants=network-online.target`), sandboxing (`ProtectSystem=strict`, `NoNewPrivileges=true`), and auto-restart policies (`Restart=on-failure`, `RestartSec=5s`).

## Reference Navigation
- For deep kernel `/proc` variables and virtual memory tuning, read `references/kernel-proc.md`.
- For complete systemd unit templates and timer configurations, read `references/systemd-units.md`.
- For LVM volume expansion and ext4/XFS repair procedures, read `references/storage-lvm.md`.
```

---

### Skill 2: `bash-devops-automation`

**Path:** `skills/bash-devops-automation/SKILL.md`

```yaml
---
name: bash-devops-automation
description: Production-grade Bash script generation, debugging, refactoring, and linting. Enforces strict POSIX/Bash error handling (set -euo pipefail), secure credential isolation, signal trapping, and structured JSON/syslog logging.
---

# Enterprise Bash DevOps Automation

## Activation Triggers
Trigger this skill whenever the user asks to:
- Write or refactor Bash/Shell scripts for DevOps automation, CI/CD pipelines, cron jobs, or infrastructure routines.
- Implement backup scripts for MySQL, PostgreSQL, MongoDB, or directories with S3/Azure Blob syncing.
- Write health monitoring, threshold alerting, container cleanup, or disk reclamation scripts.
- Debug Shell script errors (`unbound variable`, pipe failure, silent exits, permission denied).

## Non-Negotiable Engineering Rules
1. **Safety Header**: Every generated script must begin with:
   ```bash
   #!/usr/bin/env bash
   set -euo pipefail
   IFS=$'\n\t'
   ```
2. **Trap Handlers**: Scripts executing system changes or temporary file creation must register an exit trap:
   ```bash
   trap cleanup EXIT INT TERM
   cleanup() { rm -rf "${TMP_DIR:-/tmp/nonexistent}"; }
   ```
3. **Secret Isolation**: Never hardcode credentials. Validate required environment variables at entry:
   ```bash
   : "${DB_PASSWORD:?Error: DB_PASSWORD environment variable is required and unset.}"
   ```
4. **Command Substitutions & Quoting**: Always use `$(...)` instead of legacy backticks. Quote all variable expansions: `"${VARIABLE}"`.
5. **No Dangerous Flags Without Guards**: Never emit naked `rm -rf ${VAR}/*` without verifying that `${VAR}` is non-empty, absolute, and not `/` or `/root`.

## Reference Navigation
- For the full recipe library (database backups, rolling rollouts, disk monitors), read `references/recipe-catalog.md`.
- For reusable production shell scripts, execute or reference files in `scripts/`.
```

---

### Skill 3: `docker-operations`

**Path:** `skills/docker-operations/SKILL.md`

```yaml
---
name: docker-operations
description: Container engineering, Dockerfile multi-stage optimization, BuildKit caching, security hardening, rootless execution, Docker Compose orchestration, and exit-code failure diagnostics (137 OOM, 139, 143).
---

# Production Docker Operations & Container Engineering

## Activation Triggers
Trigger this skill whenever the user asks to:
- Write, optimize, or audit a `Dockerfile` or `docker-compose.yml`.
- Reduce container image size using multi-stage builds, Alpine, or Distroless bases.
- Accelerate build times using BuildKit cache mounts (`--mount=type=cache`).
- Harden container security (dropping Linux capabilities, non-root users, read-only root filesystems).
- Diagnose container crashes, restart loops, or inspect exit codes (Exit Code 137, 139, 143, 126, 127).

## Container Engineering Standards
1. **Multi-Stage Architecture**: Separate build-time dependencies (compilers, dev packages) from runtime artifacts.
2. **Non-Root Execution**: Always declare an explicit unprivileged user:
   ```dockerfile
   RUN addgroup -S appgroup && adduser -S appuser -G appgroup
   USER appuser
   ```
3. **Explicit Layer Caching**: Copy dependency manifests (`package.json`, `go.mod`, `requirements.txt`) and install dependencies *before* copying application source code.
4. **Security Hardening**:
   - Forbid running as root in production.
   - Recommend dropping all capabilities: `--cap-drop=ALL` and selectively adding back only what is required (e.g., `--cap-add=NET_BIND_SERVICE`).
   - Recommend read-only root filesystems: `--read-only --tmpfs /tmp --tmpfs /run`.
5. **Diagnostic Exit Codes**:
   - Exit Code `137`: Process terminated by `SIGKILL` (128 + 9). Primary cause: Linux kernel OOM Killer. Validate using `docker inspect <container> --format '{{.State.OOMKilled}}'`.
   - Exit Code `139`: Segmentation fault (`SIGSEGV`, 128 + 11). Check binary architecture mismatch or memory corruption.
   - Exit Code `143`: Graceful stop (`SIGTERM`, 128 + 15). Expected upon `docker stop`.

## Reference Navigation
- For the comprehensive exit-code troubleshooting matrix, read `references/exit-codes.md`.
- For production CIS benchmark container hardening, read `references/hardening-checklist.md`.
```

---

### Skill 4: `devops-troubleshooting-and-runbooks`

**Path:** `skills/devops-troubleshooting-and-runbooks/SKILL.md`

```yaml
---
name: devops-troubleshooting-and-runbooks
description: High-stakes SRE incident triage runbooks for production outages. Root-cause analysis workflows for Kubernetes CrashLoopBackOff, EKS ingress 502/504, high load with zero CPU (D-state I/O lock), and inode exhaustion.
---

# SRE Production Incident Troubleshooting & Diagnostic Runbooks

## Activation Triggers
Trigger this skill whenever the user faces an urgent production incident:
- Kubernetes Pod failures: `CrashLoopBackOff`, `ImagePullBackOff`, `OOMKilled`, `CreateContainerConfigError`.
- High system load average where CPU usage remains near 0% (D-state processes blocked on storage/network).
- "No space left on device" errors despite `df -h` reporting available disk capacity (inode exhaustion or unlinked file descriptors).
- AWS EKS / Kubernetes Ingress returning HTTP 502 Bad Gateway or 504 Gateway Timeout.
- Database connection pool exhaustion and thread starvation.

## Universal Incident Triage Framework (Observe-Orient-Decide-Act)
1. **Blast Radius Assessment**: Is the failure systemic, zonal, node-specific, or pod-specific?
2. **Log & Event Correlation**: Check chronological cluster/host events *before* restarting services (`kubectl get events --sort-by='.metadata.creationTimestamp'`, `journalctl -xeu <service>`).
3. **Resource Bound Validation**: Inspect Memory, CPU, Inodes, and File Descriptors simultaneously.
4. **Preserve Volatile Evidence**: Dump diagnostic artifacts (`strace`, heap dumps, core dumps, thread dumps) prior to executing automated pod eviction or node reboot.

## Reference Navigation
- For Kubernetes pod crash triage workflows, read `runbooks/k8s-crashloop.md`.
- For storage and D-state uninterruptible load triage, read `runbooks/high-load-low-cpu.md`.
- For inode and open descriptor space leaks, read `runbooks/inode-exhaustion.md`.
```

---

### Skill 5: `aws-solutions-architect`

**Path:** `skills/aws-solutions-architect/SKILL.md`

```yaml
---
name: aws-solutions-architect
description: Comprehensive AWS solutions architecture reference updated for 2024/2025. Covers Compute, Modern Storage (S3 Express One Zone, EFS Archive), Networking (VPC Lattice, Transit Gateway), Security (Verified Permissions, Security Lake), and GenAI (Amazon Bedrock).
---

# AWS Solutions Architecture & Cloud Engineering (2024/2025)

## Activation Triggers
Trigger this skill whenever the user asks to:
- Design, optimize, or cost-engineer workloads on Amazon Web Services (AWS).
- Prepare for AWS Certifications (Solutions Architect Associate SAA-C03, Professional SAP-C02).
- Compare storage services (S3 Express One Zone vs Standard, EBS gp3 vs io2 Block Express, EFS vs FSx).
- Architect enterprise VPC networking (VPC Peering vs Transit Gateway vs AWS VPC Lattice, PrivateLink).
- Implement fine-grained authorization (IAM Policies, SCPs, Amazon Verified Permissions with Cedar).
- Architect Generative AI workloads using Amazon Bedrock, Knowledge Bases, and RAG architectures.

## Architectural Decision Principles
1. **Resilience & Fault Domains**: Multi-AZ deployments for all stateful engines; cross-region asynchronous replication for critical RPO/RTO objectives.
2. **Network Decoupling**: Prefer VPC Lattice for microservice-to-microservice connectivity across VPCs and accounts without complex CIDR routing or Transit Gateway route tables.
3. **Storage Tiering**:
   - Ultra-low latency millisecond object storage: **S3 Express One Zone** (directory buckets).
   - Cold compliance archiving: **S3 Glacier Flexible / Deep Archive**.
   - Infrequently accessed shared filesystems: **EFS with Archive Tier** (up to 50% lower cost than Infrequent Access).
4. **Security by Default**: Zero trust identity using IAM role-based temporary credentials via STS; enforce boundary conditions using Service Control Policies (SCPs); manage least privilege micro-permissions using Cedar policies in Amazon Verified Permissions.

## Reference Navigation
- For compute and storage selection matrices, read `references/compute-storage-matrix.md`.
- For VPC Lattice and hybrid interconnect topologies, read `references/vpc-lattice-networking.md`.
- For Amazon Bedrock foundation model orchestration, read `references/bedrock-genai.md`.
```

---

### Skill 6: `azure-cloud-architect`

**Path:** `skills/azure-cloud-architect/SKILL.md`

```yaml
---
name: azure-cloud-architect
description: Enterprise Microsoft Azure architecture, governance hierarchy, Microsoft Entra ID (Azure AD), storage redundancy matrices (LRS/ZRS/GRS/RA-GZRS), network hub-and-spoke topologies, Application Gateway v2, and cloud security (Defender, Sentinel).
---

# Microsoft Azure Cloud Architecture & Enterprise Governance

## Activation Triggers
Trigger this skill whenever the user asks to:
- Design, deploy, or review Microsoft Azure cloud architectures.
- Prepare for Microsoft Azure certifications (AZ-104 Administrator, AZ-305 Architect Design, AZ-500 Security).
- Select Azure storage replication strategies (LRS, ZRS, GRS, RA-GRS, GZRS, RA-GZRS).
- Configure Azure governance: Management Groups, Subscriptions, Resource Groups, Azure Policy, and RBAC scopes.
- Implement Azure networking: VNet peering, NSGs, Application Gateway v2 (WAF), Azure Firewall, and Azure Front Door.
- Secure cloud identities using Microsoft Entra ID, Conditional Access, PIM, and Key Vault.

## Core Architectural Guardrails
1. **Governance Inheritance**: Scope flows downward:
   `Root Management Group → Management Groups → Subscriptions → Resource Groups → Resources`.
   Policies and RBAC permissions are inherited downward. Explicit Deny assignments supersede Allow grants.
2. **Storage Redundancy Selection**:
   - Non-critical dev/test: **LRS** (3 copies in 1 DC).
   - High availability within a single region against datacenter failure: **ZRS** (3 copies across 3 AZs).
   - Regional disaster recovery required: **GZRS** (Zone redundant in primary region + Geo redundant in secondary region).
   - Read-access required during secondary region failover: **RA-GZRS**.
3. **Layer 4 vs Layer 7 Traffic Routing**:
   - Non-HTTP/S TCP/UDP load balancing: **Azure Load Balancer (Standard)**.
   - Regional HTTP/S with SSL termination, URL-based routing, and OWASP WAF: **Application Gateway v2**.
   - Global HTTP/S with anycast CDN, dynamic site acceleration, and edge WAF: **Azure Front Door**.
   - Global DNS-based routing: **Azure Traffic Manager**.

## Reference Navigation
- For Entra ID, RBAC hierarchies, and PIM workflows, read `references/entra-id-governance.md`.
- For storage redundancy decision matrices and lifecycle policies, read `references/storage-redundancy.md`.
- For enterprise hub-and-spoke virtual network blueprints, read `references/networking-hybrid.md`.
```


---

# PART 3: Linux System Administration, OS Internals & Kernel Diagnostics

This section codifies foundational Linux OS engineering, POSIX system pipelines, kernel process management, memory allocation architectures, storage subsystems, and non-destructive diagnostic procedures.

## 1. Advanced POSIX Pipeline Engineering

Modern SRE and DevOps operations require fluent manipulation of raw data streams, system logs, and network sockets using standard POSIX utilities.

### Text Stream Manipulation Matrix

| Command | Operational Purpose | High-Impact Production Pipeline Example |
|:---|:---|:---|
| `awk` | Field extraction, associative arrays, arithmetic aggregations | Summarize top 10 client IPs generating 5xx errors from Nginx access log:<br>`awk '($9 ~ /^5/) {count[$1]++} END {for (ip in count) print count[ip], ip}' access.log \| sort -rn \| head -n 10` |
| `sed` | Stream editor, in-place regex substitutions | Replace database host across configuration files safely creating `.bak` backup:<br>`sed -i.bak 's/db-primary\.internal/db-replica\.internal/g' /etc/app/*.conf` |
| `grep` | Fast regex matching, invert match, recursive search | Find all non-commented, non-empty active configuration lines:<br>`grep -Ev '^[[:space:]]*(#\|$)' /etc/nginx/nginx.conf` |
| `xargs` | Convert stdin into command-line arguments safely | Batch-delete old logs older than 30 days without argument list length overflow (`ARG_MAX`):<br>`find /var/log/apps -type f -name "*.log" -mtime +30 -print0 \| xargs -0 -P 4 rm -f` |
| `lsof` | List open file descriptors, network sockets, deleted file handles | Identify processes holding unlinked deleted files in memory causing disk space leak:<br>`lsof +L1 \| grep '(deleted)'` |
| `ss` | Modern socket statistics (replacing deprecated `netstat`) | Inspect all listening TCP sockets with process names, numerical ports, and memory buffers:<br>`ss -tlpn --resolve` |

---

## 2. Linux Kernel Architecture, Process States & Scheduling

### Process Lifecycle and Task State Transitions

The Linux kernel task scheduler represents every process as a `task_struct`. Processes transition through distinct states:

```
                      +-------------------+
                      |   TASK_RUNNING    | <------+
                      | (State 'R' on CPU |        |
                      |   or Runqueue)    |        |
                      +-------------------+        |
                         |             ^           |
       Syscall block or  |             | Event/IRQ |
          Wait for Event |             | Received  |
                         v             |           |
            +--------------------+     |           |
            | TASK_INTERRUPTIBLE | ----+           |
            |     (State 'S')    |                 |
            +--------------------+                 |
                         |                         |
               Disk IO / |                         |
             Lock in VFS |                         |
                         v                         |
          +----------------------+                 |
          | TASK_UNINTERRUPTIBLE | ----------------+
          |     (State 'D')      |
          +----------------------+
                     |
                Process exits
                     v
             +---------------+
             |  EXIT_ZOMBIE  |  --> Parent reads exit status via waitpid()
             |  (State 'Z')  |      Kernel reaps task_struct.
             +---------------+
```

### Process State Diagnostic Codes (`ps -eo state,pid,cmd`)
- **`R` (Running / Runnable)**: Actively computing on a CPU core or sitting in the CFS (Completely Fair Scheduler) runqueue ready to execute.
- **`S` (Interruptible Sleep)**: Blocked waiting for an event (e.g., incoming network packet, pipe read, timer expiration). Wakes up immediately upon receiving a signal (e.g., `SIGTERM`).
- **`D` (Uninterruptible Sleep)**: Blocked on hardware or low-level kernel lock, typically disk I/O, synchronous filesystem metadata flush, or unresponsive network file mounts (NFS, AWS EFS). **Critical SRE Rule**: Processes in `D` state ignore `SIGKILL` (`kill -9`) because they cannot be interrupted without risking kernel panic or filesystem corruption.
- **`Z` (Zombie / Defunct)**: Process execution has terminated, but the parent process has not executed the `wait()` or `waitpid()` syscall to collect its return code. The zombie occupies no RAM or CPU, but consumes an entry in the kernel's process identifier table (`/proc/sys/kernel/pid_max`).
- **`T` (Stopped)**: Suspended via job control signal (`SIGTSTP` / `Ctrl+Z` or `SIGSTOP`).

### The `/proc` Virtual Filesystem Deep-Dive

`/proc` does not exist on disk; it is an in-memory kernel data window into system state.

| Path | Description | Key Metric / Operational Check |
|:---|:---|:---|
| `/proc/loadavg` | 1, 5, and 15-minute load averages | Fields 1-3: Load. Field 4: Currently running tasks / total tasks (e.g., `2/450`). Field 5: Last created PID. |
| `/proc/meminfo` | Comprehensive memory statistics | `MemAvailable` (real usable memory before swapping, including reclaimable cache), `Dirty` (memory awaiting disk flush). |
| `/proc/sys/vm/swappiness` | Kernel memory reclamation aggressiveness (0-100) | For production databases (PostgreSQL, Redis), set to `1` or `10` to avoid paging out active memory pages. |
| `/proc/sys/vm/overcommit_memory` | Memory overcommit policy | `0` (heuristic), `1` (always overcommit - required for Redis BGSAVE), `2` (strict, never exceed swap + ratio). |
| `/proc/sys/fs/file-nr` | System-wide file descriptor status | Field 1: Allocated file handles. Field 2: Allocated unused handles. Field 3: System maximum (`fs.file-max`). |
| `/proc/<PID>/fd/` | Per-process open file descriptor table | Inspect active sockets, files, pipes held by process: `ls -l /proc/<PID>/fd/`. |
| `/proc/<PID>/oom_score` | Kernel Out-Of-Memory penalty score (0-1000) | Higher score = first target terminated by OOM Killer under memory exhaustion. |
| `/proc/<PID>/oom_score_adj` | OOM Killer score adjustment (-1000 to +1000) | Set to `-1000` to make critical daemons immune to OOM termination. |

---

## 3. Memory Subsystem: Buffers, Cache, and OOM Killer

### Buffer vs. Cache Demystified
- **Buffers**: In-memory representation of raw block device I/O (disk blocks, superblock metadata). It holds data in transit between the block layer and the virtual memory manager.
- **Cached (Page Cache)**: File-level caching in RAM. When files are read from ext4, XFS, or NFS, pages are cached in RAM. If free RAM diminishes, the kernel transparently reclaims and discards clean cached pages without penalty.

### Reclaiming Caches Manually (Emergency Non-Destructive Step)
```bash
# Flush pending writes from page cache to disk first:
sync

# Drop clean pagecache, dentries, and inodes:
echo 3 > /proc/sys/vm/drop_caches
```

### OOM Killer Mechanics & Kernel Tuning
When physical RAM and swap are exhausted and `alloc_pages()` fails:
1. The kernel invokes `select_bad_process()`.
2. It calculates points based on:
   $$\text{Points} = \text{RAM Usage \%} + \text{Swap Usage \%} + \text{oom\_score\_adj}$$
3. The process with the highest aggregate score receives `SIGKILL` (Exit Code 137).
4. Kernel emits log message to dmesg:
   `dmesg -T | grep -i "Out of memory: Killed process"`

---

## 4. Storage Subsystems, LVM & Filesystem Engineering

### Logical Volume Manager (LVM) Topology
LVM abstracts physical storage devices into dynamic, resizeable block pools.

```
+-------------------------------------------------------------+
|                      Volume Group (VG)                      |
|                  e.g., vg_data (1000 GB)                    |
|                                                             |
|  +---------------------------+  +------------------------+  |
|  |   Physical Volume (PV 1)  |  |  Physical Volume (PV 2)|  |
|  |     /dev/sdb1 (500 GB)    |  |    /dev/sdc1 (500 GB)  |  |
|  +---------------------------+  +------------------------+  |
|                                                             |
|          Allocated into Logical Volumes (LV):               |
|  +----------------------------------+  +-----------------+  |
|  |  Logical Volume: /dev/vg_data/app|  |  LV: /dev/vg_   |  |
|  |            (700 GB)              |  |   data/logs     |  |
|  |       Formatted as ext4/XFS      |  |    (200 GB)     |  |
|  +----------------------------------+  +-----------------+  |
+-------------------------------------------------------------+
```

### Online LVM Volume Expansion Protocol

To expand an existing logical volume `/dev/vg_data/lv_app` by 50 GB online without service downtime:

```bash
# Step 1: Verify current Volume Group free extent space
vgs vg_data

# Step 2: Extend the Logical Volume by 50GB
lvextend -L +50G /dev/vg_data/lv_app

# Step 3: Expand the Filesystem Layer (detect filesystem type first)
FS_TYPE=$(lsblk -no FSTYPE /dev/vg_data/lv_app)

if [ "$FS_TYPE" = "ext4" ]; then
    # ext4 online resize:
    resize2fs /dev/vg_data/lv_app
elif [ "$FS_TYPE" = "xfs" ]; then
    # XFS online resize requires the mountpoint path, not the device:
    MOUNT_POINT=$(findmnt -n -o TARGET /dev/vg_data/lv_app)
    xfs_growfs "$MOUNT_POINT"
fi

# Step 4: Validate updated capacity
df -h "$MOUNT_POINT"
```

> [!CAUTION]
> **Filesystem Asymmetry Rule**: While `ext4` supports both online expansion and offline shrinking, `XFS` **only supports expansion**. An XFS filesystem can never be shrunk. Attempting to reduce an XFS partition results in irreversible filesystem destruction.

### Inode Mechanics & Troubleshooting

An **inode** (index node) is a kernel data structure representing a filesystem object (file, directory, symbolic link, socket).
- An inode stores: File size, device ID, user ID, group ID, permissions, file timestamps (atime, mtime, ctime), and block pointers.
- An inode **does not store**: File name or file data (file names are stored in directory tables pointing to inode numbers).

**The Inode Exhaustion Failure Mode**:
If a system creates millions of 0-byte or tiny files (e.g., PHP session files in `/var/lib/php/sessions` or postfix mail queues), the filesystem runs out of free inodes even when `df -h` shows 95% free disk space.
```bash
# Check inode utilization:
df -i

# Pinpoint top directories consuming inodes:
find / -xdev -printf '%h\n' | sort | uniq -c | sort -k1 -rn | head -n 20
```

---

## 5. Systemd Architecture: Units, Sandboxing & Journalctl

Systemd is the PID 1 initialization and service supervisor in modern Linux distributions.

### Production Hardened Systemd Service Template
Save as `/etc/systemd/system/production-api.service`:

```ini
[Unit]
Description=Enterprise Production Node.js Microservice
Documentation=https://internal.wiki/docs/api
After=network-online.target remote-fs.target
Wants=network-online.target

[Service]
Type=simple
User=appuser
Group=appgroup
WorkingDirectory=/opt/production-api
ExecStart=/usr/bin/node dist/server.js
ExecReload=/bin/kill -HUP $MAINPID
Restart=on-failure
RestartSec=5s

# Resource Constraints (cgroups v2)
MemoryMax=2G
MemoryHigh=1.8G
CPUQuota=200%
TasksMax=4096
LimitNOFILE=65535

# Security Sandboxing Primitives
ProtectSystem=strict
ProtectHome=true
PrivateTmp=true
ProtectKernelTunables=true
ProtectKernelModules=true
ProtectControlGroups=true
NoNewPrivileges=true
CapabilityBoundingSet=CAP_NET_BIND_SERVICE
AmbientCapabilities=CAP_NET_BIND_SERVICE
ReadWritePaths=/opt/production-api/storage /var/log/app

# Environment Management
EnvironmentFile=/etc/production-api/env.conf

[Install]
WantedBy=multi-user.target
```

### Systemd Timers vs. Cron
Systemd timers supersede legacy cron jobs by providing:
- Dependency management (`After=network-online.target`).
- Unified logging integrated into `journalctl`.
- Accurate execution tracking (`systemctl list-timers`).
- Persistent execution across server reboots for missed schedules (`Persistent=true`).

---

## 6. Kernel & Syscall Tracing: `strace`, `lsof`, and Diagnostics

### Debugging Stuck Processes Using `strace`
When a process is unresponsive or consuming 100% CPU:

```bash
# Attach to running process PID, track child threads (-f), display syscall duration (-T), and timestamps (-tt):
strace -p <PID> -f -tt -T -s 512

# Count syscall frequencies and errors over a 10-second capture window:
strace -p <PID> -c -S time -- sleep 10
```

**Interpreting Syscall Bottlenecks**:
- Stuck on `futex(..., FUTEX_WAIT, ...)` $\rightarrow$ Deadlock or lock contention between application threads.
- Stuck on `epoll_wait(...)` $\rightarrow$ Process is healthy, idling and waiting for network/socket events.
- Stuck on `read(3, ...)` or `write(4, ...)` $\rightarrow$ Blocked on network socket or disk file descriptor. Inspect descriptor destination using `ls -l /proc/<PID>/fd/3`.

---

# PART 4: Production Bash Automation Engineering Standard & Hardened Recipes

This section establishes strict corporate engineering standards for Bash automation, remediating fragile patterns, hardcoded secrets, and unhandled signal failures.

## 1. Enterprise Bash Boilerplate & Safety Rules

Every automation script produced for production execution must conform to the following boilerplate:

```bash
#!/usr/bin/env bash
# ==============================================================================
# Script Name: boilerplate-engine.sh
# Purpose:     Enterprise Standard Production Automation Engine
# Enforces:    POSIX compliance, strict error handling, signal trapping, and logs
# ==============================================================================

set -euo pipefail
IFS=$'\n\t'
umask 077

# Script Directory and Runtime Variables
readonly SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
readonly SCRIPT_NAME="$(basename "${BASH_SOURCE[0]}")"
readonly LOG_FILE="/var/log/${SCRIPT_NAME%.*}.log"
TMP_DIR=""

# Terminal Colors for Interactive Execution
readonly COLOR_RED='\033[0;31m'
readonly COLOR_GREEN='\033[0;32m'
readonly COLOR_YELLOW='\033[0;33m'
readonly COLOR_RESET='\033[0m'

# Structured Logging Functions
log_info()    { printf "[%s] [INFO]    %s\n" "$(date -u +'%Y-%m-%dT%H:%M:%SZ')" "$*" | tee -a "${LOG_FILE}"; }
log_warn()    { printf "${COLOR_YELLOW}[%s] [WARN]    %s${COLOR_RESET}\n" "$(date -u +'%Y-%m-%dT%H:%M:%SZ')" "$*" | tee -a "${LOG_FILE}" >&2; }
log_error()   { printf "${COLOR_RED}[%s] [ERROR]   %s${COLOR_RESET}\n" "$(date -u +'%Y-%m-%dT%H:%M:%SZ')" "$*" | tee -a "${LOG_FILE}" >&2; }
log_success() { printf "${COLOR_GREEN}[%s] [SUCCESS] %s${COLOR_RESET}\n" "$(date -u +'%Y-%m-%dT%H:%M:%SZ')" "$*" | tee -a "${LOG_FILE}"; }

# Exit Trap and Resource Cleanup
cleanup() {
    local exit_code=$?
    log_info "Executing exit handler with status code: ${exit_code}"
    if [[ -n "${TMP_DIR}" && -d "${TMP_DIR}" ]]; then
        rm -rf "${TMP_DIR}"
        log_info "Cleaned temporary scratch directory: ${TMP_DIR}"
    fi
    exit "${exit_code}"
}
trap cleanup EXIT INT TERM

# Ensure Root Execution Guard (if required)
require_root() {
    if [[ "${EUID}" -ne 0 ]]; then
        log_error "This script must be executed as root (UID 0)."
        exit 1
    fi
}
```

---

## 2. Hardened Production Recipes

### Recipe 1: Universal Multi-Database Backup with Retention & Cloud Sync
Supports MySQL, PostgreSQL, and directory archives with zero hardcoded passwords.

```bash
#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'

# Environment Variable Validation
: "${BACKUP_TYPE:?Must specify BACKUP_TYPE: mysql | postgres | dir}"
: "${BACKUP_TARGET_DIR:=/var/backups/automated}"
: "${RETENTION_DAYS:=14}"
: "${S3_BUCKET:=""}" # Optional S3 destination, e.g., "s3://corp-backups-bucket/db"

TIMESTAMP="$(date +'%Y%m%d_%H%M%S')"
BACKUP_SUBDIR="${BACKUP_TARGET_DIR}/${BACKUP_TYPE}"
mkdir -p "${BACKUP_SUBDIR}"

case "${BACKUP_TYPE}" in
    mysql)
        : "${MYSQL_HOST:=localhost}"
        : "${MYSQL_USER:=root}"
        : "${MYSQL_PWD:?MYSQL_PWD must be injected via environment or Vault}"
        export MYSQL_PWD
        BACKUP_FILE="${BACKUP_SUBDIR}/mysql_all_${TIMESTAMP}.sql.gz"
        echo "[INFO] Starting MySQL full database dump..."
        mysqldump -h "${MYSQL_HOST}" -u "${MYSQL_USER}" --all-databases --single-transaction --quick | gzip -9 > "${BACKUP_FILE}"
        ;;
    postgres)
        : "${PGHOST:=localhost}"
        : "${PGUSER:=postgres}"
        : "${PGPASSWORD:?PGPASSWORD must be injected via environment or Vault}"
        export PGPASSWORD
        BACKUP_FILE="${BACKUP_SUBDIR}/pg_all_${TIMESTAMP}.sql.gz"
        echo "[INFO] Starting PostgreSQL database dump..."
        pg_dumpall -h "${PGHOST}" -U "${PGUSER}" | gzip -9 > "${BACKUP_FILE}"
        ;;
    dir)
        : "${SOURCE_DIR:?SOURCE_DIR is required for dir backup}"
        BACKUP_FILE="${BACKUP_SUBDIR}/dir_${TIMESTAMP}.tar.gz"
        echo "[INFO] Starting directory archive of ${SOURCE_DIR}..."
        tar -czf "${BACKUP_FILE}" -C "$(dirname "${SOURCE_DIR}")" "$(basename "${SOURCE_DIR}")"
        ;;
    *)
        echo "[ERROR] Unknown BACKUP_TYPE: ${BACKUP_TYPE}" >&2
        exit 1
        ;;
esac

echo "[SUCCESS] Backup generated: ${BACKUP_FILE} ($(du -sh "${BACKUP_FILE}" | cut -f1))"

# Cloud Sync (if S3 bucket is configured)
if [[ -n "${S3_BUCKET}" ]]; then
    echo "[INFO] Syncing backup to AWS S3: ${S3_BUCKET}..."
    aws s3 cp "${BACKUP_FILE}" "${S3_BUCKET}/" --only-show-errors
fi

# Retention Cleanup: Delete local archives older than retention threshold
echo "[INFO] Purging local backups older than ${RETENTION_DAYS} days..."
find "${BACKUP_SUBDIR}" -type f -name "*_${BACKUP_TYPE}_*" -mtime +"${RETENTION_DAYS}" -delete
echo "[SUCCESS] Local backup rotation complete."
```

### Recipe 2: Proactive Disk Space & Inode Threshold Sentinel
Monitors both disk block capacity and inode limits across mounted filesystems, triggering webhook notifications to Slack, PagerDuty, or Microsoft Teams.

```bash
#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'

readonly DISK_ALERT_THRESHOLD=85
readonly INODE_ALERT_THRESHOLD=85
readonly WEBHOOK_URL="${SLACK_WEBHOOK_URL:-}"

HOSTNAME="$(hostname -f)"
ALERTS=()

# Evaluate Block Capacity
while read -r usage mountpoint; do
    usage_num="${usage%\%}"
    if [[ "${usage_num}" -ge "${DISK_ALERT_THRESHOLD}" ]]; then
        ALERTS+=("Disk space alert on ${HOSTNAME}: ${mountpoint} is at ${usage} utilization (Threshold: ${DISK_ALERT_THRESHOLD}%)")
    fi
done < <(df -PTh -x tmpfs -x devtmpfs -x overlay | awk 'NR>1 {print $6, $7}')

# Evaluate Inode Capacity
while read -r iusage mountpoint; do
    iusage_num="${iusage%\%}"
    if [[ "${iusage_num}" -ge "${INODE_ALERT_THRESHOLD}" ]]; then
        ALERTS+=("Inode alert on ${HOSTNAME}: ${mountpoint} is at ${iusage} inode usage (Threshold: ${INODE_ALERT_THRESHOLD}%)")
    fi
done < <(df -Pi -x tmpfs -x devtmpfs -x overlay | awk 'NR>1 {print $5, $6}')

# Dispatch Alerts if Triggered
if [[ ${#ALERTS[@]} -gt 0 ]]; then
    MESSAGE_BODY=$(printf "%s\n" "${ALERTS[@]}")
    echo "[ALERT DETECTED]"
    echo "${MESSAGE_BODY}"
    
    if [[ -n "${WEBHOOK_URL}" ]]; then
        JSON_PAYLOAD=$(printf '{"text": "*High System Alert on %s*\n```%s```"}' "${HOSTNAME}" "${MESSAGE_BODY}")
        curl -s -X POST -H 'Content-type: application/json' --data "${JSON_PAYLOAD}" "${WEBHOOK_URL}" > /dev/null
        echo "[INFO] Webhook alert successfully dispatched."
    fi
    exit 2
fi

echo "[OK] All filesystems within safe operating limits."
exit 0
```

### Recipe 3: Safe Container Lifecycle Reclamation Engine
Prunes orphaned Docker containers, dead build caches, and dangling networks without terminating production workloads.

```bash
#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'

echo "[INFO] Inspecting Docker storage reclamation opportunities..."

# Display storage consumption prior to cleanup
docker system df

# 1. Prune containers stopped more than 48 hours ago
echo "[INFO] Removing exited containers older than 48 hours..."
docker container prune --force --filter "until=48h"

# 2. Prune dangling and untagged images
echo "[INFO] Purging dangling image layers..."
docker image prune --force

# 3. Clean unused networks
echo "[INFO] Purging unused bridge networks..."
docker network prune --force

# 4. Reclaim BuildKit build caches older than 7 days
echo "[INFO] Pruning stale build cache (>7d)..."
docker builder prune --force --filter "until=168h"

# Post-cleanup metrics
echo "[INFO] Post-reclamation storage state:"
docker system df
```


---

# PART 5: Docker & Container Operations, Internals, and Hardening

This section establishes production container engineering principles, covering low-level Linux kernel isolation mechanisms, multi-stage BuildKit optimization, and CIS-compliant container security.

## 1. Container Runtime Architecture: Namespaces & cgroups v2

Containers are not virtual machines; they are standard Linux processes isolated by the Linux kernel using two core features:

```
+-----------------------------------------------------------------------+
|                             USER SPACE                                |
|                                                                       |
|  +------------------------------+   +------------------------------+  |
|  |     Container Process A      |   |     Container Process B      |  |
|  |       (PID 1 inside NS)      |   |       (PID 1 inside NS)      |  |
|  +------------------------------+   +------------------------------+  |
|                 |                                  |                  |
+-----------------|----------------------------------|------------------+
|                 v                                  v                  |
|  +-----------------------------------------------------------------+  |
|  |                          LINUX KERNEL                           |  |
|  |                                                                 |  |
|  |  [Kernel Namespaces - ISOLATION]                                |  |
|  |   - PID: Process ID virtualization (PID 1 inside container)     |  |
|  |   - NET: Isolated routing tables, iptables, veth pairs, ports   |  |
|  |   - MNT: Private mount points and pivot_root filesystem views   |  |
|  |   - IPC: Isolated System V IPC and POSIX message queues         |  |
|  |   - UTS: Independent hostnames and domain names                 |  |
|  |   - USER: UID/GID mapping (container root maps to unpriv UID)   |  |
|  |                                                                 |  |
|  |  [Control Groups (cgroups v2) - RESOURCE CONSTRAINTS]           |  |
|  |   - memory.max: Hard OOM boundary (triggers OOM Killer)         |  |
|  |   - memory.high: Throttling threshold (proactive reclamation)   |  |
|  |   - cpu.weight / cpu.max: CFS bandwidth quotas & throttling     |  |
|  |   - io.weight / io.max: Disk IOPS and byte rate caps            |  |
|  +-----------------------------------------------------------------+  |
|                                                                       |
+-----------------------------------------------------------------------+
```

### The In-Kernel Reality
When a container runs `ps aux`, it sees only its own process tree because the kernel's `pid_namespace` translates container PIDs to global host PIDs. On the host, the container's process is visible in `ps -ef` as a normal process with a standard host PID.

---

## 2. Multi-Stage Dockerfile Engineering & BuildKit Acceleration

### High-Performance Python Multi-Stage Dockerfile
Implements non-root user, BuildKit pip cache mounts, and minimal runtime footprint.

```dockerfile
# syntax=docker/dockerfile:1.4
# Stage 1: Build & Dependency Resolution Stage
FROM python:3.12-slim-bookworm AS builder

WORKDIR /build

# Install build dependencies required for compiling wheels
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .

# Leverage BuildKit cache mount to persist pip download cache across builds
RUN --mount=type=cache,target=/root/.cache/pip \
    pip wheel --no-cache-dir --wheel-dir=/build/wheels -r requirements.txt

# Stage 2: Minimal Production Runtime
FROM python:3.12-slim-bookworm AS production

ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PORT=8000

WORKDIR /app

# Install runtime shared libraries only (no compiler toolchain)
RUN apt-get update && apt-get install -y --no-install-recommends \
    libpq5 \
    curl \
    && rm -rf /var/lib/apt/lists/* \
    && addgroup --system --gid 10001 appgroup \
    && adduser --system --uid 10001 --ingroup appgroup --no-create-home appuser

# Install pre-built wheels from builder stage
COPY --from=builder /build/wheels /wheels
RUN pip install --no-cache-dir /wheels/* && rm -rf /wheels

# Copy application source code with non-root ownership
COPY --chown=appuser:appgroup ./src /app/src

USER 10001:10001

EXPOSE 8000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:8000/healthz || exit 1

ENTRYPOINT ["python", "-m", "src.main"]
```

### BuildKit Cache Mounting Syntax
- `--mount=type=cache,target=/root/.cache/pip` (Python)
- `--mount=type=cache,target=/root/.npm` (Node.js)
- `--mount=type=cache,target=/go/pkg/mod` (Golang)
- `--mount=type=secret,id=npmrc,target=/root/.npmrc` (Inject private NPM credentials without baking into image layers).

---

## 3. Container Security Benchmark & Hardening Checklist

| Security Control | Implementation Mechanism | Risk Mitigated |
|:---|:---|:---|
| **Non-Root Execution** | `USER 10001:10001` in Dockerfile | Limits attacker privilege if remote code execution (RCE) occurs. |
| **Capability Dropping** | `docker run --cap-drop ALL --cap-add NET_BIND_SERVICE` | Strips raw kernel capabilities (`CAP_SYS_ADMIN`, `CAP_NET_RAW`), blocking container breakout exploits. |
| **Read-Only Root Filesystem** | `docker run --read-only --tmpfs /tmp:rw,noexec,nosuid,size=64m` | Prevents malware from downloading and executing binary payloads on disk. |
| **No Privileged Mode** | Forbid `--privileged` in CI/CD and production manifests | `--privileged` disables all AppArmor/SELinux profiles, cgroups, and device cgroups, granting full host root access. |
| **Memory & CPU Caps** | `--memory=512m --memory-swap=512m --cpus=1.5` | Prevents container "noisy neighbors" from starving the host OS and inducing node-wide OOM panics. |
| **Logging Limits** | `daemon.json`: `max-size: "50m"`, `max-file: "3"` | Prevents unrotated container stdout/stderr JSON logs from filling the host root volume `/var/lib/docker`. |

---

## 4. Container Exit Code Diagnostic Matrix

```
                                  Container Stopped
                                          │
                                 Exit Code Evaluation
                                          │
                  ┌───────────────────────┼────────────────────────┐
                  │                       │                        │
             Code = 0                 Code = 1                Code = 137
                  │                       │                        │
         Normal Termination          App Exception           Killed by SIGKILL
                  │                       │                        │
         Inspect if container    Check app stack trace    Check:
         was intended as batch   in docker logs           docker inspect <c> |
         job or daemon.                                   grep OOMKilled
                                                                   │
                                                ┌──────────────────┴──────────────────┐
                                                │                                     │
                                         OOMKilled: true                       OOMKilled: false
                                                │                                     │
                                         Exceeded cgroup limit.             External kill issued
                                         Increase container memory          (e.g., systemd, pod
                                         limit.                             eviction, CI timeout).
```

### Exit Code Reference Table

| Exit Code | Signal / Category | Root Cause Analysis | Remediation Protocol |
|:---:|:---|:---|:---|
| `0` | Success | Foreground process finished cleanly. If the container was supposed to stay running, the entrypoint process terminated. | Ensure entrypoint process stays in foreground (e.g., `nginx -g 'daemon off;'` instead of `nginx`). |
| `1` | Application Error | Uncaught application exception, syntax error, or missing dependency. | Run `docker logs <container_name>` to view stack trace. |
| `125` | Docker CLI Error | The `docker run` command failed itself (e.g., unknown flag, invalid volume mount syntax). | Review CLI parameters and volume path syntax. |
| `126` | Execution Error | Container entrypoint or command could not be invoked (e.g., permission denied on binary). | Ensure executable bit is set: `chmod +x entrypoint.sh`. |
| `127` | Command Not Found | Executable declared in `ENTRYPOINT` or `CMD` does not exist in container `$PATH`. | Verify path to binary inside container; check if `/bin/bash` is called in an Alpine image (Alpine uses `/bin/sh`). |
| `137` | `SIGKILL` (128 + 9) | The container was forcibly terminated by the Linux kernel OOM killer or an explicit `docker kill`. | Check `docker inspect <c> --format '{{.State.OOMKilled}}'`. If true, raise memory limits or optimize application heap. |
| `139` | `SIGSEGV` (128 + 11) | Segmentation fault: memory corruption or compiled binary architecture mismatch (e.g., x86_64 binary executed on ARM64 Graviton). | Recompile binary or build multi-arch with `docker buildx build --platform linux/amd64,linux/arm64`. |
| `143` | `SIGTERM` (128 + 15) | Graceful termination signal sent by Docker daemon during `docker stop` or orchestrator pod termination. | Normal expected exit during graceful shutdown window (default 10s timeout). |

---

# PART 6: Modern AWS Solutions Architecture (2024/2025 Edition)

This section details contemporary enterprise AWS architecture based on the latest 2024/2025 official whitepapers and AWS Solutions Architect frameworks.

## 1. Modern Compute & Serverless Topology

```
                                Workload Compute Matrix
                                           │
                     ┌─────────────────────┴─────────────────────┐
                     │                                           │
             Containerized / Microservice                Event-Driven / Batch
                     │                                           │
             ┌───────┴───────┐                           ┌───────┴───────┐
             │               │                           │               │
         Amazon EKS      Amazon ECS                AWS Lambda      AWS Batch
     (Kubernetes API,   (AWS-native,             (Serverless,    (High-Throughput
      Multi-cloud)      Fargate, no K8s)          15-min cap)     HPC, Spot EC2)
```

### Contemporary Compute Paradigms
- **AWS Graviton4**: ARM-based custom silicon providing up to 30% higher compute performance and 20% lower cost compared to comparable x86-64 instances.
- **Compute Savings Plans**: Flexible 1 or 3-year commitment offering up to 66% discount applicable across EC2 instance families, AWS Fargate, and AWS Lambda regardless of region or OS.
- **AWS Lambda SnapStart**: Solves Java and Python cold starts by caching initialized microVM memory snapshots in tiered Firecracker cache, reducing p99 startup latency from seconds to under 200ms.

---

## 2. Modern Cloud Storage Hierarchy & Decision Matrix

```
                                Storage Decision Matrix
                                           │
        ┌───────────────────┬──────────────┴───────┬───────────────────┐
        │                   │                      │                   │
  Object (S3)          Block (EBS)            File (EFS/FSx)       Ephemeral
        │                   │                      │                   │
  ├─ S3 Express 1-Zone  ├─ gp3 (Baseline 3K)   ├─ EFS (Linux NFS)  └─ Instance Store
  ├─ S3 Standard        ├─ io2 Block Express   │   ├─ Standard        (Non-persistent,
  ├─ S3 Intelligent        (SAN, 256K IOPS)    │   └─ Archive Tier     extreme IOPS)
  └─ S3 Glacier Deep    └─ st1 / sc1 (HDD)     └─ FSx (Lustre/NetApp/
                                                       Windows SMB)
```

### Storage Selection Guide

| Service | Protocol / API | Performance Profile | Ideal Use Case | Cost Optimization Lever |
|:---|:---|:---|:---|:---|
| **S3 Express One Zone** | REST API (Directory Buckets) | Consistent single-digit millisecond latency; 10x faster than S3 Standard | AI/ML model training data ingest, real-time analytics, financial caching | Co-locate in same AZ as compute to eliminate inter-AZ data transfer fees |
| **S3 Intelligent-Tiering** | REST API | Automatically moves objects across 3 access tiers (Frequent, Infrequent, Archive) | Workloads with unknown, changing, or unpredictable access patterns | Zero retrieval fees; automate lifecycle transitions |
| **S3 Glacier Flexible / Deep Archive** | REST API | Hours retrieval (Flexible) to 12-48 hours (Deep Archive); 99.999999999% durability | Long-term compliance, financial archives, medical imaging records | Lowest cost cloud storage (\$0.00099/GB/month for Deep Archive) |
| **EBS gp3** | Block | Independent IOPS (up to 16,000) and Throughput (up to 1,000 MB/s) decoupled from disk size | OS boot drives, dev/test databases, container volumes | 20% cheaper than legacy gp2; configure only required IOPS/MBps |
| **EBS io2 Block Express** | Block | Sub-millisecond latency, up to 256,000 IOPS, 4,000 MB/s throughput, 99.999% durability | Mission-critical enterprise SAN replacement, SAP HANA, Oracle, MS SQL Server | Provisioned IOPS ratio up to 1,000:1 per GiB |
| **Amazon EFS** | NFSv4 (POSIX) | Shared elastic filesystem across hundreds of EC2 / EKS pods across multi-AZ | Content management, container shared home directories, data sharing | **EFS Archive Tier**: Reduces storage cost up to 50% for rarely accessed files |
| **FSx for Lustre** | Lustre (POSIX) | Hundreds of GB/s throughput, millions of IOPS, sub-millisecond latencies | HPC, distributed ML model training, autonomous vehicle simulation | Integrates directly with S3 buckets for fast hydration |

---

## 3. Modern Cloud Networking: VPC Peering vs. Transit Gateway vs. VPC Lattice

```
                    Networking Interconnect Topology Matrix
                                       │
            ┌──────────────────────────┼──────────────────────────┐
            │                          │                          │
       VPC Peering              Transit Gateway             AWS VPC Lattice
            │                          │                          │
   Point-to-point (2 VPCs)     Hub-and-spoke (100s VPCs)  Application-Layer (L7)
   Non-transitive              Transitive routing         No CIDR overlap issues
   No bandwidth bottleneck     Centralized firewall/VPN   Built-in mTLS & Cedar auth
   Lowest cost (no hourly fee) Complex route tables       Cross-VPC / Cross-account
```

### Enterprise Networking Comparison

| Dimension | VPC Peering | AWS Transit Gateway (TGW) | AWS VPC Lattice |
|:---|:---|:---|:---|
| **Operating Layer** | Layer 3 (IP Packet) | Layer 3 (IP Packet Hub) | Layer 7 (Application / HTTP / gRPC) |
| **CIDR Overlap Handling** | Fails; overlapping CIDRs cannot peer | Requires Private NAT GW workarounds | **Native support**; abstracts underlying IP topologies entirely |
| **Transitivity** | Non-transitive ($A \leftrightarrow B$ and $B \leftrightarrow C$ does NOT mean $A \leftrightarrow C$) | **Fully transitive** routing hub across VPCs, Direct Connect, and VPNs | Not applicable (operates at service mesh layer) |
| **Security & Auth** | Security Groups, NACLs | Route tables, Network Appliance inspection | **Service-to-service IAM auth**, Cedar policy engine, automatic mTLS |
| **Bandwidth Limits** | No bandwidth limit (uses underlying AWS network fabric) | Up to 50 Gbps per VPC attachment burst | Scalable managed service mesh |

### AWS PrivateLink vs. Gateway Endpoints

- **Gateway Endpoints**: Free of charge; supported **only for Amazon S3 and DynamoDB**. Operates by injecting target routes directly into VPC Route Tables.
- **Interface Endpoints (PrivateLink)**: Uses Elastic Network Interfaces (ENIs) with private IP addresses inside your VPC subnets. Supports almost all AWS services (ECR, Secrets Manager, SQS, SNS, SSM) and third-party SaaS. Incurs hourly ENI fee and per-GB data processing charge.

---

## 4. Modern Cloud Security: Verified Permissions, IAM & Security Lake

### Authorization Evolution: IAM vs. Amazon Verified Permissions (Cedar)
- **AWS IAM**: Authorizes *principals* (roles, users) to interact with *AWS resources* (EC2, S3, RDS) via AWS API endpoints.
- **Amazon Verified Permissions**: Externalized fine-grained authorization engine for *your custom business applications*, using the open-source **Cedar** policy language. Decouples RBAC/ABAC authorization logic from application code.

#### Example Cedar Policy in Verified Permissions
```cedar
// Permit team leads to view and approve purchase orders under $10,000 in their department
permit (
    principal in Role::"TeamLead",
    action in [Action::"ViewOrder", Action::"ApproveOrder"],
    resource in ResourceType::"PurchaseOrder"
)
when {
    principal.department == resource.department &&
    resource.orderAmount < 10000
};
```

### Amazon Security Lake & OCSF Standard
Amazon Security Lake automatically centralizes security data from AWS CloudTrail, VPC Flow Logs, Route 53 Resolver logs, and third-party security tools (CrowdStrike, Palo Alto, Splunk) into a purpose-built security data lake in S3.
- Standardizes all data into the open **OCSF (Open Cybersecurity Schema Framework)** format.
- Queries security events across the entire multi-account enterprise in seconds using Amazon Athena and Apache Parquet columnar storage without proprietary ETL pipelines.

---

## 5. Enterprise Generative AI Architecture: Amazon Bedrock

```
+-----------------------------------------------------------------------------------+
|                           AMAZON BEDROCK ARCHITECTURE                             |
|                                                                                   |
|  +---------------------+        +--------------------+      +------------------+  |
|  |  Client Application | -----> | Bedrock Guardrails | ---> | Foundation Model |  |
|  |  (API / Chatbot)    |        | (PII mask, safety) |      | (Claude 3.5,     |  |
|  +---------------------+        +--------------------+      |  Titan, Llama 3) |  |
|             ^                              │                +------------------+  |
|             │                              v                          │           |
|             │                   +--------------------+                │           |
|             └────────────────── |   Bedrock Agents   | <──────────────┘           |
|                                 | (Multi-step logic) |                            |
|                                 +--------------------+                            |
|                                            │                                      |
|                                            v                                      |
|                                 +--------------------+                            |
|                                 |  Knowledge Bases   |                            |
|                                 |  (OpenSearch /     |                            |
|                                 |   Pinecone Vector) |                            |
|                                 +--------------------+                            |
+-----------------------------------------------------------------------------------+
```

### Core Bedrock Components
- **Foundation Models (Serverless)**: On-demand access to state-of-the-art models (Anthropic Claude 3.5 Sonnet, Meta Llama 3, Amazon Titan) via single unified API without managing GPU instances.
- **Knowledge Bases for Bedrock**: Managed Retrieval-Augmented Generation (RAG). Automatically chunks documents from S3, converts text into embeddings (Titan Text Embeddings), and stores them in vector databases (Amazon OpenSearch Serverless, Pinecone, Aurora PostgreSQL pgvector).
- **Bedrock Guardrails**: Enforces enterprise safety policies, filters hate speech/profanity, blocks prompt injection attacks, and redacts PII (SSN, credit card numbers) across user prompts and model responses.
- **Bedrock Agents**: Orchestrates multi-step reasoning tasks by decomposing user intent, generating API parameters, and calling AWS Lambda functions to interact with enterprise databases and SaaS tools.


---

# PART 7: Microsoft Azure Cloud Architecture & Governance

This section codifies enterprise Microsoft Azure architecture, identity governance, storage replication topologies, hybrid networking, and cloud security frameworks (AZ-104 / AZ-305 / AZ-500).

## 1. Enterprise Identity & Governance Hierarchy

Azure enforces a strict 4-level scope hierarchy for identity access and compliance policies:

```
                      +-----------------------------------+
                      |       Root Management Group       |
                      +-----------------------------------+
                                        |
                 +----------------------+----------------------+
                 |                                             |
  +-----------------------------+               +-----------------------------+
  |    Prod Management Group    |               |   Non-Prod Management Group |
  +-----------------------------+               +-----------------------------+
                 |                                             |
  +-----------------------------+               +-----------------------------+
  |    Production Subscription  |               |    Sandbox Subscription     |
  +-----------------------------+               +-----------------------------+
                 |                                             |
  +-----------------------------+               +-----------------------------+
  |   Resource Group: rg-prod   |               |   Resource Group: rg-dev    |
  +-----------------------------+               +-----------------------------+
                 |                                             |
  +-----------------------------+               +-----------------------------+
  | Resource: AKS / App Service |               | Resource: Virtual Machine   |
  +-----------------------------+               +-----------------------------+
```

### RBAC vs. Azure Policy Demystified
- **Azure RBAC (Role-Based Access Control)**: Answers *"Who can perform actions on resources?"* Focuses on user/identity actions (e.g., Contributor, Reader, User Access Administrator).
- **Azure Policy**: Answers *"What properties must resources have?"* Focuses on resource compliance and guardrails regardless of who deploys them (e.g., enforce encryption at rest, disallow public IP creation, mandate resource tags, restrict allowed deployment regions).
- **Golden Rule**: Azure Policy takes precedence over RBAC. If a user is an Owner or Contributor, but an Azure Policy denies non-compliant deployments, the deployment is blocked.

### Privileged Identity Management (PIM)
- Enforces **Just-In-Time (JIT)** administrative access to privileged roles (Global Administrator, Contributor).
- Replaces permanent standing admin access with time-bound activations (e.g., 2 hours).
- Mandates multi-factor authentication (MFA), ticket numbers, and managerial approvals before elevating privileges.

---

## 2. Azure Storage Redundancy & Replication Matrix

Azure Storage provides multiple replication topologies designed to balance data durability, read performance, and regional disaster recovery:

```
                            Storage Replication Decision Flow
                                            │
                                  Need Geo-Redundancy?
                                            │
                    ┌───────────────────────┴───────────────────────┐
                    │                                               │
                   NO                                              YES
                    │                                               │
          Need Zone-Redundancy?                           Need Zone-Redundancy?
          (3 Data Centers in 1 Region)                    (In Primary Region)
                    │                                               │
            ┌───────┴───────┐                               ┌───────┴───────┐
            │               │                               │               │
           YES              NO                             YES              NO
            │               │                               │               │
           ZRS             LRS                            GZRS             GRS
      (Zone-Redundant  (Locally-Redundant            (Geo-Zone-Redundant (Geo-Redundant
       Storage)         Storage)                       Storage)            Storage)
                                                            │               │
                                                     Need Secondary Region Read Access?
                                                            │               │
                                                     ┌──────┴──────┐ ┌──────┴──────┐
                                                     │             │ │             │
                                                    YES            NO│            YES
                                                     │               │             │
                                                  RA-GZRS           GRS          RA-GRS
```

### Redundancy Tier Specifications

| Redundancy Level | Data Copies | Failure Domain Protection | Durability SLA | Recommended Enterprise Workload |
|:---|:---:|:---|:---:|:---|
| **LRS** (Locally Redundant) | 3 | Single rack or drive failure in 1 DC | 99.999999999% (11 9s) | Dev/test, non-critical data easily regenerated from backups. |
| **ZRS** (Zone Redundant) | 3 | Complete datacenter failure across 3 AZs | 99.9999999999% (12 9s) | High availability transactional data, AKS persistent volumes. |
| **GRS** (Geo Redundant) | 6 | Major regional natural disaster (3 in primary LRS + 3 in secondary LRS) | 99.99999999999999% (16 9s) | Enterprise disaster recovery compliance (secondary region failover). |
| **RA-GRS** (Read-Access Geo) | 6 | Regional outage + **read-only access to secondary region** | 99.99999999999999% (16 9s) | Business-critical applications requiring read availability during primary region outage. |
| **GZRS** (Geo-Zone Redundant) | 6 | Zonal failure in primary (ZRS) + Regional failure in secondary (LRS) | 99.99999999999999% (16 9s) | Maximum resilience: handles both AZ loss and regional catastrophe. |
| **RA-GZRS** | 6 | All GZRS protections + **immediate read access to secondary region** | 99.99999999999999% (16 9s) | Financial banking systems, mission-critical healthcare records. |

---

## 3. Azure Networking & Load Balancing Architecture

```
                       Azure Load Balancing Selection Tree
                                        │
                           Is Traffic Web / HTTP(S)?
                                        │
                ┌───────────────────────┴───────────────────────┐
                │                                               │
               YES                                             NO
                │                                               │
        Is Routing Global?                              Is Routing Global?
                │                                               │
        ┌───────┴───────┐                               ┌───────┴───────┐
        │               │                               │               │
       YES              NO                             YES              NO
        │               │                               │               │
  Azure Front Door   Application Gateway v2     Traffic Manager   Azure Load Balancer
  (Global L7 CDN,    (Regional L7 WAF,          (DNS-based        (Standard SKU,
   Anycast, WAF)      URL routing, SSL offload)  Global routing)   L4 TCP/UDP, HA Ports)
```

### Load Balancer Decision Framework
- **Azure Front Door (Global Layer 7)**: Acts as an entry point for global web applications. Combines global anycast routing, edge SSL termination, global CDN content caching, and distributed OWASP WAF protection.
- **Application Gateway v2 (Regional Layer 7)**: Deployed inside a dedicated VNet subnet. Supports cookie-based session affinity, URL path-based routing (`/api/*` vs `/images/*`), SSL offloading, and ModSecurity/OWASP CRS 3.2 WAF engine.
- **Azure Load Balancer Standard (Layer 4)**: Ultra-low latency TCP/UDP load balancer. Supports High Availability (HA) ports rule (load balances all ports across backend NVA firewalls simultaneously).
- **Traffic Manager (DNS Layer)**: Directs client DNS queries to optimal endpoints based on Priority, Weighted, Performance, or Geographic routing methods. Does not terminate or proxy traffic.

### Network Security Groups (NSGs) vs. Application Security Groups (ASGs)
- **NSG**: Contains stateful Layer 4 firewall rules (5-tuple: Source IP, Source Port, Destination IP, Destination Port, Protocol) attached to subnets or network interfaces (NICs).
- **ASG**: Logical groupings of virtual machines. Enables writing human-readable NSG rules using logical application tags (e.g., `Allow HTTP from WebServers-ASG to AppServers-ASG`) without hardcoding changing private IP addresses.

---

## 4. Azure Security & Observability Architecture

### Key Vault Architecture & Best Practices
- **Secrets**: Passwords, API tokens, connection strings (plain strings).
- **Keys**: Cryptographic asymmetric/symmetric keys (RSA, ECC, AES) used for data encryption; keys **never leave the Key Vault HSM perimeter**.
- **Certificates**: X.509 certificates integrated with automated renewal via DigiCert or Let's Encrypt.
- **Access Model**: Mandate **Azure RBAC permission model** over legacy Key Vault Access Policies for granular per-secret access assignments.

### Security Operations: Microsoft Defender for Cloud & Microsoft Sentinel
- **Microsoft Defender for Cloud (CSPM & CWPP)**:
  - Cloud Security Posture Management: Continuous regulatory compliance auditing (CIS, NIST, ISO 27001) and Secure Score computation.
  - Cloud Workload Protection: Real-time threat detection for VMs, AKS clusters, Azure Storage accounts, and SQL databases.
- **Microsoft Sentinel (Cloud SIEM & SOAR)**:
  - Collects security event data at cloud scale using Azure Monitor Log Analytics.
  - Detects sophisticated cyber threats using AI and Microsoft Threat Intelligence.
  - Investigates attack timelines using graphical relationship graphs.
  - Responds automatically to incidents using Azure Logic Apps automated playbooks.

---

# PART 8: High-Stakes Production Incident Runbooks (Scenario-Based Troubleshooting)

This section details rigorous, step-by-step diagnostic workflows for severe production outages across Linux, Docker, Kubernetes, AWS, and Azure infrastructure.

---

## Incident 1: Kubernetes Pod `CrashLoopBackOff` & Startup Failure

```
                              Pod in CrashLoopBackOff
                                         │
                         Check Container Exit Code & State
                           kubectl describe pod <pod_name>
                                         │
             ┌───────────────────────────┼───────────────────────────┐
             │                           │                           │
       Exit Code 137               Exit Code 1 / 2             Exit Code 127 / 126
             │                           │                           │
       OOMKilled: true             App Code Error /            Binary Not Found /
             │                     Config Misconfiguration     Permission Denied
             │                           │                           │
   Pod memory limit exceeded.    Check:                      Check:
   Increase resources.limits     kubectl logs <pod>          Dockerfile ENTRYPOINT path,
   in deployment manifest.       --previous                  missing shared libraries.
```

### Complete Diagnostic Procedure

#### Step 1: Query Pod Events Chronologically
```bash
kubectl get pod <pod_name> -n <namespace> -o wide
kubectl describe pod <pod_name> -n <namespace>
```
Inspect the `Last State` block:
- If `Reason: OOMKilled` and `Exit Code: 137` $\rightarrow$ The kernel cgroup memory controller terminated the process. Increase `resources.limits.memory`.
- If `Reason: Error` and `Exit Code: 1` $\rightarrow$ The process crashed on uncaught runtime exception or initialization failure.

#### Step 2: Extract Logs from Previous Terminated Instance
```bash
# Capture the crash logs from the container that just died:
kubectl logs <pod_name> -n <namespace> --previous --tail=200
```

#### Step 3: Check Common Latent Causes
1. **Failing Liveness Probe**: The application took 35 seconds to boot, but `initialDelaySeconds` was set to 10 seconds. The kubelet repeatedly killed the healthy initializing pod.
   - *Fix*: Implement a `startupProbe` with generous failure thresholds:
     ```yaml
     startupProbe:
       httpGet:
         path: /healthz
         port: 8080
       failureThreshold: 30
       periodSeconds: 10
     ```
2. **Missing Secrets / ConfigMaps**: Container failed to load mandatory environment variables.
   - Check pod status: `CreateContainerConfigError` indicates a referenced Secret or ConfigMap does not exist in the namespace.

---

## Incident 2: High System Load Average with 0% CPU Utilization (Uninterruptible Sleep `D` State)

### The Problem Manifestation
Monitoring alarms trigger for high system load (e.g., Load Average 48.0 on an 8-core CPU server), but `top`, `htop`, or `mpstat` show 98% CPU Idle and 0% User/System CPU consumption.

### The Under-the-Hood Reality
Load average in Linux counts the number of tasks in both `TASK_RUNNING` (`R`) and `TASK_UNINTERRUPTIBLE` (`D`) states. When processes wait for block storage I/O, synchronous filesystem metadata flush, or hung network mounts (NFS / AWS EFS), they sleep in `D` state, inflating the load average while consuming zero CPU cycles.

```
+-------------------------------------------------------------------------------+
|                       HIGH LOAD WITH ZERO CPU TRIAGE                          |
+-------------------------------------------------------------------------------+
| 1. Identify Processes in 'D' State:                                           |
|    ps -eo pid,user,state,wchan:30,cmd | awk '$3 ~ /D/'                        |
|                                                                               |
| 2. Inspect Blocked Syscall Kernel Stack:                                      |
|    cat /proc/<PID>/stack                                                      |
|    (Look for: call_rwsem_down_read_failed, sync_inodes, nfs_wait_bit_uninterrupt) |
|                                                                               |
| 3. Isolate Failing Storage Subsystem:                                         |
|    iostat -xz 1 5                                                             |
|    (Examine %util, await, w_await on physical block devices)                  |
|                                                                               |
| 4. Check for Hung NFS / Network Filesystems:                                  |
|    df -h (hangs on dead NFS mount)                                            |
|    mount | grep -i nfs                                                        |
+-------------------------------------------------------------------------------+
```

### Remediation Protocol
1. **If Block Device is Throttled (e.g., AWS EBS burst balance exhausted)**:
   - Check AWS CloudWatch metric: `VolumeThroughputPercentage` or `BurstBalance`.
   - Upgrade EBS volume type from legacy gp2 to gp3 or increase provisioned IOPS.
2. **If NFS/EFS Mount is Unresponsive**:
   - Forcibly unmount the hung network share:
     ```bash
     umount -f -l /mnt/nfs_share
     ```
3. **If Processes Do Not Recover**:
   - Because `D` state processes cannot process signals, `kill -9` has no effect. The process will remain until the kernel unblocks the underlying hardware wait. If storage is permanently disconnected, a controlled system reboot (`reboot` or `echo b > /proc/sysrq-trigger`) is required.

---

## Incident 3: File System "No Space Left on Device" When `df -h` Shows Ample Free Capacity

### Root Cause Analysis
This error occurs in two distinct scenarios:

```
                  "No Space Left on Device" Encountered
                                    │
                         Execute Diagnostic Check:
                               df -i /mount
                                    │
                 ┌──────────────────┴──────────────────┐
                 │                                     │
           Inodes at 100%                        Inodes < 80%
                 │                                     │
          Inode Exhaustion                  Unlinked Open File Descriptors
                 │                                     │
   Millions of tiny files exist          Process deleted a large file from
   (sessions, spools, cache).            disk, but continues holding open
   Locate & batch delete.                file descriptor. Space not released.
```

### Diagnostic & Remediation Steps

#### Scenario A: Inode Exhaustion
```bash
# Check inode saturation:
df -i

# Pinpoint top directories consuming inodes on root partition:
find / -xdev -printf '%h\n' | sort | uniq -c | sort -k1 -rn | head -n 15

# Purge millions of tiny session files safely using find + delete:
find /var/lib/php/sessions -type f -name "sess_*" -mtime +7 -delete
```

#### Scenario B: Unlinked File Descriptors (Zombie Storage Leaks)
When an application (e.g., Nginx, Java, logrotate) writes to a log file, and an administrator deletes the file using `rm /var/log/app.log`, the filename is unlinked from the directory tree. However, the Linux kernel **does not free the disk blocks** until every process holding an open file descriptor closes it.

```bash
# Discover processes holding deleted file handles in RAM:
lsof +L1 | grep -i deleted

# Output example:
# java  14522  appuser   4u   REG   253,1  42949672960   129482 /var/log/app.log (deleted)
```

**Zero-Downtime Space Reclamation**:
Instead of restarting the mission-critical process, truncate the file descriptor directly via the `/proc` virtual filesystem:

```bash
# Truncate the file descriptor to 0 bytes instantly releasing disk blocks:
: > /proc/14522/fd/4

# Confirm storage reclamation:
df -h
```

---

## Incident 4: AWS EKS / Kubernetes Ingress 502 / 504 Bad Gateway Triage

```
                  Client Receives 502 Bad Gateway / 504 Gateway Timeout
                                            │
                          Is the Error Emitted by Ingress ALB?
                                            │
               ┌────────────────────────────┴────────────────────────────┐
               │                                                         │
          HTTP 502                                                  HTTP 504
               │                                                         │
     Target Connection Refused /                               Gateway Timeout:
     Invalid HTTP Header /                                     Backend container took
     Health Check Failed                                       longer than ALB idle timeout
               │                                                         │
  Check ALB Target Group Health                             Check:
  aws elbv2 describe-target-health                          1. Increase ALB idle timeout
  Target state: Unhealthy                                   2. Application database slow query
```

### Troubleshooting Checklist
1. **Check Target Group Registration**:
   - When using AWS Load Balancer Controller in IP target mode, verify pods have security groups allowing traffic from the ALB subnets on the container port.
2. **Health Check Mismatch**:
   - The ALB health check is querying `/` expecting HTTP 200, but application returns HTTP 301/302 redirect or requires an authentication header.
   - *Fix*: Update TargetGroupBinding or Ingress annotation:
     ```yaml
     alb.ingress.kubernetes.io/healthcheck-path: /healthz
     alb.ingress.kubernetes.io/success-codes: 200,301,302
     ```
3. **Container Keep-Alive vs. ALB Idle Timeout Asymmetry**:
   - **The Classic 502 Silent Drop Bug**: AWS Application Load Balancer has a default idle connection timeout of 60 seconds. If your backend Node.js, Go, or Python HTTP server has a keep-alive timeout shorter than the ALB (e.g., Node.js default 5 seconds), the backend server closes the TCP socket right as the ALB routes a request over the reused connection, causing a transient 502 Bad Gateway.
   - *Fix*: Always set application HTTP keep-alive timeout **higher** than the ALB timeout (e.g., set backend keep-alive to 65 seconds when ALB is 60 seconds).

---

## Incident 5: Database Connection Exhaustion & Cascading Thread Starvation

### The Problem Manifestation
Application microservices suddenly experience cascading timeouts, latency spikes from 15ms to 10,000ms, and error logs show:
`FATAL: remaining connection slots are reserved for non-replication superuser connections` or `HikariPool - Connection is not available, request timed out after 30000ms`.

### Architectural Root Cause
Under heavy load or slow database queries, application thread pools hold open database connections longer. As new HTTP requests arrive, connection pools saturate (`maxConnections: 100`). Microservice containers spawn new connections until the PostgreSQL/MySQL server hits `max_connections` (e.g., 500). Once exhausted, every downstream microservice enters thread pool starvation, causing cluster-wide cascading failure.

### Triage & Architectural Mitigation
1. **Immediate Emergency Triage (Kill Long-Running Idle/Stuck Queries)**:
   ```sql
   -- PostgreSQL: Terminate queries running longer than 5 minutes:
   SELECT pg_terminate_backend(pid)
   FROM pg_stat_activity
   WHERE state != 'idle' 
     AND now() - query_start > interval '5 minutes'
     AND pid <> pg_backend_pid();
   ```
2. **Implement Connection Pooling Layer (PgBouncer / AWS RDS Proxy / Azure Database Proxy)**:
   - Microservices connect to **AWS RDS Proxy** or **PgBouncer** rather than directly to the database.
   - Decouples client connections (thousands of microservice threads) from server connections (dozens of pooled database worker processes) using transaction-level pooling.
3. **Application Pool Tuning**:
   - Apply the empirical formula for database connection pool sizing:
     $$\text{Connections} = (\text{Core Count} \times 2) + \text{Effective Spindle Count}$$
   - Restrict application pool size to 10-20 connections per instance rather than hundreds.

---

## Incident 6: Azure Application Gateway 502 Bad Gateway / Backend Pool Health Probe Failure

### The Problem Manifestation
Traffic routing through an Azure Application Gateway v2 returns HTTP 502 Bad Gateway. The backend health blade in the Azure Portal reports:
`BackendHealth: Unhealthy. The received response from the backend does not match the search criteria in the probe.`

### Step-by-Step Triage
1. **Inspect Backend Health via Azure CLI**:
   ```bash
   az network application-gateway show-backend-health \
       --resource-group rg-prod \
       --name appgw-prod \
       --query "backendAddressPools[].backendHttpSettingsCollection[].servers[][id, health, healthProbeLog]" \
       --output table
   ```
2. **Evaluate NSG on Backend Subnet**:
   - Azure Application Gateway requires inbound traffic on ports `65200-65535` from service tag `GatewayManager` for infrastructure health communication. If blocked by an NSG, the gateway cannot route traffic.
3. **Host Header Mismatch in Custom Health Probes**:
   - If backend is an Azure App Service or Azure Container App, it requires the HTTP `Host` header to match its public FQDN (e.g., `myapp.azurewebsites.net`). If the custom probe sends the Application Gateway's public IP as the Host header, the App Service returns HTTP 404 or 403, causing probe failure.
   - *Fix*: Enable "Pick host name from backend target" in the HTTP Settings and Health Probe configuration.
4. **Backend Certificate CN/SAN Mismatch (End-to-End TLS)**:
   - When using HTTPS between Application Gateway and backend pool servers, the Common Name (CN) or Subject Alternative Name (SAN) of the certificate installed on the backend server must match the hostname configured in the backend HTTP settings, and the root CA must be whitelisted.

---

# Verification & Operational Usage

This document constitutes the master engineering manual for the `devops-toolkit` plugin. All code snippets, configurations, and architectural patterns have been structured for automated ingestion by Antigravity agents.
