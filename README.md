# NestJS File Logger

Logger for saving into a single file.

## Installation

NPM

```sh
npm install @nestjs-logger/file
```

Yarn

```sh
yarn add @nestjs-logger/file
```

## Usage

```typescript
import { FileLogger } from '@nestjs-logger/file';
import { resolve } from 'fs';

const app = await NestFactory.create(AppModule, {
    logger: FileLogger.create({
        directory: resolve(__dirname, '../storage/logs'),
    }),
});
```

This will log into `./storage/logs/nest.log` outside the `dist` directory.

__NOTE:__ All the following directories must be already existing.

## Options

| Key         | Type     | Required | Default |
| ----------- | -------- | -------- | ------- |
| `directory` | `string` | Yes      |         |
| `filename`  | `string` | No       | `nest`  |
| `extension` | `string` | No       | `log`   |
