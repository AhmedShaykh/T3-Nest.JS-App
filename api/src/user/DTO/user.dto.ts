import { IsEmail, IsOptional, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class EditUserDTO {
    @IsEmail()
    @IsOptional()
    @ApiProperty({
        example: "your@gmail.com",
        required: false
    })
    email?: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: "Ahmed",
        required: false
    })
    firstName?: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: "Saleem Shaikh",
        required: false
    })
    lastName?: string;
};