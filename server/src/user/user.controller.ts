import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Body, Controller, Get, Put, UseGuards } from "@nestjs/common";
import { GetUser } from "../get-user.decorator";
import { JwtGuard } from "../auth/jwt.guard";
import { UserService } from "./user.service";
import { EditUserDTO } from "./DTO/user.dto";
import { User } from "@prisma/client";

@ApiTags("users")
@UseGuards(JwtGuard)
@Controller("users")
export class UserController {

    constructor(private userService: UserService) { };

    @Get("me")
    @ApiOperation({
        summary: "Get User Details"
    })
    @ApiResponse({
        status: 200,
        description: "Successfully User Return"
    })
    getUser(@GetUser() user: User) {

        const {
            id,
            email,
            firstName,
            lastName,
            createdAt,
            updatedAt
        } = user;

        return {
            id,
            email,
            firstName,
            lastName,
            createdAt,
            updatedAt
        };

    };

    @Put()
    @ApiOperation({
        summary: "Update User"
    })
    @ApiBody({ type: EditUserDTO })
    @ApiResponse({
        status: 200,
        description: "Successfully User Updated"
    })
    editUser(@GetUser("id") userId: string, @Body() dto: EditUserDTO) {
        return this.userService.editUser(userId, dto);
    };

};