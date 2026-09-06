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
validator="$validator_root/skills/.system/skill-creator/script��]ZX��ݘ[Y]K�H��]ؚۗ[�I���܈�[�Y]H[�]ی�]ێ�Y���[X[�]���[�Y]H���]�۝[���H�	����[�Y]H�X�	�[\ܝX[[	���]�۝[���N�[��]ؚۗ[�I�[�Y]B���XZ�B�ۙB��Y��Y���[Y]܈�H	���[��]ؚۗ[��N�[���]ؚۗ[����[Y]܈����[�\���[�B�X�����^]ZX���[Y]܈܈]�PSS\[�[��H\�[�]�Z[X�N��\]Z\�YY�[H�X���\��Y����B��X�����[��[�[Y][ۈ\��Y�	��[�\��
