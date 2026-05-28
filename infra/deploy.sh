#!/usr/bin/env bash
set -euo pipefail

# Set your bucket name or export S3_BUCKET before running.
BUCKET="${S3_BUCKET:-mamajonov-resume}"

echo "Building..."
npm run build

echo "Syncing to s3://${BUCKET}..."
aws s3 sync dist/ "s3://${BUCKET}" --delete

echo "Done. Site bucket: s3://${BUCKET}"
echo "Enable static website hosting and set error document to index.html for SPA routing."
