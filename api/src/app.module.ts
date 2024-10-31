import { PrismaModule } from "./prisma/prisma.module";
import { AuthModule } from "./auth/auth.module";
import { BookModule } from "./book/book.module";
import { UserModule } from "./user/user.module";
import { ConfigModule } from "@nestjs/config";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    PrismaModule,
    AuthModule,
    UserModule,
    BookModule,
  ],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule { };