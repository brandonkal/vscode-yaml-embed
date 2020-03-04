# vscode-yaml-embed

YAML for JavaScript adds syntax highlighting support for embedded YAML in y/yaml JavaScript and TypeScript tagged template strings.

This is very useful in combination with https://deno.land/x/lib/yaml-tag.ts for Kubernetes Configuration.

![screenshot](https://github.com/brandonkal/vscode-yaml-embed/raw/master/screenshot.png)

## Requirements

This extension recommends `redhat.vscode-yaml` for the base YAML grammar. RedHat YAML is included with the Kubernetes extension.

After installing, you will see highlighting enabled in TypeScript files. If you do not see highlighting in JavaScript files, make sure you uninstall [vscode-language-babel](https://github.com/michaelgmcd/vscode-language-babel). That extension is not compatible and is no longer required for good syntax highlighting.
