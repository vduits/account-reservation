import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'account-reservation';
  header_title: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const pageTitle = this.header_title;
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        const child = this.activatedRoute.firstChild;
        if(child.snapshot.data['title']){
          return child.snapshot.data['title'];
        }
        return pageTitle;
      })
    ).subscribe((ttl: string) => {
      this.header_title = ttl;
    });
  }
}
