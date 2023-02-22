import {Catch, HttpException, ExceptionFilter,ArgumentsHost} from '@nestjs/common'

@Catch()
export class Filter implements ExceptionFilter{
    catch(exception: unknown,host:ArgumentsHost){
        const ctx = host.switchToHttp()
        const response = ctx.getResponse()
        if(exception instanceof HttpException){
            response.json(exception)
        }else {
            console.log(exception);
            response.json({status: 500,message: 'Internal server Error'})
        }
    }
}