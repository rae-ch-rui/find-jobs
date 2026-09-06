#!/bin/sh
set -eu

repo_root=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
skill_dir="$repo_root/skills/career-transition-ai-workflow"
dist_dir="$repo_root/dist"
bundle="$dist_dir/career-transition-ai-workflow.zip"

if [ ! -f "$skill_dir/SKILL.md" ]; then
  echo "Missing $skill_dir/SKILL.md" >&2
  exit 1
fi

mkdir -p "$dist_dir"
rm -f "$bundle"

(
  cd "$repo_root/skills"
  zip -qr "$bundle" career-transition-ai-workflow \
    -x '*/.DS_Store' '*/__MACOSX/*'
)

echo "$bundle"

