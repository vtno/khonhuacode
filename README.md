# คนหัวโค้ด

This repo contains working examples for posts introduce in [คนหัวโค้ด](https://www.facebook.com/TheCodingHead) Facebook page.

Each module represents each particular post on the page.

Please consider liking the page if you find these helpful 🙏.

## Structure

This repo is organized with `NPM workspaces`. Shortcuts are provided for running examples in each submodules.

Each shortcut can be invoke at the root directory of this repo like so: 

```shell
# check current directory
pwd # should return something like /<your-path-to-the-repo>/khon-hua-code
# install deps
npm i
# then you can run the shortcut commands
npm run clstrans:viewLayer
```
### Available shortcuts

| Shortcuts               | Description                                                    |
| ----------------------- | -------------------------------------------------------------- |
| clstrans:viewLayer      | start an api for class-transformer-view-layer submodule        |
| clstrans:viewLayer:call | hit an api endpoint for class-transformer-view-layer submodule |
