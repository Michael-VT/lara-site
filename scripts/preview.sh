#!/usr/bin/env bash
# Builds the site exactly as it will be deployed, then serves it locally
# (and on your home network) so you can browse it the way a real visitor
# would — not the dev server with its editor overlays, the actual static
# production build.
set -euo pipefail
cd "$(dirname "$0")/.."

if [ ! -d node_modules ]; then
	echo "Installing dependencies..."
	bun install
fi

echo "Building the production site..."
bun run build

echo ""
echo "Starting preview server on your local network..."
echo "On this computer:  http://localhost:4173/"
echo "On other devices on the same Wi-Fi/network, use this computer's LAN IP, e.g.:"
if command -v ipconfig >/dev/null 2>&1; then
	LAN_IP=$(ipconfig getifaddr en0 2>/dev/null || ipconfig getifaddr en1 2>/dev/null || true)
	if [ -n "${LAN_IP:-}" ]; then
		echo "  http://$LAN_IP:4173/"
	fi
fi
echo "(exact address is also printed below by Vite; look for the 'Network:' line)"
echo ""

bun run preview:lan
