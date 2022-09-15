import { Controller, Get, Header, HttpCode, Post, Query, Redirect, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
    @Post()
    // @HttpCode(204)
    // @Header('Cache-Control', 'none')
    create(): string {
        return 'this action adds a new cat';
    }

    @Get()
    findAll(@Req() request: Request): string {
        return 'This action returns all cats';
    }

    @Get('docs')
    @Redirect('https://docs.nestjs.com', 302)
    getDcos(@Query('version') version) {
        if (version && version === '5') {
            return { url: 'https://docs.nestjs.com/v5/'}
        }
    }
}
