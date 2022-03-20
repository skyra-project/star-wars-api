# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.0.22](https://github.com/skyra-project/star-wars-api/compare/v2.0.21...v2.0.22) (2022-03-20)

### [2.0.21](https://github.com/skyra-project/star-wars-api/compare/v2.0.20...v2.0.21) (2022-03-06)

### [2.0.20](https://github.com/skyra-project/star-wars-api/compare/v2.0.19...v2.0.20) (2022-03-06)

### [2.0.19](https://github.com/skyra-project/star-wars-api/compare/v2.0.18...v2.0.19) (2022-03-06)

### [2.0.18](https://github.com/skyra-project/star-wars-api/compare/v2.0.17...v2.0.18) (2022-03-06)

### [2.0.17](https://github.com/skyra-project/star-wars-api/compare/v2.0.16...v2.0.17) (2022-02-27)

### [2.0.16](https://github.com/skyra-project/star-wars-api/compare/v2.0.15...v2.0.16) (2022-02-20)

### [2.0.15](https://github.com/skyra-project/star-wars-api/compare/v2.0.14...v2.0.15) (2022-02-06)

### [2.0.14](https://github.com/skyra-project/star-wars-api/compare/v2.0.13...v2.0.14) (2022-01-23)

### [2.0.13](https://github.com/skyra-project/star-wars-api/compare/v2.0.12...v2.0.13) (2022-01-02)

### [2.0.12](https://github.com/skyra-project/star-wars-api/compare/v2.0.11...v2.0.12) (2021-12-19)

### [2.0.11](https://github.com/skyra-project/star-wars-api/compare/v2.0.10...v2.0.11) (2021-12-12)

### [2.0.10](https://github.com/skyra-project/star-wars-api/compare/v2.0.9...v2.0.10) (2021-12-05)

### [2.0.9](https://github.com/skyra-project/star-wars-api/compare/v2.0.8...v2.0.9) (2021-11-29)

### [2.0.8](https://github.com/skyra-project/star-wars-api/compare/v2.0.7...v2.0.8) (2021-11-28)

### [2.0.7](https://github.com/skyra-project/star-wars-api/compare/v2.0.6...v2.0.7) (2021-11-07)

### [2.0.6](https://github.com/skyra-project/star-wars-api/compare/v2.0.5...v2.0.6) (2021-10-24)

### [2.0.5](https://github.com/skyra-project/star-wars-api/compare/v2.0.4...v2.0.5) (2021-10-24)


### Bug Fixes

