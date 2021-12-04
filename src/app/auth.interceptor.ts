import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {
                  const userString = localStorage.getItem("User")

        const idToken = userString? JSON.parse(userString).token: null;

        if (idToken) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    `Bearer ${idToken}`)
            });

            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    }
}