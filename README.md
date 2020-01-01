# y README

YAML for JavaScript adds syntax highlighting support for embedded YAML in y/yaml JS tagged template strings.

## One Dark Pro highlighting

One Dark Pro does not correctly highlight some tokens in embedded yaml. Apply this to your global settings to resolve the issue.

```json
{
  "editor.tokenColorCustomizations": {
    "[One Dark Pro]": {
      "textMateRules": [
        {
          "scope": [
            "meta.embedded.block.yaml punctuation.definition.block",
            "meta.embedded.block.yaml entity.other.document.begin.yaml",
            "meta.embedded.block.yaml entity.other.document.end.yaml"
          ],
          "settings": { "foreground": "#ABB2BF" }
        }
      ]
    }
  }
}
```

## Requirements

This extension recommends `redhat.vscode-yaml` for the base YAML grammar. RedHat YAML is included with the Kubernetes extension.
