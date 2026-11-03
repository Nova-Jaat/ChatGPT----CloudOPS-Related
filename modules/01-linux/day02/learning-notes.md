# Day 2: systemd and journal logs

- Inspected systemd-journald with systemctl status.
- Read current-boot service logs with journalctl -u systemd-journald -b.
- Investigated unclean-shutdown/corruption messages; all files in the submitted verification output passed journalctl --verify.
- PASS confirms internal consistency, not completeness of historical logs.
- Created and retrieved test messages using logger and the cloudops-lab tag.
- Verified that journalctl -p warning includes both warning and error severity.
- Test messages were simulated; they did not indicate actual disk or application failures.
