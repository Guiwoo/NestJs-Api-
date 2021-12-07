import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
    @Get()
    hoem(){
        return "Welcome home"
    }
}
