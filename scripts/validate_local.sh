#!/bin/sh
set -eu

repo_root=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
skill_dir="$repo_root/skills/career-transition-ai-workflow"

required_files='SKILL.md
agents/openai.yaml
references/input-schema.md
references/workflow-states.md
references/role-scoring.md
references/project-rules.md
references/output-template.md
references/evaluation-cases.md
references/end-to-end-demo.md
references/pilot-protocol.md'

printf '%s\n' "$required_files" | while IFS= read -r relative_path; do
  if [ ! -f "$skill_dir/$relative_path" ]; then
    echo "Missing required file: $relative_path" >&2
    exit 1
  fi
done

validator_root=${CODEX_HOME:-$HOME/.codex}
validator="$validator_root/skills/.system/skill-creator/scripts/quick_validate.py"
python_bin=''

for candidate in python3 python; do
  if command -v "$candidate" >/dev/null 2>&1 \
    && "$candidate" -c 'import yaml' >/dev/null 2>&1; then
    python_bin=$candidate
    break
  fi
done

if [ -f "$validator" ] && [ -n "$python_bin" ]; then
  "$python_bin" "$validator" "$skill_dir"
else
  echo "Codex quick validator or its YAML dependency is unavailable; required-file checks passed."
fi

echo "Local Skill validation passed: $skill_dir"
