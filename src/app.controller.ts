import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { MIGRATION_READY } from './common/constants.common';

@Controller()
export class AppController {
  @EventPattern(MIGRATION_READY)
  async consume(@Payload() data: any, @Ctx() ctx: RmqContext): Promise<void> {
    return;
  }
}
