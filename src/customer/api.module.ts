import { Module } from '@nestjs/common';
import { CreateCustomerController } from 'src/customer/create-customer/create-customer.controller';
import { DeleteCustomerController } from 'src/customer/delete-customer/delete-customer.controller';
import { GetCustomerListController } from 'src/customer/get-customer-list/get-customer-list.controller';
import { GetCustomerController } from 'src/customer/get-customer/get-customer.controller';
import { UpdateCustomerController } from 'src/customer/update-customer/update-customer.controller';
import { PrismaModule } from 'src/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [
    CreateCustomerController,
    UpdateCustomerController,
    GetCustomerListController,
    GetCustomerController,
    DeleteCustomerController,
  ],
  providers: [],
  exports: [],
})
export class ApiModule {}
