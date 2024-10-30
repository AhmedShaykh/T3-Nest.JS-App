import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateBookDTO, EditBookDTO } from "./DTO/book.dto";
import { GetUser } from "../get-user.decorator";
import { BookService } from "./book.service";
import { JwtGuard } from "../auth/jwt.guard";

@ApiTags("books")
@UseGuards(JwtGuard)
@Controller("books")
export class BookController {

    constructor(private bookService: BookService) { };

    @Get()
    @ApiOperation({
        summary: "Get All Books"
    })
    @ApiResponse({
        status: 200,
        description: "Successfully All Books Return"
    })
    getBooks(@GetUser("id") userId: string) {
        return this.bookService.getBooks(userId);
    };

    @Get(":id")
    @ApiOperation({
        summary: "Get Book By ID"
    })
    @ApiResponse({
        status: 200,
        description: "Successfully Book Return"
    })
    getBookById(@GetUser("id") userId: string, @Param("id") bookId: string) {
        return this.bookService.getBookById(
            userId, bookId
        );
    };

    @Post()
    @ApiOperation({
        summary: "Create Book"
    })
    @ApiBody({ type: CreateBookDTO })
    @ApiResponse({
        status: 200,
        description: "Successfully Books Created"
    })
    createBook(@GetUser("id") userId: string, @Body() dto: CreateBookDTO) {
        return this.bookService.createBook(
            userId, dto
        );
    };

    @Put(":id")
    @ApiOperation({
        summary: "Update Book"
    })
    @ApiBody({ type: EditBookDTO })
    @ApiResponse({
        status: 200,
        description: "Successfully Books Updated"
    })
    editBookById(@GetUser("id") userId: string, @Param("id") bookId: string, @Body() dto: EditBookDTO) {
        return this.bookService.editBook(
            userId, bookId, dto
        );
    };

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(":id")
    @ApiOperation({
        summary: "Delete Book"
    })
    @ApiResponse({
        status: 200,
        description: "Successfully Books Deleted"
    })
    deleteBook(@GetUser("id") userId: string, @Param("id") bookId: string) {
        return this.bookService.deleteBook(
            userId, bookId
        );
    };

};