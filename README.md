# The Odin Project Dark Theme

### Available in the [Chrome Web Store](https://chrome.google.com/webstore/detail/the-odin-project-dark-the/omiecnmmajomefpodcdjkebeonieonef?authuser=1) and [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/the-odin-project-dark-theme/) store.

## Manual Chrome Installation

1. Clone Repo
2. Go to `chrome://extensions` in your chrome browser
3. Turn on "Developer Mode"
4. Choose "Load Unpacked" and choose the root directory of this repo
5. Profit.

## Chrome Packaging
1. Follow the zipping instructions in `Firefox Packaging` below
2. Browse to https://chrome.google.com/webstore/devconsole
3. Browse into the extension >> "Package" >> "Upload new Package" and select the zipped file
4. Wait for approval

## Manual Firefox Installation
1. Clone Repo
2. Go to `about:debugging` in your Firefox browser
3. Choose "Load Temporary Add-on" and select the `manifest.json` file in this cloned repo
4. Profit.

## Firefox Packaging
1. `cd` into this directory
2. `zip -r top-dark-mode-2.2.0.zip ./* --exclude "*.git*"
3. Upload this zip to Firefox Addon Developer Hub

### Screenshots:

![Curriculum Page](https://imgur.com/78LdhfE.png)

![Course Page](https://imgur.com/9PGK0OV.png)

![Assignment](https://imgur.com/mnmvn7e.png)
