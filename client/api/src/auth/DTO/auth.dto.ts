import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class AuthDTO {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: "Ahmed",
        required: true
    })
    firstName: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: "Saleem Shaikh",
        required: true
    })
    lastName: string;

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({
        example: "your@gmail.com",
        required: true
    })
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @ApiProperty({
        example: "password",
        required: true
    })
    password: string;
};

export class LoginAuthDTO {
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({
        example: "your@gmail.com",
        required: true
    })
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @ApiProperty({
        example: "password",
        required: true
    })
    password: string;
};