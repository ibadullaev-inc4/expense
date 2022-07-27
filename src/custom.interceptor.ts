import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common'
import { map } from 'rxjs'

export class CustomInterceptor implements NestInterceptor {
    intercept( context: ExecutionContext, handler: CallHandler ) {
        console.log("REQUEST INTERCEPT HERE")
        console.log({ context })
        return handler.handle().pipe(
            map(data => {
                console.log("RESPONSE INTERCEPT HERE")
                console.log({ data })
                const response = {
                    ...data,
                    createdAt: data.created_at
                }
                delete response.created_at
                delete response.updated_at
                return response
            })
        )
    }
}