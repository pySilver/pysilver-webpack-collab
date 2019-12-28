# Working with pySilver on some Webpack stuff

To install:

```
FONTAWESOME_NPM_AUTH_TOKEN=TOKEN npm install
```

Where `TOKEN` is your Font Awesome Pro NPM token

## To run with vanilla Webpack

```
FONTAWESOME_NPM_AUTH_TOKEN=TOKEN npm run dist.webpack
```

```
total 120
drwxr-xr-x   3 robmadole  staff    96B Dec 28 17:38 .
drwxr-xr-x  15 robmadole  staff   480B Dec 28 17:12 ..
-rw-r--r--   1 robmadole  staff    59K Dec 28 17:38 icons.webpack.js
```

```
FONTAWESOME_NPM_AUTH_TOKEN=TOKEN npm run build.webpack
```

```
total 656
drwxr-xr-x   3 robmadole  staff    96B Dec 28 17:30 .
drwxr-xr-x  15 robmadole  staff   480B Dec 28 17:12 ..
-rw-r--r--   1 robmadole  staff   327K Dec 28 17:30 icons.webpack.js
```

## With Encore

```
FONTAWESOME_NPM_AUTH_TOKEN=TOKEN npm run dist.encore
```

```
total 144
drwxr-xr-x   6 robmadole  staff   192B Dec 28 17:40 .
drwxr-xr-x  15 robmadole  staff   480B Dec 28 17:12 ..
-rw-r--r--   1 robmadole  staff   154B Dec 28 17:40 entrypoints.json
-rw-r--r--   1 robmadole  staff    58K Dec 28 17:40 icons.encore.307adbdf.js
-rw-r--r--   1 robmadole  staff   112B Dec 28 17:40 manifest.json
-rw-r--r--   1 robmadole  staff   1.5K Dec 28 17:40 runtime.f88809f0.js
```

```
FONTAWESOME_NPM_AUTH_TOKEN=TOKEN npm run build.encore
```

```
total 680
drwxr-xr-x   6 robmadole  staff   192B Dec 28 17:40 .
drwxr-xr-x  15 robmadole  staff   480B Dec 28 17:12 ..
-rw-r--r--   1 robmadole  staff   138B Dec 28 17:40 entrypoints.json
-rw-r--r--   1 robmadole  staff   315K Dec 28 17:40 icons.encore.js
-rw-r--r--   1 robmadole  staff    98B Dec 28 17:40 manifest.json
-rw-r--r--   1 robmadole  staff    14K Dec 28 17:40 runtime.js
```
