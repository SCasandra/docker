import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean  { 
        const host = context.switchToHttp(), 
              req = host.getRequest();
        const reqToken = req.headers.authorization;

        if(!reqToken) {
            return false;
        }

        const ok = reqToken === process.env.TOKEN;

        if (ok) {
            console.log("Authorized. Allowing access...");
            return true;
        }
        
        console.log("Unauthorized. Denying access...");
        return false;
    }

}