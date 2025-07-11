npm run build

rm -rf docs && mv build docs

git add docs && git commit -m "Update site" && git push