import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return { Hello: 'Hello World Aws with cicd' };
  }
}
