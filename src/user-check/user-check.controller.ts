import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserCheckService } from './user-check.service';
import { CreateUserCheckDto } from './dto/create-user-check.dto';
import { CmfChileService } from 'src/cmf-chile/cmf-chile.service';
import { PreCreateUserCheckDto } from './dto/pre-create-user-check.dto';
import { format } from 'date-fns';

@Controller('user-check')
export class UserCheckController {
    constructor(private usercheckService: UserCheckService,private cmfChileService: CmfChileService) {}

    @Get()
    async getAll() {
        return this.usercheckService.getAllWithUsername()
    }

    @Post()
    async create(@Body() preUserCheck: PreCreateUserCheckDto) {
        //const userCheckDate = preUserCheck.date
        const formattedDate = format(preUserCheck.date, 'yyyy-MM-dd');
        const [year, month, day] = formattedDate.split('-');
        const ufValue = (await this.cmfChileService.getUfByDate(year,month,day)).value

        const amountConverted = this.cmfChileService.convertUfToPesos(preUserCheck.cantUf, ufValue)

        const userCheck: CreateUserCheckDto = {
            userId : preUserCheck.userId,
            ufDate : preUserCheck.date,
            ufValue : ufValue,
            amountConverted : amountConverted,
            cantUf : preUserCheck.cantUf
        }

        const res = await this.usercheckService.create(userCheck)
        return res
    }
}
