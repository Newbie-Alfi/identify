#!/bin/sh

set -e

cd /app

echo "Installing the dependencies..."
yarn

echo "Running the development server..."

exec yarn dev
