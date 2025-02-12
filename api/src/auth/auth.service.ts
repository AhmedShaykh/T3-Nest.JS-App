import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthDTO, LoginAuthDTO } from "./DTO/auth.dto";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";

@Injectable()
export class AuthService {

    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
        private config: ConfigService
    ) { };

    async signup(dto: AuthDTO) {

        const { firstName, lastName, email, password } = dto;

        const existingUser = await this.prisma.user.findUnique({ where: { email } });

        if (existingUser) {

            throw new BadRequestException("User Already Exists");

        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await this.prisma.user.create({
            data: {
                firstName,
                lastName,
                email,
                password: hashedPassword
            }
        });

        return user;

    };

    async signToken(userId: string, email: string): Promise<{ access_token: string, refresh_token: string }> {

        const payload = {
            sub: userId,
            email
        };

        const access_token = await this.jwt.signAsync(payload, {
            expiresIn: "15m",
            secret: this.config.get("JWT_SECRET")
        });

        const refresh_token = await this.jwt.signAsync(payload, {
            expiresIn: "7d",
            secret: this.config.get("JWT_REFRESH_SECRET")
        });

        return { access_token, refresh_token };

    };

    async signin(dto: LoginAuthDTO) {

        const { email, password } = dto;

        const user = await this.prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if (!user) {

            throw new UnauthorizedException("Invalid Email!");

        }

        const isPasswordMatched = await bcrypt.compare(password, user.password);

        if (!isPasswordMatched) {

            throw new UnauthorizedException("Invalid Password!");

        }

        return this.signToken(user.id, user.email);

    };

    async refreshTokens(refreshToken: string): Promise<{ access_token: string }> {

        let payload: any;

        try {

            payload = await this.jwt.verifyAsync(refreshToken, {
                secret: this.config.get("JWT_REFRESH_SECRET")
            });

        } catch (error) {

            throw new UnauthorizedException("Invalid Or Expired Refresh Token.");

        }

        const user = await this.prisma.user.findUnique({ where: { id: payload.sub } });

        if (!user) {

            throw new UnauthorizedException("User Not Found.");

        }

        const newAccessToken = await this.jwt.signAsync(
            { sub: user.id, email: user.email },
            { expiresIn: "15m", secret: this.config.get("JWT_SECRET") }
        );

        return { access_token: newAccessToken };

    };

};