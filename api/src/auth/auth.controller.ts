import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AuthDTO, LoginAuthDTO, RefreshTokenDTO } from "./DTO/auth.dto";
import { AuthService } from "./auth.service";

@ApiTags("auth")
@Controller("auth")
export class AuthController {

    constructor(private authService: AuthService) { };

    @Post("signup")
    @ApiOperation({
        summary: "Create A User"
    })
    @ApiBody({ type: AuthDTO })
    @ApiResponse({
        status: 201,
        description: "User Successfully Created"
    })
    @ApiResponse({
        status: 500,
        description: "User Already Exists"
    })
    signup(@Body() dto: AuthDTO) {
        return this.authService.signup(dto);
    };

    @HttpCode(HttpStatus.OK)
    @Post("signin")
    @ApiOperation({
        summary: "Login User"
    })
    @ApiBody({ type: LoginAuthDTO })
    @ApiResponse({
        status: 201,
        description: "Successfully Login In"
    })
    @ApiResponse({
        status: 500,
        description: "Invalid Credentials"
    })
    signin(@Body() dto: LoginAuthDTO) {
        return this.authService.signin(dto);
    };

    @Post("refresh")
    @HttpCode(HttpStatus.OK)
    @ApiOperation({
        summary: "Refresh Access Token"
    })
    @ApiBody({ type: RefreshTokenDTO })
    @ApiResponse({
        status: 200,
        description: "Access Token Successfully Refreshed"
    })
    @ApiResponse({
        status: 401,
        description: "Invalid or Expired Refresh Token"
    })
    async refreshTokens(@Body("refresh_token") refreshToken: string) {
        return this.authService.refreshTokens(refreshToken);
    };

};