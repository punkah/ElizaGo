ˇ## Development

### Setup

- `npm install`
- `npm start`

### Contributing

- Make sure your branch passes the tests - `npm test`
- Open a PR
- Check the PR comments to find a link to the expo preview build

### Production Release

- Bump Version using `npm version [major|minor|patch]`
- Both the `package.json` and `app.json` versions will be automatically updated
- Push `main` to GitHub - `git push origin main`
- Push tag to GitHub - `git push origin --tags`
- GitHub Action will automatically build and submit -
  https://github.com/athena-logistics/athena-rn/actions/workflows/tag-stable.yml
- Submit Android App for Review in the
  [Play Console](https://play.google.com/console/developers)
  - Contact @punkah for access
- Submit iOS Release for review on
  [App Store Connect](https://appstoreconnect.apple.com/)
  - Contact @punkah for access
