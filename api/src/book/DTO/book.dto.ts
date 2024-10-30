import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateBookDTO {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: "Title",
        required: true
    })
    title: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: "Description",
        required: true
    })
    description: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: "Author",
        required: true
    })
    author: string;
};

export class EditBookDTO {
    @IsString()
    @IsOptional()
    @ApiProperty({
        example: "Title",
        required: false
    })
    title?: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: "Description",
        required: false
    })
    description?: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: "Author",
        required: false
    })
    author?: string;
};