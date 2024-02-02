import { Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios';
import CmfChileResponse from './cmf-chile-respose.interface';
import { UF } from './cmf-chile.entity';

const CMF_URL = 'https://api.cmfchile.cl/api-sbifv3/recursos_api'
const UF_CURRENCY = 'uf'
const API_KEY = '66a23f9065cab137fe5e6f01353245bab0026aff'
const JSON_FORMAT = 'JSON'


@Injectable()
export class CmfChileService {

    async getUfByDate(year: string, month: string, day: string) : Promise<UF> {
        const url = `${CMF_URL}/${UF_CURRENCY}/${year}/${month}/dias/${day}?apikey=${API_KEY}&formato=${JSON_FORMAT}`
        try {
            const res = await axios.get<CmfChileResponse>(url)
            const uf: UF = {
                value: Number(res.data.UFs[0].Valor.replace('.', '').replace(',', '.')),
                date: res.data.UFs[0].Valor,
            }

            return uf
        } catch(error) {
            throw new NotFoundException('Data not found')
        }
        
    }

    convertUfToPesos(cantUf:number, ufValue: number) {
        return Number((cantUf * ufValue).toFixed(4))
    }
    
}