* **deps:** update dependency graphql to ^15.6.0 ([#34](https://github.com/skyra-project/star-wars-api/issues/34)) ([10bfceb](https://github.com/skyra-project/star-wars-api/commit/10bfcebaac19b7e1e7437a1f12e193b42e012b76))

### [2.0.4](https://github.com/skyra-project/star-wars-api/compare/v2.0.3...v2.0.4) (2021-09-27)

### [2.0.3](https://github.com/skyra-project/star-wars-api/compare/v2.0.2...v2.0.3) (2021-09-27)

### [2.0.2](https://github.com/skyra-project/star-wars-api/compare/v2.0.1...v2.0.2) (2021-09-05)

### [2.0.1](https://github.com/skyra-project/star-wars-api/compare/v2.0.0...v2.0.1) (2021-08-22)

## [2.0.0](https://github.com/skyra-project/star-wars-api/compare/v1.0.4...v2.0.0) (2021-07-25)


### ⚠ BREAKING CHANGES

* **starships,vehicles:** `starship.consumables` and `vehicle.consumes` are now numbers instead of strings.
You can use something like DurationFormatter from @sapphire/time-utilities to format it back to a
string.

### Features

* **starships,vehicles:** change "consumables" from string to number (milliseconds) ([37ee5d0](https://github.com/skyra-project/star-wars-api/commit/37ee5d0bd02f7e066bc8395da32266c112a6e53e))

### [1.0.4](https://github.com/skyra-project/star-wars-api/compare/v1.0.3...v1.0.4) (2021-07-23)


### Bug Fixes

* **species:** add sarlacc species ([7a5e9f9](https://github.com/skyra-project/star-wars-api/commit/7a5e9f97f8894cc2ba36148f45cb92791c348125))
* **species:** make droids lifespan null as Infinity doesn't parse ([012df40](https://github.com/skyra-project/star-wars-api/commit/012df402d893b24dc14ebfe142a20226d5cefaa1))
* **types:** specify scalar type for Long and DateTime ([d1d1df9](https://github.com/skyra-project/star-wars-api/commit/d1d1df9c0347ea576b4162503c429735353c7d3c))

### [1.0.3](https://github.com/skyra-project/star-wars-api/compare/v1.0.2...v1.0.3) (2021-07-15)


### Bug Fixes

* add data for Aleen Minor ([b6d5eda](https://github.com/skyra-project/star-wars-api/commit/b6d5eda8c6cbca6317347278761896f1a5bd4d5b))
* fixed homeworlds for some species ([f139159](https://github.com/skyra-project/star-wars-api/commit/f1391596b11b9cdd826da1dda64e0b5d3ed03ca7))
* fixed spelling of wookiee ([f939fc9](https://github.com/skyra-project/star-wars-api/commit/f939fc98490ebb5e019f29935464a2b0eb80bc3e))
* set birthYaer to `null` for when it is unknown ([df977fd](https://github.com/skyra-project/star-wars-api/commit/df977fdde419b44451a86095c3ead4a693b4f8d4))

### [1.0.2](https://github.com/skyra-project/star-wars-api/compare/v1.0.1...v1.0.2) (2021-07-15)


### Bug Fixes

* fixes parsing errors ([#7](https://github.com/skyra-project/star-wars-api/issues/7)) ([f741bf4](https://github.com/skyra-project/star-wars-api/commit/f741bf43d33442365439fc69e204192bdffb2382)), closes [#6](https://github.com/skyra-project/star-wars-api/issues/6)

### [1.0.1](https://github.com/skyra-project/star-wars-api/compare/v1.0.0...v1.0.1) (2021-07-10)


### Bug Fixes

* mark package as side effect free ([cd253a3](https://github.com/skyra-project/star-wars-api/commit/cd253a341f33baf8e6e83f6e875fa948c1d0ac14))
* **readme:** update ghcr npm url ([a46c71f](https://github.com/skyra-project/star-wars-api/commit/a46c71fd2a742d6c2c50d2607f116b2f3cfc0872))

## 1.0.0 (2021-07-10)

### Features

-   data parsing part 1 ([2686a41](https://github.com/skyra-project/star-wars-api/commit/2686a410a8b09b7f261227ef17be2d2bd72bf428))
-   finish mapping all data ([ce38f9c](https://github.com/skyra-project/star-wars-api/commit/ce38f9ca03e36e83ddbc4e3252bba2461a389978))
-   finish up resolvers and setup services ([b5ed547](https://github.com/skyra-project/star-wars-api/commit/b5ed5473350cfb205b889738894b03791173da11))
-   lots stuff or something ([55fd2da](https://github.com/skyra-project/star-wars-api/commit/55fd2daaf7ef1ee138ec664f7fc6205f55ee34f8))
-   setup all the remaining field mapping ([7711261](https://github.com/skyra-project/star-wars-api/commit/77112619433a9ceb1098704e948380b64fac6ac7))
-   setup basic film service ([f15f209](https://github.com/skyra-project/star-wars-api/commit/f15f209fa391c3af82b476aaa76b80c3b2178e91))
-   validation, fixes and director of film ([3f483ae](https://github.com/skyra-project/star-wars-api/commit/3f483aec49c0ef47c37a6a723039e04494d69e06))

### Bug Fixes

-   actually return multiple results in fuzzy ([f7f58f9](https://github.com/skyra-project/star-wars-api/commit/f7f58f976e03f0310df969d261c8e38775bbe40f))
-   assign proper species to humans ([c9b7768](https://github.com/skyra-project/star-wars-api/commit/c9b7768bdc9df31eb6c8eeb2ddcd05aca1ec2fee))
-   ensure lower case reference names ([baae0ba](https://github.com/skyra-project/star-wars-api/commit/baae0ba4709b0993370dc730774e10ed6320170a))
-   fixed codegen in delivery process ([a7e3d44](https://github.com/skyra-project/star-wars-api/commit/a7e3d4400e0098aa89cbc5aa761d60bf4d38dff9))
-   fixed infite looping in class constructors ([c07f96a](https://github.com/skyra-project/star-wars-api/commit/c07f96a6cc947cb823d11bacc8ce2634267b46fb))
-   fixed more badly parsed names ([9d9f7ad](https://github.com/skyra-project/star-wars-api/commit/9d9f7ad81c60ac67971bdebe8d50df54a7354731))
-   **readme:** update links to ghcr packages ([7acf0fe](https://github.com/skyra-project/star-wars-api/commit/7acf0feaf9ddc999aae8d6f4057d1e8e5affca86))
-   throw proper error when no vehicles are found with fuzzy ([c5c043a](https://github.com/skyra-project/star-wars-api/commit/c5c043a767df9b1a010839f74f3302941e758a38))

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.
