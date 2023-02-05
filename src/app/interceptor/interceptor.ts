import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Router} from '@angular/router';
import { AuthService } from '../modules/auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class HttpTokenInterceptor implements HttpInterceptor {
  private token:any;
  tokenExpiryAlert = 0;
  constructor(private authService: AuthService,
              private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.token = this.authService.getCurrentUser('token');
    if (this.token) {
      req = req.clone({headers: req.headers.set('authorization', this.token)});
    }
    return next.handle(req).pipe(map((event: HttpEvent<any>) => {
    //   if (event instanceof HttpResponse) {
    //     if (event.body.showMessage) {
    //       this.fmService.openSnackbar(event.body.message, 'success');
    //     }
    //     this.spinnerService.closeSpinner();
    //   }
      return event;
    }), catchError((err: any) => {
        console.log("error",err)
      const {error} = err || {};
      if (err.status === 401) {
       this.authService.logout();
       this.router.navigate(['/auth/login']);
      }
      throw error;
    }));

  }

}

