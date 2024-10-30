import { PrismaService } from "../prisma/prisma.service";
import { Module } from "@nestjs/common";
import { BookController } from "./book.controller";
import { BookService } from "./book.service";

@Module({
    imports: [],
    controllers: [BookController],
    providers: [
        BookService,
        PrismaService
    ]
})
export class BookModule { };