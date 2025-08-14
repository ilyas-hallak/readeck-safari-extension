# Readeck Safari Extension

This repository contains the Safari extension version of the [Readeck browser extension](https://codeberg.org/readeck/browser-extension), which provides a seamless way to save articles and web content to your Readeck instance on **macOS and iOS**.

## About

The Readeck browser extension is available for:
- 🦊 **Firefox** (original extension)
- 🌐 **Chrome** (original extension) 
- 🍎 **Safari** (this repository - macOS & iOS)

The Safari extension will be available through:
- 📱 **Public Beta**: [Join TestFlight](https://testflight.apple.com/join/fk745B93) (macOS & iOS)
- 🏪 **Mac App Store** (coming soon) (macOS & iOS)

## Build Instructions

This repository contains a build script that automatically:
1. Clones the original extension source from Codeberg
2. Builds the web extension
3. Generates the Safari extension Xcode project
4. Preserves your Xcode project settings (Bundle ID, signing, etc.)

### Prerequisites

- macOS with Xcode installed
- Command Line Tools for Xcode
- Node.js and npm

### Building the Extension

1. Clone this repository:
   ```bash
   git clone https://github.com/ilyas-hallak/readeck-safari-extension.git
   cd readeck-safari-extension
   ```

2. Run the build script:
   ```bash
   ./build-safari-extension.sh
   ```

   For verbose output (helpful for debugging):
   ```bash
   ./build-safari-extension.sh --verbose
   ```

3. The script will:
   - Download the latest extension source
   - Install dependencies and build the extension
   - Generate/update the Safari extension in `safari-extension/readeck/`
   - Ask if you want to open the Xcode project

4. **First-time setup**: Set your Bundle ID in Xcode (e.g., `com.yourname.readeck.extension`)

5. **Subsequent runs**: Your Xcode project settings are preserved - only the web extension files are updated.

## What's Included

- `build-safari-extension.sh` - Automated build script
- `safari-extension/` - Generated Xcode project for Safari extension
- `.gitignore` - Configured to keep the repository minimal

## Original Extension

This Safari extension is built from the original Readeck browser extension:
- **Source**: [https://codeberg.org/readeck/browser-extension](https://codeberg.org/readeck/browser-extension)
- **Author**: Olivier Meunier
- **License**: GPL-3.0-only

## Development

The build script automatically fetches the latest version from the original repository, so you're always building from the most current source. Your local Xcode project settings (Bundle ID, signing certificates, etc.) are preserved between builds.

## License

This Safari extension wrapper is licensed under the MIT License.

